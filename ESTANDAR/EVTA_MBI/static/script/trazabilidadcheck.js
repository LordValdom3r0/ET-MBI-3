var fecha = document.getElementById("fecha");
var valor = document.getElementById("valor");
var valorubicacion = document.getElementById("valorubicacion");
var hm2 = document.getElementById("hm2");
var referencia = document.getElementById("referencia");
// var PDCPselect = document.getElementById("PDCPselect");
// var PDCDselect = document.getElementById("PDCDselect");
// var BATTERYselect = document.getElementById("BATTERYselect");
// var MFBP1select = document.getElementById("MFBP1select");
// var MFBSselect = document.getElementById("MFBSselect");
// var MFBP2select = document.getElementById("MFBP2select");
// var PDCRselect = document.getElementById("PDCRselect");

// var options3 = {

//   PDCP: [ "PDCPselect"],
//   PDCD: [ "PDCDselect"],
//   BATTERY: [ "BATTERYselect"],
//   MFBP1: [ "MFBP1select"],
//   MFBS: [ "MFBSselect"],
//   MFBP2: [ "MFBP2select"],
//   PDCR: [ "PDCRselect"]

// }

var options2 = {
  HM2: ["HM2"],
  REFERENCIAS: ["REFERENCIAS"]
}

var options = {
  ENTINDUCCION: ["Fecha"],
  ENTPUR: ["Fecha"],
  ENTVISION: ["Fecha"],
  INSPECTORREPARAR: ["Valor"],
  NAMECONVEYOR: ["Valor"],
  NAMEINSERCION: ["Valor"],
  NAMEVISION: ["Valor"],
  NAMETORQUE: ["Valor"],
  PEDIDO: ["Valor"],
  REFERENCIA: ["Valor"],
  SALFET: ["Fecha"],
  SALPREENSAMBLE: ["Fecha"],
  SALTORQUE: ["Fecha"],
  STATUS: ["Valor"],
  ENTPUR: ["Fecha"],
  ENTINSERCION: ["Fecha"],
  ENTREPARAR: ["Fecha"],
  ENT_APT: ["Fecha"],
  MATPUR: ["Valor"],
  NAMEFET: ["Valor"],
  NAMEPREENSAMBLE: ["Valor"],
  NAME_FINAL_AUDIT: ["Valor"],
  PLANIFICACION: ["Valor"],
  SALCLIPS: ["Fecha"],
  SALINDUCCION: ["Fecha"],
  SALPUR: ["Fecha"],
  SALVISION: ["Fecha"],
  USUARIO_FINAL_AUDIT: ["Valor"],
  ENTPREENSAMBLE: ["Fecha"],
  ENTTORQUE: ["Fecha"],
  FINAL_AUDIT: ["Valor"],
  NAMECLIPS: ["Valor"],
  NAMEINDUCCION: ["Valor"],
  NO_TABLERO: ["Valor"],
  PLANIFICADO: ["Valor"],
  SALCONVEYOR: ["Fecha"],
  SALINSERCION: ["Fecha"],
  SALREPARAR: ["Fecha"],
  SERVIDO: ["Valor"],
  ASIGNADO: ["Valor"],
  ENTCLIPS: ["Fecha"],
  ENTCONVEYOR: ["Fecha"],
  ENTFET: ["Fecha"],
  UBICACION: ["Valorubicacion"],
}


// $(function () {
//   var cambio = function () {
//     switch ($('#tipo_de_torque').val()) {
//       case "PDCP":
//         PDCPselect.style.display = 'inline-block';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';

//           console.log("Búsqueda por PDCP");
//           break;
//       case "PDCD":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'inline-block';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';
//           break;
//       case "BATTERY":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'inline-block';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';
//           break;
//       case "MFBP1":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'inline-block';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';
//           break;
//       case "MFBS":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'inline-block';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';
//           break;
//       case "MFBP2":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'inline-block';
//         PDCRselect.style.display = 'none';
//         torqueinput.style.display = 'inline-block';
//           break;
//       case "PDCR":
//         PDCPselect.style.display = 'none';
//         PDCDselect.style.display = 'none';
//         BATTERYselect.style.display = 'none';
//         MFBP1select.style.display = 'none';
//         MFBSselect.style.display = 'none';
//         MFBP2select.style.display = 'none';
//         PDCRselect.style.display = 'inline-block';
//         torqueinput.style.display = 'inline-block';
//           break;    
//           default:
//         console.log("no pasa")
//         break;
//     }
//   }
//   $('#tipo_de_torque').change(cambio);
//   cambio();
// });


$(function () {
  var fillSecondary = function () {
    var selected = $('#selector').val();
    // console.log("selected", selected)
    $('#tipo_busqueda').css("display", "inline-block");
    $('#label_busqueda').css("display", "inline-block");
    $('#tipo_busqueda').empty();

    options[selected].forEach(function (element, index) {
      $('#tipo_busqueda').append('<option value="' + element + '">' + element + '</option>');
    });

    switch ($('#tipo_busqueda').val()) {
      case "Fecha":
        fecha.style.display = 'inline-block';
        valor.style.display = 'none';
        valorubicacion.style.display = 'none';
        // console.log("Búsqueda por FECHA")
        break;
      case "Valor":
        fecha.style.display = 'none';
        valor.style.display = 'inline-block';
        valorubicacion.style.display = 'none';
        break;
      case "Valorubicacion":
        fecha.style.display = 'none';
        valor.style.display = 'none';
        valorubicacion.style.display = 'inline-block';
        break;
      default:
    }
  }
  var cambio = function () {
    switch ($('#tipo_busqueda').val()) {
      case "Fecha":
        fecha.style.display = 'inline-block';
        valor.style.display = 'none';
        valorubicacion.style.display = 'none';
        // console.log("Búsqueda por FECHA")
        break;
      case "Valor":
        fecha.style.display = 'none';
        valor.style.display = 'inline-block';
        valorubicacion.style.display = 'none';
        break;
      case "Valorubicacion":
        fecha.style.display = 'none';
        valor.style.display = 'none';
        valorubicacion.style.display = 'inline-block';
        break;
      default:
        console.log("no pasa")
        break;
    }
  }
  $('#selector').change(fillSecondary);
  fillSecondary();
  $('#tipo_busqueda').change(cambio);
  cambio();
});


$(function () {
  var cambio = function () {
    switch ($('#tipo_busqueda_gamaens').val()) {
      case "HM2":
        hm2.style.display = 'inline-block';
        referencia.style.display = 'none';
        // console.log("Búsqueda por FECHA")
        break;
      case "REFERENCIAS":
        hm2.style.display = 'none';
        referencia.style.display = 'inline-block';
        break;
      default:
        console.log("no pasa")
        break;
    }
  }
  $('#tipo_busqueda_gamaens').change(cambio);
  cambio();
});


/* Esto hace que la funcion se ejecute en la pagina al aplanar el boton */
function cleardiv() {
  document.getElementById("contenedor").innerHTML = "";
}


function cleardiv3() {
  HM.style.display = 'none';
  buscar.style.display = 'none';
  buscar2.style.display = 'none';
  selectdiv.style.display = 'none';
  actualiza.style.display = 'none';
  actualizanull.style.display = 'none';
  filtro.style.display = 'none';
  filtro_gamaens.style.display = 'none';
}


