document.getElementById("modulov_titulo").innerHTML = sessionStorage.getItem('modularidad');
//var modularidad = sessionStorage.getItem('modularidad');
//var estacion = sessionStorage.getItem('estacion');

//A2945407413

let pdf_vision = document.getElementById('pdf_vision');
let pdf_torque = document.getElementById('pdf_torque');
let modularidad_vision = document.getElementById('modularidad_vision');
let modularidad_torque = document.getElementById('modularidad_torque');



var imgWidth_pdcr, imgHeight_pdcr, datosPrim_pdcr;
var imgWidth_pdcr_mid, imgHeight_pdcr_mid, datosPrim_pdcr_mid;
var imgWidth_f96, imgHeight_f96, datosPrim_f96;
var imgWidth_pdcs, imgHeight_pdcs, datosPrim_pdcs;
var imgWidth_tblu, imgHeight_tblu, datosPrim_tblu;
var imgWidth_pdcd, imgHeight_pdcd, datosPrim_pdcd;
var imgWidth_pdcp, imgHeight_pdcp, datosPrim_pdcp;

var pdcr_array = [];
var pdcr_1_array = [];
var pdcr_s_array = [];
var pdcr_small_array = [];
var f96_array = []
var pdcs_array = [];
var tblu_array = [];
var pdcd_array = [];
var pdcp_array = [];

//FAMX-2
var pdce_array = [];
var pdce_amg_array = [];
var pdcs1_array = [];

///////////   TORQUES CANVAS   ///////////
let img_pdcp_t = document.getElementById('pdcp_image_t_canvas');
let img_pdcd_t = document.getElementById('pdcd_image_t_canvas');
let img_mfbp1_t = document.getElementById('mfbp1_image_t_canvas');
let img_mfbs_t = document.getElementById('mfbs_image_t_canvas');
let img_mfbe_t = document.getElementById('mfbe_image_t_canvas');
let img_mfbp2_t = document.getElementById('mfbp2_image_t_canvas');
let img_pdcr_t = document.getElementById('pdcr_image_t_canvas');
let img_pdcr_mid_t = document.getElementById('pdcr_mid_image_t_canvas');
let img_pdcr_small_t = document.getElementById('pdcr_small_image_t_canvas');

let img_pdce_t = document.getElementById('PDC-E_image_t_canvas');
let img_pdce_amg_t = document.getElementById('PDC-E_AMG_image_t_canvas');
let img_pdce_cover_t = document.getElementById('PDC-E_COVER_image_t_canvas');
let img_pdcs1_t = document.getElementById('PDC-S1_image_t_canvas');
// let img_mfbe_t = document.getElementById('MFB-E_image_t_canvas');
let img_g11_t = document.getElementById('G11_image_t_canvas');


// let img_pdce = document.getElementById('pdce_image_v_canvas');
// let img_pdce_amg = document.getElementById('pdce_amg_image_v_canvas');
// let img_pdcs1 = document.getElementById('pdcs1_image_v_canvas');


let img_bt_t = document.getElementById('bt_image_t_canvas');
let img_battery2_t = document.getElementById('battery-2_image_t_canvas');
var imgWidth_pdcr_t, imgHeight_pdcr_t;
var imgWidth_pdcr_mid_t, imgHeight_pdcr_mid_t;
var imgWidth_pdcr_small_t, imgHeight_pdcr_small_t;
var imgWidth_pdcp_t, imgHeight_pdcp_t;
var imgWidth_pdcd_t, imgHeight_pdcd_t;
var imgWidth_mfbp1_t, imgHeight_mfbp1_t;
var imgWidth_mfbs_t, imgHeight_mfbs_t;
var imgWidth_mfbe_t, imgHeight_mfbe_t;
var imgWidth_mfbp2_t, imgHeight_mfbp2_t;
var imgWidth_bt_t, imgHeight_bt_t;
var imgWidth_battery2_t, imgHeight_battery2_t;
let imgWidth_g11_t, imgHeight_g11_t;

let pdcp_t_array = [];
let pdcd_t_array = [];
let mfbp1_t_array = [];
let mfbs_t_array = [];
let mfbe_t_array = [];
let mfbp2_t_array = [];
let pdcr_t_array = [];
let pdcr_mid_t_array = [];
let pdcr_small_t_array = [];
let bt_t_array = [];
let battery2_t_array = [];

var pdce_t_array = [];
var pdce_amg_t_array = [];
var pdce_cover_t_array = [];
var pdcs1_t_array = [];
// var mfbe_t_array=[];
var g11_t_array = [];

// var modularity;
let orientacion;
let caja_pdcr;
var color_style = "blue";
var historial = "";
var pdcr_caja = "";
var pdcr_caja_to_db = "";


var conteo_a_ATO = 0;
var conteo_a_MINI = 0;
var conteo_a_MULTI = 0
var arrayFuses_a = []

var conteo_b_ATO = 0;
var conteo_b_MINI = 0;
var conteo_b_MAXI = 0;
var conteo_b_RELAY = 0;
var arrayFuses_b = []
var cajaVariante = ""

function iniciar_pagina() {
    // console.log(modularity);
    //cargar_imagen(changePDCS);
    //cargar_imagen(changeF96);
    // cargar_imagen_tblu();
    // cargar_imagen_pdcd();
    // cargar_imagen_pdcp();
    cargar_info();
}

function iniciar_pagina() {
    //   console.log("se inicio la pagina")
    //   console.log(fuses_BB)
    if (!estacion.includes("MBM")) {
        // Ocultando cajas que no se requieren dependiendo de si sean de MBM o MBI
        $("#section_pdcs1_t").hide();
        $("#section_pdce_t").hide();
        $("#section_pdce_options").hide();
        $("#section_pdce_cover_t").hide();
        $("#section_g11_t").hide();
        $("#section_pdce_options").hide();
        $("#section_pdcs1").hide();
      setTimeout(cargar_info, 700);
    } else {
        $("#section_pdcr").hide();
        $("#section_pdcr_t").hide();
        $("#section_f96").hide();
        $("#section_tblu").hide();
        $("#section_pdcs").hide();
        $("#section_pdcd").hide();
        $("#section_pdcp").hide();
        $("#section_mfbp1_t").hide();
        $("#section_mfbs_t").hide();
        $("#section_mfbp2_t").hide();
        $("#section_f96_t").hide();
        $("#section_tblu_t").hide();
        $("#section_pdcs_t").hide();
        $("#section_pdcd_t").hide();
        $("#section_pdcp_t").hide();
        $("#section_bt_t").hide();
        $("#section_bt2_t").hide();
      setTimeout(cargar_info, 700);
    }
  }



var loading = document.getElementsByClassName("loading");

function getDistance(x1, y1, x2, y2) {
    xDistance = x2 - x1;
    yDistance = y2 - y1;
}

