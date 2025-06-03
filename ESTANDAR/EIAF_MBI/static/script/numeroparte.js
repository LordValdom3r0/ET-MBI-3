let DBEVENT = sessionStorage.getItem('DBEVENT');
var estacion = sessionStorage.getItem('estacion');
console.log("DB EVENT ACTUAL: ",DBEVENT);
let modif_name_1 = DBEVENT.replace(/_/g, '-') // Se reemplazan los "_" encontrados en el nombre del Evento por "-" 
let modif_name_2 = modif_name_1.replace("evento-", '') // Se elimina el string inicial "evento-" del nombre
let eventoFinal = modif_name_2.toUpperCase()
document.getElementById('tituloEvento').innerText = eventoFinal;
var formparte = document.getElementById('formparte');
var pedido;
var pedido_final;
var activo = 1;

var mv=[];
var mt=[];
var ref = "";
var historial="";

function formpartemostrar(){
	// formusuario.style.display = 'none';
	if (formparte.style.display === 'block') {
		formparte.style.display = 'none';
	} else{
		formparte.style.display = 'block';
	}


	mostrar_modulos_vision()
}

if (!estacion.includes('MBM')) {
	$('#qr_cajas').hide();
  }


function mostrar_modulos_vision(){
	document.getElementById("modulos_vision").innerHTML = "<option value='"+"'>Seleccione un modulo de vision..."+"</option>";
	//modulos de vision
	var miSelectT = document.getElementById("modulos_vision")[0];
	fetch(dominio+"/api/get/"+DBEVENT+"/modulos_fusibles/ID/>/0/_/=/_")
	.then(data=>data.json())
	.then(data=>{
		// console.log(data.MODULO);
		var array = data.MODULO
		for (var i = 0; i < array.length; i++) {
			var aTag = document.createElement('option');
			aTag.text=array[i]
			document.getElementById("modulos_vision").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>";
		}
	})
	//modulos de vision
}

function agregarmodulov(){
	if (document.getElementById("modulos_vision").value==="Seleccione un modulo de vision..."){
		// console.log("Seleccione un modulo")
	}
	else{
		var i = mv.indexOf( document.getElementById("modulos_vision").value );
		if (i === -1){
			// console.log(document.getElementById("modulos_vision").value)
			mv.push(document.getElementById("modulos_vision").value)
			// console.log(mv)
			document.getElementById('arreglomv').innerHTML= "Módulos de visión agregados:   "+mv ;
		}
	}
}

function quitarmodulov(){
	var i = mv.indexOf( document.getElementById("modulos_vision").value );
	if (i !== -1){
		mv.splice( i, 1 );
	}
	// console.log(mv)
	document.getElementById('arreglomv').innerHTML= "Módulos de visión agregados:   "+mv ;
}

