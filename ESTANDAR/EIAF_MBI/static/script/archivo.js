


document.getElementById("descargar").addEventListener("click", function() {
  var objeto =  {
      "nombre": "SOLEPCC",
      "valor1": 1351824120,
      "sensors": [
        {
          "name": "Sensor Humedad",
          "description": "Mide Humedad",
          "sensor-type": "Humedad"
        },
        {
          "name": "Sensor temperatura",
          "description": "Mide Temperatura",
          "sensor-type": "Temperatura"
        }
      ]
    } 
    
    dateInicio = `${document.getElementById('fechai').value} ${document.getElementById('horai').value}:00`;
    dateFinal =`${document.getElementById('fechaf').value} ${document.getElementById('horaf').value}:00` ;
  
    fetch( dominio + '/descargar/eiaf/historial/'+ `(INICIO >= "${dateInicio}" AND "${dateFinal}" >= INICIO) OR (FIN >= "${dateInicio}" AND "${dateFinal}" >= FIN)`)  // Ruta a tu función Flask de descarga
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
  });