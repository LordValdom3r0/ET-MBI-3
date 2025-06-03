let ipdedicado;

async function obtenerIpDedicado() {
    try {
        const response = await fetch('../direcciones.json');
        const data = await response.json();
        
        data['ESTACIONES'].forEach(estacion => {
            
            if (estacion['ESTACION'].includes('AMTC_DEDICADO')) {
                ipdedicado = estacion['DIRECCION'];
                //ipdedicado = '127.0.0.1:626';
            }
        });

        console.log('IP Dedicado:', ipdedicado);
    } catch (error) {
        console.error('Error al obtener la IP dedicado:', error);
    }
}

// Llamar a la función para obtener la IP
obtenerIpDedicado();

async function buscarDats(params) {
    document.getElementById("sectionDats").innerHTML = "";

    document.getElementById("sectionDats").innerHTML = `<table id="tablaDats" class="display " style="width:100%; display:none" role="grid" aria-describedby="myTable_info" border="2" cellspacing="0">
      <thead>
        <tr>
          <th>Estacion</th>
          <th>Referencia</th>
          <th>Evento Cargado</th>
          <th>Encontrado</th>
          <th>Nivel de Ingenieria</th>
        </tr>
      </thead>
      <tbody id="bodyDats" align="center">
      
      </tbody>
    </table>`;

    try {

        document.getElementById("loading").style.display = "grid";
        const referencias = await consultandoEvento();
        console.log(referencias);

        const resultado2 = await buscarEnEstaciones(referencias['splits']);
        console.log(resultado2);

        const resultado3 = await Ordernando(resultado2, referencias['eventoCertero']);
        console.log(resultado3);



        $('#tablaDats').DataTable({
            orderCellsBottom: true,
            responsive: false,
            autoWidth: false,
            paging: false,
            initComplete: function() {
                $('#tablaDats thead th').addClass('custom-header');
            }
        });
    } catch (error) {
        console.error("Error en la división:", error)
    }
}


async function consultandoEvento() {
    path = $('#areatext').val()
    console.log(path);
    $("#consultados").text("");

    const matches = path.match(/(ELX|ELZ|ERX|ERZ|ILX|IRX|ILZ|IRZ)\d+\w*/g);

    // Combinar los resultados separados por "\n"
    const result = matches ? matches.join('\n') : '';

    //console.log(typeof result);


    splits = result.split('\n')

    console.log('EL split', splits);
    

    var consulta = {'splits': splits, 'eventoCertero': []};

    for (const element of splits) {
        // Dominio de AMTC DEDICADO
        const response = await fetch(`http://${ipdedicado}/nivel/get/[agrucomb_prod].[dbo].[JP_estructura_combinacion_1er_nivel]/codigo_com_1er_nivel/=/${element}/_/_/_`);
        const data = await response.json();
        
        //console.log(data);
        const p = document.createElement('p');
        consulta['eventoCertero'].push(`${element}|${data["phase"]}`);
        p.textContent = `${data["referencia"]}  - ${data["phase"]}`;
        document.getElementById("consultados").append(p);
    }

    return consulta;
}




