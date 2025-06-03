let pdf_vision = document.getElementById('pdf_vision');
let pdf_torque = document.getElementById('pdf_torque');
let modularidad_vision = document.getElementById('modularidad_vision');
let modularidad_torque = document.getElementById('modularidad_torque');

var imgWidth, imgHeight, datosPrim;

var loading = document.getElementsByClassName("loading");
document.getElementById('modulov_titulo').innerHTML = sessionStorage.getItem('modularidad');

function iniciar_pagina() {
  
  // console.log(modularity);
  // cargar_imagen(changePDCS);
  // cargar_imagen(changeF96);
  // cargar_imagen_tblu();
  // cargar_imagen_pdcd();
  // cargar_imagen_pdcp();
  cargar_info();
}


function cargar_info() {
  
  if (sessionStorage.getItem('modularidad') != null) {
    fetch(dominio + "/api/get/" + DBEVENT + "/preview/modularity/" + sessionStorage.getItem('modularidad'))
        .then(data => data.json())
        .then(async data => {
            console.log('DATA MOD',data)
            pdf_vision.style.display = 'inline-block';
            pdf_torque.style.display = 'inline-block';
            for (let index = 0; index < loading.length; index++) {
                loading[index].style.display = 'none';
            }
            console.log("DATA: ", data)
            modularity = data
            console.log("ESTA ES LA VARIANTE: ", modularity['variante'])
            ///////////// Script para VISIÓN /////////////
            var keys_vision = Object.keys(modularity['vision']);
                       
           
           
            
            var keys_torque = Object.keys(modularity['torque']);

            if (estacion.includes('MBM') && keys_torque.indexOf("MFB-E") > 0) {
              
              let mfbe = keys_torque.indexOf("MFB-E")
              keys_torque[mfbe] =  'MFB-E_M';
            }

            
            // Hace que todo los encabezados contengan el string _torque
            let map_torque = keys_torque.map(e => e + '_torque');

            var OneForAll = [...map_torque, ...keys_vision]
            console.log('vision', keys_vision);
            console.log('torque', keys_torque);
            console.log('OneForAll', OneForAll);

            for await (const e of OneForAll) {
              
           // OneForAll.forEach(caja => {
                var caja = e.trim()
             
                changeBoxes = findChange(caja);

             
                console.log('ChangeBoxes',changeBoxes);


                box_array[caja] = []
                var isTorque = caja.includes('_torque');
                var isMfbeM = caja.includes('MFB-E_M');
                var box = isTorque? caja.replace('_torque','') : caja;
                box = isMfbeM? box.replace('E_M','E') : box;
                var which = isTorque? 'torque': 'vision';
                
                // PDC = estacion.includes('MBM')? 'PDC-E': 'PDC-R';
                var isEcover = caja.includes("COVER")
                var determinante = caja.includes(PDC)? modularity['variante']:false;
                var minDeterminante = modularity['variante'].replace('-','').toLowerCase();
                
                
                
                
                console.log('El BOX', modularity[which][box], box);
                let cavidades = Object.keys (modularity[which][box])

                var valueCavity = modularity[which][box]
                console.log(cavidades);
                
                var minuscula = box.replace('-', '').toLowerCase();

                
                
                

                minuscula = caja.includes('torque')? `${minuscula}_t` : minuscula;

                if (caja.includes(PDC) && caja.includes('torque') ) {
                  determinante = `${determinante}_torque`;
                  minDeterminante = `${minDeterminante}_t`;
                }




                const splits =  `${caja},${minuscula}`;

                // console.log(splits);
                console.log('SPLITS', splits, caja);
                
                changeBoxes.agregarVariante(splits);

                

                if (cavidades.length > 0) {

                  if (determinante && !isEcover) {
                    console.log('determinando',caja, determinante , minDeterminante);
                    
                    changeBoxes.cambiarVariante(`${determinante},${minDeterminante}`, determinante);
                  }

                  cavidades.forEach(cavidad => {
                    console.log(caja ,cavidad);
                                            // este te dara el valor del arreglo de la cavidad obtenida de la consulta de modularidad
                        // ["beige","A2965403846"]

                        console.log('Checking determinante', checkingBox);
                        
                        var checkingBox = determinante? determinante: caja;
                        checkingBox = isEcover? caja : checkingBox;

                        var valor_cavidad = valueCavity[cavidad]
                        
                        console.log(checkingBox, cavidad);
                        //console.log(fuses_value[caja][cavidad]);
                        //En caso de que no exista una variante
                        

                        if (!fuses_value[checkingBox][cavidad]) {
                          console.log('AQUI YACE EL CAMBIO DE TERMINAL PARA', caja);

                          var lastChar = cavidad.substr(cavidad.length - 1); // => "1"
                          var removeChar = cavidad.slice(0, -1);
                          // console.log(removeChar);
                          
                          fuses_value[checkingBox][removeChar] = lastChar;
                          
                          box_array[checkingBox].push(removeChar);
                        } else{
                          //Fuses_value es un variable global para obtener los valores de las cavidades
                          console.log("fuses_value", caja, valor_cavidad[0], cavidad);
                          
                          
                          fuses_value[checkingBox][cavidad] = valor_cavidad[0];  
                          console.log(fuses_value[checkingBox][cavidad]);
                          

                          box_array[checkingBox].push(cavidad)             
                          console.log("CAJA FUSES", checkingBox, fuses_value[checkingBox]);
                          
                        }
                        
                        
                        
                        
                      });
                     
                  console.log('which',which, changeBoxes);
                  
                  crear_caja(changeBoxes, which);
                  
                  

                }else{
                  if (cavidades.length === -1) {
                    console.error('Error en las peticiones de cajas');
                    
                  }
                }
              }

           // });

            
            
          
          })
          
          
          
        
        }
}

function crear_caja(change, which) {
  
  let minCaja = change.getCaja();
  let mayusVariante = change.getMayusVariante();
  let mayuscaja = change.getMayusCaja();
  let variante = change.getVariante();
  
  console.log('Dengue',change);
  
  
  
  

  var originalDiv = document.getElementById(`section_box`);

  if (!document.getElementById(`section_${variante}`)) {
    
  const newDiv = originalDiv.cloneNode(true);
  // Cambiar el id del nuevo div
  newDiv.id = `section_${variante}`;
  newDiv.style.display = 'flow-root';
  // Cambiar el contenido del h4
  const h4 = newDiv.querySelector('h4');
  h4.textContent = mayusVariante;
  // Cambiar el id de la imagen y el canvas
  const img = newDiv.querySelector('img');
  const a = newDiv.querySelector('a');
  a.id = `quit_${variante}`;
  a.setAttribute('value', `${mayusVariante},${variante},${mayuscaja},${minCaja}`)
  a.style.display = 'none';
  img.id = `${variante}_image_v`;
  const canvas = newDiv.querySelector('canvas');
  canvas.id = `${variante}_image_v_canvas`;

  var panelSection = which === 'torque'? 'torque' : 'vision';

  document.getElementById(`panel-${panelSection}`).append(newDiv); 
  
}


  //cargar_imagen(change)
  // Insertar el nuevo div después del div original
  //originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);
  cargar_imagen(change);



}

function printPDF(params) {


  let $elemento = document.getElementById(params);

  html2pdf()
            .set({
                margin: 1,
                filename: sessionStorage.getItem('modularidad') + ' Torques Visuales',
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait'
                },
                pagebreak: {
                    mode: ['avoid-all', 'css', 'legacy']
                }
            })
            .from($elemento)
            .save()
            .catch(err => console.log(err));


            function ocultarTorque() {
              $('#torque_title').click();
          }
  
}