function agregarparte(){
	var orden = document.getElementById("pedido").value;
	var mod_fusibles = mv;
	if (orden.length===0 || mod_fusibles.length===0) {
		$('#mostrar').click();
		document.getElementById("header").innerHTML = "";
		document.getElementById("informacion").innerHTML = 'Asegúrese de llenar todos los campos correspondientes.';
	} else{
		if (ref =="no valido") {
			$('#mostrar').click();
			document.getElementById("header").innerHTML = document.getElementById("pedido").value;
			document.getElementById("informacion").innerHTML = estacion.includes("MBM")? 'Para insertar un número de pedido correctamente asegúrese de agregar la referencia "ELX", "ERX", "ELZ" o "ERZ" al inicio.' : 'Para insertar un número de pedido correctamente asegúrese de agregar la referencia "ILX", "IRX", "ILZ" o "IRZ" al inicio.';
		}else{
			if(historial==""){
				agregar_parte_db();
			}
			else{
				$('#mostrar').click();
				document.getElementById("header").innerHTML = pedido_final;
				document.getElementById("informacion").innerHTML = 'El pedido ya existe.';
			}
		}
	}
}
function agregar_parte_db(){
	let codigosqr = estacion.includes('MBM')? document.getElementsByClassName("qr_2") : document.getElementsByClassName("qr");
	let checkbox = document.getElementsByClassName("myCheck");
	var orden = pedido_final;
	var mod_fusibles = mv;
	var mod_f=mod_fusibles.toString();
	// console.log(mod_f)
	qr_dict = {}
    for (var i = 0; i < codigosqr.length; i++) {
        qr_dict[codigosqr[i].id] = [codigosqr[i].value, checkbox[i].checked];
    }
	const newPost = estacion.includes('MBM')? {
		"DBEVENT": DBEVENT,
		"MODULARIDAD": orden,
		"MODULOS_FUSIBLES": mod_f,
		"QR_BOXES": qr_dict,
		"ACTIVO": activo,
		"FECHA": "AUTO"
	}:{
		"DBEVENT": DBEVENT,
		"MODULARIDAD": orden,
		"MODULOS_FUSIBLES": mod_f,
		"ACTIVO": activo,
		"FECHA": "AUTO"
	}
	console.log(newPost);
	 fetch(dominio+'/api/post/modularidades',{
	 	method: 'POST',
	 	body: JSON.stringify(newPost),
	 	headers:{
	 		"Content-type": "application/json"
	 	}
	 }).then(res=>res.json())
	 .then(function (data){
	 	// console.log(data);
	 	if(data["items"]===1){
	 		console.log("INSERTION OK")
	 		alertaaddparte.innerHTML = '<div class="alert alert-success" role="alert">PEDIDO INSERTADO CORRECTAMENTE.</div>';
	 		location.replace("index.php")
	 	}
	 	else {
	 		console.log("INSERTION NOK")
	 		alertaaddparte.innerHTML = '<div class="alert alert-warning" role="alert">PEDIDO NO AGREGADO.</div>';
	 	}

	 })
}