///////////////////// Ver **TODOS** los registros del Servidor de Planta 2 /////////////////////
function famx2_registros_all() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/all/_/_/_/_/_")
  fetch(dominio + "/seghm/get/seghm/all/_/_/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        // colnames.splice(colnames.indexOf("ALTURA"),4);
        // colnames.splice(colnames.indexOf("INICIO"),0,"HM");
        // colnames.splice(colnames.indexOf("INTENTOS_T"),9,"FIN");
        colnames.sort((a, b) => a.localeCompare(b));
        console.log("Columnas: ", colnames);
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(data[colnames[j]][i]));
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })
}


///////////////////// Ver registros de **INTERIOR** del Servidor de Planta 2 ///////////////////
function famx2_registros_interior() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/INTERIOR/_/_/_")
  fetch(dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/INTERIOR/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        colnames.sort((a, b) => a.localeCompare(b));
        colnames.splice(colnames.indexOf("ID"), 1);
        colnames.splice(colnames.indexOf("ENTTORQUE"), 2);
        colnames.splice(colnames.indexOf("SALTORQUE"), 2);
        colnames.splice(colnames.indexOf("NAMETORQUE"), 2);
        colnames.splice(colnames.indexOf("ASIGNADO"), 0, "id", "ENTTORQUE", "SALTORQUE", "NAMETORQUE", "ENTVISION", "SALVISION", "NAMEVISION");
        // colnames.splice(colnames.indexOf("INTENTOS_T"),9,"FIN");
        console.log(colnames);
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(data[colnames[j]][i]));
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })
}


function famx2_registros_motor() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/MOTOR/_/_/_")
  fetch(dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/MOTOR/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        colnames.splice(colnames.indexOf("ID"), 1);
        colnames.splice(colnames.indexOf("ENTTORQUE"), 2);
        colnames.splice(colnames.indexOf("SALTORQUE"), 2);
        colnames.splice(colnames.indexOf("NAMETORQUE"), 2);
        colnames.splice(colnames.indexOf("ASIGNADO"), 0, "id", "ENTTORQUE", "SALTORQUE", "NAMETORQUE", "ENTVISION", "SALVISION", "NAMEVISION");
        console.log("Columnas: ", colnames);

        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(data[colnames[j]][i]));
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })
}


function famx2_registros_cockpit() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/COCKPIT/_/_/_")
  fetch(dominio + "/seghm/get/seghm/NAMEPREENSAMBLE/=/COCKPIT/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        colnames.splice(colnames.indexOf("ID"), 1);
        colnames.splice(colnames.indexOf("ENTTORQUE"), 2);
        colnames.splice(colnames.indexOf("SALTORQUE"), 2);
        colnames.splice(colnames.indexOf("NAMETORQUE"), 2);
        colnames.splice(colnames.indexOf("ASIGNADO"), 0, "id", "ENTTORQUE", "SALTORQUE", "NAMETORQUE", "ENTVISION", "SALVISION", "NAMEVISION");
        // colnames.splice(colnames.indexOf("INTENTOS_T"),9,"FIN");
        console.log("Columnas: ", colnames);
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(data[colnames[j]][i]));
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })
}


