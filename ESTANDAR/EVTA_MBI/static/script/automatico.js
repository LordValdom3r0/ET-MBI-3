var estacion = sessionStorage.getItem("estacion");
let activo = 1
let DBEVENT = '';
let eventoArray; 
var showedArray = [];
///////// Función para limpiar el contenedor de eventos /////////
function cleardiv() {
    document.getElementById("containerEventos").innerHTML = "";
}

estacion = !estacion? '127.0.0.1:5000':estacion;

console.log(estacion);


if (estacion.includes('MBM')) {
    $('#section_mbi').hide()
}else{
    $('#section_mbm').hide()
}

////////////////////////////////////////////////////////////////////   Seleccionador para filtrar   ////////////////////////////////////////////////////////////////////
const selector1 = document.getElementById('selector1'); // Obtener el elemento selector por su ID
var valorSeleccionado_FLUJO = "X296, X294, TODOS";
selector1.addEventListener('change', function() { // Agregar un evento de cambio al selector
    const valorSeleccionado = selector1.value; // Obtener el valor seleccionado

    console.log('Seleccionaste: ' + valorSeleccionado); // Hacer algo en función del valor seleccionado
});

const selector2 = document.getElementById('selector2'); 
var valorSeleccionado_CONDUCCION = "IZQUIERDOS, DERECHOS, TODOS";
selector2.addEventListener('change', function() {
    const valorSeleccionado = selector2.value;
  
    console.log('Seleccionaste: ' + valorSeleccionado);
});

const selector3 = document.getElementById('selector3');
var valorSeleccionado_STATUS = "ACTIVOS, INACTIVOS, TODOS";
selector3.addEventListener('change', function() {
    const valorSeleccionado = selector3.value;
    
    console.log('Seleccionaste: ' + valorSeleccionado);
});

// $(document).on('change', function(){ ESTE TE FUNCIONA, PERO TODA LAS INTERACCIONES QUE NO SEA LA TAREA CORRECTA VA HACER QUE FUNCIONE ⚠⚠⚠⚠
$("#cambiar").on('click', function(){
    console.log('Entrando a funcion ');

    //ELIMINAR LAS BOLITAS DE LOS EVENTOS QUE ESTAN AHORITA ----->
    
    //SE MANDA ALLAMAR OTRA VEZ LOADEVENTS para cargar los eventos que se quiere segun el filtro ----->
    let eventoName = $(this).closest("selector1").find("selector2").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    //function loadEvents(selector1) {
    //    console.log("Cargando eventos para el selector:" + selector1);
    //} 
    //loadEvents(selector1.value);

    //function loadEvents(selector2) {
    //    console.log("Cargando eventos para el selector:" + selector2);
    //} 
    loadEvents(selector1.value, selector2.value, selector3.value);
});

function filtrado(key,valorSeleccionado_FLUJO,valorSeleccionado_CONDUCCION,valorSeleccionado_STATUS){
    const tieneFlujo = evento.includes(valorSeleccionado_FLUJO);
    const tieneConduccion = evento.includes(valorSeleccionado_CONDUCCION);
    const tieneStatus = evento.includes(valorSeleccionado_STATUS);
    if (tieneFlujo && tieneConduccion && tieneStatus) {
       return key;
    }
}

