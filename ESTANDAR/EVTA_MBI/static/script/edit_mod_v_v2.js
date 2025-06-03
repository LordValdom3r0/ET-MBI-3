document.getElementById("modulov_titulo").innerHTML = sessionStorage.getItem('edit_vision');
document.getElementById('modulo_vision').value = sessionStorage.getItem('edit_vision');
var edit_id = sessionStorage.getItem('edit_vision_id');


if (!estacion.includes('MBM')) {
  document.getElementById("box_vision_m").style.display = 'none';
  document.getElementById("box_torque_m").style.display = 'none';
} else {
  document.getElementById("box_torque_i").style.display = 'none';
  document.getElementById("box_vision_i").style.display = 'none';
}

function get_valid_pedido() {
  historial = "";
  // console.log(document.getElementById("modulo_vision").value)
  if (document.getElementById("modulo_vision").value != "") {
    // get the id
    endpoint = dominio + '/api/get/' + DBEVENT + '/modulos_fusibles/modulo/=/' + document.getElementById("modulo_vision").value + '/_/_/_'
    // console.log(endpoint)
    fetch(endpoint, {
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
      .then(function (data) {
        // console.log(data);
        // console.log(data.MODULO);
        if (data.items == 0) {
          // console.log("No existe en la base de datos")
        } else {
          if (data.MODULO == sessionStorage.getItem('edit_vision')) {
            // console.log("Es el mismo nombre que el original")
            historial = "";
            alert_get_historial.innerHTML = "";
          } else {
            // console.log("Ya existe en la base de datos")
            historial = "si existe"
            alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El módulo "' + document.getElementById("modulo_vision").value + '" ya existe</div>'
          }
        }
        // console.log(historial)
      })
      .catch(function (err) {
        //console.log(err);
      });
    alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El módulo "' + document.getElementById("modulo_vision").value + '" no existe</div>'
    // console.log(historial)
  }
}



function build_dic() {
  console.log("PDC-E", pdce_caja);
  //console.log("PDC-R", pdcr_caja);
  var caja_seleccionada = estacion.includes("MBM") ? "PDC-E" : "PDC-R";
  // if (pdcr_caja == "" && pdce_caja == "") {
  //   document.getElementById("informacion").innerHTML = "No ha seleccionado ninguna de las opciones para la caja <span class='badge progress-bar-danger'>" + caja_seleccionada + "</span>.";
  //   $('#mostrar').click();
  // } else {
  if (historial == "") {
    add_module_vision()
  } else {
    document.getElementById("informacion").innerHTML = "El nombre del Módulo que intenta agregar <span class='badge progress-bar-danger'>ya existe</span>.";
    $('#mostrar').click();
  }
  //}
}



async function obtenerModulosFusibles() {
  const response = await fetch(dominio + "/api/get/" + DBEVENT + "/modulos_fusibles/MODULO/=/" + sessionStorage.getItem('edit_vision') +"/_/=/_");
  const data = await response.json();
  console.log('Fusibles DATA', data);
  

  // Obtener las claves en orden inverso
  const reversed = Object.keys(data).reverse();

  reversed.forEach(e => {
    if (e.includes('CAJA')) {
      // Parsear los datos recibidos
      const parseData = JSON.parse(data[e]);
      const boxData = Object.keys(parseData)[0];

      if (boxData) {
        const minuscula = boxData.replace('-', '').toLowerCase();
        const splits = `${boxData.trim()},${minuscula.trim()}`;

        // Agregar la caja
        add_box(splits, parseData);
      }

      console.log(parseData);
    }
  });
}

async function obtenerModulosTorques() {
  const response = await fetch(dominio + "/api/get/" + DBEVENT + "/modulos_torques/MODULO/=/" + sessionStorage.getItem('edit_vision') + "/_/=/_");
  const data = await response.json();
  console.log('Torque DATA', data);

  // Obtener las claves en orden inverso
  const reversed = Object.keys(data).reverse();
  console.log(reversed);



  reversed.forEach(e => {
    if (e.includes('CAJA')) {
      // Parsear los datos recibidos
      const parseData = JSON.parse(data[e]);

      var boxData = Object.keys(parseData)[0];

      if (!boxData) {
        return false
      }




      if (estacion.includes('MBM') && boxData.includes("MFB-E") > 0) {
        boxData = 'MFB-E_M';

      }




      if (boxData) {
        const minuscula = boxData.replace('-', '').toLowerCase();
        const splits = `${boxData.trim()}_torque,${minuscula.trim()}_t`;

        // Agregar la caja
        add_box(splits, parseData);
      }

      console.log(parseData);
    }
  });
}

async function iniciar_pagina() {
  try {
    await obtenerModulosTorques();
    await obtenerModulosFusibles();
  } catch (error) {
    console.error('Error al iniciar la página:', error);
  }
}






/// Change es la caja que es mencionanda para agregar visualmente con el usuario
function add_box(change, boxInfo) {
  console.log(change);

  //Splits es la variable obtenida de la seleccion del usuario y los datos guardados
  const splits = change.split(',');

  console.log('Splits', splits);

  changeBoxes = findChange(change);

  console.log('changeBoxes', changeBoxes);
  


  if (Object.keys(box_array).includes(splits[0])) {
    console.log('Caja ya existente');

    Toastify({

      text: `Caja ya existente`,
      backgroundColor: '#525252',
      duration: 3000

    }).showToast();

    return false
  }

  var findCover = splits[0].match(/COVER/g) 
  var indexCover = findCover!==null && findCover.length > 0? true: false;
  
  console.log(indexCover?findCover:'No ha Cover');
  
  
  if (!indexCover) {
    
  

  if (
    
    splits[0].includes('PDC-RS') ||
    splits[0].includes('PDC-RMID') ||
    splits[0].includes('PDC-R')||
    splits[0].includes('PDC-E')||
    splits[0].includes('PDC-E_AMG') 
  ) {
    /**
     * BOX_ARRAY = {
     * PDC-R: ['F456', 'F450'],
     * 
     * PDC-RS_TORQUE: ['E1']
     * }
     * PDC-RS_TORQUE -> PDC-RMID_TORQUE
     * Para cambiarlo sin que altere al otro, tengo que reconocer tres condiciones
     * 1-. si en box_array (el diccionario u objeto que contiene la lista de cada caja) contenga una caja PDC-R
     * 2-. si es de un Split que contenga o no contenga 'Torque'
     * 3-. si en el mismo box array contenga al menos una caja PDC-R con 'Torque'
     * si conecta las tres condiciones, este se debe cambiar la variante de la caja
     * 
     */

    var boxArrayKeys = Object.keys(box_array);
    var encontrado;
    var flag_1 = Object.keys(box_array).some(e => e.includes(PDC));
    var flag_2;
    var flag_3 = Object.keys(box_array).some(e => e.includes('torque') && !e.includes('COVER') );
    //console.log('NOT THE SPLITS',splits[0]);

    if (splits[0].includes('torque')) {
      console.log('Este incluye torque');
      encontrado = boxArrayKeys.find((e) => e.includes(PDC) && !e.includes('COVER') );
      console.log('variante encontrado', encontrado);
      flag_2 = encontrado ? true : false;

    }
    // Este es para asegurar la condicion de que sea una caja PDC-R y no otra caja
    else if (splits[0].includes(PDC)) {
      console.log('Este no incluye torque');
      encontrado = boxArrayKeys.find((e) => e.includes(PDC) && !e.includes('torque'));
      console.log('variante encontrado', encontrado);
      // En caso de que no exsita alguna caja PDC-R que contenga torque
      var hayTorque = boxArrayKeys.find((e) => e.includes(PDC) && e.includes('torque'));
      flag_3 = hayTorque ? flag_3 : true;

      flag_2 = encontrado ? true : false;




    } else {
      flag_2 = false;
    }

    if (flag_1) {
      console.log('FLAG_1', flag_1, 'FLAG_2', flag_2, 'FLAG_3', flag_3);

      if (flag_2 === flag_3) {
        console.log('cambiando variante', splits[0]);

        changeBoxes.cambiarVariante(splits);
        changeBoxes.agregarVariante(splits);
      } else {

        changeBoxes.agregarVariante(splits);
      }

    } else {


      changeBoxes.agregarVariante(splits);
    }

  }else {        
    changeBoxes.agregarVariante(splits)} 
  } else {
    changeBoxes.agregarVariante(splits);
    changeBoxes.mostrarPropiedades();
  }


  if (boxInfo) {

    boxData = Object.keys(boxInfo)[0];

    Object.keys(boxInfo[boxData]).forEach(cavidad => {
      //console.log(splits[0], cavidad);
      cajaSplit = splits[0]
      if (!fuses_value[cajaSplit][cavidad]) {
        //console.log(cajaSplit,cavidad, boxInfo[boxData][cavidad]);
        var lastChar = cavidad.substr(cavidad.length - 1); // => "1"
        var removeChar = cavidad.slice(0, -1);
        console.log(removeChar);

        fuses_value[cajaSplit][removeChar] = lastChar;

        box_array[cajaSplit].push(removeChar);
      } else {

        fuses_value[cajaSplit][cavidad] = boxInfo[boxData][cavidad];


        box_array[cajaSplit].push(cavidad);
      }
    });

  } else {
    console.log(`Sin datos que agregar o cambiar`);
  }


  console.log(changeBoxes);
  

  let minCaja = changeBoxes.getCaja();
  let mayusVariante = changeBoxes.getMayusVariante();
  let mayuscaja = changeBoxes.getMayusCaja();
  let variante = changeBoxes.getVariante();

  var originalDiv = document.getElementById(`section_box`);

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
  img.id = `${variante}_image_v`;
  const canvas = newDiv.querySelector('canvas');
  canvas.id = `${variante}_image_v_canvas`;
  // Insertar el nuevo div después del div original
  originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);

  // const actual_box = changeBoxes.getMayusVariante()
  // console.log('FUSIBLES', fusibles);
  //box_array[index] = fusibles
  //console.log(index, box_array[index]);
  cargar_imagen(changeBoxes)
}

function deleteBox(variante) {
  //console.log(variante.value);

  const v = variante.getAttributeNode("value").value.split(',');
  changeBoxes.mostrarPropiedades();
  changeBoxes.eliminarVariante(v);

}



function add_module_vision() {
  // console.log("VALOR FINAL: ",fuses_value);
  modulo_db = document.getElementById('modulo_vision').value
  // console.log(pdcr_caja_to_db)
  if (modulo_db.length == 0) {
    document.getElementById("informacion").innerHTML = "Es necesario agregar un <span class='badge progress-bar-danger'>nombre</span> al módulo. Intente de nuevo.";
    $('#mostrar').click();
  } else {
    console.log(estacion);
    if (!estacion.includes('MBM')) {

      const values_pdcs = Object.values(fuses_value[changesMap['PDC-S'].getMayusCaja()]);
      const values_f96 = Object.values(fuses_value[changesMap['F96'].getMayusCaja()]);

      // Verificar si todos los valores son 'vacio'
      const allEmpty_pdcs = values_pdcs.every(value => value === 'vacio');
      const allEmpty_f96 = values_f96.every(value => value === 'vacio');


      // Si todos los valores son 'vacio', cambiar el nombre de la clave
      if (allEmpty_pdcs) {
        console.log("PDCS vacio, volviendo al original");
        changesMap['PDC-S'].agregarVariante('PDC-S,pdcs')
      }
      if (allEmpty_f96) {
        console.log("F96 vacio, volviendo al original");
        changesMap['F96'].agregarVariante('F96,f96')
      }
    }



    const newPost = estacion.includes("MBM") ? {
      DBEVENT: DBEVENT,
      MODULO: modulo_db,
      CAJA_1: {},
      CAJA_2: {},
      CAJA_3: {},
      CAJA_4: {},
      CAJA_5: {},
      CAJA_6: {},
      CAJA_7: {},
      CAJA_8: {},
     // CAJA_9: {},
    } : {
      "DBEVENT": DBEVENT,
      "MODULO": modulo_db,
      "CAJA_1": {},
      "CAJA_2": {},
      "CAJA_3": {},
      "CAJA_4": {},
      "CAJA_5": {},
      "CAJA_6": {},
      "CAJA_7": {},
      "CAJA_8": {},
      //"CAJA_9": {}
    };

    console.log(fuses_value);


    //if (!estacion.includes('MBM')) {

    var result = [];

    for (let key in fuses_value) {
      let values = Object.values(fuses_value[key]);
      if (values.some(value => value !== 'vacio')) { // Verifica si algún valor es diferente de "vacio"
        //la caja que encontro con contenido lo agrega en una lista (array)
        result.push(key);
      }
      console.log(key);

    }

    var post_v = estacion.includes("MBM") ? {
      DBEVENT: DBEVENT,
      MODULO: modulo_db,
      CAJA_1: {},
      CAJA_2: {},
      CAJA_3: {},
      CAJA_4: {},
      CAJA_5: {},
      CAJA_6: {},
      CAJA_7: {},
      CAJA_8: {},
      //CAJA_9: {},
    } : {
      "DBEVENT": DBEVENT,
      "MODULO": modulo_db,
      "CAJA_1": {},
      "CAJA_2": {},
      "CAJA_3": {},
      "CAJA_4": {},
      "CAJA_5": {},
      "CAJA_6": {},
      "CAJA_7": {},
      "CAJA_8": {},
      //"CAJA_9": {}
    };
    var post_t = estacion.includes("MBM") ? {
      DBEVENT: DBEVENT,
      MODULO: modulo_db,
      CAJA_1: {},
      CAJA_2: {},
      CAJA_3: {},
      CAJA_4: {},
      CAJA_5: {},
      CAJA_6: {},
      CAJA_7: {},
      CAJA_8: {},
      //CAJA_9: {},
    } : {
      "DBEVENT": DBEVENT,
      "MODULO": modulo_db,
      "CAJA_1": {},
      "CAJA_2": {},
      "CAJA_3": {},
      "CAJA_4": {},
      "CAJA_5": {},
      "CAJA_6": {},
      "CAJA_7": {},
      "CAJA_8": {},
      "CAJA_9": {}
    };

    let v = 1;
    let t = 1;
    console.log(result);
    for (let j = 0; j < result.length; j++) {

      const postBox = result[j];
      var k = Object.keys(fuses_value[postBox])
      //console.log(j);

      if (!postBox.includes('torque')) {
        post_v[`CAJA_${v}`] = {
          [postBox]: {}
        };

        var KO = Object.keys(fuses_value[postBox])
        //console.log(KO);
        KO.forEach(e => {
          console.log(e);
          if (fuses_value[postBox][e] !== "vacio") {
            post_v[`CAJA_${v}`][postBox][`${e}`] = fuses_value[postBox][e];
            console.log(post_v[`CAJA_${v}`][postBox]);
          }
        });
        v++
      }
      //console.log(postBox);

      if (postBox.includes('torque')) {
        //Variable para remover el diferenciador de modulos entre torque y fusibles
        var box_t = postBox.replace('_torque', '');
        box_t = box_t.includes('-E_M')? box_t.replace('_M',''): box_t;
        post_t[`CAJA_${t}`] = {
          [box_t]: {}
        };


        var KO = Object.keys(fuses_value[postBox])
        //console.log(KO);
        KO.forEach(e => {
          //console.log(e);
          if (fuses_value[postBox][e] !== true && fuses_value[postBox][e] !== "true" && fuses_value[postBox][e] !== "vacio") {
            const variador = fuses_value[postBox][e]
            console.log(fuses_value[postBox][e]);

            post_t[`CAJA_${t}`][box_t][`${e}${variador}`] = true;
          } else if (fuses_value[postBox][e] !== 'vacio') {
            post_t[`CAJA_${t}`][box_t][`${e}`] = fuses_value[postBox][e];
            console.log(post_t[`CAJA_${t}`][box_t]);
          }


        });
        t++
      }

      //console.log(post_t, post_v);





      //for (let i = 0; i < k.length; i++) {
      //const postCavity = fuses_value[postBox][k[i]];
      //console.log(postCavity);


      // if (postCavity !== 'vacio') {
      //   // post_v[`CAJA_${j+1}`][postBox] = [k[i]]
      //   console.log(post_v[`CAJA_${j+1}`]);

      //   console.log(post_v[`CAJA_${j+1}`][postBox]);


      //   post_v[`CAJA_${j+1}`][postBox][k[i]] = fuses_value[postBox][k[i]]

      //}
      //}



    }


    console.log("ESTE ES EL post_v", post_v);
    console.log("ESTE ES EL post_t", post_t);




    // for (let key in fuses_value) {
    //   let subObject = fuses_value[key];
    //   for (let subKey in subObject) {
    //     if (subObject[subKey] !== 'vacio') {
    //       result.push(key);
    //       break; // Rompe el bucle interno en cuanto encuentres un valor diferente a "vacio"
    //     }
    //   }
    // }

    //}
    // } else {

    //   if (pdce_caja_to_db == "PDC-E") {
    //     post_v["CAJA_1"]["PDC-E"] = fuses_value["PDC-E"];
    //   } else if (pdce_caja_to_db == "PDC-E_AMG") {
    //     post_v["CAJA_1"]["PDC-E_AMG"] = fuses_value["PDC-E_AMG"];
    //   }
    // }

    //    console.log(fuses_value[changePDCS.getMayusCaja()]);  
    // Obtener los valores del objeto 'PDCSA'


    if (edit_id) {
      console.log("update pendiente", post_v);

      fetch(dominio + '/api/update/modulos_fusibles/' + edit_id, {
          method: 'POST',
          body: JSON.stringify(post_v),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res => res.json())
        .then(function (data) {
          console.log('Fusibles',data);
          //location.replace("edit_modulos.php");
        })
        .catch(function (err) {
          console.log(err);
        });
      // fetch(dominio + '/api/update/modulos_alturas/' + edit_id, {
      //     method: 'POST',
      //     body: JSON.stringify(post_v),
      //     headers: {
      //       "Content-type": "application/json"
      //     }
      //   }).then(res => res.json())
      //   .then(function (data) {

      //     console.log(data);
      //     //location.replace("edit_modulos.php")
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //   });
      console.log(edit_id);

      fetch(dominio + '/api/update/modulos_torques/' + edit_id, {
          method: 'POST',
          body: JSON.stringify(post_t),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res => res.json())
        .then(function (data) {

          console.log('Torques',data);
          location.replace("edit_modulos.php")
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {


      fetch(dominio + '/api/post/modulos_fusibles', {
          method: 'POST',
          body: JSON.stringify(post_v),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res => res.json())
        .then(function (data) {
          console.log(data);
        })
        .catch(function (err) {
          console.log(err)
        });
      // fetch(dominio + '/api/post/modulos_alturas', {
      //     method: 'POST',
      //     body: JSON.stringify(post_v),
      //     headers: {
      //       "Content-type": "application/json"
      //     }
      //   }).then(res => res.json())
      //   .then(function (data) {
      //     console.log(data);
      //     location.replace("modulos.php")
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //   });
      fetch(dominio + '/api/post/modulos_torques', {
          method: 'POST',
          body: JSON.stringify(post_t),
          headers: {
            "Content-type": "application/json"
          }
        }).then(res => res.json())
        .then(function (data) {
          location.replace("edit_modulos.php");

          console.log(data);

        })
        .catch(function (err) {
          console.log(err);
        });



    }
  }
}