function cargar_info() {
    if (sessionStorage.getItem('modularidad') != null) {
        fetch(dominio + "/api/get/" + DBEVENT + "/preview/modularity/" + sessionStorage.getItem('modularidad'))
            .then(data => data.json())
            .then(data => {
                console.log(data)
                pdf_vision.style.display = 'inline-block';
                pdf_torque.style.display = 'inline-block';
                for (let index = 0; index < loading.length; index++) {
                    loading[index].style.display = 'none';
                }
                console.log("DATA: ", data)
                modularity = data
                console.log("ESTA ES LA VARIANTE: ", modularity['variante'])
                ///////////// Script para VISIÓN /////////////
                var keys = Object.keys(modularity['vision'])
                // console.log(keys);

                
                    // if  (!keys.includes("PDC-D")){
                        
                    //     document.getElementById("section_pdcd").style.display = 'none';
                    // }
                        
                    // if  (!keys.includes("PDC-P")){
                        
                    //     document.getElementById("section_pdcp").style.display = 'none';
                    // }
                        
                    // if  (!keys.includes("PDC-E")){
                        
                    //     document.getElementById("section_pdce").style.display = 'none';
                    // }
                        
                    // if  (!keys.includes("TBLU")){
                        
                    //     document.getElementById("section_tblu").style.display = 'none';
                    // }
                        
                    // if  (!keys.includes("PDCS")){
                        
                    //     document.getElementById("section_pdcs").style.display = 'none';
                    // }
                        
                    // if  (!keys.includes("PDCS1")){
                        
                    //     document.getElementById("section_pdcs1").style.display = 'none';
                    // }
                        
                
                


                for (var i = 0; i < keys.length; i++) {
                    console.log("CAJA: ",keys[i]);
                    if (modularity['vision'][keys[i]] != '{}') {
                        var fusibles = Object.keys(modularity['vision'][keys[i]]);
                        console.log("ARRAY DE FUSIBLES: ",fusibles);
                        console.log(fusibles);
                        
                        if (keys[i].includes("PDC-S") || keys[i].includes("F96")) {
                            changeBoxes = keys[i].includes("PDC-S")?  changePDCS:changeF96 
                            const index = keys[i]
                            // console.log(index);
                            
                            var minuscula = index.toLowerCase();
                            minuscula = minuscula.replace("-","")
                            changeBoxes.agregarVariante(`${index},${minuscula}`);
                            let minCaja = changeBoxes.getCaja()
                            
                            const originalDiv = document.getElementById(`section_${minCaja}`);
                            const newDiv = originalDiv.cloneNode(true);
                            // Cambiar el id del nuevo div
                            newDiv.id = `section_${minuscula}`;
                            // Cambiar el contenido del h4
                            const h4 = newDiv.querySelector('h4');
                            h4.textContent = index;
                            // Cambiar el id de la imagen y el canvas
                            const img = newDiv.querySelector('img');
                            img.id = `${minuscula}_image_v`;
                            const canvas = newDiv.querySelector('canvas');
                            canvas.id = `${minuscula}_image_v_canvas`;
                            // Insertar el nuevo div después del div original
                            originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);
                            
                            // const actual_box = changeBoxes.getMayusVariante()
                            // console.log('FUSIBLES', fusibles);
                            box_array[index] = fusibles
                            console.log(index, box_array[index]);
                            cargar_imagen(changeBoxes)
                            //}
                        }

                        for (var j = 0; j < fusibles.length; j++) {
                            // console.log("Valor del Fusible: ",modularity['vision'][keys[i]][fusibles[j]]);
                            switch (modularity['variante']) {
                                case "PDC-RMID":
                                    if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                                        document.getElementById("section_pdce").style.display = 'none';
                                        if (!fusibles[j].includes("F96")) {
                                            pdcr_1_array.push(fusibles[j]);
                                        } else {
                                            // box_array[caja_name[0]].push(fusibles[j]);
                                            f96_array.push(fusibles[j]);
                                            cargar_imagen(changeF96);
                                        }
                                    }
                                    break;

                                case "PDC-RS":
                                    if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                                        document.getElementById("section_pdce").style.display = 'none';
                                        if (!fusibles[j].includes("F96")) {
                                            pdcr_small_array.push(fusibles[j]);
                                        } else {
                                            f96_array.push(fusibles[j]);
                                            cargar_imagen(changeF96);
                                        }
                                    }
                                    break;
                                case "PDC-R":
                                    if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                                        document.getElementById("section_pdce").style.display = 'none';
                                        if (!fusibles[j].includes("F96")) {
                                            pdcr_array.push(fusibles[j]);
                                        } else {
                                            f96_array.push(fusibles[j]);
                                            cargar_imagen(changeF96);
                                        }
                                    }
                                    break;

                                case "PDC-E":
                                    if (keys[i] == "PDC-E" | keys[i] == "PDC-E_AMG") {
                                        document.getElementById("section_pdcr").style.display = 'none';
                                        document.getElementById("section_f96").style.display = 'none';
                                        pdce_array.push(fusibles[j]);
                                    }
                                    break;

                                case "PDC-E_AMG":
                                    if (keys[i] == "PDC-E" | keys[i] == "PDC-E_AMG") {
                                        document.getElementById("section_pdcr").style.display = 'none';
                                        document.getElementById("section_f96").style.display = 'none';
                                        pdce_amg_array.push(fusibles[j]);
                                    }

                                    break;
                                default:
                                    break;
                            }

                            if (keys[i] == "PDC-S1") {
                                pdcs1_array.push(fusibles[j]);
                                cargar_imagen_pdcs1();
                            }

                            // if (modularity['variante'] == "PDC-R") {
                            //     if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                            //         if (fusibles[j] != "F96") {
                            //             pdcr_array.push(fusibles[j]);
                            //         } else {
                            //             f96_array.push(fusibles[j]);
                            //             cargar_imagen_f96();
                            //         }
                            //     }
                            // } else if (modularity['variante'] == "PDC-RMID") {
                            //     if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                            //         if (fusibles[j] != "F96") {
                            //             pdcr_1_array.push(fusibles[j]);
                            //         } else {
                            //             f96_array.push(fusibles[j]);
                            //             cargar_imagen_f96();
                            //         }
                            //     }
                            // } else if (modularity['variante'] == "PDC-RS") {
                            //     if (keys[i] == "PDC-R" | keys[i] == "PDC-RMID" | keys[i] == "PDC-RS") {
                            //         if (fusibles[j] != "F96") {
                            //             pdcr_small_array.push(fusibles[j]);
                            //         } else {
                            //             f96_array.push(fusibles[j]);
                            //             cargar_imagen_f96();
                            //         }

                            //     }
                            // }
                            // if (JSON.stringify(modularity['vision']["PDC-RMID"]) == '{}') {
                            //     // console.log("MOSTRANDO 'PDCRRRRRRRRRRR")
                            //     caja_pdcr = "r";
                            //     if (keys[i] == "PDC-R") {
                            //         pdcr_array.push(fusibles[j]);
                            //     }
                            // }else{
                            //     caja_pdcr = "m";
                            //     if (keys[i] == "PDC-RMID") {
                            //         pdcr_1_array.push(fusibles[j]);
                            //     }
                            // }
                            // if (JSON.stringify(modularity['vision']["PDC-R"]) == '{}' && JSON.stringify(modularity['vision']["PDC-RMID"]) == '{}'){
                            //     document.getElementById('caja_pdcr').innerHTML = 'Esta Modularidad no cuenta con ninguna configuración para la caja PDC-R.'
                            // }
                            if (keys[i] == "PDC-S") {
                                //box_array[changePDCS.getMayusVariante].push(fusibles[j]);
                                cargar_imagen(changePDCS);
                            }
                            if (keys[i] == "TBLU") {
                                tblu_array.push(fusibles[j]);
                                cargar_imagen_tblu();
                            }
                            if (keys[i] == "PDC-D") {
                                pdcd_array.push(fusibles[j]);
                                cargar_imagen_pdcd();
                            }
                            if (keys[i] == "PDC-P") {
                                pdcp_array.push(fusibles[j]);
                                cargar_imagen_pdcp();
                            }
                        }
                    }
                }

                switch (modularity['variante']) {
                    case "PDC-R":
                        console.log("Mostrando Caja PDC-R");
                        document.getElementById('pdcr_title').innerHTML = 'PDC-R';
                        document.getElementById('caja_pdcr').innerHTML = '<canvas id="pdcr_image_v_canvas" class="img-fluid" style="margin-left: 15%"></canvas>';
                        img_pdcr = document.getElementById('pdcr_image_v_canvas');
                        document.getElementById('pdcr_t_title').innerHTML = 'PDC-R';
                        document.getElementById('caja_t_pdcr').innerHTML = '<canvas id="pdcr_image_t_canvas" class="img-fluid" style="margin-left: 15%"></canvas>';
                        img_pdcr_t = document.getElementById('pdcr_image_t_canvas');
                        var t1 = new ToolTip_pdcr(img_pdcr, "This is a tool-tip", 182);
                        var t1 = new ToolTip_pdcr_t(img_pdcr_t, "This is a tool-tip", 182);
                        cargar_imagen_pdcr();
                        cargar_imagen_pdcr_t();
                        break;

                    case "PDC-RMID":
                        console.log("Mostrando Caja PDC-RMID"); /// Si la caja es PDC-RMID mostrará dicho canvas tanto para Visión como para Torque
                        document.getElementById('pdcr_title').innerHTML = 'PDC-RMID';
                        document.getElementById('caja_pdcr').innerHTML = '<canvas id="pdcr_1_image_v_canvas" class="img-fluid" style="margin-left: 0%"></canvas>';
                        img_pdcr_1 = document.getElementById('pdcr_1_image_v_canvas');
                        document.getElementById('pdcr_t_title').innerHTML = 'PDC-RMID';
                        document.getElementById('caja_t_pdcr').innerHTML = '<canvas id="pdcr_mid_image_t_canvas" class="img-fluid" style="margin-left: 15%"></canvas>';
                        img_pdcr_mid_t = document.getElementById('pdcr_mid_image_t_canvas');
                        var t1 = new ToolTip_pdcr_1(img_pdcr_1, "This is a tool-tip", 182);
                        var t1 = new ToolTip_pdcr_1t(img_pdcr_mid_t, "This is a tool-tip", 182);
                        cargar_imagen_pdcr_1();
                        cargar_imagen_pdcr_1_t();
                        break;

                    case "PDC-RS":
                        console.log("Mostrando Caja PDC-RS"); /// Si la caja es PDC-RS mostrará dicho canvas tanto para Visión como para Torque
                        document.getElementById('pdcr_title').innerHTML = 'PDC-RS';
                        document.getElementById('caja_pdcr').innerHTML = '<canvas id="pdcr_small_image_v_canvas" class="img-fluid" style="margin-left: 0%"></canvas>';
                        img_pdcr_small = document.getElementById('pdcr_small_image_v_canvas');
                        document.getElementById('pdcr_t_title').innerHTML = 'PDC-RS';
                        document.getElementById('caja_t_pdcr').innerHTML = '<canvas id="pdcr_small_image_t_canvas" class="img-fluid" style="margin-left: 15%"></canvas>';
                        img_pdcr_small_t = document.getElementById('pdcr_small_image_t_canvas');
                        var t1 = new ToolTip_pdcr_1(img_pdcr_small, "This is a tool-tip", 182);
                        var t1 = new ToolTip_pdcrs_1t(img_pdcr_small_t, "This is a tool-tip", 182);
                        cargar_imagen_pdcr_small();
                        cargar_imagen_pdcr_small_t();
                        break;

                    case "PDC-E":
                        console.log("Mostrando Caja PDC-E"); /// Si la caja es PDC-RS mostrará dicho canvas tanto para Visión como para Torque
                        document.getElementById('pdce_title').innerHTML = 'PDC-E';
                        document.getElementById('caja_pdce').innerHTML = '<canvas id="pdce_image_v_canvas" class="img-fluid" style="margin-left: 0%"></canvas>';
                        img_pdce = document.getElementById('pdce_image_v_canvas');
                        // document.getElementById('pdce_t_title').innerHTML = 'PDC-E';
                        document.getElementById('caja_t_pdce').innerHTML = '<canvas id="pdce_image_t_canvas" class="img-fluid"></canvas>';
                        img_pdce_t = document.getElementById('pdce_image_t_canvas');
                        var t1 = new ToolTip_pdce(img_pdce, "This is a tool-tip", 182);
                        var t1 = new ToolTip_pdcet(img_pdce_t, "This is a tool-tip", 182);
                        cargar_imagen_pdce();
                        cargar_imagen_pdce_t();
                        break;

                    case "PDC-E_AMG":
                        console.log("Mostrando Caja PDC-E"); /// Si la caja es PDC-RS mostrará dicho canvas tanto para Visión como para Torque
                        document.getElementById('pdce_title').innerHTML = 'PDC-E';
                        document.getElementById('caja_pdce').innerHTML = '<canvas id="pdce_amg_image_v_canvas" class="img-fluid" style="margin-left: 0%"></canvas>';
                        img_pdce_amg = document.getElementById('pdce_amg_image_v_canvas');
                        document.getElementById('pdce_t_title').innerHTML = 'PDC-E';
                        document.getElementById('caja_t_pdce').innerHTML = '<canvas id="pdce_amg_image_t_canvas" class="img-fluid"></canvas>';
                        img_pdce_amg_t = document.getElementById('pdce_amg_image_t_canvas');
                        var t1 = new ToolTip_pdce_amg(img_pdce, "This is a tool-tip", 182);
                        var t1 = new ToolTip_pdce_amgt(img_pdce_t, "This is a tool-tip", 182);
                        cargar_imagen_pdce_amg();
                        cargar_imagen_pdce_amg_t();
                        break;


                    default:
                        break;
                }
                ///////////// Script para TORQUE /////////////
                var keys_torque = Object.keys(modularity['torque'])
                console.log("Keys de Torque: ",keys_torque);

                for (var i = 0; i < keys_torque.length; i++) {
                    // console.log("CAJA: ",keys_torque[i]);
                    if (modularity['torque'][keys_torque[i]] !== '{}') {
                        var torques = Object.keys(modularity['torque'][keys_torque[i]]);
                        //console.log("ARRAY DE POSICIONES: ",torques);

                        // if  (!keys_torque.includes("PDC-D")){
                        
                        //     document.getElementById("section_pdcd_t").style.display = 'none';
                        // }
                            
                        // if  (!keys_torque.includes("PDC-P")){
                            
                        //     document.getElementById("section_pdcp_t").style.display = 'none';
                        // }
                            
                        // if  (!keys_torque.includes("PDC-E")){
                            
                        //     document.getElementById("section_pdce_t").style.display = 'none';
                        // }

                        // if  (!keys_torque.includes("PDC-ECOVER")){
                            
                        //     document.getElementById("section_pdce_cover_t").style.display = 'none';
                        // }
                        
                        // if  (!keys_torque.includes("MFB-E")){
                            
                        //     document.getElementById("section_mfbe_t").style.display = 'none';
                        // }

                        // if  (!keys_torque.includes("MFB-P1")){
                            
                        //     document.getElementById("section_mfbp1_t").style.display = 'none';
                        // }

                        // if  (!keys_torque.includes("MFB-P2")){
                            
                        //     document.getElementById("section_mfbp2_t").style.display = 'none';
                        // }

                        // if  (!keys_torque.includes("MFB-S")){
                            
                        //     document.getElementById("section_mfbs_t").style.display = 'none';
                        // }
                            
                        // if  (!keys_torque.includes("PDC-S")){
                            
                        //     document.getElementById("section_pdcs_t").style.display = 'none';
                        // }
                            
                        // if  (!keys_torque.includes("PDC-S1")){
                            
                        //     document.getElementById("section_pdcs1_t").style.display = 'none';
                        // }
                        // if  (!keys_torque.includes("G11")){
                            
                        //     document.getElementById("section_g11_t").style.display = 'none';
                        // }

                        for (var j = 0; j < torques.length; j++) {
                            // console.log("Debe llevar el Torque: ",torques[j])
                            if (modularity['variante'] == "PDC-R") {
                                // console.log("MOSTRANDO PDC-R TORQUES+++")
                                if (keys_torque[i] == "PDC-R" | keys_torque[i] == "PDC-RMID" | keys_torque[i] == "PDC-RS") {
                                    pdcr_t_array.push(torques[j]);
                                }
                            } else if (modularity['variante'] == "PDC-RMID") {
                                // console.log("MOSTRANDO PDC-RMID TORQUES+++")
                                if (keys_torque[i] == "PDC-RMID" | keys_torque[i] == "PDC-RS") {
                                    pdcr_mid_t_array.push(torques[j]);
                                }
                            } else if (modularity['variante'] == "PDC-RS") {
                                // console.log("MOSTRANDO PDC-RS TORQUES+++")
                                if (keys_torque[i] == "PDC-RS") {
                                    pdcr_small_t_array.push(torques[j]);
                                }

                            } else if (modularity['variante'] == "PDC-E") {
                                // console.log("MOSTRANDO PDC-E TORQUES+++")
                                if (keys_torque[i] == "PDC-E") {
                                    pdce_t_array.push(torques[j]);
                                }
                            } else if (modularity['variante'] == "PDC-E_AMG") {
                                // console.log("MOSTRANDO PDC-E TORQUES+++")
                                if (keys_torque[i] == "PDC-E_AMG") {
                                    pdce_amg_t_array.push(torques[j]);
                                }
                            } else if (modularity['variante'] == "N/A") {
                                console.log("Esta Modularidad no cuenta con módulos que determinen alguna variante de la caja PDC-R")
                                document.getElementById('caja_pdcr').innerHTML = 'Esta Modularidad no cuenta con ninguna configuración para la caja PDC-R.'
                            }
                            if (keys_torque[i] == "PDC-D") {
                                pdcd_t_array.push(torques[j]);
                                cargar_imagen_pdcd_t();
                            }
                            if (keys_torque[i] == "PDC-P") {
                                pdcp_t_array.push(torques[j]);
                                cargar_imagen_pdcp_t();
                            }
                            if (keys_torque[i] == "MFB-P1") {
                                mfbp1_t_array.push(torques[j]);
                                cargar_imagen_mfbp1_t();
                            }
                            if (keys_torque[i] == "MFB-S") {
                                mfbs_t_array.push(torques[j]);
                                cargar_imagen_mfbs_t();
                            }
                            if (keys_torque[i] == "MFB-E") {
                                mfbe_t_array.push(torques[j]);
                                cargar_imagen_mfbe_t();
                            }
                            if (keys_torque[i] == "MFB-P2") {
                                mfbp2_t_array.push(torques[j]);
                                cargar_imagen_mfbp2_t();
                            }
                            if (keys_torque[i] == "BATTERY") {
                                bt_t_array.push(torques[j]);
                                cargar_imagen_bt_t();
                            }
                            if (keys_torque[i] == "PDC-ECOVER") {
                                pdce_cover_t_array.push(torques[j]);
                                cargar_imagen_pdce_cover_t();
                            }
                            if (keys_torque[i] == "G11") {
                                g11_t_array.push(torques[j]);
                                cargar_imagen_g11_t();
                            }
                            if (keys_torque[i] == "PDC-S1") {
                                pdcs1_t_array.push(torques[j]);
                                cargar_imagen_pdcs1_t();
                            }
                            if (keys_torque[i] == "BATTERY-2") {
                                battery2_t_array.push(torques[j]);
                                // cargar_imagen_pdcp();
                            }
                        }
                    }
                }
                if (battery2_t_array.length == 0) {
                    console.log("No lleva la Battery-2", battery2_t_array)
                    document.getElementById('battery-2_n/a').innerHTML = 'No Aplica para esta Modularidad';
                } else {
                    cargar_imagen_battery2_t();
                }
                if (mfbe_t_array.length == 0) {
                    console.log("No lleva la MFB-E", mfbe_t_array)
                    document.getElementById('MFB-E_n/a').innerHTML = 'No Aplica para esta Modularidad';
                } else {
                    cargar_imagen_mfbe_t();
                }
                if (mfbs_t_array.length == 0) {
                    console.log("No lleva la MFB-S", mfbs_t_array)
                    document.getElementById('MFB-S_n/a').innerHTML = 'No Aplica para esta Modularidad';
                } else {
                    cargar_imagen_mfbs_t();
                }
                if (f96_array.length == 0) {
                    console.log("No lleva F96", f96_array)
                    document.getElementById('f96_n/a').innerHTML = 'No Aplica para esta Modularidad';
                }
                if (pdcs1_array.length == 0) {
                    console.log("No lleva PDCS1", pdcs1_array)
                    //document.getElementById('f96_n/a').innerHTML = 'No Aplica para esta Modularidad';
                }

                
                
                // cargar_imagen_pdcd();
                // cargar_imagen_pdcs();
                // cargar_imagen_tblu();
                // cargar_imagen_pdcp();
                // cargar_imagen_pdcp_t();
                // cargar_imagen_pdcd_t();
                // cargar_imagen_mfbp1_t();
                // cargar_imagen_mfbp2_t();
                // cargar_imagen_bt_t();
            })
    } else {
        console.log("No se ha seleccionado ninguna Modularidad para ver su Previsualización");
    }
}