///////// Función para cargar los eventos encontrados en la base de datos. Se activa al cargar el html o al agregar un evento o cambiar el status de alguno ya existente. /////////
function loadEvents(selector1,selector2,selector3){

    //obtener el primer valor de los selectores
    showedArray = [];
    // console.log(selector1);
    // console.log(selector2);
    //console.log(selector1, selector2, selector3);
    fetch(dominio+'/api/get/eventos')
    .then(res=>res.json())
    .then(function (data){
        // console.log("DATA: ",data);
        //console.log(data.eventos);
        eventoArray = data.eventos
        let keys = Object.keys(data.eventos);
        // console.log(data.eventos);
        //console.log("Keys:",keys);
        //-------------------------------------------------------------

        let containerEventos = document.getElementById('containerEventos');
        containerEventos.innerHTML = "";

        //-------------------------------------------------------------
        for (let i = 0; i < keys.length; i++) {
            // console.log("Evento: ",keys[i]);
            let modif_name_1 = keys[i].replace(/_/g, '-') // Se reemplazan los "_" encontrados en el nombre del Evento por "-" 
            let modif_name_2 = modif_name_1.replace("evento-", '') // Se elimina el string inicial "evento-" del nombre
            let eventoFinal = modif_name_2.toUpperCase() // Transformación a Mayúsculas
            let eventoMatriz = data.eventos[keys[i]][0];
            let eventoStatus = data.eventos[keys[i]][1];
            // console.log("Evento Final: ",eventoFinal);
            if (eventoMatriz == ""){
                eventoMatriz = "No contiene Matriz de Modularidades"
            }
            // console.log("Matriz cargada en el evento:\n-",eventoMatriz)
            console.log("Status del Evento:\n",eventoStatus)

            let containerEventos = document.getElementById('containerEventos');
            let eventoCard = document.createElement('div'); // Creación de div principal para el evento
                eventoCard.id = keys[i]
            let evento_img = document.createElement('div'); // Creación de div para separar la imagen y botones de acciones de el div de información
            let evento_info = document.createElement('div'); // Creación de div para mostrar la información del evento (Nombre y Matriz cargada); (Parte superior del div principal)
            let figure = document.createElement('figure'); // Creación de figure que contiene la imagen del evento y acciones a realizar para el evento; (Parte inferior del div principal)
            let img = document.createElement('img'); // Creación de Imagen para el evento
            let eventoBotones = document.createElement('p'); // Creación de párrafo para situar los botones de acciones para el evento
            let btn1 = document.createElement('button');
            let btn2 = document.createElement('button');
            let btn3 = document.createElement('button');
            let btn4 = document.createElement('button');
            btn1.setAttribute("data-toggle", "modal");
            btn1.setAttribute("data-target", "#modal_cargar_info");
            btn1.setAttribute("data-tooltip", "tooltip");
            btn1.setAttribute("data-placement", "top");
            btn1.setAttribute("title", "Cargar Información");
            btn1.setAttribute("id", "upload");
            btn2.setAttribute("data-toggle", "modal");
            btn2.setAttribute("data-target", "#modal_ver_info");
            btn2.setAttribute("data-tooltip", "tooltip");
            btn2.setAttribute("data-placement", "top");
            btn2.setAttribute("title", "Ver Información");
            btn2.setAttribute("id", "ver");
            btn3.setAttribute("data-toggle", "modal");
            btn3.setAttribute("data-target", "#modal_historial_info");
            btn3.setAttribute("data-tooltip", "tooltip");
            btn3.setAttribute("data-placement", "top");
            btn3.setAttribute("title", "Historial de Matrices");
            btn3.setAttribute("id", "historial");
            // btn4.setAttribute("data-toggle", "modal");
            // btn4.setAttribute("data-target", "#modal_cargar_info");
            btn4.setAttribute("data-tooltip", "tooltip");
            btn4.setAttribute("data-placement", "top");
            btn4.setAttribute("title", "Eliminar evento");
            btn4.setAttribute("id", "delete");
            let icono1 = document.createElement('i');
            let icono2 = document.createElement('i');
            let icono3 = document.createElement('i');
            let icono4 = document.createElement('i');
            let evento_title = document.createElement('h4'); // Creación de título del evento
            let matrizCargada = document.createElement('p'); // Creación de párrafo para mostrar el nombre de la Matriz de Modularidades Cargada en el evento
            let toggleStatus = document.createElement('input'); // Creación de input para cambiar el status del evento (Activo/Inactivo)
            let light = document.createElement('div');
            toggleStatus.setAttribute("type", "checkbox"); // Al input de Status se le agrega el tipo "Checkbox"
            toggleStatus.classList.add('status');
            // eventoCard.classList.add('col-md-3');
            // eventoCard.classList.add('col-sm-6');
            // eventoCard.classList.add('col-xs-12');
            eventoCard.classList.add('team_sect');
            eventoCard.id = keys[i];
            document.querySelectorAll(`#${eventoCard.id}`);
            
            evento_img.classList.add('eventos');
            evento_info.classList.add('evento-info');
            evento_info.classList.add('text-center');
            eventoBotones.classList.add('evento-botones');
            btn1.classList.add('botones');
            btn2.classList.add('botones');
            btn3.classList.add('botones');
            btn4.classList.add('botones');
            icono1.classList.add('fas');
            icono1.classList.add('fa-file-upload');
            icono2.classList.add('fas');
            icono2.classList.add('fa-list-alt');
            icono3.classList.add('fas');
            icono3.classList.add('fa-history');
            icono4.classList.add('fas');
            icono4.classList.add('fa-trash');
            light.classList.add('arrow')
            if (eventoStatus == 1){
                img.src ="static/content/fase.jpg"; // Si el evento está Activo aparecerá con imagen de color azul
                toggleStatus.checked = true
            }else{
                img.src ="static/content/fase_disabled.jpg"; // Si el evento está Inactivo aparecerá con imagen de color rojo
                toggleStatus.checked = false
            }
            evento_title.classList.add('title');
            evento_title.innerText = eventoFinal;
            matrizCargada.innerText = eventoMatriz;
            evento_info.appendChild(evento_title); // Se anexa el nombre del evento al div encargado de mostrar la información
            evento_info.appendChild(matrizCargada);
            evento_info.appendChild(toggleStatus);
            eventoCard.appendChild(evento_img);
            eventoCard.appendChild(evento_info);
            evento_img.appendChild(figure);
            figure.appendChild(light)
            figure.appendChild(img);
            figure.appendChild(eventoBotones);
            eventoBotones.appendChild(btn1);
            eventoBotones.appendChild(btn2);
            eventoBotones.appendChild(btn3);
            eventoBotones.appendChild(btn4);
            btn1.appendChild(icono1);
            btn2.appendChild(icono2);
            btn3.appendChild(icono3);
            btn4.appendChild(icono4);
            containerEventos.appendChild(eventoCard);
            // console.log(eventoCard.id);
            //--------------------------------------------------------------------------------------------   --------------------------------------------------------------------------------------------//
            
             // SI EL SELECTOR1 = TODOS quieres que selector1 = ""
             if (selector1 === "todos") {
                selector1 = "";
                }
                // console.log(selector1);
    
            if (selector2 === "todos") {
                selector2 = "";
                }
                // console.log(selector2);
    
                //selector3 = 0
                //selector2 = ""
                //console.log('SELECTOR1:');
                //console.log(selector1);
    
                var aidi = eventoCard.id;                       //nombre del evento
                var terminacion = selector1+"_"+selector2;      //ejemplo: x294_izquierda
    
                //console.log('QUIERO QUE SE MUESTRE o NO SEGUN SELECTOR3:');
                //console.log(selector3, selector1, selector2);
    
                // SI selector3  es ACTIVOS ..... quieres que eventoStatus == 1
                  
                //function filtrarYMostrarEventos(aidi, terminacion) {
                //    const eventoCard = document.getElementById("eventocard");
                //    const containerEventos = document.getElementById("containerEventos");
                //  
                //    // Restauramos la visibilidad del eventoCard en caso de que haya sido ocultado previamente
                //    //eventoCard.style.display = "block";
                //  
                //    if (aidi.includes(terminacion)) {
                //      console.log(eventoCard);
                //      containerEventos.appendChild(eventoCard);
                //    } else {
                //      eventoCard.style.display = "none";
                //    }
                //} 

                
                function filtrarYMostrarEventos(aidi, terminacion) {
                    // Restauramos la visibilidad del eventoCard en caso de que haya sido ocultado previamente
                    eventoCard.style.display = "block";
                  
                    
                    if (aidi.includes(terminacion)) {
                      // No es necesario mover el elemento eventoCard, simplemente lo dejamos visible
                      containerEventos.appendChild(eventoCard); 
                      eventoCard.style.display = "block";
                      //console.log(`Por Aqui paso un caballo llamado ${eventoCard.id} 🐴`);
                      showedArray.push(eventoCard.id);
                    } else {
                      // Si el evento no coincide con la terminación, lo ocultamos
                      eventoCard.style.display = "none";
                    }
                }

                if ((selector3 === "activos" && eventoStatus === 1) || (selector3 === "inactivos" && eventoStatus === 0) || selector3 === "todos") {
                    console.log("evento activo");
                    filtrarYMostrarEventos(aidi, terminacion);
                } else {
                    eventoCard.style.display = "none";
                }
                
               // if (aidi.includes(terminacion)) { // SI SE CUMPLE ESTO
               //     console.log(eventoCard.id);
               //    containerEventos.appendChild(eventoCard);   // SE MUESTRA EL EVENTO         
               // }else {
               //    eventoCard.style.display = "none";           // NO SE MUESTRA EL EVENTO
               // }
            }        
            $('[data-tooltip="tooltip"]').css({"cursor":"pointer"}).tooltip(); // Muestra un tooltip con información cuando se coloca el mouse sobre un elemento con este atributo
        })
        
        function loadEvents(){
            console.log(err);
        };
    }
  