function get_valid_pedido(e){
	e = e || window.event;
	if (e.keyCode == 13)
	{
		e.preventDefault();
		//console.log("get_pedido")
		historial="";
		ref = "";
		pedido = document.getElementById("pedido").value;
		// console.log(pedido)	
		if(pedido!=""){
			var split_pedido = pedido.split(" ");
			// console.log("Aqui está el split: ",split_pedido);
			for (var i = 0; i < split_pedido.length; i++) {
				// console.log(split_pedido[i]);
				var ILX = split_pedido[i].indexOf("ILX")
				var IRX = split_pedido[i].indexOf("IRX")
				var ILZ = split_pedido[i].indexOf("ILZ")
				var IRZ = split_pedido[i].indexOf("ILZ")
	
				var ELX = split_pedido[i].indexOf("ELX")
				var ERX = split_pedido[i].indexOf("ERX")
				var ELZ = split_pedido[i].indexOf("ELZ")
				var ERZ = split_pedido[i].indexOf("ELZ")
				// console.log("INDEX OF STRING",ILX);



				if (estacion.includes("MBM")) {
					switch (true) {
						case ELX > -1:
							validado(split_pedido[i]);
							console.log("INDEX OF STRING", ELX);
							break;
						case ERX > -1:
							console.log("INDEX OF STRING", ERX);
							validado(split_pedido[i]);
							break;
						case ERZ > -1:
							console.log("INDEX OF STRING", ERZ);
							validado(split_pedido[i]);
							break;
						case ELZ > -1:
							console.log("INDEX OF STRING", ELZ);
							validado(split_pedido[i]);
							break;
						default:
							NoValido();
							break;
					}
	
				} else {
					switch (true) {
						case ILX > -1:
							validado(split_pedido[i]);
							console.log("INDEX OF STRING", ILX);
							break;
						case IRX > -1:
							console.log("INDEX OF STRING", IRX);
							validado(split_pedido[i]);
							break;
						case IRZ > -1:
							console.log("INDEX OF STRING", IRZ);
							validado(split_pedido[i]);
							break;
						case ILZ > -1:
							console.log("INDEX OF STRING", ILZ);
							validado(split_pedido[i]);
							break;
						default:
							NoValido();
							break;
					}
				}

				if (ILX == -1) {
					document.getElementById("pedido").value = ""
					//document.getElementById("pedido").placeholder="Némero de referencia"
					// console.log("no está el ILX");
					historial="";
					ref = "no valido";
					alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">Referencia "ILX", "IRX" o "Z" no válida</div>'
					// console.log(historial)
				} else{
					// console.log("SI ESCRIBIÓ ILX");
					pedido_final = split_pedido[i];
					endpoint=dominio+'/api/get/'+DBEVENT+'/modularidades/modularidad/=/'+split_pedido[i]+'/_/_/_'
					// console.log(endpoint)
					fetch(endpoint,{
						method: 'GET',
						headers:{
							"Content-type": "application/json"
						}
					}).then(res=>res.json())
					.then(function (data){
						// console.log(data);
						// console.log("ITEMS: ",data.items);
						if (data.items == 0){
							// console.log("NO EXISTE EL REGISTRO")
							historial="";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
							// console.log(historial)
						}else{
							historial="si existe";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El pedido "'+split_pedido[i]+'" ya existe</div>'
							// console.log(historial)
						}
					})
					.catch(function(err) {
					});
					ref = "";
					alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
					pedido.value = split_pedido[i]
					document.getElementById("pedido").value = split_pedido[i]
					break;
				}
				// PARA IRX
				if (IRX == -1) {
					document.getElementById("pedido").value = ""
					//document.getElementById("pedido").placeholder="Némero de referencia"
					// console.log("no está el IRX");
					historial="";
					ref = "no valido";
					alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">Referencia "ILX", "IRX" o "Z" no válida</div>'
					// console.log(historial)
				} else{
					// console.log("SI ESCRIBIÓ IRX");
					pedido_final = split_pedido[i];
					endpoint=dominio+'/api/get/'+DBEVENT+'/modularidades/modularidad/=/'+split_pedido[i]+'/_/_/_'
					// console.log(endpoint)
					fetch(endpoint,{
						method: 'GET',
						headers:{
							"Content-type": "application/json"
						}
					}).then(res=>res.json())
					.then(function (data){
						// console.log(data);
						// console.log("ITEMS: ",data.items);
						if (data.items == 0){
							// console.log("NO EXISTE EL REGISTRO")
							historial="";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
							// console.log(historial)
						}else{
							historial="si existe";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El pedido "'+split_pedido[i]+'" ya existe</div>'
							// console.log(historial)
						}
					})
					.catch(function(err) {
					});
					ref = "";
					alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
					pedido.value = split_pedido[i]
					document.getElementById("pedido").value = split_pedido[i]
					break;
				}
				// PARA Z
				if (Z == -1) {
					document.getElementById("pedido").value = ""
					//document.getElementById("pedido").placeholder="Némero de referencia"
					// console.log("no está el Z");
					historial="";
					ref = "no valido";
					alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">Referencia "ILX", "IRX" o "Z" no válida</div>'
					// console.log(historial)
				} else{
					// console.log("SI ESCRIBIÓ Z");
					pedido_final = split_pedido[i];
					endpoint=dominio+'/api/get/'+DBEVENT+'/modularidades/modularidad/=/'+split_pedido[i]+'/_/_/_'
					// console.log(endpoint)
					fetch(endpoint,{
						method: 'GET',
						headers:{
							"Content-type": "application/json"
						}
					}).then(res=>res.json())
					.then(function (data){
						// console.log(data);
						// console.log("ITEMS: ",data.items);
						if (data.items == 0){
							// console.log("NO EXISTE EL REGISTRO")
							historial="";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
							// console.log(historial)
						}else{
							historial="si existe";
							ref = "";
							alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El pedido "'+split_pedido[i]+'" ya existe</div>'
							// console.log(historial)
						}
					})
					.catch(function(err) {
					});
					ref = "";
					alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "'+split_pedido[i]+'" no existe</div>'
					pedido.value = split_pedido[i]
					document.getElementById("pedido").value = split_pedido[i]
					break;
				}
			}
		}
	}
}

