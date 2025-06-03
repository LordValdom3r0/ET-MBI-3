let DBEVENT = sessionStorage.getItem('DBEVENT');
console.log("DB EVENT ACTUAL: ", DBEVENT);
let modif_name_1 = DBEVENT.replace(/_/g, '-') // Se reemplazan los "_" encontrados en el nombre del Evento por "-" 
let modif_name_2 = modif_name_1.replace("evento-", '') // Se elimina el string inicial "evento-" del nombre
let eventoFinal = modif_name_2.toUpperCase()
document.getElementById('tituloEvento').innerText = eventoFinal;
var id;
// console.log("esta es la sessionstorage: ", sessionStorage.getItem('gafet'));

function cleardiv() {
  document.getElementById("tabla").innerHTML = "";
}

function cargartabla() {
  if (sessionStorage.getItem('tipo') == "OPERADOR" || sessionStorage.getItem('tipo') == null) {
    // console.log(sessionStorage.getItem('tipo'));
  }
}

function modulos(seccion) {
  cleardiv();
  fetch(dominio + "/api/get/" + DBEVENT + `/modulos_${seccion}/ID/>/0/_/=/_`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        console.log("Columnas: ", colnames);
        colnames.push("Operación");
        colnames.push("Cajas");
        // console.log("Elemento eliminado",colnames.splice(0,8));
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.border = '2';
        table.appendChild(Encabezados);
        table.appendChild(tableBody);
        tableBody.align = "center";
        //FIN DE CREACIÓN DE TABLA

        //ENCABEZADOS DE LA TABLA
        var tr = document.createElement('TR');
        Encabezados.appendChild(tr);
        for (i = 0; i < colnames.length; i++) {
          var th = document.createElement('TH')
          th.width = '100';
          if (!colnames[i].includes('CAJA')) {
            th.appendChild(document.createTextNode(colnames[i]));
            tr.appendChild(th).style.backgroundColor = "#0DBED6";
          }
        }
        // var th = document.createElement('TH');
        // th.width = '100';
        // th.appendChild(document.createTextNode('Operación'));

        var cajaModule = document.createElement('TH');
        cajaModule.width = '100';
        cajaModule.appendChild(document.createTextNode('CAJAS'));

        tr.appendChild(th).style.backgroundColor = "#0DBED6";
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          var declarado = []
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            switch (true) {
              case colnames[j].includes('CAJA'):
              //console.log(data[colnames[j]][i]);
                
                const contenido = JSON.parse(data[colnames[j]][i])
                //console.log("SomeBuddy", Object.keys(contenido));
                if (Object.keys(contenido).length > 0) {
                  declarado.push(Object.keys(contenido)[0])
                }
                break;
              case colnames[j].includes('Operación'):

                var td = document.createElement('TD');
                var boton = document.createElement('button');
                var eliminar = document.createElement('i');
                eliminar.classList.add("fas");
                eliminar.classList.add("fa-trash");
                boton.title = "Eliminar";
                boton.classList.add('btn');
                boton.classList.add('btn-danger');
                boton.classList.add('btn-delete');
                var dbTable = seccion.includes("vision")? 'fusibles': seccion
                boton.value = `${data["ID"][i]},${data["MODULO"][i]},${dbTable}`;
                boton.setAttribute('onclick', 'del(this)');
                var botondos = document.createElement('button');
                var modificar = document.createElement('i');
                modificar.classList.add("fas");
                modificar.classList.add("fa-edit");
                botondos.title = 'Modificar';
                botondos.value = `${data["ID"][i]},${data["MODULO"][i]},${seccion}`;
                botondos.classList.add('btn');
                botondos.classList.add('btn-primary');
                botondos.classList.add('btn-edit');
                boton.appendChild(eliminar);
                botondos.appendChild(modificar);
                td.appendChild(boton);
                td.append(" ");
                td.appendChild(botondos);
                tr.appendChild(td)
                break;

              case colnames[j].includes('Cajas'):
                var td = document.createElement('TD');
                var txt = document.createElement('p');
                txt.innerHTML = Object.keys(declarado).length > 0? declarado:'None';
                td.appendChild(txt);
                tr.appendChild(td)
                break;

              default:
                td.appendChild(document.createTextNode(data[colnames[j]][i]));
                tr.appendChild(td)
                break;
            }
            // if (colnames[j].includes('CAJA')) {


            // }else{
            //   td.appendChild(document.createTextNode(data[colnames[j]][i]));
            //   tr.appendChild(td)
            // }
          }
          console.log('declarado', declarado);
          tableBody.appendChild(tr);
        }


        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable();
        });
      }
      //  $("#myTable tr").click(function(){
      //   var value=$(this).find('td:first').next().next().html();
      //   alert(value);    
      // }); 
    })
}


function del(params) {
  console.log(params.value);
  //$(document).on('click','.btn-delete', function(){
  var elim = params.value.split(',')[0];
  var modulo = params.value.split(',')[1];
  var flujo = params.value.split(',')[2];
  console.log("ID a eliminar", elim);
  console.log("Modulo a eliminar", modulo);
  document.getElementById("modulo").innerHTML = modulo;
  var opcion = confirm("¿Está seguro de que desea eliminar este registro?");
  if (opcion == true) {
    fetch(dominio + '/api/delete/' + DBEVENT + '/modulos_' + flujo + '/' + elim, {
        method: 'POST'
      }).then(res => res.json())
      .then(function (data) {
        // console.log(data);
        console.log('Haz eliminado el registro')
        $('#mostrar').click();
        modulos_vision();
        setTimeout(function () {
          $('#cerrar').click();
        }, 3000);
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    console.log('Haz cancelado la acción')
  }
}

$(document).on('click', '.btn-edit', function () {
  var thisEdit = this.value.split(',');
  var edit_id = thisEdit[0];
  var edit = thisEdit[1];
  id = edit_id;
  console.log("Nombre del Módulo: ", edit);
  console.log("Id de Módulo: ", edit_id);
  fetch(dominio + "/api/get/" + DBEVENT + "/modulos_fusibles/ID/=/" + edit_id + "/_/=/_")
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      var keys = Object.keys(data)
      // console.log(keys);
      sessionStorage.setItem("edit_vision", edit);
      sessionStorage.setItem("edit_vision_id", edit_id);
      location.href = "edit_modulos_vision.v2.php";
    })
});
//////// Si el usuario hace click fuera de la ventana de edición esta se cerrará //////////
var modaledit = document.getElementById("popedit");
window.onclick = function (event) {
  if (event.target == modaledit) {
    modaledit.style.display = "none";
  }
}

$('#modal_elim').find(".modal-header").css("background", "#0DBED6");