///////// Al presionar la imagen o el texto de "Nuevo Evento" se abre el Modal con su formulario /////////
$(document).on('click','#new_event', function(){
    $('#mostrar').click();
});
$(document).on('click','#new_event_img', function(){
    $('#mostrar').click();
});
///////// Función para cuando se cambia el "STATUS" (Activo,Inactivo) de un evento ya existente /////////
$(document).on('change','.status', function(){
    let status = 1;
    let eventoName = $(this).closest("div").find("h4.title").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    if(this.checked) {
        console.log("Se activó el evento:\n",eventoName_DB," = ",status);
    }else{
        status = 0;
        console.log("Se desactivó el evento:\n",eventoName_DB," = ",status);
    }
    const newPost = {
        "DBEVENT": eventoName_DB,
        "ACTIVE": status
        }

    
        fetch(dominio+"/api/get/"+eventoName_DB+"/activo/ID/>/0/_/=/_").then(res=>res.json())
        .then(function (data){
            console.log(data);
            console.log(data["ID"]);
            //Obtener el ID de la tabla Activo del evento seleccionado
            activoID = data["ID"]
    
    // console.log("Este es el newpost: ", newPost);
    fetch(dominio+'/api/update/activo/'+activoID,{ // Busca el registro con "ID" = 1 para actualizar la información; En esta tabla (activo) solo deberá existir un registro, de lo contrario habrá bugs
    method: 'POST',
    body: JSON.stringify(newPost),
    headers:{
        "Content-type": "application/json"
    }
    }).then(res=>res.json())
    .then(function (data){
        console.log(data);
        cleardiv();
        loadEvents();
    })
    .catch(function(err) {
        console.log(err);
    });    
});
})
///////// Función para cuando se presiona el botón de cargar información (Abre ventana modal) /////////
$(document).on('click','#upload', function(){
    let eventoName = $(this).closest("div").next().find("h4.title").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    console.log(eventoName_DB);
    DBEVENT = eventoName_DB;
    document.getElementById('cargar_info_eventName').innerText = eventoName;
    sessionStorage.setItem("DBEVENT", DBEVENT);
});
///////// Al presionar el botón para eliminar un evento /////////
$(document).on('click','#delete', function(){
    console.log("Click en botón de eliminar");
    let eventoName = $(this).closest("div").next().find("h4.title").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    console.log(eventoName_DB)
    var eventoDel = confirm("¿Está seguro de que desea eliminar este Evento?");
    if (eventoDel == true){
        console.log("Se eliminó el evento: ", eventoName_DB)
        const newPost = {
            "DBEVENT": eventoName_DB
            }
        // console.log("Este es el newpost: ", newPost);
        fetch(dominio+'/api/delete/event',{
            method: 'POST',
            body: JSON.stringify(newPost),
            headers:{
                "Content-type": "application/json"
                }
        }).then(res=>res.json())
        .then(function (data){
            console.log("Data Delete: ",data);
            // console.log("Data Delete: ",data.delete);
            cleardiv();
            loadEvents();
        })
    }else{
        console.log("Se canceló la eliminación del evento: ", eventoName_DB)
    }
});
///////// Al presionar el botón para ver el historial de un evento /////////
$(document).on('click','#historial', function(){
    console.log("Click en botón de Historial de Evento");
    document.getElementById("tabla").innerHTML ="";// Limpia la tabla anteriormente impresa en el html
    let eventoName = $(this).closest("div").next().find("h4.title").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    console.log(eventoName_DB)
    document.getElementById('historial_info_eventName').innerText = eventoName+ ' HISTORIAL'
    fetch(dominio+"/api/get/"+eventoName_DB+"/historial/ID/>/0/_/=/_")
    .then(data=>data.json())
    .then(data=>{
        console.log(data);
        var colnames = Object.keys(data);
        console.log("Columnas: ", colnames);
        colnames.splice(colnames.indexOf("ID"),1);
        colnames.splice(colnames.indexOf("ARCHIVO"),1,"ID","ARCHIVO");
        console.log("Tipo de dato: ",typeof(data[colnames[1]]))
        if (typeof(data[colnames[1]]) == "object") {
            var filas = data[colnames[1]].length;
            console.log("Num de Registros:",filas);
        }else{
            var filas = 1;
            console.log("Num de Registros:",filas);
        }

        
        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');
        
        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing="0";
        table.width="100%";
        table.border = '2';
        table.appendChild(Encabezados);
        table.appendChild(tableBody);
        tableBody.align="center";
        //FIN DE CREACIÓN DE TABLA
        
        //ENCABEZADOS DE LA TABLA
        var tr = document.createElement('TR');
        Encabezados.appendChild(tr);
        for (i = 0; i < colnames.length; i++) {
            var th = document.createElement('TH')
            th.width = '100';
            th.appendChild(document.createTextNode(colnames[i]));
            tr.appendChild(th).style.backgroundColor="#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
            var tr = document.createElement('TR');
            for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            if (typeof(data[colnames[1]]) == "object") {
                td.appendChild(document.createTextNode(data[colnames[j]][i]));
            }else{
                td.appendChild(document.createTextNode(data[colnames[j]]));
            }
            tr.appendChild(td)
            }
            tableBody.appendChild(tr);
        }
    
        myTableDiv.appendChild(table);
        $(document).ready(function() {
            $('#myTable').DataTable({
                responsive:true
            });
        });
    })
});
///////// Función para cuando se presiona el botón de ver información (Modularidades y Módulos) /////////
$(document).on('click','#ver', function(){
    console.log("Click en Ver Información")
    let eventoName = $(this).closest("div").next().find("h4.title").text(); // Busca el nombre del evento correspondiente al toggle clickeado.
    eventoName_modif_1 = eventoName.toLowerCase(); // Transforma el nombre del evento a Minúsculas
    eventoName_modif_2 = eventoName_modif_1.replace(/-/g, '_'); // Reemplaza los "-" encontrados en el nombre del evento y los reemplaza por "_"
    eventoName_DB = 'evento_'+eventoName_modif_2; // Al resultado de las modificaciones del nombre le agrega el string "evento_" al inicio para que concuerde con el nombre de la Base de Datos
    console.log(eventoName_DB);
    document.getElementById('ver_info_eventName').innerText = eventoName+ ' INFORMACIÓN';
    DBEVENT = eventoName_DB;
    console.log("DB EVENTO ACTUAL: ",DBEVENT);
    sessionStorage.setItem("DBEVENT", DBEVENT);
});