function get_valid_pedido_1(){
	//console.log("get_pedido")
	historial="";
	ref = "";
	pedido = document.getElementById("pedido").value;
	// console.log(pedido)	
	if(pedido!=""){
		var split_pedido = pedido.split(" ");
		// console.log("Aqui está el split: ",split_pedido);
		for (var i = 0; i < split_pedido.length; i++) {
			// console.log(split_pedido[i]);
			var ILX = split_pedido[i].indexOf("ILX")
            var IRX = split_pedido[i].indexOf("IRX")
            var ILZ = split_pedido[i].indexOf("ILZ")
            var IRZ = split_pedido[i].indexOf("ILZ")

            var ELX = split_pedido[i].indexOf("ELX")
            var ERX = split_pedido[i].indexOf("ERX")
            var ELZ = split_pedido[i].indexOf("ELZ")
            var ERZ = split_pedido[i].indexOf("ELZ")
			// console.log("INDEX OF STRING",ILX);
			

			if (estacion.includes("MBM")) {
                switch (true) {
                    case ELX > -1:
                        validado(split_pedido[i]);
                        console.log("INDEX OF STRING", ELX);
                        break;
                    case ERX > -1:
                        console.log("INDEX OF STRING", ERX);
                        validado(split_pedido[i]);
                        break;
                    case ERZ > -1:
                        console.log("INDEX OF STRING", ERZ);
                        validado(split_pedido[i]);
                        break;
                    case ELZ > -1:
                        console.log("INDEX OF STRING", ELZ);
                        validado(split_pedido[i]);
                        break;
                    default:
                        NoValido();
                        break;
                }

            } else {
                switch (true) {
                    case ILX > -1:
                        validado(split_pedido[i]);
                        console.log("INDEX OF STRING", ILX);
                        break;
                    case IRX > -1:
                        console.log("INDEX OF STRING", IRX);
                        validado(split_pedido[i]);
                        break;
                    case IRZ > -1:
                        console.log("INDEX OF STRING", IRZ);
                        validado(split_pedido[i]);
                        break;
                    case ILZ > -1:
                        console.log("INDEX OF STRING", ILZ);
                        validado(split_pedido[i]);
                        break;
                    default:
                        NoValido();
                        break;
                }
            }







			
	}
}

}

function NoValido() {
	historial = "";
	ref = "no valido";
	alert_get_historial.innerHTML = estacion.includes('MBM') ?
		'<div class="alert alert-warning" role="alert">Referencia "ELX", "ERX", "ELZ" o "ERZ" no validada</div>' :
		'<div class="alert alert-warning" role="alert">Referencia "ILX", "IRX", "ILZ" o "IRZ" no válidada</div>';
	// console.log(historial)
}

function validado(e) {
	// console.log("SI ESCRIBIÓ ILX");
	pedido_final = e;
	endpoint=dominio+'/api/get/'+DBEVENT+'/modularidades/modularidad/=/'+e+'/_/_/_'
	// console.log(endpoint)
	fetch(endpoint, {
			method: 'GET',
			headers: {
				"Content-type": "application/json"
			}
		}).then(res => res.json())
		.then(function (data) {
			console.log(data);
			var colnames = Object.keys(data);
			console.log(colnames);
			if(colnames.includes('items')){
				ref = "";
				alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "' + e + '" no existe</div>'
			}else{
				historial = "si existe";
				ref = "";
				alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El pedido "' + document.getElementById("pedido").value + '" ya existe</div>'
			}
		})
		.catch(function (err) {
			
			//ref = "";
			alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">'+err+'</div>';
		});
	
}
////////// Habilitar o Deshabilitar Campos de texto en función del Checkbox ///////////
function comprobarpdce(obj){   
	if (obj.checked){
		document.getElementById('PDC-E').value = "12239069202";
		document.getElementById('PDC-E_AMG').value = "";
        document.getElementById('myCheckPDC-E_AMG').checked = false;
	} else{
		document.getElementById('PDC-E').value = "";
	}     
}
function comprobarpdce_amg(obj){   
	if (obj.checked){
		document.getElementById('PDC-E_AMG').value = "12239067603";
		document.getElementById('PDC-E').value = "";
        document.getElementById('myCheckPDC-E').checked = false;
	} else{
		document.getElementById('PDC-E_AMG').value = "";
	}     
}
function comprobarpdcs1(obj){   
	if (obj.checked){
		document.getElementById('PDC-S1').value = "12235403215";
	} else{
		document.getElementById('PDC-S1').value = "";
	}     
}

function comprobaractivo(obj){   
	if (obj.checked){
		activo = 1;
	} else{
		activo = 0;
	}
	// console.log("Valor de activo: ",activo);
}

$('#modal_info').find(".modal-header").css("background", "#f44336");