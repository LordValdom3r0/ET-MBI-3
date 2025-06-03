document.getElementById("descargar").addEventListener("click", function () {
  console.log("Descargar seleccionado");
  dateInicio = `${document.getElementById('fechai').value} ${document.getElementById('horai').value}:00`;
  dateFinal = `${document.getElementById('fechaf').value} ${document.getElementById('horaf').value}:00`;
  hminput = `${document.getElementById('hminput').value}`;

  var tabla = document.getElementById("selector").value;


  switch (tabla) {
    case "Historial":
      descargarExcelHistorial()
      break;
    case "torque_info":
      descargarExcelTorque()
      break;
    default:
      break;
  }

  console.log("Tabla ",tabla);
  function descargarExcelHistorial() {
    fetch(dominio + '/descargar/conveyor/historial/' + `(INICIO >= "${dateInicio}" AND "${dateFinal}" >= INICIO) OR (FIN >= "${dateInicio}" AND "${dateFinal}" >= FIN)`) // Ruta a tu función Flask de descarga
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'datos.xlsx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error:', error));
  }

  function descargarExcelTorque() {
    var tipo_busqueda = document.getElementById("tipo_busqueda").value;
    var tipo_tool = document.getElementById("tipo_tool").value;



    var url = tipo_busqueda !== 'HM' ? dominio + '/descargarTorque/' + tipo_tool + '/' + `${dateInicio}/${dateFinal}` : dominio + '/descargarTorque/torque_info/' + `${hminput}/_`;

    fetch(url) // Ruta a tu función Flask de descarga
      .then(response => response.blob())
      .then(blob => {
        const bloburl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = bloburl;
        a.download = 'datos.xlsx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(bloburl);
      })
      .catch(error => console.error('Error:', error));
  }


});