///////// Función encargada de realizar el Post a la DB de la info extraída del formulario; Se ejecuta al presionar el botón "Crear" en el modal de Nuevo Evento /////////
function crearEvento(){
    //Con trim eliminamos los espacios que hay al inicio y al final
    let evento = document.getElementById('new_event_name').value.trim();

    //Sí hay algun espacio entre palabras lo remplazamos por un guion bajo, al igual si hay algun guion doble se quita el duplicado.
    if (evento.includes(' ')) {
        evento = evento.replace(/[\s_]+/g, '_').replace(/^_+|_+$/g, '');
    }

    let conduccion = document.getElementById('conduccion').value
    let numero = document.getElementById('numero').value
    let usuario = sessionStorage.getItem('nombre')
    console.log("Creando Evento")
    console.log("Este es el evento: ", evento);

    const newPost = {
        "EVENTO": evento,
        "CONDUCCION": conduccion,
        "NUMERO": numero,
        "USUARIO": usuario,
        "DATETIME": "AUTO",
        "ACTIVE": activo
        }
    console.log("Este es el newpost: ", newPost);
    fetch(dominio+'/api/post/newEvent',{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            "Content-type": "application/json"
            }
    }).then(res=>res.json())
    .then(function (data){
        console.log(data);
        cleardiv();
        loadEvents();
        document.getElementById('new_event_name').value = '';
    })
    .catch(function(err) {
        console.log(err);
    });
}
///////// Función que cambia el valor del checkbox (al ser presionado) para el evento que se está creando. /////////
function comprobaractivo(obj){   
    if (obj.checked){
        activo = 1;
    } else{
        activo = 0;
    }
    console.log("Valor de activo: ",activo);
}