function cargar_imagen_pdcr() {
    console.log('PDCR')
    if (img_pdcr.getContext) {
        var ctx_pdcr = img_pdcr.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr/pdcr.jpg";
        img.onload = function () {
            imgWidth_pdcr = this.width;
            imgHeight_pdcr = this.height;
            img_pdcr.width = imgWidth_pdcr;
            img_pdcr.height = imgHeight_pdcr;
            // console.log("imgWidth_pdcr: ",imgWidth_pdcr);
            // console.log("imgHeight_pdcr: ",imgHeight_pdcr);
            // console.log("img_pdcr.width: ",img_pdcr.width);
            // console.log("img_pdcr.height: ",img_pdcr.height);
            ctx_pdcr.drawImage(this, 0, 0, imgWidth_pdcr, imgHeight_pdcr);
            var datosimagen = ctx_pdcr.getImageData(0, 0, imgWidth_pdcr, imgHeight_pdcr);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcr = datosimagen.data;
            ctx_pdcr.fillStyle = "#0F53F1";
            ctx_pdcr.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: PDC-R");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-R: ",pdcr_array)
                for (let i = 0; i < pdcr_array.length; i++) {
                    let fusibleColocado;
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    if (modularity['vision']["PDC-R"].hasOwnProperty(pdcr_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-R"][pdcr_array[i]][0];
                    } else if (modularity['vision']["PDC-RMID"].hasOwnProperty(pdcr_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RMID"][pdcr_array[i]][0];
                    } else if (modularity['vision']["PDC-RS"].hasOwnProperty(pdcr_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RS"][pdcr_array[i]][0];
                    }

                    //console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB["PDC-R"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-R"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-R"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-R"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-R"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break
                        case 'RELAY':
                            conteo_b_RELAY++;
                            break
                        case 'MULTI':
                            conteo_b_MULTI++;
                            break
                        case 'MAXI':
                            conteo_b_MAXI++
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("PDC-R DISTANCE X",xDistance)
                    // console.log("PDC-R DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === 'F464' || cavidad === 'F463' || cavidad === 'F462' || cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                                amperaje = '50';
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`);
                    }

                    ctx_pdcr.beginPath();
                    ctx_pdcr.strokeStyle = color_style;
                    ctx_pdcr.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcr(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcr,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcr(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcr,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcr.createPattern(image, "no-repeat");
        ctx_pdcr.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcr.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_pdcr_1() {
    console.log('PDCR-MID')
    if (img_pdcr_1.getContext) {
        var ctx_pdcr_mid = img_pdcr_1.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr_1/pdcr_1.jpg";
        img.onload = function () {
            imgWidth_pdcr_mid = this.width;
            imgHeight_pdcr_mid = this.height;
            img_pdcr_1.width = imgWidth_pdcr_mid;
            img_pdcr_1.height = imgHeight_pdcr_mid;
            // console.log("imgWidth_pdcr_mid: ",imgWidth_pdcr_mid);
            // console.log("imgHeight_pdcr_mid: ",imgHeight_pdcr_mid);
            // console.log("img_pdcr_1.width: ",img_pdcr_1.width);
            // console.log("img_pdcr_1.height: ",img_pdcr_1.height);
            ctx_pdcr_mid.drawImage(this, 0, 0, imgWidth_pdcr_mid, imgHeight_pdcr_mid);
            var datosimagen = ctx_pdcr_mid.getImageData(0, 0, imgWidth_pdcr_mid, imgHeight_pdcr_mid);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcr_mid = datosimagen.data;
            ctx_pdcr_mid.fillStyle = "#0F53F1";
            ctx_pdcr_mid.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: PDC-RMID");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-RMID: ",pdcr_1_array)
                for (let i = 0; i < pdcr_1_array.length; i++) {
                    let fusibleColocado;
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_1_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    if (modularity['vision']["PDC-RMID"].hasOwnProperty(pdcr_1_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RMID"][pdcr_1_array[i]][0];
                    } else if (modularity['vision']["PDC-RS"].hasOwnProperty(pdcr_1_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RS"][pdcr_1_array[i]][0];
                    } else if (modularity['vision']["PDC-R"].hasOwnProperty(pdcr_1_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-R"][pdcr_1_array[i]][0];
                    }

                    let cavidadx = fuses_BB["PDC-RMID"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-RMID"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-RMID"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-RMID"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-RMID"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    //console.log(cavidad_ctgry)
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break
                        case 'RELAY':
                            conteo_b_RELAY++;
                            break
                        case 'MULTI':
                            conteo_b_MULTI++;
                            break
                        case 'MAXI':
                            conteo_b_MAXI++
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-RMID DISTANCE X",xDistance)
                    // console.log("PDC-RMID DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === 'F464' || cavidad === 'F463' || cavidad === 'F462' || cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                                amperaje = '50';
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_pdcr_mid.beginPath();
                    ctx_pdcr_mid.strokeStyle = color_style;
                    ctx_pdcr_mid.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcr_mid(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcr_mid,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcr_mid(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcr_mid,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcr_mid.createPattern(image, "no-repeat");
        ctx_pdcr_mid.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcr_mid.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_pdcr_small() {
    console.log('PDCRS')
    if (img_pdcr_small.getContext) {
        var ctx_pdcr_small = img_pdcr_small.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcrs/pdcrs.jpg";
        img.onload = function () {
            imgWidth_pdcr_small = this.width;
            imgHeight_pdcr_small = this.height;
            img_pdcr_small.width = imgWidth_pdcr_small;
            img_pdcr_small.height = imgHeight_pdcr_small;
            // console.log("imgWidth_pdcr_small: ",imgWidth_pdcr_small);
            // console.log("imgHeight_pdcr_small: ",imgHeight_pdcr_small);
            // console.log("img_pdcr_small.width: ",img_pdcr_small.width);
            // console.log("img_pdcr_small.height: ",img_pdcr_small.height);
            ctx_pdcr_small.drawImage(this, 0, 0, imgWidth_pdcr_small, imgHeight_pdcr_small);
            var datosimagen = ctx_pdcr_small.getImageData(0, 0, imgWidth_pdcr_small, imgHeight_pdcr_small);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcr_small = datosimagen.data;
            ctx_pdcr_small.fillStyle = "#0F53F1";
            ctx_pdcr_small.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: PDC-RS");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-RS: ",pdcr_small_array)
                for (let i = 0; i < pdcr_small_array.length; i++) {
                    let fusibleColocado;
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_small_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    if (modularity['vision']["PDC-RS"].hasOwnProperty(pdcr_small_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RS"][pdcr_small_array[i]][0];
                    } else if (modularity['vision']["PDC-RS"].hasOwnProperty(pdcr_small_array[i])) {
                        fusibleColocado = modularity['vision']["PDC-RS"][pdcr_small_array[i]][0];
                    }
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-RS"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-RS"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-RS"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-RS"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-RS"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break
                        case 'RELAY':
                            conteo_b_RELAY++;
                            break
                        case 'MULTI':
                            conteo_b_MULTI++;
                            break
                        case 'MAXI':
                            conteo_b_MAXI++
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);

                    // console.log("PDC-RS DISTANCE X",xDistance)
                    // console.log("PDC-RS DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === 'F464' || cavidad === 'F463' || cavidad === 'F462' || cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                                amperaje = '50';
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }
                    ctx_pdcr_small.beginPath();
                    ctx_pdcr_small.strokeStyle = color_style;
                    ctx_pdcr_small.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcr(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcr_small,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcr(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcr_small,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcr_small.createPattern(image, "no-repeat");
        ctx_pdcr_small.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcr_small.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_f96() {
    if (img_f96.getContext) {
        var ctx_f96 = img_f96.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/f96/f96.jpg";
        img.onload = function () {
            imgWidth_f96 = this.width;
            imgHeight_f96 = this.height;
            img_f96.width = imgWidth_f96;
            img_f96.height = imgHeight_f96;
            // console.log("imgWidth_f96: ",imgWidth_f96);
            // console.log("imgHeight_f96: ",imgHeight_f96);
            // console.log("img_f96.width: ",img_f96.width);
            // console.log("img_f96.height: ",img_f96.height);
            ctx_f96.drawImage(this, 0, 0, imgWidth_f96, imgHeight_f96);
            var datosimagen = ctx_f96.getImageData(0, 0, imgWidth_f96, imgHeight_f96);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_f96 = datosimagen.data;
            ctx_f96.fillStyle = "#0F53F1";
            ctx_f96.lineWidth = "4";
            // console.log("La Caja a pintar es la siguiente: F96");
            pintar()

            function pintar() {
                // console.log("MI ARRAY F96: ",f96_array)
                for (let i = 0; i < f96_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = f96_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-RMID"][f96_array[i]][0];
                    // console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB["F96"][cavidad][0][0];
                    let cavidady = fuses_BB["F96"][cavidad][0][1];
                    let cavidadw = fuses_BB["F96"][cavidad][1][0];
                    let cavidadh = fuses_BB["F96"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["F96"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);

                    // console.log("PDC-R DISTANCE X",xDistance)
                    // console.log("PDC-R DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === "F136" || cavidad === "F146") {
                                amperaje = "50";
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_f96.beginPath();
                    ctx_f96.strokeStyle = color_style;
                    ctx_f96.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcr(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_f96,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcr(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_f96,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_f96.createPattern(image, "no-repeat");
        ctx_f96.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_f96.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_pdcs() {
    if (img_pdcs.getContext) {
        var ctx_pdcs = img_pdcs.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcs/pdcs.jpg";
        img.onload = function () {
            imgWidth_pdcs = this.width;
            imgHeight_pdcs = this.height;
            img_pdcs.width = imgWidth_pdcs;
            img_pdcs.height = imgHeight_pdcs;
            // console.log("imgWidth_pdcs: ",imgWidth_pdcs);
            // console.log("imgHeight_pdcs: ",imgHeight_pdcs);
            // console.log("img_pdcs.width: ",img_pdcs.width);
            // console.log("img_pdcs.height: ",img_pdcs.height);
            ctx_pdcs.drawImage(this, 0, 0, imgWidth_pdcs, imgHeight_pdcs);
            var datosimagen = ctx_pdcs.getImageData(0, 0, imgWidth_pdcs, imgHeight_pdcs);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs = datosimagen.data;
            ctx_pdcs.fillStyle = "#0F53F1";
            ctx_pdcs.lineWidth = "4";
            // console.log("La Caja a pintar es la siguiente: PDC-S");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-S: ",pdcs_array)
                for (let i = 0; i < pdcs_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcs_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-S"][pdcs_array[i]][0];
                    //console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB["PDC-S"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-S"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-S"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-S"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-S"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);

                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === "F136" || cavidad === "F146") {
                                amperaje = "50";
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_pdcs.beginPath();
                    ctx_pdcs.strokeStyle = color_style;
                    ctx_pdcs.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcs(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcs,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcs(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcs,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcs.createPattern(image, "no-repeat");
        ctx_pdcs.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcs.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_tblu() {
    if (img_tblu.getContext) {
        var ctx_tblu = img_tblu.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/tblu/tblu.jpg";
        img.onload = function () {
            imgWidth_tblu = this.width;
            imgHeight_tblu = this.height;
            img_tblu.width = imgWidth_tblu;
            img_tblu.height = imgHeight_tblu;
            // console.log("imgWidth_tblu: ",imgWidth_tblu);
            // console.log("imgHeight_tblu: ",imgHeight_tblu);
            // console.log("img_tblu.width: ",img_tblu.width);
            // console.log("img_tblu.height: ",img_tblu.height);
            ctx_tblu.drawImage(this, 0, 0, imgWidth_tblu, imgHeight_tblu);
            var datosimagen = ctx_tblu.getImageData(0, 0, imgWidth_tblu, imgHeight_tblu);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_tblu = datosimagen.data;
            ctx_tblu.fillStyle = "#0F53F1";
            ctx_tblu.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: TBLU");
            pintar()

            function pintar() {
                // console.log("MI ARRAY TBLU: ",tblu_array)
                for (let i = 0; i < tblu_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = tblu_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["TBLU"][tblu_array[i]][0];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["TBLU"][cavidad][0][0];
                    let cavidady = fuses_BB["TBLU"][cavidad][0][1];
                    let cavidadw = fuses_BB["TBLU"][cavidad][1][0];
                    let cavidadh = fuses_BB["TBLU"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["TBLU"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("TBLU DISTANCE X",xDistance)
                    // console.log("TBLU DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === "F136" || cavidad === "F146") {
                                amperaje = "50";
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_b.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_tblu.beginPath();
                    ctx_tblu.strokeStyle = color_style;
                    ctx_tblu.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_tblu(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_tblu,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_tblu(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_tblu,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_tblu.createPattern(image, "no-repeat");
        ctx_tblu.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_tblu.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_pdcd() {
    if (img_pdcd.getContext) {
        var ctx_pdcd = img_pdcd.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcd/pdcd.jpg";
        img.onload = function () {
            imgWidth_pdcd = this.width;
            imgHeight_pdcd = this.height;
            img_pdcd.width = imgWidth_pdcd;
            img_pdcd.height = imgHeight_pdcd;
            ctx_pdcd.drawImage(this, 0, 0, imgWidth_pdcd, imgHeight_pdcd);
            var datosimagen = ctx_pdcd.getImageData(0, 0, imgWidth_pdcd, imgHeight_pdcd);
            datosPrim_pdcd = datosimagen.data;
            ctx_pdcd.fillStyle = "#0F53F1";
            ctx_pdcd.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: PDC-D");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-D: ",pdcd_array)
                for (let i = 0; i < pdcd_array.length; i++) {
                    let cavidad = pdcd_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-D"][pdcd_array[i]][0];
                    //console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-D"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-D"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-D"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-D"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-D"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_a_ATO++;
                            break;
                        case 'MINI':
                            conteo_a_MINI++;
                            break
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("PDC-D DISTANCE X",xDistance)
                    // console.log("PDC-D DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === "F136" || cavidad === "F146") {
                                amperaje = "50";
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_a.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_pdcd.beginPath();
                    ctx_pdcd.strokeStyle = color_style;
                    ctx_pdcd.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcd(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcd,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcd(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcd,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcd.createPattern(image, "no-repeat");
        ctx_pdcd.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcd.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}

function cargar_imagen_pdcp() {
    if (img_pdcp.getContext) {
        var ctx_pdcp = img_pdcp.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcp/pdcp.jpg";
        img.onload = function () {
            imgWidth_pdcp = this.width;
            imgHeight_pdcp = this.height;
            img_pdcp.width = imgWidth_pdcp;
            img_pdcp.height = imgHeight_pdcp;
            // console.log("imgWidth_pdcp: ",imgWidth_pdcp);
            // console.log("imgHeight_pdcp: ",imgHeight_pdcp);
            // console.log("img_pdcp.width: ",img_pdcp.width);
            // console.log("img_pdcp.height: ",img_pdcp.height);
            ctx_pdcp.drawImage(this, 0, 0, imgWidth_pdcp, imgHeight_pdcp);
            var datosimagen = ctx_pdcp.getImageData(0, 0, imgWidth_pdcp, imgHeight_pdcp);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcp = datosimagen.data;
            ctx_pdcp.fillStyle = "#0F53F1";
            ctx_pdcp.lineWidth = "3";
            // console.log("La Caja a pintar es la siguiente: PDC-P");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-P: ",pdcp_array)
                for (let i = 0; i < pdcp_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcp_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-P"][pdcp_array[i]][0];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-P"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-P"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-P"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-P"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-P"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_a_ATO++;
                            break;
                        case 'MINI':
                            conteo_a_MINI++;
                            break
                        case 'MULTI':
                            conteo_a_MULTI++;
                            break
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("PDC-P DISTANCE X",xDistance)
                    // console.log("PDC-P DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    //console.log(color_style);
                    //console.log(fusibleColocado);
                    //color_style = "#ffffff00"
                    switch (fusibleColocado) {
                        case "cafe":
                            //color_style = "#8B4513"
                            amperaje = "7.5";
                            break;
                        case "rojo":
                            //color_style = "#FF0000"
                            if (cavidad === "F136" || cavidad === "F146") {
                                amperaje = "50";
                            } else {
                                amperaje = "10";
                            }
                            break;
                        case "verde":
                            //color_style = "#008000"
                            amperaje = "30";
                            break;
                        case "azul":
                            //color_style = "#0000FF"
                            amperaje = "15";
                            break;
                        case "beige":
                            //color_style = "#FFD700"
                            amperaje = "5";
                            break;
                        case "natural":
                            //color_style = "#FFFFFF"
                            amperaje = "25";
                            break;
                        case "amarillo":
                            //color_style = "#FFFF00"
                            amperaje = "20";
                            break;
                        case "naranja":
                            //color_style = "#FFA500"
                            amperaje = "40";
                            break;
                        case "1008695":
                            //color_style = "#FF00FF"
                            amperaje = "60"; //Rosa
                            break;
                        case "1010733":
                            //color_style = "#A9A9A9"
                            amperaje = "70"; //Gris
                            break;
                        default:
                            amperaje = "N/A";
                            break;
                    }
                    color_style = "#ffffff00";
                    if (amperaje !== "N/A") {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`;
                        arrayFuses_a.push(`${cavidad_ctgry},${amperaje},${fusibleColocado}`)
                    }

                    ctx_pdcp.beginPath();
                    ctx_pdcp.strokeStyle = color_style;
                    ctx_pdcp.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
                    cargar_cavidad_pdcr(
                        cavidad_ctgry,
                        amperaje,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx_pdcp,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );
                }
            }
        };
    }
}

function cargar_cavidad_pdcr(
    cavidad_ctgry,
    amperaje,
    fusibleColocado,
    orientacion,
    image,
    ctx_pdcp,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx_pdcp.createPattern(image, "no-repeat");
        ctx_pdcp.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdcp.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    };
}