function famx2_registros_valores() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm_valores/id/>/0/_/=/_")
  fetch(dominio + "/seghm/get/seghm_valores/id/>/0/_/=/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        colnames.splice(colnames.indexOf("ID"), 1);
        colnames.splice(colnames.indexOf("HM"), 2);
        colnames.splice(colnames.indexOf("ANGULO"), 2);
        colnames.splice(colnames.indexOf("INICIO"), 2);
        colnames.splice(colnames.indexOf("FIN"), 2);
        colnames.splice(colnames.indexOf("ALTURA"), 0, "ID", "HM", "INICIO", "FIN", "ANGULO");
        // colnames.splice(colnames.indexOf("INTENTOS_T"),9,"FIN");
        console.log("Columnas: ", colnames);
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            switch (colnames[j]) {
              case "ANGULO":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-°`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "TORQUE":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                // torque.style.display = 'inline-block';
                boton.value = `${data["ID"][i]}-${colnames[j]}-Nm`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "ALTURA":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "INTENTOS_T":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "INTENTOS_VA":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "NOTAS":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "SCRAP":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              case "SERIALES":
                var boton = document.createElement('button');
                var icono = document.createElement('i');
                icono.classList.add("fas");
                icono.classList.add("fa-file-alt");
                boton.title = "Ver Información";
                boton.classList.add('btn');
                boton.classList.add('btn-info');
                boton.classList.add('btn-ver-angulo');
                boton.style.width = "60px";
                boton.value = `${data["ID"][i]}-${colnames[j]}-`;
                boton.setAttribute("onclick", `modal(this)`)
                //${/ /g}
                boton.appendChild(icono);
                td.appendChild(boton);
                break;
              default:
                td.appendChild(document.createTextNode(data[colnames[j]][i]));
                break;
            }
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })

  if (!contactos.classList.contains("contenido")) {
    contactos.classList.add('showTable');
  } else {
    contactos.classList.add('contenido');
  }
}

function historial_actualizaciones() {
  cleardiv();
  cleardiv3();
  console.log("URL Fetch GET: \n", "localhost" + "/interior/get/actualizacion/id/>/0/_/=/_")
  fetch(dominio + "/api/get/actualizacion/id/>/0/_/=/_")
    .then(data => data.json())
    .then(data => {
      console.log("Data de SEGHM FAMX2: ", data);
      if (data.items == 0) {
        console.log("Sin registro alguno");
        document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
      } else {
        var colnames = Object.keys(data);
        colnames.splice(colnames.indexOf("ID"), 1);
        colnames.splice(colnames.indexOf("HM"), 2);
        colnames.splice(colnames.indexOf("CAMPO"), 2);
        colnames.splice(colnames.indexOf("ORIGINAL"), 2);
        colnames.splice(colnames.indexOf("NUEVO"), 2);
        colnames.splice(colnames.indexOf("FECHA"), 2);
        colnames.splice(colnames.indexOf("CAMPO"), 0, "ID", "HM", "CAMPO", "ORIGINAL", "NUEVO", "FECHA");
        // colnames.splice(colnames.indexOf("INTENTOS_T"),9,"FIN");
        console.log("Columnas: ", colnames);
        var filas = data[colnames[1]].length;
        // console.log("Num de Registros:",filas);
        // console.log(data[colnames[7]]);

        //CREACIÓN DE TABLA
        var myTableDiv = document.getElementById("tabla");
        var table = document.createElement('TABLE');
        var tableBody = document.createElement('TBODY');
        var Encabezados = document.createElement('THEAD');

        table.id = "myTable";
        table.classList.add('display');
        table.classList.add('nowrap');
        table.cellSpacing = "0";
        table.width = "100%";
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
          th.appendChild(document.createTextNode(colnames[i]));
          tr.appendChild(th).style.backgroundColor = "#0DBED6";
        }
        //FILAS DE LA TABLA
        for (i = 0; i < filas; i++) {
          var tr = document.createElement('TR');
          for (j = 0; j < colnames.length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(data[colnames[j]][i]));
            tr.appendChild(td)
          }
          tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);
        $(document).ready(function () {
          $('#myTable').DataTable({
            responsive: true
          });
        });
      }
    })

  if (!contactos.classList.contains("contenido")) {
    contactos.classList.add('showTable');
  } else {
    contactos.classList.add('contenido');
  }
}

function famx2_cambio_ubicación() {
  cleardiv();
  cleardiv3();
  document.getElementById("tabla").innerHTML = '';
  HM.style.display = 'inline-block';
  buscar = document.getElementById("buscar")
  buscar.style.display = 'inline-block';
  var contactos = document.getElementById('contactos');
  document.getElementById('lbl_ingreso').textContent = 'Ingrese el nombre del HM';
  var hminput = document.getElementById("hminput");
  hminput.setAttribute('placeholder', 'Introduzca su HM');
  console.log('HM');
  hminput.focus();

  //  aqui ↓↓↓
  if (!contactos.classList.contains("contenido")) {
    contactos.classList.add('showTable');
  } else {
    contactos.classList.add('contenido');
  }
}

function famx2_tramada() {
  cleardiv();
  cleardiv3();
  document.getElementById("tabla").innerHTML = '';
  console.log('tramada');
  HM.style.display = 'inline-block';
  document.getElementById("buscar").style.display = 'none';
  buscar = document.getElementById("buscar3");

  buscar.style.display = 'inline-block';
  var contactos = document.getElementById('contactos');
  document.getElementById('lbl_ingreso').textContent = 'Ingrese el nombre del TR';
  console.log(document.getElementById('lbl_ingreso'));
  var hminput = document.getElementById("hminput");
  hminput.setAttribute('placeholder', 'Introduzca su TR');
  console.log('tramada');
  hminput.focus();
  
  //  aqui ↓↓↓
  if (!contactos.classList.contains("contenido")) {
    contactos.classList.add('showTable');
  } else {
    contactos.classList.add('contenido');
  }
}

function trbuscar() {
  cleardiv();
  cleardiv3();
    var contactos = document.getElementById('contactos');
    var hmvalue = document.getElementById('hminput').value;
    var actualiza = document.getElementById("actualiza");
    var actualizanull = document.getElementById("actualizanull");

      selectdiv.style.display = 'inline-block';
      actualiza.style.display = 'inline-block';
      actualizanull.style.display = 'inline-block';
      filtro.style.display = 'inline-block';

      // y aqui ↓↓
      contactos.classList.remove('showTable');
      contactos.classList.remove('contenido');

    fetch(dominio + "/seghm/get/segtramadas/TRAMADA/=/" + hmvalue + "/_/=/_")
    .then(data => data.json())
    .then(data => {
       console.log("data", data)
       console.log("data tipo de dato", typeof(data) )
       id = data["id"]
       // console.log("id", id)
        // if (data.items == 0) {
        //   console.log("No hay coincidencias");
        //   alertawarning.innerHTML = '<div class="alert alert-warning" role="alert">No existen coincidencias en la base de datos.</div>';
        // }else{
        //   alertawarning.innerHTML = '';
        var colnames = Object.keys(data);
        console.log(colnames);

/////////////////////////////////////////////////     INICIO DEL PRACTICANTE     /////////////////////////////////////////////////
        const showTable = document.querySelectorAll('showTable');
        const contenido = document.querySelectorAll('contenido');

        function ocultarInformacion() {
        showTableElements.forEach(showTable => {
          showTable.style.display = 'none';
        });
      }

      showTable.forEach(button => {
        button.addEventListener('click', () => {
          ocultarInformacion();

          const index = Array.from(showTable).indexOf(button);
          if (showTableElements[index]) {
            showTableElements[index].style.display = 'block';
          }
        });
      });

      // console.log("Colnames: ",colnames);
      var filas = data[colnames[0]];
      // console.log("Resultado: ",filas);
      
      /** AQUI VAS A IMPLEMENTAR EL CODIGO **/
      var contenedor = document.getElementById("contenedor");
        console.log("CREANDO DICCIONARIOS CON DATOS OBTENIDOS")
        console.log(data["ID"])

        diccionario1 = {
          "id" : data["id"],
          "TRAMADA" : data["TRAMADA"],
          "UBICACION" : data["UBICACION"],
          "REFERENCIA" : data["REFERENCIA"]
        }

        diccionario2 = {
          "NAMEPREENSAMBLE" : data["NAMEPREENSAMBLE"],
          "ENTPREENSAMBLE" : data["ENTPREENSAMBLE"],
          "SALPREENSAMBLE" : data["SALPREENSAMBLE"]
        }

        diccionario3 = {
          "ENTINYECCION" : data["ENTINYECCION"],
          "MATPUR" : data["MATPUR"],
          "ENTPUR" : data["ENTPUR"],
          "SALPUR" : data["SALPUR"]
        }

        diccionario4 = {
          "NAMECONVEYOR" : data["NAMECONVEYOR"],
          "ENTCONVEYOR" : data["ENTCONVEYOR"],
          "SALCONVEYOR" : data["SALCONVEYOR"],
          "NO_TABLERO" : data["NO_TABLERO"]
        }

        diccionario5 = {
          "NAMEFET" : data["NAMEFET"],
          "ENTFET" : data["ENTFET"],
          "SALFET" : data["SALFET"],
          "NAMECLIPS" : data["NAMECLIPS"],
          "ENTCLIPS" : data["ENTCLIPS"],
          "SALCLIPS" : data["SALCLIPS"]
        }

        diccionario6 = {
          "NAMETORQUE" : data["NAMETORQUE"],
          "ENTTORQUE" : data["ENTTORQUE"],
          "SALTORQUE" : data["SALTORQUE"]
        }

        diccionario7 = {
          "NAMEINSERCION" : data["NAMEINSERCION"],
          "ENTINSERCION" : data["ENTINSERCION"],
          "SALINSERCION" : data["SALINSERCION"]
        }

        diccionario8 = {
          "NAMEVISION" : data["NAMEVISION"],
          "ENTVISION" : data["ENTVISION"],
          "SALVISION" : data["SALVISION"]
        }

        diccionario9 = {
          "NAMEINDUCCION" : data["NAMEINDUCCION"],
          "ENTINDUCCION" : data["ENTINDUCCION"],
          "SALINDUCCION" : data["SALINDUCCION"]
        }

        diccionario10 = {
          "USUARIO_FINAL_AUDIT" : data["USUARIO_FINAL_AUDIT"],
          "NAME_FINAL_AUDIT" : data["NAME_FINAL_AUDIT"],
          "FINAL_AUDIT" : data["FINAL_AUDIT"]
        }

        diccionario11 = {
          "INSPECTORREPARAR" : data["INSPECTORREPARAR"],
          "ENTREPARAR" : data["ENTREPARAR"],
          "SALREPARAR" : data["SALREPARAR"]
        } 

        diccionario12 = {
          "PLANIFICADO" : data["PLANIFICADO"],
          "ASIGNADO" : data["ASIGNADO"],
          "ENT_APT" : data["ENT_APT"],
          "fabricacion_especial" : data["fabricacion_especial"],
          "PLANIFICACION" : data["PLANIFICACION"],
          "PEDIDO" : data["PEDIDO"],
          "SERVIDO" : data["SERVIDO"],
          "STATUS" : data["STATUS"]
        }
        
        //datos.cleardiv()
        contenedor = [diccionario1 ,diccionario2, diccionario3, diccionario4, diccionario5, diccionario6, diccionario7, diccionario8, diccionario9, diccionario10, diccionario11, diccionario12]

        console.log("datos.length : HOLAAAAAAAAAAAAAAA");
        console.log(contenedor.length);
        for (let i = 0; i < contenedor.length; i++) {
          console.log("datos por diccionario::::::::::::::::::::");
          console.log(contenedor[i]);
          for (var clave in contenedor[i]){
            console.log(contenedor[i][clave])
            if (contenedor[i][clave] === null){
              contenedor[i][clave] = "NULL"
            }
            if (typeof contenedor[i][clave] === "undefined"){
              contenedor[i][clave] = "NULL"
            }
            if (typeof variable === "string"){
             contenedor[i][clave] = contenedor[i][clave].replace(/\s/g, "");
            }
          }
        }

        //diccionario1 = datos[0]
        //var claves_de_diccionario1 = Object.keys(diccionario1);
        //datos[0][claves_de_diccionario1[1]] = "OTRACOSA"

        console.log(contenedor);
        document.getElementById("contactos").innerHTML = ''
    
        document.getElementById("contactos").classList.add('gridbox');
    
        //UN CICLO FOR PARA OBETNER UN DATO A LA VEZ DEL ARRAY
        for (let z = 0; z < contenedor.length; z++) {
            const contacto = contenedor[z];
    
            console.log(contacto);
    
            var encabezado = Object.keys(contacto) //ENCAEZADOS DE LOS OBJETOS
    
            var div = document.createElement('div');
            div.classList.add('flexbox') 
    
            // OTRO CICLO FOR PARA OBTENER LA INFORMACION DEL DATO
            const colores = ['blue', 'green', 'red', 'orange', 'purple']; // Lista de colores disponibles
            //let colorIndex = 0; // Índice para seguir la secuencia de colores
            for (let x = 0; x < encabezado.length; x++) {
             const dato = encabezado[x];
             const contenido = contacto[dato];
             //const color = colores[x]; // Obtener el color correspondiente

             var span = document.createElement('span');
             var h4 = document.createElement('h4');
             var p = document.createElement('p');
    
             h4.classList.add('titulo');
             p.classList.add('contenido');
    
             h4.textContent = dato + ": ";
             p.textContent = contacto[dato]
             
             // Verificar si el contenido contiene la subcadena "ENT"
            if (typeof dato === 'string' && dato.includes('ENT')) {
              h4.style.color = 'green'; // Asignar color azul al título
            }
            // Verificar si el contenido contiene la subcadena "SAL"
            if (typeof dato === 'string' && dato.includes('SAL')) {
              h4.style.color = '#DC143C'; // Asignar color azul al título
            }
             console.log(dato + ': ' + contacto[dato]);
             
             span.appendChild(h4);
             span.appendChild(p);
    
             div.appendChild(span)

             // Actualizar el índice de color para pasar al siguiente color en la lista
             //colorIndex = (colorIndex + 1) % colores1.length;
            }
          document.getElementById("contactos").appendChild(div);
        } 

        // Obtener referencias a los elementos del DOM
        //const tituloElemento = document.getElementById('btn btn-lg');
        //const botonElemento = document.getElementById('lista_ubicación');

        // Agregar un evento de clic al botón
        // botonElemento.addEventListener('click', function() {
        //   // Eliminar la clase 'resaltado' del título
        //   if (tituloElemento.classList.contains("showTable")) {
        //     tituloElemento.classList.remove('showTable');

        //   }else{
        //     tituloElemento.classList.add('showTable');

        //   }
        // });
    //})
/////////////////////////////////////////////////     FIN DEL PRACTICANTE     /////////////////////////////////////////////////

  })  
}



function famx2_buscar_gamaens() {
  cleardiv();
  cleardiv3();
  buscar.style.display = 'none';
  buscar2 = document.getElementById("buscar2")
  buscar2.style.display = 'inline-block';
  filtro_gamaens.style.display = 'inline-block';
  tipo_busqueda_gamaens.style.display = 'inline-block';
  filtro.style.display = 'none';
  selectdiv.style.display = 'none';
  actualiza.style.display = 'none';
  actualizanull.style.display = 'none';

  document.getElementById("tabla").innerHTML = ''
  document.getElementById("hm2input").focus();

  if (!contactos.classList.contains("contenido")) {
    contactos.classList.add('showTable');
  } else {
    contactos.classList.add('contenido');
  }
}

var id = ''





function hmbuscar() {

  cleardiv();
  cleardiv3();
  var contactos = document.getElementById('contactos');
  var hmvalue = document.getElementById('hminput').value;
  var actualiza = document.getElementById("actualiza");
  var actualizanull = document.getElementById("actualizanull");

  selectdiv.style.display = 'inline-block';
  actualiza.style.display = 'inline-block';
  actualizanull.style.display = 'inline-block';
  filtro.style.display = 'inline-block';

  // y aqui ↓↓
  contactos.classList.remove('showTable');
  contactos.classList.remove('contenido');

  fetch(dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/=/_")
    .then(data => data.json())
    .then(data => {
      console.log("data", data)
      console.log("data tipo de dato", typeof (data))
      id = data["id"]
      // console.log("id", id)
      // if (data.items == 0) {
      //   console.log("No hay coincidencias");
      //   alertawarning.innerHTML = '<div class="alert alert-warning" role="alert">No existen coincidencias en la base de datos.</div>';
      // }else{
      //   alertawarning.innerHTML = '';
      var colnames = Object.keys(data);
      console.log(colnames);

      /////////////////////////////////////////////////     INICIO DEL PRACTICANTE     /////////////////////////////////////////////////
      const showTable = document.querySelectorAll('showTable');
      const contenido = document.querySelectorAll('contenido');

      function ocultarInformacion() {
        showTableElements.forEach(showTable => {
          showTable.style.display = 'none';
        });
      }

      showTable.forEach(button => {
        button.addEventListener('click', () => {
          ocultarInformacion();

          const index = Array.from(showTable).indexOf(button);
          if (showTableElements[index]) {
            showTableElements[index].style.display = 'block';
          }
        });
      });

      // Asignar evento de clic a cada botón
      //showTable.forEach(button => {
      //  button.addEventListener('click', () => {
      // Ocultar todas las informaciones
      //   infoElements.forEach(info => {
      //      info.style.display = 'none';
      //    });

      // Obtener el identificador del objetivo desde el atributo 'data-target'
      //    const targetId = button.getAttribute('data-target');
      // Mostrar la información correspondiente al botón seleccionado
      //    const targetElement = document.getElementById(targetId);
      //    if (targetElement) {
      //      targetElement.style.display = 'block';
      //    }
      //  });
      //});


      // console.log("Colnames: ",colnames);
      var filas = data[colnames[0]];
      // console.log("Resultado: ",filas);

      /** AQUI VAS A IMPLEMENTAR EL CODIGO **/
      var contenedor = document.getElementById("contenedor");
      var contenedor = [{
          "id": "63046",
          "HM": "HM000000067451",
          "UBICACION": "KITTING_FG_PROCESADO",
          "REFERENCIA": "ELX29620231008106"
        },
        {
          "NAMEPREENSAMBLE": "MOTOR",
          "ENTPREENSAMBLE": "Wed, 08 Feb 2023 18:13:03 GMT",
          "SALPREENSAMBLE": "Wed, 08 Feb 2023 20:07:12 GMT"
        },
        {
          "ENTINYECCION": "Wed, 08 Feb 2023 22:56:00 GMT",
          "MATPUR": "100210668569",
          "ENTPUR": "Wed, 08 Feb 2023 23:01:53 GMT",
          "SALPUR": "Wed, 08 Feb 2023 23:24:56 GMT"
        },
        {
          "NAMECONVEYOR": "CONVEYOR-MOTOR-1",
          "ENTCONVEYOR": "Wed, 08 Feb 2023 22:05:46 GMT",
          "SALCONVEYOR": "Wed, 08 Feb 2023 22:06:24 GMT",
          "NO_TABLERO": "TABLERO10LHDX296AJ23X294PRO3"
        },
        {
          "NAMEFET": "BE-02",
          "ENTFET": "Thu, 09 Feb 2023 09:37:45 GMT",
          "SALFET": "Thu, 09 Feb 2023 09:38:58 GMT",
          "NAMECLIPS": "BC-03",
          "ENTCLIPS": "Thu, 09 Feb 2023 09:30:08 GMT",
          "SALCLIPS": "Thu, 09 Feb 2023 09:36:14 GMT"
        },
        {
          "NAMETORQUE": "EVTA-MBM-1",
          "ENTTORQUE": "Thu, 09 Feb 2023 10:49:25 GMT",
          "SALTORQUE": " Thu, 09 Feb 2023 10:57:52 GMT"
        },
        {
          "NAMEINSERCION": "EIAF-MBM-1",
          "ENTINSERCION": "Thu, 09 Feb 2023 10:39:21 GMT",
          "SALINSERCION": "Thu, 09 Feb 2023 10:42:05 GMT"
        },
        {
          "NAMEVISION": "EVTA-MBM-1",
          "ENTVISION": "Thu, 09 Feb 2023 12:45:20 GMT",
          "SALVISION": "Thu, 09 Feb 2023 12:46:41 GMT"
        },
        {
          "NAMEINDUCCION": "BI-01",
          "ENTINDUCCION": "Thu, 09 Feb 2023 12:50:44 GMT",
          "SALINDUCCION": "Thu, 09 Feb 2023 12:51:09 GMT"
        },
        {
          "USUARIO_FINAL_AUDIT": "Admin",
          "NAME_FINAL_AUDIT": "est1",
          "FINAL_AUDIT": "Thu, 09 Feb 2023 16:18:03 GMT"
        },
        {
          "INSPECTORREPARAR": "null",
          "ENTREPARAR": "null",
          "SALREPARAR": "null"
        },
        {
          "PLANIFICADO": "Tue, 07 Feb 2023 18:35:28 GMT",
          "ASIGNADO": "Wed, 08 Feb 2023 18:13:03 GMT",
          "ENT_APT": "Mon, 13 Feb 2023 15:23:26 GMT",
          "fabricacion_especial": "no",
          "PLANIFICACION": "1597",
          "PEDIDO": "null",
          "SERVIDO": "null",
          "STATUS": "1"
        }
      ];

      ////FUNCTION NORMAL
      //document.getElementById("crear_lista").addEventListener("click",function () {

      //data["HM"] = datos[0]["HM"]
      //datos[0]["ID"] = data["ID"]
      //datos[0]["HM"] = data["HM"]
      //datos[0]["UBICACION"] = data["UBICACION"]
      //datos[0]["REFERENCIA"] = data["REFERENCIA"]

      // console.log(data["ID"])

      diccionario1 = {
        "id": data["id"],
        "HM": data["HM"],
        "UBICACION": data["UBICACION"],
        "REFERENCIA": data["REFERENCIA"]
      }

      diccionario2 = {
        "NAMEPREENSAMBLE": data["NAMEPREENSAMBLE"],
        "ENTPREENSAMBLE": data["ENTPREENSAMBLE"],
        "SALPREENSAMBLE": data["SALPREENSAMBLE"]
      }

      diccionario3 = {
        "ENTINYECCION": data["ENTINYECCION"],
        "MATPUR": data["MATPUR"],
        "ENTPUR": data["ENTPUR"],
        "SALPUR": data["SALPUR"]
      }

      diccionario4 = {
        "NAMECONVEYOR": data["NAMECONVEYOR"],
        "ENTCONVEYOR": data["ENTCONVEYOR"],
        "SALCONVEYOR": data["SALCONVEYOR"],
        "NO_TABLERO": data["NO_TABLERO"]
      }

      diccionario5 = {
        "NAMEFET": data["NAMEFET"],
        "ENTFET": data["ENTFET"],
        "SALFET": data["SALFET"],
        "NAMECLIPS": data["NAMECLIPS"],
        "ENTCLIPS": data["ENTCLIPS"],
        "SALCLIPS": data["SALCLIPS"]
      }

      diccionario6 = {
        "NAMETORQUE": data["NAMETORQUE"],
        "ENTTORQUE": data["ENTTORQUE"],
        "SALTORQUE": data["SALTORQUE"]
      }

      diccionario7 = {
        "NAMEINSERCION": data["NAMEINSERCION"],
        "ENTINSERCION": data["ENTINSERCION"],
        "SALINSERCION": data["SALINSERCION"]
      }

      diccionario8 = {
        "NAMEVISION": data["NAMEVISION"],
        "ENTVISION": data["ENTVISION"],
        "SALVISION": data["SALVISION"]
      }

      diccionario9 = {
        "NAMEINDUCCION": data["NAMEINDUCCION"],
        "ENTINDUCCION": data["ENTINDUCCION"],
        "SALINDUCCION": data["SALINDUCCION"]
      }

      diccionario10 = {
        "USUARIO_FINAL_AUDIT": data["USUARIO_FINAL_AUDIT"],
        "NAME_FINAL_AUDIT": data["NAME_FINAL_AUDIT"],
        "FINAL_AUDIT": data["FINAL_AUDIT"]
      }

      diccionario11 = {
        "INSPECTORREPARAR": data["INSPECTORREPARAR"],
        "ENTREPARAR": data["ENTREPARAR"],
        "SALREPARAR": data["SALREPARAR"]
      }

      diccionario12 = {
        "PLANIFICADO": data["PLANIFICADO"],
        "ASIGNADO": data["ASIGNADO"],
        "ENT_APT": data["ENT_APT"],
        "fabricacion_especial": data["fabricacion_especial"],
        "PLANIFICACION": data["PLANIFICACION"],
        "PEDIDO": data["PEDIDO"],
        "SERVIDO": data["SERVIDO"],
        "STATUS": data["STATUS"]
      }

      //datos.cleardiv()
      contenedor = [diccionario1, diccionario2, diccionario3, diccionario4, diccionario5, diccionario6, diccionario7, diccionario8, diccionario9, diccionario10, diccionario11, diccionario12]

      //console.log(contenedor.length);
      for (let i = 0; i < contenedor.length; i++) {
        //console.log("datos por diccionario < HIIIIIIIIIIIIIIII");
        //console.log(contenedor[i]);
        for (var clave in contenedor[i]) {
          //console.log(contenedor[i][clave])
          if (contenedor[i][clave] === null) {
            contenedor[i][clave] = "NULL"
          }
          if (typeof contenedor[i][clave] === "undefined") {
            contenedor[i][clave] = "NULL"
          }
          if (typeof variable === "string") {
            contenedor[i][clave] = contenedor[i][clave].replace(/\s/g, "");
          }
        }
      }

      //diccionario1 = datos[0]
      //var claves_de_diccionario1 = Object.keys(diccionario1);
      //datos[0][claves_de_diccionario1[1]] = "OTRACOSA"

      //console.log(contenedor);
      document.getElementById("contactos").innerHTML = ''

      document.getElementById("contactos").classList.add('gridbox');

      //UN CICLO FOR PARA OBETNER UN DATO A LA VEZ DEL ARRAY
      for (let z = 0; z < contenedor.length; z++) {
        const contacto = contenedor[z];

        //console.log(contacto);

        var encabezado = Object.keys(contacto) //ENCAEZADOS DE LOS OBJETOS

        var div = document.createElement('div');
        div.classList.add('flexbox')

        // OTRO CICLO FOR PARA OBTENER LA INFORMACION DEL DATO
        const colores = ['blue', 'green', 'red', 'orange', 'purple']; // Lista de colores disponibles
        //let colorIndex = 0; // Índice para seguir la secuencia de colores
        for (let x = 0; x < encabezado.length; x++) {
          const dato = encabezado[x];
          const contenido = contacto[dato];
          //const color = colores[x]; // Obtener el color correspondiente

          var span = document.createElement('span');
          var h4 = document.createElement('h4');
          var p = document.createElement('p');

          h4.classList.add('titulo');
          p.classList.add('contenido');

          h4.textContent = dato + ": ";
          p.textContent = contacto[dato]

          // Verificar si el contenido contiene la subcadena "ENT"
          if (typeof dato === 'string' && dato.includes('ENT')) {
            h4.style.color = 'green'; // Asignar color azul al título
          }
          // Verificar si el contenido contiene la subcadena "SAL"
          if (typeof dato === 'string' && dato.includes('SAL')) {
            h4.style.color = '#DC143C'; // Asignar color azul al título
          }
          //console.log(dato + ': ' + contacto[dato]);

          span.appendChild(h4);
          span.appendChild(p);

          div.appendChild(span)

          // Actualizar el índice de color para pasar al siguiente color en la lista
          //colorIndex = (colorIndex + 1) % colores1.length;
        }
        document.getElementById("contactos").appendChild(div);
      }

      // Obtener referencias a los elementos del DOM
      const tituloElemento = document.getElementById('btn btn-lg');
      const botonElemento = document.getElementById('lista_ubicación');

      // Agregar un evento de clic al botón
      botonElemento.addEventListener('click', function () {
        // Eliminar la clase 'resaltado' del título
        if (tituloElemento.classList.contains("showTable")) {
          tituloElemento.classList.remove('showTable');

        } else {
          tituloElemento.classList.add('showTable');

        }
      });
      //})
      /////////////////////////////////////////////////     FIN DEL PRACTICANTE     /////////////////////////////////////////////////

      // //CREACIÓN DE TABLA
      // var myTableDiv = document.getElementById("tabla");
      // var table = document.createElement('TABLE');
      // var tableBody = document.createElement('TBODY');
      // var Encabezados = document.createElement('THEAD');

      // table.id = "myTable";
      // table.classList.add('display');
      // table.classList.add('nowrap');
      // table.cellSpacing="0";
      // table.width="100%";
      // table.border = '2';
      // table.appendChild(Encabezados);
      // table.appendChild(tableBody);
      // tableBody.align="center";
      // //FIN DE CREACIÓN DE TABLA

      // //ENCABEZADOS DE LA TABLA
      // var tr = document.createElement('TR');
      // Encabezados.appendChild(tr);

      // for (i = 0; i < colnames.length; i++) {
      //   var th = document.createElement('TH')
      //       var titulo = colnames[i].replace("_"," ")
      //       th.width = '100';
      //       // console.log(colnames[i]);
      //       th.appendChild(document.createTextNode(titulo));
      //       tr.appendChild(th).style.backgroundColor="#0DBED6";
      // }
      // //FILAS DE LA TABLA
      // for (i = 0; i < 1; i++) {
      //   var tr = document.createElement('TR');
      //   for (j = 0; j < colnames.length; j++) {
      //     var td = document.createElement('TD')
      //     td.appendChild(document.createTextNode(data[colnames[j]]));
      //     tr.appendChild(td)
      //   }
      //   tableBody.appendChild(tr);
      // }
      // myTableDiv.appendChild(table);
      // $(document).ready(function() {
      //   $('#myTable').DataTable({
      //     responsive:true
      //   });
      // } );
      // }
    })
}



function famx2_gamaens() {

  cleardiv();
  cleardiv3();

  var hmvalue = document.getElementById('hm2input').value;
  var refvalue = document.getElementById('referenciainput').value;
  var actualiza = document.getElementById("actualiza");
  var actualizanull = document.getElementById("actualizanull");
  var ORIGINAL;



  if (hmvalue != 0) {
    console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
    fetch(dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
      .then(data => data.json())
      .then(data => {
        console.log(data["REFERENCIA"]);
        ORIGINAL = (data["REFERENCIA"]);
        console.log(ORIGINAL);
        console.log("URL Fetch GET: \n", dominio + "/seghm/get/gamaens/CODPT/=/" + ORIGINAL + "/_/_/_")
        fetch(dominio + "/seghm/get/gamaens/CODPT/=/" + ORIGINAL + "/_/_/_")
          .then(data => data.json())
          .then(data => {
            console.log("Data de SEGHM FAMX2: ", data);
            if (data.items == 0) {
              console.log("Sin registro alguno");
              document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
            } else {
              var colnames = Object.keys(data);
              colnames.sort((a, b) => a.localeCompare(b));
              console.log("Columnas: ", colnames);
              var filas = data[colnames[1]].length;
              colnames.splice(colnames.indexOf("id"), 1);
              colnames.splice(colnames.indexOf("CODPT"), 0, "id");


              // console.log("Num de Registros:",filas);
              // console.log(data[colnames[7]]);

              //CREACIÓN DE TABLA
              var myTableDiv = document.getElementById("tabla");
              var table = document.createElement('TABLE');
              var tableBody = document.createElement('TBODY');
              var Encabezados = document.createElement('THEAD');

              table.id = "myTable";
              table.classList.add('display');
              table.classList.add('nowrap');
              table.cellSpacing = "0";
              table.width = "100%";
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
                th.appendChild(document.createTextNode(colnames[i]));
                th.style.textTransform = 'uppercase';
                tr.appendChild(th).style.backgroundColor = "#0DBED6";
              }
              //FILAS DE LA TABLA
              for (i = 0; i < filas; i++) {
                var tr = document.createElement('TR');
                for (j = 0; j < colnames.length; j++) {
                  var td = document.createElement('TD')
                  td.appendChild(document.createTextNode(data[colnames[j]][i]));
                  tr.appendChild(td)
                }
                tableBody.appendChild(tr);
              }
              myTableDiv.appendChild(table);
              $(document).ready(function () {
                $('#myTable').DataTable({
                  responsive: true
                });
              });
            }
          })
      })

  } else if (refvalue != 0) {
    console.log("URL Fetch GET: \n", dominio + "/seghm/get/gamaens/CODPT/=/" + refvalue + "/_/_/_")
    fetch(dominio + "/seghm/get/gamaens/CODPT/=/" + refvalue + "/_/_/_")
      .then(data => data.json())
      .then(data => {
        console.log("Data de SEGHM FAMX2: ", data);
        if (data.items == 0) {
          console.log("Sin registro alguno");
          document.getElementById("tabla").innerHTML = "<label>Tabla sin registros.</label>";
        } else {
          var colnames = Object.keys(data);
          colnames.sort((a, b) => a.localeCompare(b));
          console.log("Columnas: ", colnames);
          var filas = data[colnames[1]].length;
          colnames.splice(colnames.indexOf("id"), 1);
          colnames.splice(colnames.indexOf("CODPT"), 0, "id");


          // console.log("Num de Registros:",filas);
          // console.log(data[colnames[7]]);

          //CREACIÓN DE TABLA
          var myTableDiv = document.getElementById("tabla");
          var table = document.createElement('TABLE');
          var tableBody = document.createElement('TBODY');
          var Encabezados = document.createElement('THEAD');
          console.log(myTableDiv);
          table.id = "myTable";
          table.classList.add('display');
          table.classList.add('nowrap');
          table.cellSpacing = "0";
          table.width = "100%";
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
            th.appendChild(document.createTextNode(colnames[i]));
            th.style.textTransform = 'uppercase';
            tr.appendChild(th).style.backgroundColor = "#0DBED6";
          }
          //FILAS DE LA TABLA
          for (i = 0; i < filas; i++) {
            var tr = document.createElement('TR');
            for (j = 0; j < colnames.length; j++) {
              var td = document.createElement('TD')
              td.appendChild(document.createTextNode(data[colnames[j]][i]));
              tr.appendChild(td)
            }
            tableBody.appendChild(tr);
          }
          myTableDiv.appendChild(table);
          $(document).ready(function () {
            $('#myTable').DataTable({
              responsive: true
            });
          });
        }
      })
  }
}


function cleardiv2() {
  document.getElementById("valorinput").value = "";
}

function cleardiv4() {
  document.getElementById("hm2input").value = "";
  document.getElementById("referenciainput").value = "";
}
// function cleardiv5(){
//   document.getElementById("torqueinput").value = "";
// }



// function actualizar_torque(){
//   var ORIGINAL;  
//   var tipotorque = document.getElementById('tipo_de_torque').value;
//   var torqueacambiar = document.getElementById("torqueacambiar").value;
//   var valorselector = document.getElementById("valorselector").value;
//   var PDCD1select = document.getElementById("PDCDselect").value;
//   var PDCP1select = document.getElementById("PDCPselect").value;
//   var BATTERY1select = document.getElementById("BATTERYselect").value;
//   var MFBP11select = document.getElementById("MFBP1select").value;
//   var MFBS1select = document.getElementById("MFBSselect").value;
//   var MFBP21select = document.getElementById("MFBP2select").value;
//   var PDCR1select = document.getElementById("PDCRselect").value;

//   console.log("URL Fetch GET: \n",dominio+"/seghm/get/seghm_valores/id/>/0/_/=/_")
//   fetch(dominio+"/seghm/get/seghm_valores/id/>/0/_/=/_")
//   // .then(data=>data.json())
//   // .then(data=>{
//   //   console.log(data[selector]);
//   //   ORIGINAL = (data[selector]);
//   //   console.log(ORIGINAL);
//   //   })
//   // .then(function(){
//   //   newPost = {  "HM": (hmvalue),
//   //   "CAMPO": document.getElementById('selector').value,
//   //   "ORIGINAL": (ORIGINAL),
//   //   "NUEVO": (newval),
//   //   "FECHA" : (date + " " + time)
//   //   }  
//   //   console.log("NewPost = ", newPost);
//   //   fetch(dominio + `/api/post/actualizacion`, {
//   //     method: 'POST',
//   //     body: JSON.stringify(newPost),
//   //     headers: {
//   //         "Content-type": "application/json"
//   //     }
//   // })
//   // .then(res => res.json()) // .txt .log Arrow Function
//   // .then(function(data) {

//   //     console.log("Data: ", data);
//   //     if (data["items"] === 1) {
//   //         console.log("INSERTION OK");
//   //     } else {
//   //         console.log("INSERTION NOT OK");
//   //     }
//   // })
//   // })


//   cleardiv2();
//   newPost = {};

//   switch($('#tipo_de_torque').val()){
//     case "PDCP":
//       console.log("URL Fetch GET: \n",dominio+"/seghm/get/seghm_valores/TORQUE/PDC-P/E1/=/=/_")
//       fetch(dominio+"/seghm/get/seghm_valores/id/>/0/_/=/_")

//         newPost[PDC-P[E1]] = (valorinput);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)

//     break;
//     case "PDCP":

//         newPost[selector] = (fechainput + " " + timeinput);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)

//     break;
//     case "BATTERY":
//         newPost[selector] = (valorselector);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)

//     break;
//     case "MFBP1":
//         newPost[selector] = (valorinput);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)
//     break;
//     case "MFBS":

//         newPost[selector] = (fechainput + " " + timeinput);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)

//     break;
//     case "MFBP2":
//         newPost[selector] = (valorselector);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)

//     break;
//     case "PDCR":
//         newPost[selector] = (valorselector);
//         // console.log("ESTE ES EL MALDITO NEWPOST",newPost)
//     break;
//   }
// console.log("newpost: ", newPost)
//   fetch(dominio+'/seghm/update/seghm/'+id,{
//     method: 'POST',
//     body: JSON.stringify(newPost),
//     headers:{
//       "Content-type": "application/json"
//     }
//   }).then(res=>res.json())
//   .then(function (data){
//     console.log(data);
//     console.log("se ha actualizado")
//     // cleardiv();
//     hmbuscar();

//   })
//   .catch(function(err) {
//     console.log(err);
//   });






//   // else {
//   //   console.log("NO SE HIZO EL UPDATE");
//   //   alertaadd.innerHTML = '<div class="alert alert-warning" role="alert">El usuario o contraseña ya existe, por favor pruebe con otro.</div>';
//   // }

// }

function actualizar() {
  var ORIGINAL;
  var hmvalue = document.getElementById('hminput').value;
  var valorinput = document.getElementById("valorinput").value;
  var valorselector = document.getElementById("valorselector").value;
  var timeinput = document.getElementById("timer").value;
  var fechainput = document.getElementById("fechai").value;
  var fechaActual = document.getElementById("fechahoy").value;
  let dateStamp = moment.utc((fechainput)).format("MM-DD-YYYY");
  let date = moment.utc((Date.now())).format("YYYY-MM-DD");
  let time = moment.utc((Date().toLocaleString('en-us'))).format("HH:mm:ss");
  let newPost
  selector = document.getElementById("selector").value;
  if (selector == "UBICACION") {
    newval = valorselector
  } else {
    var newval = valorinput !== "" ? valorinput : dateStamp + " " + timeinput;
  }

  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
  fetch(dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log(data[selector]);
      ORIGINAL = (data[selector]);
      console.log(ORIGINAL);
    })
    .then(function () {
      newPost = {
        "HM": (hmvalue),
        "CAMPO": document.getElementById('selector').value,
        "ORIGINAL": (ORIGINAL),
        "NUEVO": (newval),
        "FECHA": (date + " " + time)
      }
      //console.log("NewPost = ", newPost);
      fetch(dominio + `/api/post/actualizacion`, {
          method: 'POST',
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res => res.json()) // .txt .log Arrow Function
      // .then(function(data) {

      //     //console.log("Data: ", data);
      //     // if (data["items"] === 1) {
      //     //     console.log("INSERTION OK");
      //     // } else {
      //     //     console.log("INSERTION NOT OK");
      //     // }
      // })
    })

  cleardiv2();
  newPost = {};

  switch ($('#tipo_busqueda').val()) {
    case "Valor":
      if (valorinput.length == 0) {
        alert("Necesita llenar todos los campos correspondientes.");
      } else {
        newPost[selector] = (valorinput);
        // console.log("ESTE ES EL MALDITO NEWPOST",newPost)
      }
      break;
    case "Fecha":
      if (fechainput == "2019-01-01") {
        alert("Necesita llenar todos los campos correspondientes.");
      } else {
        newPost[selector] = (fechainput + " " + timeinput);
        // console.log("ESTE ES EL MALDITO NEWPOST",newPost)
      }
      break;
    case "Valorubicacion":
      if (valorselector == 0) {
        alert("Necesita llenar todos los campos correspondientes.");
      } else {
        newPost[selector] = (valorselector);
        // console.log("ESTE ES EL MALDITO NEWPOST",newPost)
      }
      break;
  }
  console.log("newpost: ", newPost)
  fetch(dominio + '/seghm/update/seghm/' + id, {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
    .then(function (data) {
      console.log(data);
      console.log("se ha actualizado")

      //  // // cleardiv();
      //  document.getElementById("contactos").classList.add("hide");
      //  setTimeout(() => {  document.getElementById("contactos").classList.remove("hide"); }, 2000);    
      hmbuscar();

    })
    .catch(function (err) {
      console.log(err);
    });

  // else {
  //   console.log("NO SE HIZO EL UPDATE");
  //   alertaadd.innerHTML = '<div class="alert alert-warning" role="alert">El usuario o contraseña ya existe, por favor pruebe con otro.</div>';
  // }

}

function actualizarnull() {
  var valorselector = document.getElementById("valorselector").value;
  selector = document.getElementById("selector").value;
  var ORIGINAL;
  var hmvalue = document.getElementById('hminput').value;
  var valorinput = document.getElementById("valorinput").value;
  var valorselector = document.getElementById("valorselector").value;
  var timeinput = document.getElementById("timer").value;
  var fechainput = document.getElementById("fechai").value;
  let dateStamp = moment.utc((fechainput)).format("MM-DD-YYYY");
  let date = moment.utc((Date.now())).format("YYYY-MM-DD");
  let time = moment.utc((Date().toLocaleString('en-us'))).format("HH:mm:ss");
  let newPost
  selector = document.getElementById("selector").value;
  if (selector == "UBICACION") {
    newval = valorselector
  } else {
    var newval = valorinput !== "" ? valorinput : dateStamp + " " + timeinput;
  }

  console.log("URL Fetch GET: \n", dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
  fetch(dominio + "/seghm/get/seghm/hm/=/" + hmvalue + "/_/_/_")
    .then(data => data.json())
    .then(data => {
      console.log(data[selector]);
      ORIGINAL = (data[selector]);
      console.log(ORIGINAL);
    })
    .then(function () {
      newPost = {
        "HM": (hmvalue),
        "CAMPO": document.getElementById('selector').value,
        "ORIGINAL": (ORIGINAL),
        "NUEVO": (newval),
        "FECHA": (date + " " + time)
      }
      console.log("NewPost = ", newPost);
      fetch(dominio + `/api/post/actualizacion`, {
          method: 'POST',
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res => res.json()) // .txt .log Arrow Function
        .then(function (data) {

          console.log("Data: ", data);
          if (data["items"] === 1) {
            console.log("INSERTION OK");
          } else {
            console.log("INSERTION NOT OK");
          }
        })
    })
  console.log("Selector", selector)

  cleardiv2();


  if (selector === "ENTCLIPS" || selector === "ENTCONVEYOR" || selector === "ENTFET" || selector === "ENTINDUCCION" || selector === "ENTINSERCION" || selector === "ENTPREENSAMBLE" || selector === "ENTPUR" ||
    selector === "ENTREPARAR" || selector === "ENTTORQUE" || selector === "ENTVISION" || selector === "ENT APT" || selector === "PLANIFICADO" || selector === "SALCLIPS" ||
    selector === "SALCONVEYOR" || selector === "SALFET" || selector === "SALINDUCCION" || selector === "SALINSERCION" || selector === "SALPREENSAMBLE" || selector === "SALPUR" || selector === "SALREPARAR" ||
    selector === "SALTORQUE" || selector === "SALVISION") {

    let newPost = {
      [selector]: null
    }
    console.log("newpost: ", newPost)
    fetch(dominio + '/seghm/update/seghm/' + id, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
      .then(function (data) {
        console.log(data);
        console.log("se ha actualizado")
        cleardiv();
        hmbuscar();

      })
      .catch(function (err) {
        console.log(err);
      });

  } else {
    let newPost = {
      [selector]: "null"
    }
    console.log("newpost: ", newPost)
    fetch(dominio + '/seghm/update/seghm/' + id, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
      .then(function (data) {
        console.log(data);
        console.log("se ha actualizado")
        cleardiv();
        hmbuscar();

      })
      .catch(function (err) {
        console.log(err);
      });
  }
}



$('#HM').on('keypress', function (e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
      var lbl_ingreso = document.getElementById('lbl_ingreso').innerHTML;
      if (lbl_ingreso.includes('TR')) {
        e.preventDefault();
        trbuscar();        
      }else{
        e.preventDefault();
        hmbuscar();
      }
  }
});

$('#valorinput').on('keypress', function (e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    actualizar();
  }
});



function modal(btn) {
  let valores = btn.value;
  let arrayValue = valores.split("-");
  let id = arrayValue[0];
  let estacion = arrayValue[1];
  let medida = arrayValue[2];


  console.log(id);
  console.log(estacion);
  document.getElementById("header").innerHTML = estacion;
  fetch(dominio + "/seghm/get/seghm_valores/id/=/" + id + "/_/=/_")
    .then(data => data.json())
    .then(data => {
      document.getElementById("informacion").innerHTML = "";
      console.log(data);
      if (data[estacion] == "") {
        var b = document.createElement('b');
        b.innerHTML = "SIN DATOS";
        document.getElementById("informacion").appendChild(b);
      } else {

        let re = /null/g;
        dataParse = JSON.parse(data[estacion]);
        dataKeys = Object.keys(dataParse)
        let div = document.createElement("div");
        for (let i = 0; i < dataKeys.length; i++) {
          let nav = document.createElement("nav");
          let caja = dataKeys[i];
          let cavidades = dataParse[caja];
          let get_cavidad = Object.getOwnPropertyNames(cavidades);
          let grid = document.createElement("div");
          let anulados = 0;
          grid.classList = "grid-box";
          nav.appendChild(grid);
          for (let j = 0; j < get_cavidad.length; j++) {
            let obj_cavidad = get_cavidad[j];
            let span = document.createElement("span");
            span.classlist = "caja-valor";
            if (cavidades[obj_cavidad] === null || cavidades[obj_cavidad] === 'vacio') {
              //console.log(cavidades[obj_cavidad]);
              anulados++
            } else {
              let valores = JSON.stringify(cavidades[obj_cavidad]);
              //console.log("Aqui en string: ",valores)
              let boxValue = valores.replace(re, 'N/A');
              let unidadMedida = boxValue === 'N/A' ? '' : medida;
              span.innerHTML = `<p>${obj_cavidad}: ${boxValue} ${unidadMedida}</p>`;
              grid.appendChild(span);
            }
          }
          if (get_cavidad.length !== anulados) {
            nav.innerHTML = "<b>" + caja + "</b>";
            div.appendChild(nav);
            nav.appendChild(grid);
          }
        }
        document.getElementById("informacion").appendChild(div)
      }
      $('#mostrar').click();
    })


}