///////////////////// Modularidades ///////////
let dropArea = document.getElementById('drop-area');
;['dragenter','dragover','dragleave','drop'].forEach(eventName => {
	dropArea.addEventListener(eventName,preventDefaults,false)
})
function preventDefaults(e){
	e.preventDefault()
	e.stopPropagation()
}

;['dragenter','dragover'].forEach(eventName => {
	dropArea.addEventListener(eventName,highlight,false)
})
;['dragleave','drop'].forEach(eventName => {
	dropArea.addEventListener(eventName,unhighlight,false)
})

function highlight(e){
	dropArea.classList.add('highlight')
	dropArea_modulos.classList.add('highlight')
}
function unhighlight(e){
	dropArea.classList.remove('highlight')
	dropArea_modulos.classList.remove('highlight')
}

dropArea.addEventListener('drop',handleDrop,false)

$("#cargar").on("click",function(){
	([...files]).forEach(cargar_archivo)
})

function handleDrop(e){
	let dt = e.dataTransfer
	files = dt.files
	const fileField = document.getElementById('cargar_input');
	fileField.files = files
	console.log(fileField.files)
}

function handleFiles(hola){
	console.log(hola);
	files = hola;
}

function cargar_archivo(file){
	var formData = new FormData();
	console.log("Nombre del Archivo: ",file.name);
	console.log("Archivo: ",file);

	formData.append('name', file.name);
	formData.append('file', file);

	console.log("formData name: ",formData.get('name'));
	console.log("formData file: ",formData.get('file'));
	
	fetch(dominio+'/upload/modularities', {
		method: 'POST',
		body: formData
		})
		.then(response => response.json())
        .then( 
            document.getElementById('loadingFile').style.display = "block"          
        )
		.then(result => {
		console.log('Resultado:', result);
		if (result.items == 1) {
            document.getElementById('loadingFile').style.display = "none"
			$("#carga_exitosa").fadeTo(2000, 500).slideUp(500, function() {
				$("#carga_exitosa").slideUp(500);
			});
		}else{
            document.getElementById('loadingFile').style.display = "none"
			$("#carga_fail").fadeTo(2000, 500).slideUp(500, function() {
				$("#carga_fail").slideUp(500);
			});
		}
		clear_archivo();
		formData = '';
		})
		.catch(error => {
		console.error('Error:', error);
		});
	// })	
}