function cargar_imagen_pdce() {
    if (img_pdce.getContext) {
        var ctx_pdce = img_pdce.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/FUSIBLES/PDC-E/PDC-E.jpg";
        img.onload = function () {
            imgWidth_pdce = this.width;
            imgHeight_pdce = this.height;
            img_pdce.width = imgWidth_pdce;
            img_pdce.height = imgHeight_pdce;
            // console.log("imgWidth_pdce: ",imgWidth_pdce);
            // console.log("imgHeight_pdce: ",imgHeight_pdce);
            // console.log("img_pdce.width: ",img_pdce.width);
            // console.log("img_pdce.height: ",img_pdce.height);
            ctx_pdce.drawImage(this, 0, 0, imgWidth_pdce, imgHeight_pdce);
            var datosimagen = ctx_pdce.getImageData(0, 0, imgWidth_pdce, imgHeight_pdce);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs = datosimagen.data;
            ctx_pdce.fillStyle = "#0F53F1";
            ctx_pdce.lineWidth = "4";
            // console.log("La Caja a pintar es la siguiente: PDC-E");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-E: ",pdce_array)
                for (let i = 0; i < pdce_array.length; i++) {
                    let cavidad = pdce_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-E"][pdce_array[i]][0];
                    let cavidad_ctgry = fuses_types["PDC-E"][pdce_array[i]];
                    //console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB['PDC-E'][cavidad] == undefined ? null : fuses_BB['PDC-E'][cavidad][0][0]
                    let cavidady = fuses_BB['PDC-E'][cavidad] == undefined ? null : fuses_BB['PDC-E'][cavidad][0][1]
                    let cavidadw = fuses_BB['PDC-E'][cavidad] == undefined ? null : fuses_BB['PDC-E'][cavidad][1][0]
                    let cavidadh = fuses_BB['PDC-E'][cavidad] == undefined ? null : fuses_BB['PDC-E'][cavidad][1][1]
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                            case 'MAXI':
                                conteo_b_MAXI++;
                                break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break
                        case 'RELAY':
                            conteo_b_RELAY++;
                                break
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("PDC-E DISTANCE X",xDistance)
                    // console.log("PDC-E DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? 'h' : 'v';
                    var image = new Image();

                    switch (fusibleColocado) {
                        case "cafe":
                            color_style = "#8B4513"
                            amperaje = '7.5';
                            break;
                        case 'rojo':
                            color_style = "#FF0000"
                            if (cavidad === 'F136' || cavidad === 'F146') {
                                amperaje = '50';
                            } else {
                                amperaje = '10';
                            }
                            break;
                        case "verde":
                            color_style = "#008000"
                            amperaje = '30';
                            break;
                        case "azul":
                            color_style = "#0000FF"
                            amperaje = '15';
                            break;
                        case "beige":
                            color_style = "#FFD700"
                            amperaje = '5';
                            break;
                        case "natural":
                            color_style = "#FFFFFF"
                            amperaje = '25'
                            break;
                        case "amarillo":
                            color_style = "#FFFF00"
                            amperaje = '20';
                            break;
                        case "naranja":
                            color_style = "#FFA500"
                            amperaje = '40';
                            break;
                        case "1008695":
                            color_style = "#FF00FF"
                            amperaje = '60' //Rosa                        
                            break;
                        case "1010733":
                            color_style = "#A9A9A9"
                            amperaje = '70' //Gris                        
                            break;
                        default:
                            amperaje = 'N/A'
                            break;
                    }
                    color_style = '#ffffff00';
                    if (amperaje !== 'N/A' && cavidad_ctgry) {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`
                    }
                    ctx_pdce.beginPath();
                    ctx_pdce.strokeStyle = color_style;
                    ctx_pdce.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    cargar_cavidad_pdce(cavidad_ctgry, amperaje, fusibleColocado, orientacion, image, ctx_pdce, cavidadx, cavidady, cavidadw, cavidadh);
                }
            }
        }
    }
}

function cargar_cavidad_pdce(cavidad_ctgry, amperaje, fusibleColocado, orientacion, image, ctx_pdce, cavidadx, cavidady, cavidadw, cavidadh) {
    image.onload = function () {
        var pat = ctx_pdce.createPattern(image, 'no-repeat');
        ctx_pdce.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdce.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    }
}

function cargar_imagen_pdce_amg() {
    if (img_pdce_amg.getContext) {
        var ctx_pdce_amg = img_pdce_amg.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/FUSIBLES/PDC-E/PDC-E_AMG.jpg";
        img.onload = function () {
            imgWidth_pdce_amg = this.width;
            imgHeight_pdce_amg_t = this.height;
            img_pdce_amg.width = imgWidth_pdce_amg;
            img_pdce_amg.height = imgHeight_pdce_amg_t;
            // console.log("imgWidth_pdce_amg: ",imgWidth_pdce_amg);
            // console.log("imgHeight_pdce_amg_t: ",imgHeight_pdce_amg_t);
            // console.log("img_pdce_amg.width: ",img_pdce_amg.width);
            // console.log("img_pdce_amg.height: ",img_pdce_amg.height);
            ctx_pdce_amg.drawImage(this, 0, 0, imgWidth_pdce_amg, imgHeight_pdce_amg_t);
            var datosimagen = ctx_pdce_amg.getImageData(0, 0, imgWidth_pdce_amg, imgHeight_pdce_amg_t);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs = datosimagen.data;
            ctx_pdce_amg.fillStyle = "#0F53F1";
            ctx_pdce_amg.lineWidth = "4";
            // console.log("La Caja a pintar es la siguiente: PDC-E_AMG");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-E: ",pdce_amg_array)
                for (let i = 0; i < pdce_amg_array.length; i++) {
                    let cavidad = pdce_amg_array[i];
                    //console.log(modularity['vision']["PDC-E_AMG"]);
                    let fusibleColocado = modularity['vision']["PDC-E_AMG"][pdce_amg_array[i]] == undefined ? modularity['vision']["PDC-E"][pdce_amg_array[i]][0] : modularity['vision']["PDC-E_AMG"][pdce_amg_array[i]][0];
                    let cavidad_ctgry = fuses_types["PDC-E_AMG"][pdce_amg_array[i]];
                    //console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB['PDC-E_AMG'][cavidad] == undefined ? null : fuses_BB['PDC-E_AMG'][cavidad][0][0]
                    let cavidady = fuses_BB['PDC-E_AMG'][cavidad] == undefined ? null : fuses_BB['PDC-E_AMG'][cavidad][0][1]
                    let cavidadw = fuses_BB['PDC-E_AMG'][cavidad] == undefined ? null : fuses_BB['PDC-E_AMG'][cavidad][1][0]
                    let cavidadh = fuses_BB['PDC-E_AMG'][cavidad] == undefined ? null : fuses_BB['PDC-E_AMG'][cavidad][1][1]
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        case 'MAXI':
                            conteo_b_MAXI++;
                            break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break;
                        case 'RELAY':
                            conteo_b_RELAY++;
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }


                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-E DISTANCE X",xDistance)
                    // console.log("PDC-E DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? 'h' : 'v';
                    var image = new Image();

                    switch (fusibleColocado) {
                        case "cafe":
                            color_style = "#8B4513"
                            amperaje = '7.5';
                            break;
                        case 'rojo':
                            color_style = "#FF0000"
                            if (cavidad === 'F136' || cavidad === 'F146') {
                                amperaje = '50';
                            } else {
                                amperaje = '10';
                            }
                            break;
                        case "verde":
                            color_style = "#008000"
                            amperaje = '30';
                            break;
                        case "azul":
                            color_style = "#0000FF"
                            amperaje = '15';
                            break;
                        case "beige":
                            color_style = "#FFD700"
                            amperaje = '5';
                            break;
                        case "natural":
                            color_style = "#FFFFFF"
                            amperaje = '25'
                            break;
                        case "amarillo":
                            color_style = "#FFFF00"
                            amperaje = '20';
                            break;
                        case "naranja":
                            color_style = "#FFA500"
                            amperaje = '40';
                            break;
                        case "1008695":
                            color_style = "#FF00FF"
                            amperaje = '60' //Rosa                        
                            break;
                        case "1010733":
                            color_style = "#A9A9A9"
                            amperaje = '70' //Gris                        
                            break;
                        default:
                            amperaje = 'N/A'
                            break;
                    }
                    color_style = '#ffffff00';
                    if (amperaje !== 'N/A') {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`
                    }
                    ctx_pdce_amg.beginPath();
                    ctx_pdce_amg.strokeStyle = color_style;
                    ctx_pdce_amg.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    cargar_cavidad_pdce_amg(image, ctx_pdce_amg, cavidadx, cavidady, cavidadw, cavidadh);
                }
            }
        }
    }
}

function cargar_cavidad_pdce_amg(image, ctx_pdce_amg, cavidadx, cavidady, cavidadw, cavidadh) {
    image.onload = function () {
        var pat = ctx_pdce_amg.createPattern(image, 'no-repeat');
        ctx_pdce_amg.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx_pdce_amg.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    }
}

function cargar_imagen_pdcs1() {
    if (img_pdcs1.getContext) {
        var ctx = img_pdcs1.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/FUSIBLES/PDC-S1/PDC-S1.jpg";
        img.onload = function () {
            imgWidth_pdcs1 = this.width;
            imgHeight_pdcs1 = this.height;
            img_pdcs1.width = imgWidth_pdcs1;
            img_pdcs1.height = imgHeight_pdcs1;
            // console.log("imgWidth_pdcs1: ",imgWidth_pdcs1);
            // console.log("imgHeight_pdcs1: ",imgHeight_pdcs1);
            // console.log("img_pdcs1.width: ",img_pdcs1.width);
            // console.log("img_pdcs1.height: ",img_pdcs1.height);
            ctx.drawImage(this, 0, 0, imgWidth_pdcs1, imgHeight_pdcs1);
            var datosimagen = ctx.getImageData(0, 0, imgWidth_pdcs1, imgHeight_pdcs1);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs = datosimagen.data;
            ctx.fillStyle = "#0F53F1";
            ctx.lineWidth = "4";
            // console.log("La Caja a pintar es la siguiente: PDC-S1");
            pintar()

            function pintar() {
                // console.log("MI ARRAY PDC-E: ",pdcs1_array)
                for (let i = 0; i < pdcs1_array.length; i++) {
                    let cavidad = pdcs1_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = modularity['vision']["PDC-S1"][pdcs1_array[i]][0];
                    let cavidad_ctgry = fuses_types["PDC-S1"][pdcs1_array[i]];
                    //console.log("Fusible Colocado: ", fusibleColocado);

                    let cavidadx = fuses_BB['PDC-S1'][cavidad] == undefined ? null : fuses_BB['PDC-S1'][cavidad][0][0]
                    let cavidady = fuses_BB['PDC-S1'][cavidad] == undefined ? null : fuses_BB['PDC-S1'][cavidad][0][1]
                    let cavidadw = fuses_BB['PDC-S1'][cavidad] == undefined ? null : fuses_BB['PDC-S1'][cavidad][1][0]
                    let cavidadh = fuses_BB['PDC-S1'][cavidad] == undefined ? null : fuses_BB['PDC-S1'][cavidad][1][1]
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    switch (cavidad_ctgry) {
                        case 'ATO':
                            conteo_b_ATO++;
                            break;
                        case 'MINI':
                            conteo_b_MINI++;
                            break;
                        default:
                            console.log('ALERTA FUSIBLE NO CONTADO', cavidad_ctgry)
                            break;
                    }
                    // console.log("PDC-E DISTANCE X",xDistance)
                    // console.log("PDC-E DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? 'h' : 'v';
                    var image = new Image();

                    switch (fusibleColocado) {
                        case "cafe":
                            color_style = "#8B4513"
                            amperaje = '7.5';
                            break;
                        case 'rojo':
                            color_style = "#FF0000"
                            amperaje = '10';
                            break;
                        case "verde":
                            color_style = "#008000"
                            amperaje = '30';
                            break;
                        case "azul":
                            color_style = "#0000FF"
                            amperaje = '15';
                            break;
                        case "beige":
                            color_style = "#FFD700"
                            amperaje = '5';
                            break;
                        case "natural":
                            color_style = "#FFFFFF"
                            amperaje = '25'
                            break;
                        case "amarillo":
                            color_style = "#FFFF00"
                            amperaje = '20';
                            break;
                        case "naranja":
                            color_style = "#FFA500"
                            amperaje = '40';
                            break;
                        case "1008695":
                            color_style = "#FF00FF"
                            amperaje = '60' //Rosa                        
                            break;
                        case "1010733":
                            color_style = "#A9A9A9"
                            amperaje = '70' //Gris                        
                            break;
                        default:
                            amperaje = 'N/A'
                            break;
                    }
                    color_style = '#ffffff00';
                    if (amperaje !== 'N/A') {
                        image.src = `static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`
                    }
                    ctx.beginPath();
                    ctx.strokeStyle = color_style;
                    ctx.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                    cargar_cavidad_pdcs1(image, ctx, cavidadx, cavidady, cavidadw, cavidadh);
                }
            }
        }
    }
}

