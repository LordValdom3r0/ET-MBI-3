// var wb = XLSX.utils.book_new();
// wb.Props = {
//         Title: "SheetJS Tutorial",
//         Subject: "Test",
//         Author: "Red Stapler",
//         CreatedDate: new Date(2017,12,19)
// };

// wb.SheetNames.push("Test Sheet","caramba");
// var ws_data = [['hello' , 'world']];
// var ws_data2 = [['hola' , 'peter']];
// var ws = XLSX.utils.aoa_to_sheet(ws_data);
// var ws2 = XLSX.utils.aoa_to_sheet(ws_data2);
// wb.Sheets["Test Sheet"] = ws;
// wb.Sheets["caramba"] = ws2;
// var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
// function s2ab(s) {

//         var buf = new ArrayBuffer(s.length);
//         var view = new Uint8Array(buf);
//         for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
//         return buf;
        
// }
// function exportar(){
//         saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Fujikura.xlsx');
// };
function get_puntos(params) {
    fetch( 'http://127.0.0.1:5000' + '/descargarTorque/torque_info/'+ `_/_`)  // Ruta a tu función Flask de descarga
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




// // const XLSX = require('xlsx');

// // Crear un nuevo libro de Excel
// const workbook = XLSX.utils.book_new();

// // Crear una hoja de trabajo
// const worksheet = XLSX.utils.json_to_sheet([fuses_format]);

// // Agregar la hoja de trabajo al libro
// XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

// // Guardar el libro como archivo
// XLSX.writeFile(workbook, 'datos.xlsx');