$(function(){
	$("[data-hide]").on("click",function(){
		$(this).closest("." + $(this).attr("data-hide")).hide();
		document.getElementById("ilx_fail_alert").innerHTML = '';
	})
})

function update_modularities(){
	console.log("Click en Finalizar");
	document.getElementById("ilx_fail_alert").innerHTML = '';
    document.getElementById("modal_error").innerHTML = '';
    let formData = new FormData();
    formData.set('DBEVENT',DBEVENT);
    console.log("formData DBEVENT para DAT: ",formData.get('DBEVENT'));
    var flujo = estacion.includes('MBM')? 'ELX' : 'ILX'; 
	fetch(dominio+'/update/modularities', {
		method: 'POST',
		body: formData
		})
		.then(response => response.json())
		.then(result => {
			console.log('Resultado:', result);
            document.getElementById("modal_error").innerHTML = '';
            var ilx_failure = document.createElement("span")
            ilx_failure.id='modal_ilx_fail_alert';
            
			// console.log("ILX que NO se cargaron",Object.keys(result['ILX']));
			// console.log("Cantidad de ILX",(Object.keys(result['ILX'])).length);
			if ((Object.keys(result[flujo])).length == 0) {
				console.log("Todos las Modularidades se cargaron con éxito")
			}else{
				(Object.keys(result[flujo])).forEach(function(valor, indice, array) {
					// console.log("Valor ILX: ",valor);
					// console.log("indice: ",indice);
					console.log("Módulos faltantes del ILX: ",result[flujo][valor]);
					ilx_failure.innerHTML += indice+'.- '+valor+' --> '+"<p style='color: green'>"+result[flujo][valor]['vision']+"</p>"+"<p style='color: black'>"+result[flujo][valor]['torque']+"</p>"+'<hr>';
                    document.getElementById("ilx_fail_alert").innerHTML += indice+'.- '+valor+' --> '+"<p style='color: green'>"+result[flujo][valor]['vision']+"</p>"+"<p style='color: black'>"+result[flujo][valor]['torque']+"</p>"+'<hr>';
				});
				ilx_failure.innerHTML += '<strong>Lista total de Módulos y/o Modularidades Faltantes: </strong><br/>'+'<p>'+ result['Modulos'] + '</p>';
                document.getElementById("ilx_fail_alert").innerHTML += '<strong>Lista total de Módulos y/o Modularidades Faltantes: </strong><br/>'+'<p>'+ result['Modulos'] + '</p>';
				$("#ilx_fail").fadeTo(50000, 500).slideUp(500, function() {
					$("#ilx_fail").slideUp(500);
				});
                var modal_problem = ilx_failure.cloneNode(true);
                document.getElementById("modal_error").append(modal_problem)
				// let ilxString = (Object.keys(result)).toString()
				// alert("Las siguientes modularidades NO se cargaron debido a un error en cuanto a sus módulos: ",ilxString)
                setTimeout(() => {
                    $('#mostrarError').click();
                }, 3000);
            }
			clear_archivo();
			formData = '';
		})
		.catch(error => {
			console.error('Error:', error);
		});
        
}