async function buscarEnEstaciones(referencias) {
    const resultados = [];

    const response = await fetch('../direcciones.json');
    const jsondata = await response.json();

    const foundMotor = referencias.find((e) => e.includes('EL') || e.includes('ER'));
    const foundInterior = referencias.find((e) => e.includes('IL') || e.includes('IR'));
    var whichFound;
    //console.log(foundMotor);
    //console.log(foundInterior);

    
    
    const flujoMotor = ['EIAF_MBM', 'EVTA_MBM'];
    const flujoInterior = ['EVA_MBI_2', 'EVA_MBI_3', 'ET_MBI_2', 'ET_MBI_3', 'EIAF_MBI_1', 'EIAF_MBI_3'];
    
    /// condicional para saber si son referencias para motor o interior
    switch (true) {
        case foundMotor !== undefined:
            whichFound = flujoMotor;
            break;
        case foundInterior !== undefined:
            whichFound = flujoInterior;
            break;
        case foundMotor && foundInterior:
            console.log("Ambas referencias encontradas, favor de colocar solo un tipo de referencia");
            return "Ambas referencias encontradas, favor de colocar solo un tipo de referencia";
            break;    
        default:
            return false;
            break;
    }

    for (const element of jsondata['ESTACIONES']) {
        if (whichFound.includes(element["ESTACION"])) {
            const ips = element["DIRECCION"];
            var n = ips.split(':');

            const nivelesResponse = await fetch(`http://${ipdedicado}/AMTC/get_niveles_tecnicos/${n[0]}`);
            const nivelesData = await nivelesResponse.json();
            console.log("estaciones", nivelesData);

            const pedidosResponse = await fetch(`http://${ipdedicado}/AMTC/get_pedidos/${n[0]}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nivelesData['eventos'])
            });
            const pedidosData = await pedidosResponse.json();
            console.log('Obteniendo referencias', pedidosData);

            const resultadosParciales = await Promise.all(  Object.keys(pedidosData).map(async evento => {
                
                const encontrados = referencias.filter(ref => pedidosData[evento].includes(ref));
                const noEncontrados = referencias.filter(ref => !pedidosData[evento].includes(ref));
                console.log(encontrados);
                console.log('Los No encontrados',noEncontrados);
                
                var jaison = {
                    evento,
                    encontrados,
                    noEncontrados
                }; 

                return jaison 
            }));

            var resultadosFiltrados = resultadosParciales.filter(r => r.encontrados.length > 0);

            if (resultadosFiltrados.length === 0) {
                resultadosFiltrados = [resultadosParciales[0]];
            }
            
           
            console.log('resultados Filtrados', resultadosFiltrados);
            
            
            
            resultados.push({[element["ESTACION"]]: resultadosFiltrados});
            

        }
    }

    return resultados;
}


async function Ordernando(resultado2, certeza) {
    document.getElementById("bodyDats").innerHTML = "";

    //la variable certeza son los eventos registrados donde pertenece el .dat desde el registro de agrubcomp
    //la variable resultado2 son la cantidad de estaciones que se tiene que consultar y los eventos que se tienen que buscar en las bases de datos
    console.log('certeza', certeza , 'resultado', resultado2);
    
    consultada = {"estacion":[], "referencia":[], "evento_cargado":[], "encontrado":[], "nivel_de_ingenieria":[] }

    for (const key in resultado2) {
        const est = Object.keys(resultado2[key]);
        const estacionName = est[0];
        const jsonBox =  resultado2[key][estacionName]
        var findArray = [];
        console.log("JSONBOX" , jsonBox);
        
        const eachEvento = await Promise.all(jsonBox.map(async (evento) => {
            //console.log(evento);

            const encontrados = evento.encontrados;
            var noEncontrados = evento.noEncontrados;

            console.log("Encontrados", encontrados);
            //Esta variable se refiere a No encontrados en el actual evento consultado, pero puede ser hallado en el siguiente o en el evento anterior
            console.log("No Encontrados", noEncontrados);

            for (const key in encontrados) {
                var tr = document.createElement('tr');
                //console.log(encontrados[key]);

               
                var eventBlock = document.createElement('td');
                var refBlock = document.createElement('td');
                var stationBlock = document.createElement('td');
                var confirmBlock = document.createElement('td');
                var accurateBlock = document.createElement('td');

                eventBlock.textContent = evento.evento;
                refBlock.textContent = encontrados[key];

                const encontrar = certeza.find( (e) => e.includes(encontrados[key]));
                
                var conCerteza =  encontrar ? encontrar.split('|')[1] : 'N/A';
               
                
                if (findArray.includes(encontrados[key])) {
                    tr.classList.add('duplicate');
                    confirmBlock.textContent = "Duplicado";
                }else{

                    confirmBlock.textContent = "OK";
                }
                
                findArray.push(encontrados[key]);
                
                stationBlock.textContent = estacionName;
                accurateBlock.textContent = conCerteza;
                consultada.estacion.push(estacionName);
                consultada.referencia.push(encontrados[key]);
                consultada.evento_cargado.push(evento.evento);
                consultada.encontrado.push('OK');
                consultada.nivel_de_ingenieria.push(conCerteza);

                tr.append(stationBlock, refBlock, eventBlock, confirmBlock, accurateBlock);
                document.getElementById("bodyDats").append(tr);
            }
            //console.log('Vaina Loca', findArray);
            var procesedArray =  { 'encontrados': encontrados, 'noEncontrados': noEncontrados };
            return procesedArray
        }));

            ///Seccion para buscar las constantes 
            //console.log("Constante", eachEvento);
            var greenflag = [];
            var redflag = [];
            for (const key in eachEvento) {
                if (Object.prototype.hasOwnProperty.call(eachEvento, key)) {
                    const element = eachEvento[key];
                    
                    
                    greenflag.push(...element.encontrados);
                    redflag.push(...element.noEncontrados);
                }
            }

            redflag = redflag.filter(item => !greenflag.includes(item));
            faltantes = new Set(redflag);
            faltantes = Array.from(faltantes);

            
            //console.log("red Flag", faltantes);
            //console.log("green Flag", greenflag);

            for (const key in faltantes) {
                var tr = document.createElement('tr');
                const p = document.createElement('p');
                var eventBlock = document.createElement('td');
                var refBlock = document.createElement('td');
                var stationBlock = document.createElement('td');
                var confirmBlock = document.createElement('td');
                var accurateBlock = document.createElement('td');
                //p.textContent = `------------------------------------ Evento: ${evento.evento} -  Referencias No encontradas: ${faltantes[key]} - En: ${estacionName}`;
                //p.classList.add('text-danger');
                const encontrar = certeza.find( (e) => e.includes(faltantes[key]));
                console.log('encontrar',encontrar);
                
                var conCerteza =  encontrar ? encontrar.split('|')[1] : 'N/A';

                eventBlock.textContent = 'N/A';
                refBlock.textContent = faltantes[key];
                stationBlock.textContent = estacionName;
                confirmBlock.textContent = "NOK";
                accurateBlock.textContent = conCerteza;
                if (!findArray.includes(faltantes[key])) {
                    consultada.estacion.push(estacionName);
                    consultada.referencia.push(faltantes[key]);
                    consultada.evento_cargado.push('N/A');
                    consultada.encontrado.push('NOK');
                    consultada.nivel_de_ingenieria.push(conCerteza);
                    //consultada.push({estacion: estacionName, referencia: faltantes[key], evento_cargado: 'N/A', encontrado: 'NOK', nivel_de_ingenieria: conCerteza});
                    tr.append(stationBlock, refBlock, eventBlock, confirmBlock, accurateBlock);
                    //console.log(faltantes[key]);
                    document.getElementById("bodyDats").append(tr);
                }
            }

        
    
        
        
    }

    var user = sessionStorage.getItem("nombre")

    if (user == null) {
        user = '';
    }
    var fechaInicial = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    

    const newPost = {
        "USUARIO": user,
        "CONSULTA": consultada,
        "FECHA": fechaInicial,
        
    }
    
    console.log("Consultada",consultada);
    console.log("NewPost", newPost);
    
    
     fetch('http://'+ipdedicado +'/api/post/referencias',{
         method: 'POST',
         body: JSON.stringify(newPost),
         headers:{
             "Content-type": "application/json"
         }
     }).then(res=>res.json())
     .catch(function(err) {
         console.log(err);
     });
    
    document.getElementById("tablaDats").style.display = "block";
    document.getElementById("loading").style.display = "none";
    return 'Consulta Finalizada';
}