function cargar_cavidad_pdcs1(image, ctx, cavidadx, cavidady, cavidadw, cavidadh) {
    image.onload = function () {
        var pat = ctx.createPattern(image, 'no-repeat');
        ctx.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${amperaje},${fusibleColocado}${orientacion}.jpg`)
    }
}

///////////// Funciones para Torque ////////////
function cargar_imagen_pdcr_t() {
    if (img_pdcr_t.getContext) {
        var ctx_pdcr_t = img_pdcr_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr2/pdcr2.jpg";
        img.onload = function () {
            imgWidth_pdcr_t = this.width;
            imgHeight_pdcr_t = this.height;
            img_pdcr_t.width = imgWidth_pdcr_t;
            img_pdcr_t.height = imgHeight_pdcr_t;
            // console.log("imgWidth_pdcr_t: ",imgWidth_pdcr_t);
            // console.log("imgHeight_pdcr_t: ",imgHeight_pdcr_t);
            // console.log("img_pdcr_t.width: ",img_pdcr_t.width);
            // console.log("img_pdcr_t.height: ",img_pdcr_t.height);
            ctx_pdcr_t.drawImage(this, 0, 0, imgWidth_pdcr_t, imgHeight_pdcr_t);
            ctx_pdcr_t.fillStyle = "#0F53F1";
            ctx_pdcr_t.lineWidth = "3";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-R: ",pdcr_t_array)
                for (let i = 0; i < pdcr_t_array.length; i++) {
                    let cavidad = pdcr_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-R"][pdcr_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-R"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-R"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-R"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-R"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_pdcr_t.beginPath();
                    ctx_pdcr_t.strokeStyle = "green";
                    ctx_pdcr_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdcr_1_t() {
    if (img_pdcr_mid_t.getContext) {
        var ctx_pdcr_mid_t = img_pdcr_mid_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr2_mid/pdcr2_mid.jpg";
        img.onload = function () {
            imgWidth_pdcr_mid_t = this.width;
            imgHeight_pdcr_mid_t = this.height;
            img_pdcr_mid_t.width = imgWidth_pdcr_mid_t;
            img_pdcr_mid_t.height = imgHeight_pdcr_mid_t;
            // console.log("imgWidth_pdcr_mid_t: ",imgWidth_pdcr_mid_t);
            // console.log("imgHeight_pdcr_mid_t: ",imgHeight_pdcr_mid_t);
            // console.log("img_pdcr_mid_t.width: ",img_pdcr_mid_t.width);
            // console.log("img_pdcr_mid_t.height: ",img_pdcr_mid_t.height);
            ctx_pdcr_mid_t.drawImage(this, 0, 0, imgWidth_pdcr_mid_t, imgHeight_pdcr_mid_t);
            ctx_pdcr_mid_t.fillStyle = "#0F53F1";
            ctx_pdcr_mid_t.lineWidth = "3";
            pintar()

            function pintar() {
                // console.log("MI ARRAY Torques PDC-RMID: ",pdcr_mid_t_array)
                for (let i = 0; i < pdcr_mid_t_array.length; i++) {
                    let cavidad = pdcr_mid_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-RMID"][pdcr_mid_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-RMID"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-RMID"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-RMID"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-RMID"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_pdcr_mid_t.beginPath();
                    ctx_pdcr_mid_t.strokeStyle = "green";
                    ctx_pdcr_mid_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdcr_small_t() {
    if (img_pdcr_small_t.getContext) {
        var ctx_pdcr_small_t = img_pdcr_small_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr2_small/pdcr2_small.jpg";
        img.onload = function () {
            imgWidth_pdcr_small_t = this.width;
            imgHeight_pdcr_small_t = this.height;
            img_pdcr_small_t.width = imgWidth_pdcr_small_t;
            img_pdcr_small_t.height = imgHeight_pdcr_small_t;
            // console.log("imgWidth_pdcr_small_t: ",imgWidth_pdcr_small_t);
            // console.log("imgHeight_pdcr_small_t: ",imgHeight_pdcr_small_t);
            console.log("img_pdcr_small_t.width: ", img_pdcr_small_t.width);
            console.log("img_pdcr_small_t.height: ", img_pdcr_small_t.height);
            ctx_pdcr_small_t.drawImage(this, 0, 0, imgWidth_pdcr_small_t, imgHeight_pdcr_small_t);
            ctx_pdcr_small_t.fillStyle = "#0F53F1";
            ctx_pdcr_small_t.lineWidth = "3";
            pintar()

            function pintar() {
                // console.log("MI ARRAY Torques PDC-RS: ",pdcr_small_t_array)
                for (let i = 0; i < pdcr_small_t_array.length; i++) {
                    let cavidad = pdcr_small_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-RS"][pdcr_small_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-RS"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-RS"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-RS"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-RS"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_pdcr_small_t.beginPath();
                    ctx_pdcr_small_t.strokeStyle = "green";
                    ctx_pdcr_small_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdcp_t() {
    if (img_pdcp_t.getContext) {
        var ctx_pdcp_t = img_pdcp_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcp/pdcp.jpg";
        img.onload = function () {
            imgWidth_pdcp_t = this.width;
            imgHeight_pdcp_t = this.height;
            img_pdcp_t.width = imgWidth_pdcp_t;
            img_pdcp_t.height = imgHeight_pdcp_t;
            // console.log("imgWidth_pdcp_t: ",imgWidth_pdcp_t);
            // console.log("imgHeight_pdcp_t: ",imgHeight_pdcp_t);
            // console.log("img_pdcp_t.width: ",img_pdcp_t.width);
            // console.log("img_pdcp_t.height: ",img_pdcp_t.height);
            ctx_pdcp_t.drawImage(this, 0, 0, imgWidth_pdcp_t, imgHeight_pdcp_t);
            ctx_pdcp_t.fillStyle = "#0F53F1";
            ctx_pdcp_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-P: ",pdcp_t_array)
                for (let i = 0; i < pdcp_t_array.length; i++) {
                    let cavidad = pdcp_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-P"][pdcp_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-P"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-P"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-P"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-P"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_pdcp_t.beginPath();
                    ctx_pdcp_t.strokeStyle = "green";
                    ctx_pdcp_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdcd_t() {
    if (img_pdcd_t.getContext) {
        var ctx_pdcd_t = img_pdcd_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcd2/pdcd2.jpg";
        img.onload = function () {
            imgWidth_pdcd_t = this.width;
            imgHeight_pdcd_t = this.height;
            img_pdcd_t.width = imgWidth_pdcd_t;
            img_pdcd_t.height = imgHeight_pdcd_t;
            // console.log("imgWidth_pdcd_t: ",imgWidth_pdcd_t);
            // console.log("imgHeight_pdcd_t: ",imgHeight_pdcd_t);
            // console.log("img_pdcd_t.width: ",img_pdcd_t.width);
            // console.log("img_pdcd_t.height: ",img_pdcd_t.height);
            ctx_pdcd_t.drawImage(this, 0, 0, imgWidth_pdcd_t, imgHeight_pdcd_t);
            ctx_pdcd_t.fillStyle = "#0F53F1";
            ctx_pdcd_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-D: ",pdcd_t_array)
                for (let i = 0; i < pdcd_t_array.length; i++) {
                    let cavidad = pdcd_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-D"][pdcd_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-D"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-D"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-D"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-D"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_pdcd_t.beginPath();
                    ctx_pdcd_t.strokeStyle = "green";
                    ctx_pdcd_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_mfbp1_t() {
    if (img_mfbp1_t.getContext) {
        var ctx_mfbp1_t = img_mfbp1_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/mfbp1/mfbp1.jpg";
        img.onload = function () {
            imgWidth_mfbp1_t = this.width;
            imgHeight_mfbp1_t = this.height;
            img_mfbp1_t.width = imgWidth_mfbp1_t;
            img_mfbp1_t.height = imgHeight_mfbp1_t;
            // console.log("imgWidth_mfbp1_t: ",imgWidth_mfbp1_t);
            // console.log("imgHeight_mfbp1_t: ",imgHeight_mfbp1_t);
            // console.log("img_mfbp1_t.width: ",img_mfbp1_t.width);
            // console.log("img_mfbp1_t.height: ",img_mfbp1_t.height);
            ctx_mfbp1_t.drawImage(this, 0, 0, imgWidth_mfbp1_t, imgHeight_mfbp1_t);
            ctx_mfbp1_t.fillStyle = "#0F53F1";
            ctx_mfbp1_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques MFB-P1: ",mfbp1_t_array)
                for (let i = 0; i < mfbp1_t_array.length; i++) {
                    let cavidad = mfbp1_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["MFB-P1"][mfbp1_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["MFB-P1"][cavidad][0][0];
                    let cavidady = torques_BB["MFB-P1"][cavidad][0][1];
                    let cavidadw = torques_BB["MFB-P1"][cavidad][1][0];
                    let cavidadh = torques_BB["MFB-P1"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_mfbp1_t.beginPath();
                    ctx_mfbp1_t.strokeStyle = "green";
                    ctx_mfbp1_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_mfbs_t() {
    if (img_mfbs_t.getContext) {
        var ctx_mfbs_t = img_mfbs_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/mfbs/mfbs.jpg";
        img.onload = function () {
            imgWidth_mfbs_t = this.width;
            imgHeight_mfbs_t = this.height;
            img_mfbs_t.width = imgWidth_mfbs_t;
            img_mfbs_t.height = imgHeight_mfbs_t;
            // console.log("imgWidth_mfbs_t: ",imgWidth_mfbs_t);
            // console.log("imgHeight_mfbs_t: ",imgHeight_mfbs_t);
            // console.log("img_mfbs_t.width: ",img_mfbs_t.width);
            // console.log("img_mfbs_t.height: ",img_mfbs_t.height);
            ctx_mfbs_t.drawImage(this, 0, 0, imgWidth_mfbs_t, imgHeight_mfbs_t);
            ctx_mfbs_t.fillStyle = "#0F53F1";
            ctx_mfbs_t.lineWidth = "2.5";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques MFB-S: ",mfbs_t_array)
                for (let i = 0; i < mfbs_t_array.length; i++) {
                    let cavidad = mfbs_t_array[i];
                    //console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["MFB-S"][mfbs_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["MFB-S"][cavidad][0][0];
                    let cavidady = torques_BB["MFB-S"][cavidad][0][1];
                    let cavidadw = torques_BB["MFB-S"][cavidad][1][0];
                    let cavidadh = torques_BB["MFB-S"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_mfbs_t.beginPath();
                    ctx_mfbs_t.strokeStyle = "green";
                    ctx_mfbs_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_mfbe_t() {
    if (img_mfbe_t.getContext) {
        var ctx_mfbe_t = img_mfbe_t.getContext("2d");
        var img = new Image();
        if (estacion.includes("MBM")) {
            img.src = "static/content/cajas/motor/mfbe/mfbe.jpg";
        }else{
            img.src = "static/content/cajas/interior/mfbe/mfbe.jpg";
        }
        img.onload = function () {
            imgWidth_mfbe_t = this.width;
            imgHeight_mfbe_t = this.height;
            img_mfbe_t.width = imgWidth_mfbe_t;
            img_mfbe_t.height = imgHeight_mfbe_t;
            // console.log("imgWidth_mfbe_t: ",imgWidth_mfbe_t);
            // console.log("imgHeight_mfbe_t: ",imgHeight_mfbe_t);
            // console.log("img_mfbe_t.width: ",img_mfbe_t.width);
            // console.log("img_mfbe_t.height: ",img_mfbe_t.height);
            ctx_mfbe_t.drawImage(this, 0, 0, imgWidth_mfbe_t, imgHeight_mfbe_t);
            ctx_mfbe_t.fillStyle = "#0F53F1";
            ctx_mfbe_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques MFB-E: ",mfbe_t_array)
                for (let i = 0; i < mfbe_t_array.length; i++) {
                    let cavidad = mfbe_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["MFB-E"][mfbe_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);
                    
                    let cavidadx = torques_BB["MFB-E"][cavidad][0][0];
                    let cavidady = torques_BB["MFB-E"][cavidad][0][1];
                    let cavidadw = torques_BB["MFB-E"][cavidad][1][0];
                    let cavidadh = torques_BB["MFB-E"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    ctx_mfbe_t.beginPath();
                    ctx_mfbe_t.strokeStyle = "green";
                    ctx_mfbe_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_mfbp2_t() {
    if (img_mfbp2_t.getContext) {
        var ctx_mfbp2_t = img_mfbp2_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/mfbp2/mfbp2.jpg";
        img.onload = function () {
            imgWidth_mfbp2_t = this.width;
            imgHeight_mfbp2_t = this.height;
            img_mfbp2_t.width = imgWidth_mfbp2_t;
            img_mfbp2_t.height = imgHeight_mfbp2_t;
            // console.log("imgWidth_mfbp2_t: ",imgWidth_mfbp2_t);
            // console.log("imgHeight_mfbp2_t: ",imgHeight_mfbp2_t);
            // console.log("img_mfbp2_t.width: ",img_mfbp2_t.width);
            // console.log("img_mfbp2_t.height: ",img_mfbp2_t.height);
            ctx_mfbp2_t.drawImage(this, 0, 0, imgWidth_mfbp2_t, imgHeight_mfbp2_t);
            ctx_mfbp2_t.fillStyle = "#0F53F1";
            ctx_mfbp2_t.lineWidth = "3";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques MFB-P2: ",mfbp2_t_array)
                for (let i = 0; i < mfbp2_t_array.length; i++) {
                    let cavidad = mfbp2_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["MFB-P2"][mfbp2_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["MFB-P2"][cavidad][0][0];
                    let cavidady = torques_BB["MFB-P2"][cavidad][0][1];
                    let cavidadw = torques_BB["MFB-P2"][cavidad][1][0];
                    let cavidadh = torques_BB["MFB-P2"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_mfbp2_t.beginPath();
                    ctx_mfbp2_t.strokeStyle = "green";
                    ctx_mfbp2_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_bt_t() {
    if (img_bt_t.getContext) {
        var ctx_bt_t = img_bt_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/bt/bt.jpg";
        img.onload = function () {
            imgWidth_bt_t = this.width;
            imgHeight_bt_t = this.height;
            img_bt_t.width = imgWidth_bt_t;
            img_bt_t.height = imgHeight_bt_t;
            // console.log("imgWidth_bt_t: ",imgWidth_bt_t);
            // console.log("imgHeight_bt_t: ",imgHeight_bt_t);
            // console.log("img_bt_t.width: ",img_bt_t.width);
            // console.log("img_bt_t.height: ",img_bt_t.height);
            ctx_bt_t.drawImage(this, 0, 0, imgWidth_bt_t, imgHeight_bt_t);
            ctx_bt_t.fillStyle = "#0F53F1";
            ctx_bt_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques BATTERY: ",bt_t_array)
                for (let i = 0; i < bt_t_array.length; i++) {
                    let cavidad = bt_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["BATTERY"][bt_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["BATTERY"][cavidad][0][0];
                    let cavidady = torques_BB["BATTERY"][cavidad][0][1];
                    let cavidadw = torques_BB["BATTERY"][cavidad][1][0];
                    let cavidadh = torques_BB["BATTERY"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_bt_t.beginPath();
                    ctx_bt_t.strokeStyle = "green";
                    ctx_bt_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_battery2_t() {
    if (img_battery2_t.getContext) {
        var ctx_battery2_t = img_battery2_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/bt/bt.jpg";
        img.onload = function () {
            imgWidth_battery2_t = this.width;
            imgHeight_battery2_t = this.height;
            img_battery2_t.width = imgWidth_battery2_t;
            img_battery2_t.height = imgHeight_battery2_t;
            // console.log("imgWidth_battery2_t: ",imgWidth_battery2_t);
            // console.log("imgHeight_battery2_t: ",imgHeight_battery2_t);
            // console.log("img_battery2_t.width: ",img_battery2_t.width);
            // console.log("img_battery2_t.height: ",img_battery2_t.height);
            ctx_battery2_t.drawImage(this, 0, 0, imgWidth_battery2_t, imgHeight_battery2_t);
            ctx_battery2_t.fillStyle = "#0F53F1";
            ctx_battery2_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques BATTERY-2: ",battery2_t_array)
                for (let i = 0; i < battery2_t_array.length; i++) {
                    let cavidad = battery2_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["BATTERY-2"][battery2_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["BATTERY-2"][cavidad][0][0];
                    let cavidady = torques_BB["BATTERY-2"][cavidad][0][1];
                    let cavidadw = torques_BB["BATTERY-2"][cavidad][1][0];
                    let cavidadh = torques_BB["BATTERY-2"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    ctx_battery2_t.beginPath();
                    ctx_battery2_t.strokeStyle = "green";
                    ctx_battery2_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdce_t() {
    if (img_pdce_t.getContext) {
        var ctx_pdce_t = img_pdce_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/PDC-E/PDC-E.jpg";
        img.onload = function () {
            imgWidth_pdce_t = this.width;
            imgHeight_pdce_t = this.height;
            img_pdce_t.width = imgWidth_pdce_t;
            img_pdce_t.height = imgHeight_pdce_t;
            // console.log("imgWidth_pdce_t: ", imgWidth_pdce_t);
            // console.log("imgHeight_pdce_t: ", imgHeight_pdce_t);
            // console.log("img_pdce_t.width: ", img_pdce_t.width);
            // console.log("img_pdce_t.height: ", img_pdce_t.height);
            ctx_pdce_t.drawImage(this, 0, 0, imgWidth_pdce_t, imgHeight_pdce_t);
            ctx_pdce_t.fillStyle = "#0F53F1";
            ctx_pdce_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-E: ", pdce_t_array)
                for (let i = 0; i < pdce_t_array.length; i++) {
                    let cavidad = pdce_t_array[i];
                    //console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-E"][pdce_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-E"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-E"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-E"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-E"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    ctx_pdce_t.beginPath();
                    ctx_pdce_t.strokeStyle = "green";
                    ctx_pdce_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdce_amg_t() {
    if (img_pdce_amg_t.getContext) {
        var ctx_pdce_amg_t = img_pdce_amg_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/PDC-E/PDC-E_AMG.jpg";
        img.onload = function () {
            imgWidth_pdce_amg_t = this.width;
            imgHeight_pdce_amg_t = this.height;
            img_pdce_amg_t.width = imgWidth_pdce_amg_t;
            img_pdce_amg_t.height = imgHeight_pdce_amg_t;
            // console.log("imgWidth_pdce_amg_t: ",imgWidth_pdce_amg_t);
            // console.log("imgHeight_pdce_amg_t: ",imgHeight_pdce_amg_t);
            // console.log("img_pdce_amg_t.width: ",img_pdce_amg_t.width);
            // console.log("img_pdce_amg_t.height: ",img_pdce_amg_t.height);
            ctx_pdce_amg_t.drawImage(this, 0, 0, imgWidth_pdce_amg_t, imgHeight_pdce_amg_t);
            ctx_pdce_amg_t.fillStyle = "#0F53F1";
            ctx_pdce_amg_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-E_AMG: ",pdce_amg_t_array)
                for (let i = 0; i < pdce_amg_t_array.length; i++) {
                    let cavidad = pdce_amg_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-E_AMG"][pdce_amg_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-E_AMG"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-E_AMG"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-E_AMG"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-E_AMG"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    ctx_pdce_amg_t.beginPath();
                    ctx_pdce_amg_t.strokeStyle = "green";
                    ctx_pdce_amg_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdce_cover_t() {
    if (img_pdce_cover_t.getContext) {
        var ctx_pdce_cover_t = img_pdce_cover_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/PDC-E/PDC-E_COVER.jpg";
        img.onload = function () {
            imgWidth_pdce_cover_t = this.width;
            imgHeight_pdce_cover_t = this.height;
            img_pdce_cover_t.width = imgWidth_pdce_cover_t;
            img_pdce_cover_t.height = imgHeight_pdce_cover_t;
            // console.log("imgWidth_pdce_cover_t: ",imgWidth_pdce_cover_t);
            // console.log("imgHeight_pdce_cover_t: ",imgHeight_pdce_cover_t);
            // console.log("img_pdce_cover_t.width: ",img_pdce_cover_t.width);
            // console.log("img_pdce_cover_t.height: ",img_pdce_cover_t.height);
            ctx_pdce_cover_t.drawImage(this, 0, 0, imgWidth_pdce_cover_t, imgHeight_pdce_cover_t);
            ctx_pdce_cover_t.fillStyle = "#0F53F1";
            ctx_pdce_cover_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-ECOVER: ",pdce_cover_t_array)
                for (let i = 0; i < pdce_cover_t_array.length; i++) {
                    let cavidad = pdce_cover_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-ECOVER"][pdce_cover_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-ECOVER"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-ECOVER"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-ECOVER"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-ECOVER"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    ctx_pdce_cover_t.beginPath();
                    ctx_pdce_cover_t.strokeStyle = "green";
                    ctx_pdce_cover_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_pdcs1_t() {
    if (img_pdcs1_t.getContext) {
        var ctx_t = img_pdcs1_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/PDC-S1/PDC-S1.jpg";
        img.onload = function () {
            imgWidth_pdcs1_t = this.width;
            imgHeight_pdcs1_t = this.height;
            img_pdcs1_t.width = imgWidth_pdcs1_t;
            img_pdcs1_t.height = imgHeight_pdcs1_t;
            // console.log("imgWidth_pdcs1_t: ",imgWidth_pdcs1_t);
            // console.log("imgHeight_pdcs1_t: ",imgHeight_pdcs1_t);
            // console.log("img_pdcs1_t.width: ",img_pdcs1_t.width);
            // console.log("img_pdcs1_t.height: ",img_pdcs1_t.height);
            ctx_t.drawImage(this, 0, 0, imgWidth_pdcs1_t, imgHeight_pdcs1_t);
            ctx_t.fillStyle = "#0F53F1";
            ctx_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques PDC-S1: ",pdcs1_t_array)
                for (let i = 0; i < pdcs1_t_array.length; i++) {
                    let cavidad = pdcs1_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["PDC-S1"][pdcs1_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["PDC-S1"][cavidad][0][0];
                    let cavidady = torques_BB["PDC-S1"][cavidad][0][1];
                    let cavidadw = torques_BB["PDC-S1"][cavidad][1][0];
                    let cavidadh = torques_BB["PDC-S1"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    ctx_t.beginPath();
                    ctx_t.strokeStyle = "green";
                    ctx_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}

function cargar_imagen_g11_t() {
    if (img_g11_t.getContext) {
        var ctx_g11_t = img_g11_t.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/G11/G11.jpg";
        img.onload = function() {
            imgWidth_g11_t = this.width;
            imgHeight_g11_t = this.height;
            img_g11_t.width = imgWidth_g11_t;
            img_g11_t.height = imgHeight_g11_t;
            // console.log("imgWidth_g11_t: ",imgWidth_g11_t);
            // console.log("imgHeight_g11_t: ",imgHeight_g11_t);
            // console.log("img_g11_t.width: ",img_g11_t.width);
            // console.log("img_g11_t.height: ",img_g11_t.height);
            ctx_g11_t.drawImage(this, 0, 0, imgWidth_g11_t, imgHeight_g11_t);
            ctx_g11_t.fillStyle = "#0F53F1";
            ctx_g11_t.lineWidth = "4";
            pintar();

            function pintar() {
                // console.log("MI ARRAY Torques G11: ",g11_t_array)
                for (let i = 0; i < g11_t_array.length; i++) {
                    let cavidad = g11_t_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let torqueColocado = modularity['torque']["G11"][g11_t_array[i]];
                    // console.log("Torque Colocado: ",torqueColocado);

                    let cavidadx = torques_BB["G11"][cavidad][0][0];
                    let cavidady = torques_BB["G11"][cavidad][0][1];
                    let cavidadw = torques_BB["G11"][cavidad][1][0];
                    let cavidadh = torques_BB["G11"][cavidad][1][1];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S1 DISTANCE X",xDistance)
                    // console.log("PDC-S1 DISTANCE Y",yDistance)
                    ctx_g11_t.beginPath();
                    ctx_g11_t.strokeStyle = "green";
                    ctx_g11_t.strokeRect(cavidadx, cavidady, xDistance, yDistance);
                }
            }
        }
    }
}






//////////////////////////////////////////// ToolTips para Cavidades ////////////////////////////////////////////
/////////////////// ***********ToolTips para FUSIBLES***********///////////////////
// create a tool-tip instance:
// var t1 = new ToolTip_pdcs(img_pdcs, "This is a tool-tip", 182);
// // The Tool-Tip instance:
// function ToolTip_pdcs(img_pdcs, text, width) {
//     var me = this, // self-reference for event handlers
//         div = document.createElement("div"), // the tool-tip div
//         parent = img_pdcs.parentNode, // parent node for img_pdcs
//         visible = false; // current status
//     // show the tool-tip
//     this.show = function (pos) {
//         if (!visible) { // ignore if already shown (or reset time)
//             visible = true; // lock so it's only shown once
//             setDivPos(pos); // set position
//             parent.appendChild(div); // add to parent of img_pdcs
//         }
//     }
//     // hide the tool-tip
//     function hide() {
//         visible = false; // hide it after timeout
//         if (parent.contains(div)) {
//             parent.removeChild(div); // remove from DOM
//         }
//     }

//     let keys_cavidad = Object.keys(fuses_BB['PDC-S']);
//     // console.log("KEYS DE PDCS: ",keys_cavidad);
//     let cavidad;
//     let module;
//     let amperaje;
//     // check mouse position, add limits as wanted... just for example:
//     function check(e) {
//         if (parent.contains(div)) {
//             hide();
//         }
//         var pos = getPos(e),
//             posAbs = {
//                 x: e.clientX,
//                 y: e.clientY
//             }; // div is fixed, so use clientX/Y
//         for (i = 1; i < keys_cavidad.length + 1; i++) {
//             category = fuses_types['PDC-S'][cavidad]
//             let fusible_tooltip;
//             if (!visible && pos.x >= fuses_BB['PDC-S'][i][0][0] && pos.x <= fuses_BB['PDC-S'][i][1][0] && pos.y >= fuses_BB['PDC-S'][i][0][1] && pos.y <= fuses_BB['PDC-S'][i][1][1]) {
//                 cavidad = keys_cavidad[i - 1];
//                 // set some initial styles, can be replaced by class-name etc.
//                 div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
//                 if (modularity['vision']['PDC-S'][cavidad] == undefined) {
//                     fusible_tooltip = "Vacío";
//                     module = "N/A";
//                 } else {
//                     fusible_tooltip = modularity['vision']['PDC-S'][cavidad][0];
//                     module = modularity['vision']['PDC-S'][cavidad][1];
//                 }
//                 //console.log(fusible_tooltip);
//                 switch (fusible_tooltip) {
//                     case 'beige':
//                         amperaje = '5 A';
//                         break;
//                     case 'cafe':
//                         amperaje = '7.5 A';
//                         break;
//                     case 'rojo':
//                         amperaje = '10 A';
//                         break;
//                     case 'azul':
//                         amperaje = '15 A';
//                         break;
//                     case 'verde':
//                         amperaje = '30 A';
//                         break;
//                     default:
//                         amperaje = 'N/A';
//                         category = ''
//                         break;
//                 }

//                 div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category} ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
//                 me.show(posAbs); // show tool-tip at this pos
//             } else setDivPos(posAbs);
//         } // otherwise, update position
//     }
//     // get mouse position relative to img_pdcs
//     function getPos(e) {
//         var r = img_pdcs.getBoundingClientRect();
//         return {
//             x: e.clientX - r.left,
//             y: e.clientY - r.top
//         }
//     }
//     // update and adjust div position if needed (anchor to a different corner etc.)
//     function setDivPos(pos) {
//         if (visible) {
//             if (pos.x < 0) pos.x = 0;
//             if (pos.y < 0) pos.y = 0;
//             // other bound checks here
//             div.style.left = pos.x + "px";
//             div.style.top = pos.y + "px";
//         }
//     }
//     // we need to use shared event handlers:
//     img_pdcs.addEventListener("mousemove", check);
//     $(document).on('wheel', function () {
//         hide();
//     });
// }
//-----------------------------  PDC-RS ToolTip
function ToolTip_pdcrs_1t(img_pdcr_small_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr_small_t.parentNode, // parent node for img_pdcr_small_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr_small_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-RS']);
    // console.log("KEYS DE PDC-RS: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-RS'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-RS'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-RS'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-RS'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-RS'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-RS'][posicion][0] == 1 | modularity['torque']['PDC-RS'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-RS'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr_small_t
    function getPos(e) {
        var r = img_pdcr_small_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcr_small_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-R ToolTip
function ToolTip_pdcr(img_pdcr, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr.parentNode, // parent node for img_pdcr
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-R']);
    // console.log("KEYS DE PDC-R: ",keys_cavidad);
    let cavidad;
    let module;
    let amperaje;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            var category = fuses_types['PDC-R'][cavidad]
            if (!visible && pos.x >= fuses_BB['PDC-R'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-R'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-R'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-R'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-R'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-R'][cavidad][0];
                    module = modularity['vision']['PDC-R'][cavidad][1];
                } else if (modularity['vision']['PDC-RMID'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-RMID'][cavidad][0];
                    module = modularity['vision']['PDC-RMID'][cavidad][1];
                } else if (modularity['vision']['PDC-RS'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-RS'][cavidad][0];
                    module = modularity['vision']['PDC-RS'][cavidad][1];
                } else {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        if (cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                            amperaje = '50 A';
                        } else {
                            amperaje = '10 A';
                        }
                        break;
                    case "1008695":
                        amperaje = '60 A' //Rosa
                        break;
                    case "1010733":
                        amperaje = '70 A' //Gris
                        break;
                    default:
                        amperaje = 'N/A';
                        category = '';
                        break;


                }

                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category}  ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr
    function getPos(e) {
        var r = img_pdcr.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcr.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-RMID ToolTip
function ToolTip_pdcr_1(img_pdcr_1, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr_1.parentNode, // parent node for img_pdcr_1
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr_1
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-RMID']);
    // console.log("KEYS DE PDC-RMID: ",keys_cavidad);
    let cavidad;
    let module;
    let amperaje;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            var category = fuses_types['PDC-RMID'][cavidad];
            if (!visible && pos.x >= fuses_BB['PDC-RMID'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-RMID'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-RMID'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-RMID'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-RMID'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-RMID'][cavidad][0];
                    module = modularity['vision']['PDC-RMID'][cavidad][1];
                } else if (modularity['vision']['PDC-RS'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-RS'][cavidad][0];
                    module = modularity['vision']['PDC-RS'][cavidad][1];
                } else if (modularity['vision']['PDC-R'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-R'][cavidad][0];
                    module = modularity['vision']['PDC-R'][cavidad][1];
                } else {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        if (cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                            amperaje = '50 A';
                        } else {
                            amperaje = '10 A';
                        }
                        break;
                    case "1008695":
                        amperaje = '60 A' //Rosa
                        break;
                    case "1010733":
                        amperaje = '70 A' //Gris
                        break;
                    default:
                        amperaje = 'N/A';
                        category = ''
                        break;


                }

                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category} ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr_1
    function getPos(e) {
        var r = img_pdcr_1.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcr_1.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//////////////////////////////////////////// ToolTips para Cavidades ////////////////////////////////////////////
/////////////////// ***********ToolTips para FUSIBLES***********///////////////////
// create a tool-tip instance:
var t1 = new ToolTip_pdcs1(img_pdcs1, "This is a tool-tip", 150);
// The Tool-Tip instance:
function ToolTip_pdcs1(img_pdcs1, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcs1.parentNode, // parent node for img_pdcs1
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcs1
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-S1']);
    //console.log("KEYS DE PDC-S1: ", keys_cavidad);
    let cavidad;
    let module;
    let amperaje;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {

        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            let fusible_tooltip;
            //console.log(fuses_BB['PDC-S1'][keys_cavidad[i]])
            if (!visible && pos.x >= fuses_BB['PDC-S1'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-S1'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-S1'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-S1'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-S1'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                } else {
                    fusible_tooltip = modularity['vision']['PDC-S1'][cavidad][0];
                    module = modularity['vision']['PDC-S1'][cavidad][1];
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'rojo':
                        amperaje = '10 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    default:
                        amperaje = 'N/A';
                        break;
                }

                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcs1
    function getPos(e) {
        var r = img_pdcs1.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcs1.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-E ToolTip
// The Tool-Tip instance:
function ToolTip_pdce(img_pdce, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdce.parentNode, // parent node for img_pdce
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdce
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-E']);
    console.log("KEYS DE PDC-E: ", keys_cavidad);
    let cavidad;
    let module;
    let amperaje;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {

        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            let fusible_tooltip;
            //console.log(fuses_BB['PDC-E'][keys_cavidad[i]])
            if (!visible && pos.x >= fuses_BB['PDC-E'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-E'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-E'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-E'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-E'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-E'][cavidad][0];
                    module = modularity['vision']['PDC-E'][cavidad][1];
                } else {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        amperaje = '10 A';
                        break;
                    case "1010733":
                        amperaje = '70 A' //Gris
                        break;
                    default:
                        amperaje = 'N/A';
                        break;
                }

                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdce
    function getPos(e) {
        var r = img_pdce.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdce.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-E_AMG ToolTip
// The Tool-Tip instance:
function ToolTip_pdce_amg(img_pdce_amg, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdce_amg.parentNode, // parent node for img_pdce_amg
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdce_amg
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-E_AMG']);
    console.log("KEYS DE PDC-E_AMG: ", keys_cavidad);
    let cavidad;
    let module;
    let amperaje;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {

        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            let fusible_tooltip;
            //console.log(fuses_BB['PDC-E_AMG'][keys_cavidad[i]])
            if (!visible && pos.x >= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-E_AMG'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-E_AMG'][cavidad][0];
                    module = modularity['vision']['PDC-E_AMG'][cavidad][1];
                } else if (modularity['vision']['PDC-E'].hasOwnProperty(cavidad)) {
                    fusible_tooltip = modularity['vision']['PDC-E'][cavidad][0];
                    module = modularity['vision']['PDC-E'][cavidad][1];
                } else {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                }

                // if (modularity['vision']['PDC-E_AMG'][cavidad] == undefined) {
                //     fusible_tooltip = "Vacío";
                //     module = "N/A";
                // } else {
                //     fusible_tooltip = modularity['vision']['PDC-E_AMG'][cavidad][0];
                //     module = modularity['vision']['PDC-E_AMG'][cavidad][1];
                // }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        amperaje = '10 A';
                        break;
                    case "1010733":
                        amperaje = '70 A' //Gris
                        break;
                    default:
                        amperaje = 'N/A';
                        break;
                }

                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdce_amg
    function getPos(e) {
        var r = img_pdce_amg.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdce_amg.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//-----------------------------  F96 ToolTip
// var t1 = new ToolTip_f96(img_f96, "This is a tool-tip", 182);

// function ToolTip_f96(img_f96, text, width) {
//     var me = this, // self-reference for event handlers
//         div = document.createElement("div"), // the tool-tip div
//         parent = img_f96.parentNode, // parent node for img_f96
//         visible = false; // current status
//     // show the tool-tip
//     this.show = function (pos) {
//         if (!visible) { // ignore if already shown (or reset time)
//             visible = true; // lock so it's only shown once
//             setDivPos(pos); // set position
//             parent.appendChild(div); // add to parent of img_f96
//         }
//     }
//     // hide the tool-tip
//     function hide() {
//         visible = false; // hide it after timeout
//         if (parent.contains(div)) {
//             parent.removeChild(div); // remove from DOM
//         }
//     }

//     let keys_cavidad = Object.keys(fuses_BB['F96']);
//     // console.log("KEYS DE PDCS: ",keys_cavidad);
//     let cavidad;
//     let module;
//     // check mouse position, add limits as wanted... just for example:
//     function check(e) {
//         if (parent.contains(div)) {
//             hide();
//         }
//         var pos = getPos(e),
//             posAbs = {
//                 x: e.clientX,
//                 y: e.clientY
//             }; // div is fixed, so use clientX/Y
//         for (i = 0; i < keys_cavidad.length; i++) {
//             category = fuses_types['F96'][cavidad];
//             if (!visible && pos.x >= fuses_BB['F96'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['F96'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['F96'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['F96'][keys_cavidad[i]][1][1]) {
//                 cavidad = keys_cavidad[i];
//                 // set some initial styles, can be replaced by class-name etc.
//                 div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
//                 if (modularity['vision']['PDC-RMID'][cavidad] == undefined) {
//                     fusible_tooltip = "Vacío";
//                     module = "N/A";
//                 } else {
//                     fusible_tooltip = modularity['vision']['PDC-RMID'][cavidad][0];
//                     module = modularity['vision']['PDC-RMID'][cavidad][1];
//                 }
//                 //console.log(fusible_tooltip);
//                 switch (fusible_tooltip) {
//                     case 'beige':
//                         amperaje = '5 A';
//                         break;
//                     case 'cafe':
//                         amperaje = '7.5 A';
//                         break;
//                     case 'azul':
//                         amperaje = '15 A';
//                         break;
//                     case 'amarillo':
//                         amperaje = '20 A';
//                         break;
//                     case 'verde':
//                         amperaje = '30 A';
//                         break;
//                     case 'naranja':
//                         amperaje = '40 A';
//                         break;
//                     case 'natural':
//                         amperaje = '25 A';
//                         break;

//                     case 'rojo':
//                         if (cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
//                             amperaje = '50 A';
//                         } else {
//                             amperaje = '10 A';
//                         }
//                         break;
//                     case "1008695":
//                         amperaje = '60 A' //Rosa
//                         break;
//                     case "1010733":
//                         amperaje = '70 A' //Gris
//                         break;
//                     default:
//                         amperaje = 'N/A';
//                         category = '';
//                         break;
//                 }
//                 div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category} ${fusible_tooltip}  <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
//                 me.show(posAbs); // show tool-tip at this pos
//             } else setDivPos(posAbs);
//         } // otherwise, update position
//     }
//     // get mouse position relative to img_f96
//     function getPos(e) {
//         var r = img_f96.getBoundingClientRect();
//         return {
//             x: e.clientX - r.left,
//             y: e.clientY - r.top
//         }
//     }
//     // update and adjust div position if needed (anchor to a different corner etc.)
//     function setDivPos(pos) {
//         if (visible) {
//             if (pos.x < 0) pos.x = 0;
//             if (pos.y < 0) pos.y = 0;
//             // other bound checks here
//             div.style.left = pos.x + "px";
//             div.style.top = pos.y + "px";
//         }
//     }
//     // we need to use shared event handlers:
//     img_f96.addEventListener("mousemove", check);
//     $(document).on('wheel', function () {
//         hide();
//     });
// }
//-----------------------------  TBLU ToolTip
var t1 = new ToolTip_tblu(img_tblu, "This is a tool-tip", 182);

function ToolTip_tblu(img_tblu, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_tblu.parentNode, // parent node for img_tblu
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_tblu
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['TBLU']);
    // console.log("KEYS DE PDCS: ",keys_cavidad);
    let cavidad;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 1; i < keys_cavidad.length + 1; i++) {
            var category = fuses_types['TBLU'][cavidad]
            if (!visible && pos.x >= fuses_BB['TBLU'][i][0][0] && pos.x <= fuses_BB['TBLU'][i][1][0] && pos.y >= fuses_BB['TBLU'][i][0][1] && pos.y <= fuses_BB['TBLU'][i][1][1]) {
                cavidad = keys_cavidad[i - 1];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['TBLU'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                } else {
                    fusible_tooltip = modularity['vision']['TBLU'][cavidad][0];
                    module = modularity['vision']['TBLU'][cavidad][1];
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'rojo':
                        amperaje = '10 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    default:
                        amperaje = 'N/A';
                        category = '';
                        break;
                }
                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category} ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_tblu
    function getPos(e) {
        var r = img_tblu.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_tblu.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-D ToolTip
var t1 = new ToolTip_pdcd(img_pdcd, "This is a tool-tip", 182);

function ToolTip_pdcd(img_pdcd, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcd.parentNode, // parent node for img_pdcd
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcd
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-D']);
    // console.log("KEYS DE PDC-D: ",keys_cavidad);
    let cavidad;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            var category = fuses_types['PDC-D'][cavidad];
            if (!visible && pos.x >= fuses_BB['PDC-D'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-D'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-D'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-D'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-D'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                } else {
                    fusible_tooltip = modularity['vision']['PDC-D'][cavidad][0];
                    module = modularity['vision']['PDC-D'][cavidad][1];
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        if (cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                            amperaje = '50 A';
                        } else {
                            amperaje = '10 A';
                        }
                        break;
                    default:
                        amperaje = 'N/A';
                        category = ''
                        break;
                }
                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible: ${category}  ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcd
    function getPos(e) {
        var r = img_pdcd.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcd.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-P ToolTip
var t1 = new ToolTip_pdcp(img_pdcp, "This is a tool-tip", 182);

function ToolTip_pdcp(img_pdcp, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcp.parentNode, // parent node for img_pdcp
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcp
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-P']);
    // console.log("KEYS DE PDC-P: ",keys_cavidad);
    let cavidad;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_cavidad.length; i++) {
            var category = fuses_types['PDC-P'][cavidad];
            if (!visible && pos.x >= fuses_BB['PDC-P'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-P'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-P'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-P'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['vision']['PDC-P'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                    module = "N/A";
                } else {
                    fusible_tooltip = modularity['vision']['PDC-P'][cavidad][0];
                    module = modularity['vision']['PDC-P'][cavidad][1];
                }
                //console.log(fusible_tooltip);
                switch (fusible_tooltip) {
                    case 'beige':
                        amperaje = '5 A';
                        break;
                    case 'cafe':
                        amperaje = '7.5 A';
                        break;
                    case 'azul':
                        amperaje = '15 A';
                        break;
                    case 'amarillo':
                        amperaje = '20 A';
                        break;
                    case 'verde':
                        amperaje = '30 A';
                        break;
                    case 'naranja':
                        amperaje = '40 A';
                        break;
                    case 'natural':
                        amperaje = '25 A';
                        break;
                    case 'rojo':
                        if (cavidad === 'F449' || cavidad === 'F448' || cavidad === 'F447' || cavidad === 'F420' || cavidad === 'F419' || cavidad === 'F418') {
                            amperaje = '50 A';
                        } else {
                            amperaje = '10 A';
                        }
                        break;
                    default:
                        amperaje = 'N/A';
                        category = ''
                        break;
                }
                div.innerHTML = `Cavidad: ${cavidad} <br>Fusible:  ${category} ${fusible_tooltip} <br>Módulo: ${module} <br>Amperaje: ${amperaje}`;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcp
    function getPos(e) {
        var r = img_pdcp.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcp.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}

/////////////////// ***********ToolTips para TORQUES***********///////////////////
//-----------------------------  PDC-P ToolTip
var t1 = new ToolTip_pdcpt(img_pdcp_t, "This is a tool-tip", 182);

function ToolTip_pdcpt(img_pdcp_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcp_t.parentNode, // parent node for img_pdcp_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcp_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-P']);
    // console.log("KEYS DE PDC-P: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-P'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-P'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-P'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-P'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-P'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-P'][posicion][0] == 1 | modularity['torque']['PDC-P'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-P'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcp_t
    function getPos(e) {
        var r = img_pdcp_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcp_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-D ToolTip
var t1 = new ToolTip_pdcdt(img_pdcd_t, "This is a tool-tip", 182);

function ToolTip_pdcdt(img_pdcd_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcd_t.parentNode, // parent node for img_pdcd_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcd_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-D']);
    // console.log("KEYS DE PDC-D: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-D'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-D'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-D'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-D'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-D'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-D'][posicion][0] == 1 | modularity['torque']['PDC-D'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-D'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcd_t
    function getPos(e) {
        var r = img_pdcd_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcd_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  MFB-P1 ToolTip
var t1 = new ToolTip_mfbp1(img_mfbp1_t, "This is a tool-tip", 182);

function ToolTip_mfbp1(img_mfbp1_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_mfbp1_t.parentNode, // parent node for img_mfbp1_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_mfbp1_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['MFB-P1']);
    // console.log("KEYS DE MFB-P1: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['MFB-P1'][keys_posicion[i]][0][0] && pos.x <= torques_BB['MFB-P1'][keys_posicion[i]][1][0] && pos.y >= torques_BB['MFB-P1'][keys_posicion[i]][0][1] && pos.y <= torques_BB['MFB-P1'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['MFB-P1'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['MFB-P1'][posicion][0] == 1 | modularity['torque']['MFB-P1'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['MFB-P1'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_mfbp1_t
    function getPos(e) {
        var r = img_mfbp1_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_mfbp1_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  MFB-S ToolTip
var t1 = new ToolTip_mfbs(img_mfbs_t, "This is a tool-tip", 182);

function ToolTip_mfbs(img_mfbs_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_mfbs_t.parentNode, // parent node for img_mfbs_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_mfbs_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['MFB-S']);
    // console.log("KEYS DE MFB-S: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['MFB-S'][keys_posicion[i]][0][0] && pos.x <= torques_BB['MFB-S'][keys_posicion[i]][1][0] && pos.y >= torques_BB['MFB-S'][keys_posicion[i]][0][1] && pos.y <= torques_BB['MFB-S'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['MFB-S'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['MFB-S'][posicion][0] == 1 | modularity['torque']['MFB-S'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['MFB-S'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_mfbs_t
    function getPos(e) {
        var r = img_mfbs_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_mfbs_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  MFB-E ToolTip
var t1 = new ToolTip_mfbe(img_mfbe_t, "This is a tool-tip", 182);

function ToolTip_mfbe(img_mfbe_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_mfbe_t.parentNode, // parent node for img_mfbe_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_mfbe_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['MFB-E']);
    // console.log("KEYS DE MFB-E: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y

if (estacion.includes('MBM')){

  if (keys_posicion.includes('A1') || keys_posicion.includes('A2') || keys_posicion.includes('E1')) {
    

    keys_posicion.splice("A1",1);
    keys_posicion.splice("A2",1);
    keys_posicion.splice("E1",1);
    }
}
if (!estacion.includes('MBM')) {
    //console.log("FLAG2");
    keys_posicion = ['A1', 'A2', 'E1'];
  }


// if(estacion.includes('MBM')){
//     newKeys = []
//     keys_posicion.forEach(e => {
//         if (!estacion.includes('MBM')) {
//             newKeys.push(e);
//         }
//     });
//     keys_posicion = newKeys;
// }
        //console.log(keys_posicion);
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['MFB-E'][keys_posicion[i]][0][0] && pos.x <= torques_BB['MFB-E'][keys_posicion[i]][1][0] && pos.y >= torques_BB['MFB-E'][keys_posicion[i]][0][1] && pos.y <= torques_BB['MFB-E'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['MFB-E'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['MFB-E'][posicion][0] == 1 | modularity['torque']['MFB-E'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['MFB-E'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_mfbe_t
    function getPos(e) {
        var r = img_mfbe_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_mfbe_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  MFB-P2 ToolTip
var t1 = new ToolTip_mfbp2(img_mfbp2_t, "This is a tool-tip", 182);

function ToolTip_mfbp2(img_mfbp2_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_mfbp2_t.parentNode, // parent node for img_mfbp2_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_mfbp2_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['MFB-P2']);
    // console.log("KEYS DE MFB-P2: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['MFB-P2'][keys_posicion[i]][0][0] && pos.x <= torques_BB['MFB-P2'][keys_posicion[i]][1][0] && pos.y >= torques_BB['MFB-P2'][keys_posicion[i]][0][1] && pos.y <= torques_BB['MFB-P2'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['MFB-P2'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['MFB-P2'][posicion][0] == 1 | modularity['torque']['MFB-P2'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['MFB-P2'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_mfbp2_t
    function getPos(e) {
        var r = img_mfbp2_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_mfbp2_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  BATTERY ToolTip
var t1 = new ToolTip_bt(img_bt_t, "This is a tool-tip", 182);

function ToolTip_bt(img_bt_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_bt_t.parentNode, // parent node for img_bt_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_bt_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['BATTERY']);
    // console.log("KEYS DE BATTERY: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['BATTERY'][keys_posicion[i]][0][0] && pos.x <= torques_BB['BATTERY'][keys_posicion[i]][1][0] && pos.y >= torques_BB['BATTERY'][keys_posicion[i]][0][1] && pos.y <= torques_BB['BATTERY'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['BATTERY'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['BATTERY'][posicion][0] == 1 | modularity['torque']['BATTERY'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['BATTERY'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_bt_t
    function getPos(e) {
        var r = img_bt_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_bt_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  BATTERY-2 ToolTip
var t1 = new ToolTip_battery2(img_battery2_t, "This is a tool-tip", 182);

function ToolTip_battery2(img_battery2_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_battery2_t.parentNode, // parent node for img_battery2_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_battery2_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['BATTERY-2']);
    // console.log("KEYS DE BATTERY-2: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['BATTERY-2'][keys_posicion[i]][0][0] && pos.x <= torques_BB['BATTERY-2'][keys_posicion[i]][1][0] && pos.y >= torques_BB['BATTERY-2'][keys_posicion[i]][0][1] && pos.y <= torques_BB['BATTERY-2'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['BATTERY-2'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['BATTERY-2'][posicion][0] == 1 | modularity['torque']['BATTERY-2'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['BATTERY-2'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_battery2_t
    function getPos(e) {
        var r = img_battery2_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_battery2_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-RMID ToolTip
function ToolTip_pdcr_1t(img_pdcr_mid_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr_mid_t.parentNode, // parent node for img_pdcr_mid_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr_mid_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-RMID']);
    // console.log("KEYS DE PDC-RMID: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-RMID'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-RMID'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-RMID'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-RMID'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-RMID'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-RMID'][posicion][0] == 1 | modularity['torque']['PDC-RMID'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-RMID'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr_mid_t
    function getPos(e) {
        var r = img_pdcr_mid_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcr_mid_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-R ToolTip
function ToolTip_pdcr_t(img_pdcr_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr_t.parentNode, // parent node for img_pdcr_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-R']);
    // console.log("KEYS DE PDC-R: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            console.log(modularity);
            if (!visible && pos.x >= torques_BB['PDC-R'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-R'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-R'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-R'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-R'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-R'][posicion][0] == 1 | modularity['torque']['PDC-R'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-R'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr_t
    function getPos(e) {
        var r = img_pdcr_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcr_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}

/////////////////// ***********ToolTips para TORQUES***********///////////////////
//-----------------------------  PDC-E ToolTip
function ToolTip_pdcet(img_pdce_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdce_t.parentNode, // parent node for img_pdce_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdce_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-E']);
    // console.log("KEYS DE PDC-E: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-E'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-E'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-E'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-E'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                //console.log(modularity['torque']['PDC-E'][posicion]);
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-E'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-E'][posicion][0] == 1 | modularity['torque']['PDC-E'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-E'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdce_t
    function getPos(e) {
        var r = img_pdce_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdce_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-E_AMG ToolTip
function ToolTip_pdce_amgt(img_pdce_amg_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdce_amg_t.parentNode, // parent node for img_pdce_amg_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdce_amg_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-E_AMG']);
    // console.log("KEYS DE PDC-E_AMG: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-E_AMG'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-E_AMG'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-E_AMG'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-E_AMG'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-E_AMG'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-E_AMG'][posicion][0] == 1 | modularity['torque']['PDC-E_AMG'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-E_AMG'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdce_amg_t
    function getPos(e) {
        var r = img_pdce_amg_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdce_amg_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-ECOVER ToolTip
var t1 = new ToolTip_pdcecovert(img_pdce_cover_t, "This is a tool-tip", 150);

function ToolTip_pdcecovert(img_pdce_cover_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdce_cover_t.parentNode, // parent node for img_pdce_cover_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdce_cover_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-ECOVER']);
    // console.log("KEYS DE PDC-ECOVER: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-ECOVER'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-ECOVER'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-ECOVER'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-ECOVER'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-ECOVER'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-ECOVER'][posicion][0] == 1 | modularity['torque']['PDC-ECOVER'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-ECOVER'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdce_cover_t
    function getPos(e) {
        var r = img_pdce_cover_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdce_cover_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//-----------------------------  PDC-S1 ToolTip
var t1 = new ToolTip_pdcs1t(img_pdcs1_t, "This is a tool-tip", 150);

function ToolTip_pdcs1t(img_pdcs1_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcs1_t.parentNode, // parent node for img_pdcs1_t
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcs1_t
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['PDC-S1']);
    // console.log("KEYS DE PDC-S1: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = {
                x: e.clientX,
                y: e.clientY
            }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['PDC-S1'][keys_posicion[i]][0][0] && pos.x <= torques_BB['PDC-S1'][keys_posicion[i]][1][0] && pos.y >= torques_BB['PDC-S1'][keys_posicion[i]][0][1] && pos.y <= torques_BB['PDC-S1'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['PDC-S1'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['PDC-S1'][posicion][0] == 1 | modularity['torque']['PDC-S1'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['PDC-S1'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcs1_t
    function getPos(e) {
        var r = img_pdcs1_t.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_pdcs1_t.addEventListener("mousemove", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//-----------------------------  G11 ToolTip
var t1 = new ToolTip_g11t(img_g11_t, "This is a tool-tip", 150);

function ToolTip_g11t(img_g11_t, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_g11_t.parentNode, // parent node for img_g11_t
        visible = false; // current status
    // show the tool-tip
    this.show = function(pos) {
            if (!visible) { // ignore if already shown (or reset time)
                visible = true; // lock so it's only shown once
                setDivPos(pos); // set position
                parent.appendChild(div); // add to parent of img_g11_t
            }
        }
        // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_posicion = Object.keys(torques_BB['G11']);
    // console.log("KEYS DE G11: ",keys_posicion);
    let posicion;
    let module;
    // check mouse position, add limits as wanted... just for example:
    function check(e) {
        if (parent.contains(div)) {
            hide();
        }
        var pos = getPos(e),
            posAbs = { x: e.clientX, y: e.clientY }; // div is fixed, so use clientX/Y
        for (i = 0; i < keys_posicion.length; i++) {
            if (!visible && pos.x >= torques_BB['G11'][keys_posicion[i]][0][0] && pos.x <= torques_BB['G11'][keys_posicion[i]][1][0] && pos.y >= torques_BB['G11'][keys_posicion[i]][0][1] && pos.y <= torques_BB['G11'][keys_posicion[i]][1][1]) {
                posicion = keys_posicion[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (modularity['torque']['G11'][posicion] == undefined) {
                    torque_tooltip = "false";
                    module = "N/A";
                } else {
                    if (modularity['torque']['G11'][posicion][0] == 1 | modularity['torque']['G11'][posicion][0] == true) {
                        torque_tooltip = "true"
                    }
                    module = modularity['torque']['G11'][posicion][1];
                }
                div.innerHTML = 'Posición: ' + posicion + '<br>Torque: ' + torque_tooltip + '<br>Módulo: ' + module;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_g11_t
    function getPos(e) {
        var r = img_g11_t.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    // update and adjust div position if needed (anchor to a different corner etc.)
    function setDivPos(pos) {
        if (visible) {
            if (pos.x < 0) pos.x = 0;
            if (pos.y < 0) pos.y = 0;
            // other bound checks here
            div.style.left = pos.x + "px";
            div.style.top = pos.y + "px";
        }
    }
    // we need to use shared event handlers:
    img_g11_t.addEventListener("mousemove", check);
    $(document).on('wheel', function() {
        hide();
    });
}
//////////////////////////////////////////// DESCARGA DE VISUALES ////////////////////////////////////////////
//-----------------------------  VISIÓN
$('#pdf_vision').on('click', function () {
    console.log("Click en descargar visuales para visión");
    if (modularidad_vision.getAttribute("class") == "panel-collapse collapse") {
        $('#vision_title').click();
        setTimeout(descargaVision, 2000)
    } else {
        descargaVision();
        setTimeout(ocultarVision, 2000)
    }

    function descargaVision() {
        let $elemento = modularidad_vision;
        html2pdf()
            .set({
                margin: 1,
                filename: sessionStorage.getItem('modularidad') + ' Vision Visuales',
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
    }

    function ocultarVision() {
        $('#vision_title').click();
    }
});
//-----------------------------  TORQUES
$('#pdf_torque').on('click', function () {
    console.log("Click en descargar visuales para Torque");
    if (modularidad_torque.getAttribute("class") == "panel-collapse collapse") {
        $('#torque_title').click();
        setTimeout(descargaTorque, 2000)
    } else {
        descargaTorque();
        setTimeout(ocultarTorque, 2000)
    }

    function descargaTorque() {
        let $elemento = modularidad_torque;
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
    }

    function ocultarTorque() {
        $('#torque_title').click();
    }
});

var activated = 0;


//****************CHECK-TIME*****************//
$('#time').on('click', function () {

    if (estacion.includes('MBM')) {
        document.getElementById("section-a").style.display = 'none';

        document.getElementById("title-section-b").innerHTML = 'ROBOT';
        document.getElementById("category-section-b").innerHTML = '(PDC-E, PDC-E AMG, PDCS1)';
        document.getElementById("category-section-b").style.width = 'max-content';

    }

    if (activated === 0) {
        document.getElementById('timeContainer').classList.add("active-calc")
        document.getElementById('fusiblesTotales').classList.add("active-calc");
        activated++;
    } else {
        document.getElementById('timeContainer').classList.remove("active-calc")
        document.getElementById('fusiblesTotales').classList.remove("active-calc");
        activated = 0;
    }
})
var conteoRobotA = 0
var conteoRobotB = 0

var grid_a = document.createElement('div')
grid_a.classList = 'timeFuseType';
grid_a.id = 'timeFuseType';
grid_a.style.height = 'fit-content';


function dateTime_a() {
    //console.log(arrayFuses_a)
    timeResult_a = document.getElementById("timeResult_a");
    /**ROBOT- A**/
    var minutos_a = 0;
    let time_a_ATO = document.getElementById("time_a_ATO").value
    let time_a_MINI = document.getElementById("time_a_MINI").value
    let time_a_MULTI = document.getElementById("time_a_MULTI").value
    grid_a.innerHTML = ''
    grid_a.display = 'content'
    // let title = document.createElement('b')
    // title.innerHTML = `Robot-A`;
    // grid_a.appendChild(title)
    /******************************************************* */
    time_a_ATO *= conteo_a_ATO
    time_a_MINI *= conteo_a_MINI
    time_a_MULTI *= conteo_a_MULTI
    segundos_a = time_a_ATO + time_a_MINI + time_a_MULTI;
    while (segundos_a > 60) {
        segundos_a -= 60
        minutos_a++
    }
    conteoRobotA = conteo_a_ATO + conteo_a_MINI + conteo_a_MULTI;
    //console.log(`${minutos_a} Minutos y ${segundos_a} Segundos en ${conteoRobotA}`);
    //console.log(arrayFuses_a);
    timeResult_a.innerHTML = (`${minutos_a} Minuto(s) y ${segundos_a} Segundos (Sin fallas) <br> <p> En ${conteoRobotA} fusibles </p>`)
    document.getElementById('fusiblesTotales').innerHTML = `${conteoRobotA + conteoRobotB} Fusibles en total`

    //console.log(arrayFuses_a);
    const unicos = [...new Set(arrayFuses_a)];
    //console.log(unicos); 

    for (let i = 0; i < unicos.length; i++) {
        var p = document.createElement('p');
        var conteo = 0
        for (let j = 0; j < arrayFuses_a.length; j++) {
            const valor = arrayFuses_a[j];
            if (unicos[i] === valor) {
                conteo++
                //console.log(unicos[i], conteo)
            }
            // else{
            //     console.log(`PAM`)
            // }
        }
        p.innerHTML = `${unicos[i]} : ${conteo}`
        grid_a.appendChild(p)
    }

    document.getElementById('timeContainer').appendChild(grid_a)
    return false
}

var grid_b = document.createElement('div')
grid_b.classList = 'timeFuseType';
grid_b.id = 'timeFuseType';
grid_b.style.height = 'fit-content';

function dateTime_b() {
    timeResult_b = document.getElementById("timeResult_b")
    /**ROBOT- B**/
    let time_b_ATO = document.getElementById("time_b_ATO").value
    let time_b_MINI = document.getElementById("time_b_MINI").value
    let time_b_MAXI = document.getElementById("time_b_MAXI").value
    let time_b_RELAY = document.getElementById("time_b_RELAY").value
    grid_b.innerHTML = ''
    grid_b.display = 'content'
    // let title = document.createElement('b')
    // title.innerHTML = `Robot-B`;
    // grid_b.appendChild(title)
    /****************************************************** */

    var minutos_b = 0;
    time_b_ATO *= conteo_b_ATO
    time_b_MINI *= conteo_b_MINI
    time_b_MAXI *= conteo_b_MAXI
    time_b_RELAY *= conteo_b_RELAY
    segundos_b = time_b_ATO + time_b_MINI + time_b_MAXI + time_b_RELAY;
    //console.log(`${time_b_ATO} + ${time_b_MINI} + ${time_b_MAXI} + ${time_b_RELAY}`)
    while (segundos_b > 60) {
        segundos_b -= 60
        minutos_b++
    }

    conteoRobotB = conteo_b_ATO + conteo_b_MINI + conteo_b_MAXI + conteo_b_RELAY;
    //console.log(`${minutos_b} Minutos y ${segundos_b} Segundos en ${conteoRobotB}`);
    timeResult_b.innerHTML = (`${minutos_b} Minuto(s) y ${segundos_b} Segundos (Sin fallas) <br> <p> En ${conteoRobotB} fusibles </p>`)
    document.getElementById('fusiblesTotales').innerHTML = `${conteoRobotA + conteoRobotB} Fusibles en total`


    //console.log(arrayFuses_b);
    const unicos = [...new Set(arrayFuses_b)];
    //console.log(unicos); 

    for (let i = 0; i < unicos.length; i++) {
        var p = document.createElement('p');
        var conteo = 0
        for (let j = 0; j < arrayFuses_b.length; j++) {
            const valor = arrayFuses_b[j];
            if (unicos[i] === valor) {
                conteo++
                //console.log(unicos[i], conteo)
            }
            // else{
            //     console.log(`PAM`)
            // }
        }
        p.innerHTML = `${unicos[i]} : ${conteo}`
        grid_b.appendChild(p)
    }

    document.getElementById('timeContainer').appendChild(grid_b)
    return false
}