function clear_archivo(){
	const fileField = document.getElementById('cargar_input');
	fileField.value="";
	console.log(fileField.files)
}

///////////////////// Modulos ///////////
let dropArea_modulos = document.getElementById('drop-area-modulos');
;['dragenter','dragover','dragleave','drop'].forEach(eventName => {
	dropArea_modulos.addEventListener(eventName,preventDefaults,false)
})
function preventDefaults(e){
	e.preventDefault()
	e.stopPropagation()
}

;['dragenter','dragover'].forEach(eventName => {
	dropArea_modulos.addEventListener(eventName,highlight,false)
})
;['dragleave','drop'].forEach(eventName => {
	dropArea_modulos.addEventListener(eventName,unhighlight,false)
})

dropArea_modulos.addEventListener('drop',handleDrop_modulos,false)
$("#update_modulos").on("click",function(){
	([...files]).forEach(cargar_archivo_modulos)
})
function handleDrop_modulos(e){
	let dt = e.dataTransfer
	files = dt.files
	const fileField = document.getElementById('cargar_input_modulos');
	fileField.files = files
	console.log(fileField.files)
}

function handleFiles_modulos(hola){
	console.log(hola);
	files = hola;
}

function cargar_archivo_modulos(file){
    let usuario = sessionStorage.getItem('nombre');
	var formData = new FormData();
	console.log("Nombre del Archivo: ",file.name);
	console.log("Archivo: ",file);

    formData.set('DBEVENT',DBEVENT)
    formData.set('USUARIO',usuario)

	formData.append('name', file.name);
	formData.append('file', file);

	console.log("formData Name: ",formData.get('name'));
	console.log("formData File: ",formData.get('file'));
	console.log("formData DBEVENT: ",formData.get('DBEVENT'));
	console.log("formData USUARIO: ",formData.get('USUARIO'));

	fetch(dominio+'/update/modules', {
		method: 'POST',
		body: formData
		})
		.then(response => response.json())
        .then( 
            document.getElementById('loadingFile_m').style.display = "block"          
        )
		.then(result => {
		console.log('Resultado:', result);
		if (result.items == 1) {
            document.getElementById('loadingFile_m').style.display = "none"
			$("#update_exitoso").fadeTo(2000, 500).slideUp(500, function() {
				$("#update_exitoso").slideUp(500);
                cleardiv();
                loadEvents();
				$("#cerrar-carga").click();
			});
		}else{
            document.getElementById('loadingFile_m').style.display = "none"
			$("#update_fail").fadeTo(2000, 500).slideUp(500, function() {
				$("#update_fail").slideUp(500);
			});
		}		
		clear_archivo_modulos();
		formData = '';
		})
		.catch(error => {
		console.error('Error:', error);
		});	
}

function clear_archivo_modulos(){
	const fileField = document.getElementById('cargar_input_modulos');
	fileField.value="";
	console.log(fileField.files)
}
//MODULOS DETERMINANTES
let dropArea_determinantes = document.getElementById('drop-area-determinantes');
;['dragenter','dragover','dragleave','drop'].forEach(eventName => {
	dropArea_determinantes.addEventListener(eventName,preventDefaults,false)
})
function preventDefaults(e){
	e.preventDefault()
	e.stopPropagation()
}

;['dragenter','dragover'].forEach(eventName => {
	dropArea_determinantes.addEventListener(eventName,highlight,false)
})
;['dragleave','drop'].forEach(eventName => {
	dropArea_determinantes.addEventListener(eventName,unhighlight,false)
})

dropArea_determinantes.addEventListener('drop',handleDrop_determinantes,false)
$("#update_determinantes").on("click",function(){
	([...files]).forEach(cargar_archivo_determinantes)
})
function handleDrop_determinantes(e){
	let dt = e.dataTransfer
	files = dt.files
	const fileField = document.getElementById('cargar_input_determinantes');
	fileField.files = files
	console.log(fileField.files)
}

function handleFiles_determinantes(hola){
	console.log(hola);
	files = hola;
}
function cargar_archivo_determinantes(file){
    let usuario = sessionStorage.getItem('nombre');
	var formData = new FormData();
	console.log("Nombre del Archivo: ",file.name);
	console.log("Archivo: ",file);
    formData.set('DBEVENT',DBEVENT)
    formData.set('USUARIO',usuario)

	formData.append('name', file.name);
	formData.append('file', file);

	console.log("formData Name: ",formData.get('name'));
	console.log("formData File: ",formData.get('file'));
	console.log("formData DBEVENT: ",formData.get('DBEVENT'));
	console.log("formData USUARIO: ",formData.get('USUARIO'));
    fetch(dominio+'/update/determinantes',{ // cambio de variables: de modules a determinantes
		method: 'POST',
		body: formData
		})
		.then(response => response.json())
        .then( 
            document.getElementById('loadingFile_d').style.display = "block"          
        )
	    .then(result => {
		console.log('Resultado:', result);
		if (result.items == 1) {
            document.getElementById('loadingFile_d').style.display = "none"
			$("#carga_completa").fadeTo(2000, 500).slideUp(500, function() {
				$("#carga_completa").slideUp(500);
                cleardiv();
                loadEvents();
				$("#cerrar-carga").click();
			});
		}else{
            document.getElementById('loadingFile_d').style.display = "none"
			$("#fallido").fadeTo(2000, 500).slideUp(500, function() {
				$("#fallido").slideUp(500);                
			});
		}		
        clear_archivo_determinantes();
		formData = '';
		})
		.catch(error => {
		console.error('Error:', error);
    });	    
}

function clear_archivo_determinantes(){
    const fileField = document.getElementById('cargar_input_determinantes');
	fileField.value="";
	console.log(fileField.files)
}
function acceptEnter(){
    if (event.key === 'Enter') {
        searchDAT();
    }
}
function searchDAT(){
   var busqueDat = document.getElementById('searchDAT').value;
   let eventKeys = Object.keys(eventoArray) 
   console.log(busqueDat)  
   console.log(eventoArray)  
   showedArray.forEach(evento => {
            console.log(evento);
            document.getElementById(evento).classList.remove('green-light')
            document.getElementById(evento).classList.remove('red-light')
            document.getElementById(evento).classList.remove('gray-light')
           if (busqueDat.length !== 0){
           fetch(dominio+"/api/get/"+evento+"/pedidos/ID/>/0/_/=/_")
            .then(data=>data.json())
            .then(data=>{
        var arrayPedidos =  typeof data.PEDIDO !== 'string' ? data.PEDIDO : [data.PEDIDO] ;
        console.log(arrayPedidos);
        const encontrado = arrayPedidos !== undefined && arrayPedidos.find(element => element === busqueDat)? true:false;
        console.log(encontrado)
        if (encontrado) {
            document.getElementById(evento).classList.add('green-light')
        }
        else{
            document.getElementById(evento).classList.add('red-light')
        }
    })
}else{ document.getElementById(evento).classList.add('gray-light')}
});
}