let DBEVENT = sessionStorage.getItem('DBEVENT');
const estacion = sessionStorage.getItem('estacion');
console.log("DB EVENT ACTUAL: ", DBEVENT, "ESTACION:", estacion);
document.getElementById("modulov_titulo").innerHTML = sessionStorage.getItem('edit_vision');
document.getElementById('modulo_vision').value = sessionStorage.getItem('edit_vision');
var edit_id = sessionStorage.getItem('edit_vision_id');

let img_pdcr = document.getElementById('pdcr_image_v_canvas');
let img_pdcr_1 = document.getElementById('pdcr_1_image_v_canvas');
let img_pdcr_small = document.getElementById('pdcr_small_image_v_canvas');
let img_f96 = document.getElementById('f96_image_v_canvas');
let img_pdcs = document.getElementById('pdcs_image_v_canvas');
let img_tblu = document.getElementById('tblu_image_v_canvas');
let img_pdcd = document.getElementById('pdcd_image_v_canvas');
let img_pdcp = document.getElementById('pdcp_image_v_canvas');

let img_pdce = document.getElementById('pdce_image_v_canvas');
let img_pdce_amg = document.getElementById('pdce_amg_image_v_canvas');
let img_pdcs1 = document.getElementById('pdcs1_image_v_canvas');

var imgWidth_pdcr, imgHeight_pdcr, datosPrim_pdcr;
var imgWidth_pdcr_mid, imgHeight_pdcr_mid, datosPrim_pdcr_mid;
var imgWidth_f96, imgHeight_f96, datosPrim_f96;
var imgWidth_pdcr_small, imgHeight_pdcr_small, datosPrim_pdcr_small;
var imgWidth_pdcs, imgHeight_pdcs, datosPrim_pdcs;
var imgWidth_tblu, imgHeight_tblu, datosPrim_tblu;
var imgWidth_pdcd, imgHeight_pdcd, datosPrim_pdcd;
var imgWidth_pdcp, imgHeight_pdcp, datosPrim_pdcp;

var imgWidth_pdce, imgHeight_pdce, datosPrim_pdce;
var imgWidth_pdce_amg, imgHeight_pdce_amg, datosPrim_pdce_amg;
var imgWidth_pdcs1, imgHeight_pdcs1, datosPrim_pdcs1;

var color_style = "blue";
let caja;
let caja_actual;
let hold_config;
let fusible_i;
let fusible_i2;
let fusible_f;
let fusible_f2;
let orientacion;
var fusible_imagen = new Image();
var modularity;
let caja_pdcr;
let caja_pdce;

var pdce_caja = "";
var pdce_caja_to_db = "";

var historial = "";
var pdcr_caja = "";
var pdcr_caja_to_db = "";

var pdcr_array = []
var pdcr_puntos = []

var pdcr_1_array = []
var pdcr_1_puntos = []

var pdcr_small_array = []
var pdcr_small_puntos = []

var f96_array = []
var f96_puntos = []

var pdcs_array = []
var pdcs_puntos = []

var tblu_array = []
var tblu_puntos = []

var pdcd_array = []
var pdcd_puntos = []

var pdcp_array = []
var pdcp_puntos = []

var pdce_array = [];
var pdce_amg_array = [];
var pdcs1_array = [];


function iniciar_pagina() {
    // console.log(modularity);
    // cargar_imagen_pdcs();
    // cargar_imagen_tblu();
    // cargar_imagen_pdcd();
    // cargar_imagen_pdcp();
    cargar_info();
}
var loading = document.getElementsByClassName("loading");

function getDistance(x1, y1, x2, y2) {
    xDistance = x2 - x1;
    yDistance = y2 - y1;
}

function cargar_info() {
    fetch(dominio + "/api/get/" + DBEVENT + "/modulos_fusibles/ID/=/" + edit_id + "/_/=/_")
        .then(data => data.json())
        .then(data => {
            console.log("DATA: ", data)
            modularity = data

            var keys = Object.keys(modularity)
            // console.log(keys);
            for (var i = 0; i < keys.length; i++) {
                // console.log("CAJA: ",keys[i]);
                if (keys[i] == 'ID' || keys[i] == 'MODULO') {
                    // console.log("Columnas de ID y MODULO no se tomarán en cuenta");
                } else {
                    // console.log(data[keys[i]]);
                    if (data[keys[i]] == '{}') {
                        // console.log('VACIO');
                    } else {
                        // console.log("CAJA: ",keys[i]);
                        // console.log("Convertido el parse", JSON.parse(data[keys[i]]));
                        var array_fus = Object.keys(JSON.parse(data[keys[i]]));
                        // console.log("ARRAY DE FUSIBLES: ",array_fus);
                        var lista_fusibles = data[keys[i]];
                        // console.log("LISTA DE FUSIBLES A CONVERTIR: ",lista_fusibles);
                        // console.log("LISTA DE FUSIBLES CONVERTIDO: ",JSON.parse(lista_fusibles));
                        var fusibles = Object.keys(JSON.parse(lista_fusibles))
                        // console.log("Fusibles: ",fusibles);
                        // console.log("FUSES_VALUE: ",fuses_value)
                        for (var j = 0; j < fusibles.length; j++) {
                            // console.log("Valor del Fusible: ",JSON.parse(lista_fusibles)[fusibles[j]]);
                            fuses_value[keys[i]][fusibles[j]] = JSON.parse(lista_fusibles)[fusibles[j]];
                            if (!estacion.includes("MBM")) {
                                if (modularity["PDC-RS"][0] != '{}') {
                                    console.log("CAJA PDC-RS")
                                    caja_pdcr = "s";
                                    if (keys[i] == "PDC-RS" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                        pdcr_small_array.push(fusibles[j]);
                                    }
                                } else if (modularity["PDC-RMID"][0] != '{}') {
                                    console.log("CAJA PDC-RMID")
                                    caja_pdcr = "m";
                                    if (keys[i] == "PDC-RMID" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                        if (fusibles[j] === 'F96') {
                                            f96_array.push(fusibles[j])
                                        }
                                        pdcr_1_array.push(fusibles[j]);

                                    }
                                } else if (modularity["PDC-R"][0] != '{}') {
                                    console.log("CAJA PDC-R")
                                    caja_pdcr = "r";
                                    if (keys[i] == "PDC-R" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                        pdcr_array.push(fusibles[j]);
                                    }
                                }

                                if (modularity["PDC-R"] == '{}' && modularity["PDC-RMID"] == '{}' && modularity["PDC-RS"] == '{}') {
                                    document.getElementById('caja_pdcr').innerHTML = 'Esta Modularidad no cuenta con ninguna configuración para la caja PDC-R.'
                                }
                                if (keys[i] == "PDC-S" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                    pdcs_array.push(fusibles[j]);
                                    // cargar_imagen_pdcs();
                                }
                                if (keys[i] == "TBLU" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                    tblu_array.push(fusibles[j]);
                                    // cargar_imagen_tblu();
                                }
                                if (keys[i] == "PDC-D" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                    pdcd_array.push(fusibles[j]);
                                    // cargar_imagen_pdcd();
                                }
                                if (keys[i] == "PDC-P" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                    pdcp_array.push(fusibles[j]);
                                    // cargar_imagen_pdcp();
                                }

                            } else {
                                if (modularity["PDC-E"][0] != '{}') {
                                    console.log("CAJA PDC-E")
                                    caja_pdce = "regular";
                                    if (keys[i] == "PDC-E" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                        pdce_array.push(fusibles[j]);
                                    }
                                } else if (modularity["PDC-E_AMG"][0] != '{}') {
                                    console.log("CAJA PDC-E_AMG")
                                    caja_pdce = "amg";
                                    if (keys[i] == "PDC-E_AMG" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                        pdce_amg_array.push(fusibles[j]);
                                    }
                                }

                                if (modularity["PDC-E"] == '{}' && modularity["PDC-E_AMG"] == '{}') {
                                    document.getElementById('caja_pdce').innerHTML = 'Esta Modularidad no cuenta con ninguna configuración para la caja PDC-E.'
                                }

                                if (keys[i] == "PDC-S1" && JSON.parse(lista_fusibles)[fusibles[j]] != "empty") {
                                    // console.log("AQUI ESTÁ LA CAJA PDC-S1");
                                    pdcs1_array.push(fusibles[j]);
                                    // console.log("PDC-S1 ARRAY NUEVO: ",pdcs1_array);
                                }
                            }


                        }
                    }
                }
            }
            console.log("Tipo de Caja PDC-R: ", caja_pdcr);
            if (caja_pdcr == "r") {
                console.log("Mostrando Caja PDC-R");
                $("#pdcr_option > option[value='PDCR']").attr("selected", true);
                pdcr_caja = "pdcr";
                pdcr_caja_to_db = "PDC-R";
                document.getElementById('caja_pdcr').style.display = "block";
                precargar_imagen_pdcr();
            } else if (caja_pdcr == "m") {
                console.log("Mostrando Caja PDC-RMID");
                $("#pdcr_option > option[value='PDCR_1']").attr("selected", true);
                pdcr_caja = "pdcr_1";
                pdcr_caja_to_db = "PDC-RMID";
                document.getElementById('caja_pdcr_1').style.display = "block";
                precargar_imagen_pdcr_1();
            } else if (caja_pdcr == "s") {
                console.log("Mostrando Caja PDC-RS");
                $("#pdcr_option > option[value='PDCR_SMALL']").attr("selected", true);
                pdcr_caja = "pdcr_small";
                pdcr_caja_to_db = "PDC-RS";
                document.getElementById('caja_pdcr_small').style.display = "block";
                precargar_imagen_pdcr_small();
            }

            if (caja_pdce == "regular") {
                console.log("Mostrando Caja PDC-E");
                $("#pdce_option > option[value='PDC-E']").attr("selected", true);
                pdce_caja = "PDC-E";
                pdce_caja_to_db = "PDC-E";
                document.getElementById('caja_pdce').style.display = "block";
                var t1 = new ToolTip_pdce(img_pdce, "This is a tool-tip", 150);
                cargar_imagen_pdce();
            } else if (caja_pdce == "amg") {
                console.log("Mostrando Caja PDC-E_AMG");
                $("#pdce_option > option[value='PDC-E_AMG']").attr("selected", true);
                pdce_caja = "PDC-E_AMG";
                pdce_caja_to_db = "PDC-E_AMG";
                document.getElementById('caja_pdce_amg').style.display = "block";
                var t1 = new ToolTip_pdce_amg(img_pdce_amg, "This is a tool-tip", 150);
                cargar_imagen_pdce_amg();
            }


            if (!estacion.includes("MBM")) {
                precargar_imagen_f96()
                precargar_imagen_pdcs();
                precargar_imagen_tblu();
                precargar_imagen_pdcd();
                precargar_imagen_pdcp();
                $("#caja_pdce_options").hide();
                $("#caja_pdcs1").hide();

            } else {
                $("#caja_pdcr_options").hide();
                $("#caja_f96_v").hide();
                $("#caja_tblu_v").hide();
                $("#caja_pdcs_v").hide();
                $("#caja_pdcd_v").hide();
                $("#caja_pdcp_v").hide();
                cargar_imagen_pdcs1();


            }

        })
}


function cargar_cavidad(
    cavidad_ctgry,
    fusibleColocado,
    orientacion,
    image,
    ctx,
    cavidadx,
    cavidady,
    cavidadw,
    cavidadh
) {
    image.onload = function () {
        var pat = ctx.createPattern(image, "no-repeat");
        ctx.fillStyle = pat;
        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
        ctx.drawImage(image, cavidadx, cavidady, xDistance, yDistance);
        //console.log(`static/content/fusibles/${cavidad_ctgry},${fusibleColocado}${orientacion}.jpg`)
    };
}


function precargar_imagen_pdcr() {
    var t1 = new ToolTip_pdcr(img_pdcr, "This is a tool-tip", 150);
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
            if (hold_config == true) {
                pintar_2();
            } else {
                preview()
            }

            function preview() {
                // console.log("MI ARRAY PDC-R: ",pdcr_array)
                for (let i = 0; i < pdcr_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-R"])[pdcr_array[i]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

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
                    // console.log("PDC-R DISTANCE X",xDistance)
                    // console.log("PDC-R DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(image.src);
                    ctx_pdcr.beginPath();
                    ctx_pdcr.strokeStyle = color_style;
                    //ctx_pdcr.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_pdcr.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-R']);
                let keys_pdcr = Object.keys(fuses_BB['PDC-R']);
                // console.log("KEYS DE PDCS: ",keys_pdcr);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcr_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcr.length; i++) {
                    if (pixelx >= fuses_BB['PDC-R'][keys_pdcr[i]][0][0] && pixelx <= fuses_BB['PDC-R'][keys_pdcr[i]][1][0] && pixely >= fuses_BB['PDC-R'][keys_pdcr[i]][0][1] && pixely <= fuses_BB['PDC-R'][keys_pdcr[i]][1][1] && color != "empty" && caja == "pdcr") {
                        var temporal_text = "Esta dentro de " + keys_pdcr[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['PDC-R'][keys_pdcr[i]][0][0];
                        fusible_f = fuses_BB['PDC-R'][keys_pdcr[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-R'][keys_pdcr[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-R'][keys_pdcr[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_pdcr[i]
                        fuses_value["PDC-R"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcr_array.length != 0) {
                            if (pdcr_array.indexOf(element) != -1) {
                                fuses_value["PDC-R"][element] = "empty";
                                pdcr_array.splice(pdcr_array.indexOf(element), 1)
                                restaurar_pdcr(ctx_pdcr, img_pdcr);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-R"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-R"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-R"][element] = "empty";
                                        $("#warning-alert-PDCR").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCR").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcr_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-R"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-R"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-R"][element] = "empty";
                                    $("#warning-alert-PDCR").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCR").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcr_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcr_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-R: ",pdcr_array)
                pdcr_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcr.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    let cavidad = pdcr_array[indice];
                    // console.log("fusible_i : ",fusible_i);
                    // console.log("CAVIDAD : ",cavidad);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcr.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcr_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcr = new Image();
                    pdcr_array[indice]
                    let cavidad = pdcr_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-R"][pdcr_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-R"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-R"][cavidad][0][1];
                    let cavidadx2 = fuses_BB["PDC-R"][cavidad][1][0];
                    let cavidady2 = fuses_BB["PDC-R"][cavidad][1][1];
                    // console.log("CAVIDAD X INICIAL: ",cavidadx);
                    // console.log("CAVIDAD X FINAL: ",cavidadx2);
                    // console.log("CAVIDAD Y INICIAL: ",cavidady);
                    // console.log("CAVIDAD Y FINAL: ",cavidady2);
                    getDistance(cavidadx, cavidady, cavidadx2, cavidady2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,30,green":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,40,amber":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,50,red":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,60,red":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,70,gray":
                            ctx_pdcr.beginPath();
                            fusible_imagen_pdcr.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr.onload = function () {
                                getDistance(fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], fuses_BB['PDC-R'][cavidad][1][0], fuses_BB['PDC-R'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-R'][cavidad][0][0])
                                ctx_pdcr.drawImage(this, fuses_BB['PDC-R'][cavidad][0][0], fuses_BB['PDC-R'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function precargar_imagen_pdcr_1() {
    var t1 = new ToolTip_pdcr_1(img_pdcr_1, "This is a tool-tip", 150);
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

            if (hold_config == true) {
                pintar_2();
            } else {
                preview()
            }

            function preview() {
                // console.log("MI ARRAY PDC-RMID: ",pdcr_1_array)
                for (let i = 0; i < pdcr_1_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_1_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-RMID"])[pdcr_1_array[i]];
                    // console.log("Fusible Colocado: ",fusibleColocado);
                    let cavidadx = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-RMID"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-RMID DISTANCE X",xDistance)
                    // console.log("PDC-RMID DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx_pdcr_mid.beginPath();
                    ctx_pdcr_mid.strokeStyle = color_style;
                    //ctx_pdcr_mid.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_pdcr_1.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-RMID']);
                let keys_pdcr_mid = Object.keys(fuses_BB['PDC-RMID']);
                // console.log("KEYS DE PDCS: ",keys_pdcr_mid);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcr_1_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcr_mid.length; i++) {
                    if (pixelx >= fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][0][0] && pixelx <= fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][1][0] && pixely >= fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][0][1] && pixely <= fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][1][1] && color != "empty" && caja == "pdcr_mid") {
                        var temporal_text = "Esta dentro de " + keys_pdcr_mid[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][0][0];
                        fusible_f = fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-RMID'][keys_pdcr_mid[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_pdcr_mid[i]
                        fuses_value["PDC-RMID"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcr_1_array.length != 0) {
                            if (pdcr_1_array.indexOf(element) != -1) {
                                fuses_value["PDC-RMID"][element] = "empty";
                                pdcr_1_array.splice(pdcr_1_array.indexOf(element), 1)
                                restaurar_pdcr_1(ctx_pdcr_mid, img_pdcr_1);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-RMID"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-RMID"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-RMID"][element] = "empty";
                                        $("#warning-alert-PDCRMID").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCRMID").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcr_1_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-RMID"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-RMID"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-RMID"][element] = "empty";
                                    $("#warning-alert-PDCRMID").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCRMID").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcr_1_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcr_1_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-RMID: ",pdcr_1_array)
                pdcr_1_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcr_mid.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    let cavidad = pdcr_1_array[indice];
                    // console.log("fusible_i : ",fusible_i);
                    // console.log("CAVIDAD : ",cavidad);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcr_mid.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcr_1_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcr_mid = new Image();
                    pdcr_1_array[indice]
                    let cavidad = pdcr_1_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-RMID"][pdcr_1_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][0][1];
                    let cavidadx2 = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][1][0];
                    let cavidady2 = fuses_BB["PDC-RMID"][cavidad] === undefined ? null : fuses_BB["PDC-RMID"][cavidad][1][1];
                    // console.log("CAVIDAD X INICIAL: ",cavidadx);
                    // console.log("CAVIDAD X FINAL: ",cavidadx2);
                    // console.log("CAVIDAD Y INICIAL: ",cavidady);
                    // console.log("CAVIDAD Y FINAL: ",cavidady2);
                    getDistance(cavidadx, cavidady, cavidadx2, cavidady2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    if (cavidad == 'F96') {
                        return false
                    }
                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                console.log(cavidad);
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,30,green":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,40,amber":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,50,red":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,60,red":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,70,gray":
                            ctx_pdcr_mid.beginPath();
                            fusible_imagen_pdcr_mid.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_mid.onload = function () {
                                getDistance(fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], fuses_BB['PDC-RMID'][cavidad][1][0], fuses_BB['PDC-RMID'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RMID'][cavidad][0][0])
                                ctx_pdcr_mid.drawImage(this, fuses_BB['PDC-RMID'][cavidad][0][0], fuses_BB['PDC-RMID'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function precargar_imagen_pdcr_small() {
    var t1 = new ToolTip_pdcr_small(img_pdcr_small, "This is a tool-tip", 150);
    if (img_pdcr_small.getContext) {
        var ctx_pdcr_small = img_pdcr_small.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/interior/pdcr_small/pdcrs.jpg";
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

            if (hold_config == true) {
                pintar_2();
            } else {
                preview()
            }

            function preview() {
                // console.log("MI ARRAY PDC-RS: ",pdcr_small_array)
                for (let i = 0; i < pdcr_small_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcr_small_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-RS"])[pdcr_small_array[i]];
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
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-RS DISTANCE X",xDistance)
                    // console.log("PDC-RS DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(image.src);
                    ctx_pdcr_small.beginPath();
                    ctx_pdcr_small.strokeStyle = color_style;
                    //ctx_pdcr_small.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_pdcr_small.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-RS']);
                let keys_pdcr_small = Object.keys(fuses_BB['PDC-RS']);
                // console.log("KEYS DE PDCS: ",keys_pdcr_small);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcr_small_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcr_small.length; i++) {
                    if (pixelx >= fuses_BB['PDC-RS'][keys_pdcr_small[i]][0][0] && pixelx <= fuses_BB['PDC-RS'][keys_pdcr_small[i]][1][0] && pixely >= fuses_BB['PDC-RS'][keys_pdcr_small[i]][0][1] && pixely <= fuses_BB['PDC-RS'][keys_pdcr_small[i]][1][1] && color != "empty" && caja == "pdcr_small") {
                        var temporal_text = "Esta dentro de " + keys_pdcr_small[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['PDC-RS'][keys_pdcr_small[i]][0][0];
                        fusible_f = fuses_BB['PDC-RS'][keys_pdcr_small[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-RS'][keys_pdcr_small[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-RS'][keys_pdcr_small[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_pdcr_small[i]
                        fuses_value["PDC-RS"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcr_small_array.length != 0) {
                            if (pdcr_small_array.indexOf(element) != -1) {
                                fuses_value["PDC-RS"][element] = "empty";
                                pdcr_small_array.splice(pdcr_small_array.indexOf(element), 1)
                                restaurar_pdcr_small(ctx_pdcr_small, img_pdcr_small);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-RS"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-RS"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-RS"][element] = "empty";
                                        $("#warning-alert-PDCRS").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCRS").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcr_small_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-RS"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-RS"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-RS"][element] = "empty";
                                    $("#warning-alert-PDCRS").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCRS").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcr_small_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcr_small_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-RS: ",pdcr_small_array)
                pdcr_small_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcr_small.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    let cavidad = pdcr_small_array[indice];
                    // console.log("fusible_i : ",fusible_i);
                    // console.log("CAVIDAD : ",cavidad);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcr_small.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcr_small_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcr_small = new Image();
                    pdcr_small_array[indice]
                    let cavidad = pdcr_small_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-RS"][pdcr_small_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-RS"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-RS"][cavidad][0][1];
                    let cavidadx2 = fuses_BB["PDC-RS"][cavidad][1][0];
                    let cavidady2 = fuses_BB["PDC-RS"][cavidad][1][1];
                    // console.log("CAVIDAD X INICIAL: ",cavidadx);
                    // console.log("CAVIDAD X FINAL: ",cavidadx2);
                    // console.log("CAVIDAD Y INICIAL: ",cavidady);
                    // console.log("CAVIDAD Y FINAL: ",cavidady2);
                    getDistance(cavidadx, cavidady, cavidadx2, cavidady2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,30,green":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,40,amber":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,50,red":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,60,red":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,70,gray":
                            ctx_pdcr_small.beginPath();
                            fusible_imagen_pdcr_small.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcr_small.onload = function () {
                                getDistance(fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], fuses_BB['PDC-RS'][cavidad][1][0], fuses_BB['PDC-RS'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-RS'][cavidad][0][0])
                                ctx_pdcr_small.drawImage(this, fuses_BB['PDC-RS'][cavidad][0][0], fuses_BB['PDC-RS'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function precargar_imagen_f96() {
    if (img_f96.getContext) {
        var ctx = img_f96.getContext("2d");
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
            ctx.drawImage(this, 0, 0, imgWidth_f96, imgHeight_f96);
            var datosimagen = ctx.getImageData(0, 0, imgWidth_f96, imgHeight_f96);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_f96 = datosimagen.data;
            ctx.fillStyle = "#0F53F1";
            ctx.lineWidth = "4";
            let keys_f96 = Object.keys(fuses_BB['F96']);
            console.log("La Caja a pintar es la siguiente: F96");
            preview()

            function preview() {
                // console.log("MI ARRAY F96: ",f96_array)
                for (let i = 0; i < f96_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = f96_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-RMID"])[f96_array[i]];
                    console.log("Fusible Colocado: ", fusibleColocado);
                    let cavidadx = fuses_BB["F96"][cavidad][0][0];
                    let cavidady = fuses_BB["F96"][cavidad][0][1];
                    let cavidadw = fuses_BB["F96"][cavidad][1][0];
                    let cavidadh = fuses_BB["F96"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["F96"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("F96 DISTANCE X",xDistance)
                    // console.log("F96 DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx.beginPath();
                    ctx.strokeStyle = color_style;

                    cargar_cavidad(
                        cavidad_ctgry,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );


                }
            }

            img_f96.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['F96']);
                //console.log("KEYS DE f96: ",keys_f96);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("f96_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 1; i < keys_f96.length + 1; i++) {
                    //console.log(fuses_BB['F96']['F96'][0][0]);
                    if (pixelx >= fuses_BB['F96']['F96'][0][0] && pixelx <= fuses_BB['F96']['F96'][1][0] && pixely >= fuses_BB['F96']['F96'][0][1] && pixely <= fuses_BB['F96']['F96'][1][1] && color != "empty" && caja == "f96") {
                        var temporal_text = "Esta dentro de " + keys_f96[i - 1]
                        fusible_i = fuses_BB['F96'][keys_f96[i - 1]][0][0];
                        fusible_f = fuses_BB['F96'][keys_f96[i - 1]][0][1];
                        fusible_i2 = fuses_BB['F96'][keys_f96[i - 1]][1][0];
                        fusible_f2 = fuses_BB['F96'][keys_f96[i - 1]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        // console.log("TEMPORAL TEXT",temporal_text)
                        element = keys_f96[i - 1]
                        fuses_value['PDC-RMID']["F96"] = color
                        // console.log(fuses_value['PDC-RMID']["F96"]);
                        fusible = element;

                        if (f96_array.length != 0) {
                            if (f96_array.indexOf(element) != -1) {
                                fuses_value['PDC-RMID']["F96"] = "empty";
                                f96_array.splice(f96_array.indexOf(element), 1)
                                restaurar_f96(ctx, img_f96);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado");
                                    fuses_value['PDC-RMID']["F96"] = "empty";
                                    return
                                }
                                f96_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado");
                                fuses_value['PDC-RMID']["F96"] = "empty";
                                return
                            }
                            f96_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",f96_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY f96: ",f96_array)
                f96_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx.beginPath();
                    if (fusible_i > fusible_f) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    fusible_imagen.onload = function () {
                        getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2)
                        ctx.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                f96_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_f96 = new Image();
                    let cavidad = f96_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["F96"][f96_array[indice]];
                    console.log("Fusible Colocado: ", fusibleColocado);

                    switch (fusibleColocado) {
                        case "ATO,10,red":
                            ctx.beginPath();
                            fusible_imagen_f96.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_f96.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['F96'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['F96'][cavidad][0][0], fuses_BB['F96'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx.beginPath();
                            fusible_imagen_f96.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_f96.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['F96'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['F96'][cavidad][0][0], fuses_BB['F96'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige":
                            ctx.beginPath();
                            fusible_imagen_f96.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_f96.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['F96'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['F96'][cavidad][0][0], fuses_BB['F96'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx.beginPath();
                            fusible_imagen_f96.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_f96.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['F96'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['F96'][cavidad][0][0], fuses_BB['F96'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx.beginPath();
                            fusible_imagen_f96.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_f96.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['F96'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['F96'][cavidad][0][0], fuses_BB['F96'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                })
            }
        }
    }
}


function precargar_imagen_pdcs() {
    if (img_pdcs.getContext) {
        var ctx = img_pdcs.getContext("2d");
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
            ctx.drawImage(this, 0, 0, imgWidth_pdcs, imgHeight_pdcs);
            var datosimagen = ctx.getImageData(0, 0, imgWidth_pdcs, imgHeight_pdcs);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs = datosimagen.data;
            ctx.fillStyle = "#0F53F1";
            ctx.lineWidth = "4";
            let keys_pdcs = Object.keys(fuses_BB['PDC-S']);
            // console.log("La Caja a pintar es la siguiente: PDC-S");
            preview()

            function preview() {
                // console.log("MI ARRAY PDC-S: ",pdcs_array)
                for (let i = 0; i < pdcs_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcs_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-S"])[pdcs_array[i]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-S"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-S"][cavidad][0][1];
                    let cavidadw = fuses_BB["PDC-S"][cavidad][1][0];
                    let cavidadh = fuses_BB["PDC-S"][cavidad][1][1];
                    let cavidad_ctgry = fuses_types["PDC-S"][cavidad];
                    // console.log(cavidadx)
                    // console.log(cavidady)
                    // console.log(cavidadw)
                    // console.log(cavidadh)
                    getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                    // console.log("PDC-S DISTANCE X",xDistance)
                    // console.log("PDC-S DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx.beginPath();
                    ctx.strokeStyle = color_style;
                    //ctx.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
                        fusibleColocado,
                        orientacion,
                        image,
                        ctx,
                        cavidadx,
                        cavidady,
                        cavidadw,
                        cavidadh
                    );


                }
            }

            img_pdcs.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-S']);
                //console.log("KEYS DE PDCS: ",keys_pdcs);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcs_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 1; i < keys_pdcs.length + 1; i++) {
                    if (pixelx >= fuses_BB['PDC-S'][i][0][0] && pixelx <= fuses_BB['PDC-S'][i][1][0] && pixely >= fuses_BB['PDC-S'][i][0][1] && pixely <= fuses_BB['PDC-S'][i][1][1] && color != "empty" && caja == "pdcs") {
                        var temporal_text = "Esta dentro de " + keys_pdcs[i - 1]
                        fusible_i = fuses_BB['PDC-S'][keys_pdcs[i - 1]][0][0];
                        fusible_f = fuses_BB['PDC-S'][keys_pdcs[i - 1]][0][1];
                        fusible_i2 = fuses_BB['PDC-S'][keys_pdcs[i - 1]][1][0];
                        fusible_f2 = fuses_BB['PDC-S'][keys_pdcs[i - 1]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        // console.log("TEMPORAL TEXT",temporal_text)
                        element = keys_pdcs[i - 1]
                        fuses_value["PDC-S"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcs_array.length != 0) {
                            if (pdcs_array.indexOf(element) != -1) {
                                fuses_value["PDC-S"][element] = "empty";
                                pdcs_array.splice(pdcs_array.indexOf(element), 1)
                                restaurar_pdcs(ctx, img_pdcs);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado");
                                    fuses_value["PDC-S"][element] = "empty";
                                    return
                                }
                                pdcs_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado");
                                fuses_value["PDC-S"][element] = "empty";
                                return
                            }
                            pdcs_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcs_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDCS: ",pdcs_array)
                pdcs_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx.beginPath();
                    if (fusible_i > fusible_f) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    fusible_imagen.onload = function () {
                        getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2)
                        ctx.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcs_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcs = new Image();
                    pdcs_array[indice]
                    let cavidad = pdcs_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-S"][pdcs_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    switch (fusibleColocado) {
                        case "ATO,10,red":
                            ctx.beginPath();
                            fusible_imagen_pdcs.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['PDC-S'][cavidad][0][0], fuses_BB['PDC-S'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx.beginPath();
                            fusible_imagen_pdcs.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['PDC-S'][cavidad][0][0], fuses_BB['PDC-S'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige":
                            ctx.beginPath();
                            fusible_imagen_pdcs.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['PDC-S'][cavidad][0][0], fuses_BB['PDC-S'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx.beginPath();
                            fusible_imagen_pdcs.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['PDC-S'][cavidad][0][0], fuses_BB['PDC-S'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx.beginPath();
                            fusible_imagen_pdcs.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad);
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S'][cavidad][0][0]);
                                ctx.drawImage(this, fuses_BB['PDC-S'][cavidad][0][0], fuses_BB['PDC-S'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                })
            }
        }
    }
}

function precargar_imagen_tblu() {
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
            preview()

            function preview() {
                // console.log("MI ARRAY TBLU: ",tblu_array)
                for (let i = 0; i < tblu_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = tblu_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["TBLU"])[tblu_array[i]];
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
                    // console.log("TBLU DISTANCE X",xDistance)
                    // console.log("TBLU DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx_tblu.beginPath();
                    ctx_tblu.strokeStyle = color_style;
                    //ctx_tblu.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_tblu.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['TBLU']);
                let keys_tblu = Object.keys(fuses_BB['TBLU']);
                // console.log("KEYS DE TBLU: ",keys_tblu);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("tblu_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_tblu.length; i++) {
                    if (pixelx >= fuses_BB['TBLU'][keys_tblu[i]][0][0] && pixelx <= fuses_BB['TBLU'][keys_tblu[i]][1][0] && pixely >= fuses_BB['TBLU'][keys_tblu[i]][0][1] && pixely <= fuses_BB['TBLU'][keys_tblu[i]][1][1] && color != "empty" && caja == "tblu") {
                        var temporal_text = "Esta dentro de " + keys_tblu[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['TBLU'][keys_tblu[i]][0][0];
                        fusible_f = fuses_BB['TBLU'][keys_tblu[i]][0][1];
                        fusible_i2 = fuses_BB['TBLU'][keys_tblu[i]][1][0];
                        fusible_f2 = fuses_BB['TBLU'][keys_tblu[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_tblu[i]
                        fuses_value["TBLU"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (tblu_array.length != 0) {
                            if (tblu_array.indexOf(element) != -1) {
                                fuses_value["TBLU"][element] = "empty";
                                tblu_array.splice(tblu_array.indexOf(element), 1)
                                restaurar_tblu(ctx_tblu, img_tblu);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado");
                                    fuses_value["TBLU"][element] = "empty";
                                    return
                                }
                                tblu_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado");
                                fuses_value["TBLU"][element] = "empty";
                                return
                            }
                            tblu_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",tblu_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY TBLU: ",tblu_array)
                tblu_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_tblu.beginPath();
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + ".jpg";
                    fusible_imagen.onload = function () {
                        getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2)
                        ctx_tblu.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                tblu_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_tblu = new Image();
                    tblu_array[indice]
                    let cavidad = tblu_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["TBLU"][tblu_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    switch (fusibleColocado) {
                        case "ATO,10,red_clear":
                            ctx_tblu.beginPath();
                            fusible_imagen_tblu.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + ".jpg";
                            fusible_imagen_tblu.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['TBLU'][cavidad][0][0])
                                ctx_tblu.drawImage(this, fuses_BB['TBLU'][cavidad][0][0], fuses_BB['TBLU'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige_clear":
                            ctx_tblu.beginPath();
                            fusible_imagen_tblu.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + ".jpg";
                            fusible_imagen_tblu.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['TBLU'][cavidad][0][0])
                                ctx_tblu.drawImage(this, fuses_BB['TBLU'][cavidad][0][0], fuses_BB['TBLU'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue_clear":
                            ctx_tblu.beginPath();
                            fusible_imagen_tblu.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + ".jpg";
                            fusible_imagen_tblu.onload = function () {
                                getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['TBLU'][cavidad][0][0])
                                ctx_tblu.drawImage(this, fuses_BB['TBLU'][cavidad][0][0], fuses_BB['TBLU'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function precargar_imagen_pdcd() {
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
            preview()

            function preview() {
                // console.log("MI ARRAY PDC-D: ",pdcd_array)
                for (let i = 0; i < pdcd_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcd_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-D"])[pdcd_array[i]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

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
                    // console.log("PDC-RMID DISTANCE X",xDistance)
                    // console.log("PDC-RMID DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx_pdcd.beginPath();
                    ctx_pdcd.strokeStyle = color_style;
                    //ctx_pdcr_mid.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_pdcd.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-D']);
                let keys_pdcd = Object.keys(fuses_BB['PDC-D']);
                // console.log("KEYS DE PDCS: ",keys_pdcd);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcd_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcd.length; i++) {
                    if (pixelx >= fuses_BB['PDC-D'][keys_pdcd[i]][0][0] && pixelx <= fuses_BB['PDC-D'][keys_pdcd[i]][1][0] && pixely >= fuses_BB['PDC-D'][keys_pdcd[i]][0][1] && pixely <= fuses_BB['PDC-D'][keys_pdcd[i]][1][1] && color != "empty" && caja == "pdcd") {
                        var temporal_text = "Esta dentro de " + keys_pdcd[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['PDC-D'][keys_pdcd[i]][0][0];
                        fusible_f = fuses_BB['PDC-D'][keys_pdcd[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-D'][keys_pdcd[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-D'][keys_pdcd[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_pdcd[i]
                        fuses_value["PDC-D"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcd_array.length != 0) {
                            if (pdcd_array.indexOf(element) != -1) {
                                fuses_value["PDC-D"][element] = "empty";
                                pdcd_array.splice(pdcd_array.indexOf(element), 1)
                                restaurar_pdcd(ctx_pdcd, img_pdcd);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado");
                                    fuses_value["PDC-D"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-D"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-D"][element] = "empty";
                                        $("#warning-alert-PDCD").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCD").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcd_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado");
                                fuses_value["PDC-D"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-D"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-D"][element] = "empty";
                                    $("#warning-alert-PDCD").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCD").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcd_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcd_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-D: ",pdcd_array)
                pdcd_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcd.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcd.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcd_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcd = new Image();
                    pdcd_array[indice]
                    let cavidad = pdcd_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-D"][pdcd_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    switch (fusibleColocado) {
                        case "ATO,5,beige":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,5,beige":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            // console.log("kjnerbvfdsihgbngrbinrsibnirtsbjtrg")
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcd.beginPath();
                            fusible_imagen_pdcd.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcd.onload = function () {
                                getDistance(fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], fuses_BB['PDC-D'][cavidad][1][0], fuses_BB['PDC-D'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-D'][cavidad][0][0])
                                ctx_pdcd.drawImage(this, fuses_BB['PDC-D'][cavidad][0][0], fuses_BB['PDC-D'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function precargar_imagen_pdcp() {
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
            preview()

            function preview() {
                // console.log("MI ARRAY PDC-P: ",pdcp_array)
                for (let i = 0; i < pdcp_array.length; i++) {
                    var fusible_imagen = new Image();
                    let cavidad = pdcp_array[i];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = JSON.parse(modularity["PDC-P"])[pdcp_array[i]];
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
                    // console.log("PDC-P DISTANCE X",xDistance)
                    // console.log("PDC-P DISTANCE Y",yDistance)
                    let orientacion = xDistance > yDistance ? "h" : "v";
                    var image = new Image();
                    image.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    ctx_pdcp.beginPath();
                    ctx_pdcp.strokeStyle = color_style;
                    //ctx_pdcr_mid.strokeRect(cavidadx, cavidady, xDistance, yDistance);

                    cargar_cavidad(
                        cavidad_ctgry,
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

            img_pdcp.onmouseup = function (event) {
                var fusible;
                // console.log(fuses_BB);
                // console.log(fuses_BB['PDC-P']);
                let keys_pdcp = Object.keys(fuses_BB['PDC-P']);
                // console.log("KEYS DE PDCS: ",keys_pdcp);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcp_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcp.length; i++) {
                    if (pixelx >= fuses_BB['PDC-P'][keys_pdcp[i]][0][0] && pixelx <= fuses_BB['PDC-P'][keys_pdcp[i]][1][0] && pixely >= fuses_BB['PDC-P'][keys_pdcp[i]][0][1] && pixely <= fuses_BB['PDC-P'][keys_pdcp[i]][1][1] && color != "empty" && caja == "pdcp") {
                        var temporal_text = "Esta dentro de " + keys_pdcp[i]
                        // console.log("TEMPORAL TEXT",temporal_text)
                        fusible_i = fuses_BB['PDC-P'][keys_pdcp[i]][0][0];
                        fusible_f = fuses_BB['PDC-P'][keys_pdcp[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-P'][keys_pdcp[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-P'][keys_pdcp[i]][1][1];
                        // console.log(fusible_i);
                        // console.log(fusible_i2);
                        // console.log(fusible_f);
                        // console.log(fusible_f2);
                        element = keys_pdcp[i]
                        fuses_value["PDC-P"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcp_array.length != 0) {
                            if (pdcp_array.indexOf(element) != -1) {
                                fuses_value["PDC-P"][element] = "empty";
                                pdcp_array.splice(pdcp_array.indexOf(element), 1)
                                restaurar_pdcp(ctx_pdcp, img_pdcp);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado");
                                    fuses_value["PDC-P"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-P"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-P"][element] = "empty";
                                        $("#warning-alert-PDCP").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCP").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcp_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado");
                                fuses_value["PDC-P"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-P"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-P"][element] = "empty";
                                    $("#warning-alert-PDCP").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCP").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcp_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcp_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-P: ",pdcp_array)
                pdcp_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcp.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcp.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcp_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcp = new Image();
                    pdcp_array[indice]
                    let cavidad = pdcp_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-P"][pdcp_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MULTI,5,beige":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MULTI,7.5,brown":
                            ctx_pdcp.beginPath();
                            fusible_imagen_pdcp.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcp.onload = function () {
                                getDistance(fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], fuses_BB['PDC-P'][cavidad][1][0], fuses_BB['PDC-P'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-P'][cavidad][0][0])
                                ctx_pdcp.drawImage(this, fuses_BB['PDC-P'][cavidad][0][0], fuses_BB['PDC-P'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function cargar_imagen_pdce() {
    if (img_pdce.getContext) {
        var ctx = img_pdce.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/pdce_3/pdce_3.jpg";
        img.onload = function () {
            imgWidth_pdce = this.width;
            imgHeight_pdce = this.height;
            img_pdce.width = imgWidth_pdce;
            img_pdce.height = imgHeight_pdce;
            // console.log("imgWidth_pdce: ",imgWidth_pdce);
            // console.log("imgHeight_pdce: ",imgHeight_pdce);
            // console.log("img_pdce.width: ",img_pdce.width);
            // console.log("img_pdce.height: ",img_pdce.height);
            ctx.drawImage(this, 0, 0, imgWidth_pdce, imgHeight_pdce);
            var datosimagen = ctx.getImageData(0, 0, imgWidth_pdce, imgHeight_pdce);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdce = datosimagen.data;
            ctx.lineWidth = "4";
            pintar_2();

            function preview() {
                (async () => {
                    // console.log("MI ARRAY PDC-E: ",pdce_array)
                    for (let i = 0; i < pdce_array.length; i++) {
                        var fusible_imagen = new Image();
                        let cavidad = pdce_array[i];
                        // console.log("CAVIDAD : ",cavidad);
                        let fusibleColocado = JSON.parse(modularity["PDC-E"][0])[pdce_array[i]];
                        // console.log("Fusible Colocado: ",fusibleColocado);

                        let cavidadx = fuses_BB["PDC-E"][cavidad][0][0];
                        let cavidady = fuses_BB["PDC-E"][cavidad][0][1];
                        let cavidadw = fuses_BB["PDC-E"][cavidad][1][0];
                        let cavidadh = fuses_BB["PDC-E"][cavidad][1][1];
                        // console.log(cavidadx)
                        // console.log(cavidady)
                        // console.log(cavidadw)
                        // console.log(cavidadh)
                        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                        // console.log("PDC-E DISTANCE X",xDistance)
                        // console.log("PDC-E DISTANCE Y",yDistance)
                        if (yDistance > xDistance) {
                            orientacion = "v";
                            // console.log("Vertical")
                        } else {
                            // console.log("Horizontal")
                            orientacion = "h";
                        }
                        fusible_imagen.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                        // console.log(fusible_imagen.src);
                        await new Promise((resolve, reject) => {
                            fusible_imagen.onload = function () {
                                ctx.beginPath();
                                // console.log("PDC-E DISTANCE X dentro del onload",xDistance)
                                // console.log("PDC-E DISTANCE Y dentro del onload",yDistance)
                                ctx.drawImage(this, cavidadx, cavidady, xDistance, yDistance);
                                ctx.closePath();
                                resolve();
                            }
                            fusible_imagen.onerror = function () {
                                // console.log("ERROR AL CARGAR LA IMAGEN")
                                reject();
                            }

                        });


                    }
                })()
            }

            img_pdce.onmousedown = function (event) {
                var fusible;
                let keys_pdce = Object.keys(fuses_BB['PDC-E']);
                // console.log("KEYS DE PDCE: ",keys_pdce);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdce_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdce.length; i++) {
                    if (pixelx >= fuses_BB['PDC-E'][keys_pdce[i]][0][0] && pixelx <= fuses_BB['PDC-E'][keys_pdce[i]][1][0] && pixely >= fuses_BB['PDC-E'][keys_pdce[i]][0][1] && pixely <= fuses_BB['PDC-E'][keys_pdce[i]][1][1] && color != "empty" && caja == "pdce") {
                        fusible_i = fuses_BB['PDC-E'][keys_pdce[i]][0][0];
                        fusible_f = fuses_BB['PDC-E'][keys_pdce[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-E'][keys_pdce[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-E'][keys_pdce[i]][1][1];
                        element = keys_pdce[i]
                        fuses_value["PDC-E"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdce_array.length != 0) {
                            if (pdce_array.indexOf(element) != -1) {
                                fuses_value["PDC-E"][element] = "empty";
                                pdce_array.splice(pdce_array.indexOf(element), 1)
                                restaurar_pdce(ctx, img_pdce);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-E"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-E"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-E"][element] = "empty";
                                        $("#warning-alert-PDCE").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCE").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdce_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-E"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-E"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-E"][element] = "empty";
                                    $("#warning-alert-PDCE").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCE").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdce_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdce_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-E: ",pdce_array)
                pdce_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    let cavidad = pdce_array[indice];
                    // console.log("fusible_i : ",fusible_i);
                    // console.log("CAVIDAD : ",cavidad);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdce_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdce = new Image();
                    pdce_array[indice]
                    let cavidad = pdce_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-E"][pdce_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-E"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-E"][cavidad][0][1];
                    let cavidadx2 = fuses_BB["PDC-E"][cavidad][1][0];
                    let cavidady2 = fuses_BB["PDC-E"][cavidad][1][1];
                    // console.log("CAVIDAD X INICIAL: ",cavidadx);
                    // console.log("CAVIDAD X FINAL: ",cavidadx2);
                    // console.log("CAVIDAD Y INICIAL: ",cavidady);
                    // console.log("CAVIDAD Y FINAL: ",cavidady2);
                    getDistance(cavidadx, cavidady, cavidadx2, cavidady2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,10,red":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,40,amber":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,50,red":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,60,red":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,70,gray":
                            ctx.beginPath();
                            fusible_imagen_pdce.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce.onload = function () {
                                getDistance(fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], fuses_BB['PDC-E'][cavidad][1][0], fuses_BB['PDC-E'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E'][cavidad][0][0])
                                ctx.drawImage(this, fuses_BB['PDC-E'][cavidad][0][0], fuses_BB['PDC-E'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function restaurar_pdce(ctx, img_pdce) {
    var datosimagen = ctx.getImageData(0, 0, imgWidth_pdce, imgHeight_pdce);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdce[i];
        datos[i + 1] = datosPrim_pdce[i + 1];
        datos[i + 2] = datosPrim_pdce[i + 2];
    }
    ctx.putImageData(datosimagen, 0, 0);
}


function cargar_imagen_pdce_amg() {
    if (img_pdce_amg.getContext) {
        var ctx_pdce_amg = img_pdce_amg.getContext("2d");
        var img = new Image();
        img.src = "static/content/cajas/motor/PDC-E/PDC-E_AMG.jpg";
        img.onload = function () {
            imgWidth_pdce_amg = this.width;
            imgHeight_pdce_amg = this.height;
            img_pdce_amg.width = imgWidth_pdce_amg;
            img_pdce_amg.height = imgHeight_pdce_amg;
            // console.log("imgWidth_pdce_amg: ",imgWidth_pdce_amg);
            // console.log("imgHeight_pdce_amg: ",imgHeight_pdce_amg);
            // console.log("img_pdce_amg.width: ",img_pdce_amg.width);
            // console.log("img_pdce_amg.height: ",img_pdce_amg.height);
            ctx_pdce_amg.drawImage(this, 0, 0, imgWidth_pdce_amg, imgHeight_pdce_amg);
            var datosimagen = ctx_pdce_amg.getImageData(0, 0, imgWidth_pdce_amg, imgHeight_pdce_amg);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdce_amg = datosimagen.data;
            ctx_pdce_amg.lineWidth = "4";
            pintar_2();

            function preview() {
                (async () => {
                    // console.log("MI ARRAY PDC-E_AMG: ",pdce_amg_array)
                    for (let i = 0; i < pdce_amg_array.length; i++) {
                        var fusible_imagen = new Image();
                        let cavidad = pdce_amg_array[i];
                        // console.log("CAVIDAD : ",cavidad);
                        let fusibleColocado = JSON.parse(modularity["PDC-E_AMG"][0])[pdce_amg_array[i]];
                        // console.log("Fusible Colocado: ",fusibleColocado);

                        let cavidadx = fuses_BB["PDC-E_AMG"][cavidad][0][0];
                        let cavidady = fuses_BB["PDC-E_AMG"][cavidad][0][1];
                        let cavidadw = fuses_BB["PDC-E_AMG"][cavidad][1][0];
                        let cavidadh = fuses_BB["PDC-E_AMG"][cavidad][1][1];
                        // console.log(cavidadx)
                        // console.log(cavidady)
                        // console.log(cavidadw)
                        // console.log(cavidadh)
                        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                        // console.log("PDC-E_AMG DISTANCE X",xDistance)
                        // console.log("PDC-E_AMG DISTANCE Y",yDistance)
                        if (yDistance > xDistance) {
                            orientacion = "v";
                            // console.log("Vertical")
                        } else {
                            // console.log("Horizontal")
                            orientacion = "h";
                        }
                        fusible_imagen.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                        // console.log(fusible_imagen.src);
                        await new Promise((resolve, reject) => {
                            fusible_imagen.onload = function () {
                                ctx_pdce_amg.beginPath();
                                // console.log("PDC-E_AMG DISTANCE X dentro del onload",xDistance)
                                // console.log("PDC-E_AMG DISTANCE Y dentro del onload",yDistance)
                                ctx_pdce_amg.drawImage(this, cavidadx, cavidady, xDistance, yDistance);
                                ctx_pdce_amg.closePath();
                                resolve();
                            }
                            fusible_imagen.onerror = function () {
                                // console.log("ERROR AL CARGAR LA IMAGEN")
                                reject();
                            }

                        });


                    }
                })()
            }

            img_pdce_amg.onmousedown = function (event) {
                var fusible;
                let keys_pdce_amg = Object.keys(fuses_BB['PDC-E_AMG']);
                // console.log("KEYS DE PDCE: ",keys_pdce_amg);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdce_amg_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdce_amg.length; i++) {
                    if (pixelx >= fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][0][0] && pixelx <= fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][1][0] && pixely >= fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][0][1] && pixely <= fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][1][1] && color != "empty" && caja == "pdce_amg") {
                        fusible_i = fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][0][0];
                        fusible_f = fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-E_AMG'][keys_pdce_amg[i]][1][1];
                        element = keys_pdce_amg[i]
                        fuses_value["PDC-E_AMG"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdce_amg_array.length != 0) {
                            if (pdce_amg_array.indexOf(element) != -1) {
                                fuses_value["PDC-E_AMG"][element] = "empty";
                                pdce_amg_array.splice(pdce_amg_array.indexOf(element), 1)
                                restaurar_pdce_amg(ctx_pdce_amg, img_pdce_amg);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-E_AMG"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-E_AMG"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-E_AMG"][element] = "empty";
                                        $("#warning-alert-PDCE-AMG").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCE-AMG").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdce_amg_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-E_AMG"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-E_AMG"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-E_AMG"][element] = "empty";
                                    $("#warning-alert-PDCE-AMG").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCE-AMG").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdce_amg_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdce_amg_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-E_AMG: ",pdce_amg_array)
                pdce_amg_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdce_amg.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    let cavidad = pdce_amg_array[indice];
                    // console.log("fusible_i : ",fusible_i);
                    // console.log("CAVIDAD : ",cavidad);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdce_amg.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdce_amg_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdce_amg = new Image();
                    pdce_amg_array[indice]
                    let cavidad = pdce_amg_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-E_AMG"][pdce_amg_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    let cavidadx = fuses_BB["PDC-E_AMG"][cavidad][0][0];
                    let cavidady = fuses_BB["PDC-E_AMG"][cavidad][0][1];
                    let cavidadx2 = fuses_BB["PDC-E_AMG"][cavidad][1][0];
                    let cavidady2 = fuses_BB["PDC-E_AMG"][cavidad][1][1];
                    // console.log("CAVIDAD X INICIAL: ",cavidadx);
                    // console.log("CAVIDAD X FINAL: ",cavidadx2);
                    // console.log("CAVIDAD Y INICIAL: ",cavidady);
                    // console.log("CAVIDAD Y FINAL: ",cavidady2);
                    getDistance(cavidadx, cavidady, cavidadx2, cavidady2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,10,red":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,40,amber":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MAXI,50,red":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,60,red":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "RELAY,70,gray":
                            ctx_pdce_amg.beginPath();
                            fusible_imagen_pdce_amg.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdce_amg.onload = function () {
                                getDistance(fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], fuses_BB['PDC-E_AMG'][cavidad][1][0], fuses_BB['PDC-E_AMG'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-E_AMG'][cavidad][0][0])
                                ctx_pdce_amg.drawImage(this, fuses_BB['PDC-E_AMG'][cavidad][0][0], fuses_BB['PDC-E_AMG'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function restaurar_pdce_amg(ctx_pdce_amg, img_pdce_amg) {
    var datosimagen = ctx_pdce_amg.getImageData(0, 0, imgWidth_pdce_amg, imgHeight_pdce_amg);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdce_amg[i];
        datos[i + 1] = datosPrim_pdce_amg[i + 1];
        datos[i + 2] = datosPrim_pdce_amg[i + 2];
    }
    ctx_pdce_amg.putImageData(datosimagen, 0, 0);
}

function cargar_imagen_pdcs1() {
    if (img_pdcs1.getContext) {
        var ctx_pdcs1 = img_pdcs1.getContext("2d");
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
            ctx_pdcs1.drawImage(this, 0, 0, imgWidth_pdcs1, imgHeight_pdcs1);
            var datosimagen = ctx_pdcs1.getImageData(0, 0, imgWidth_pdcs1, imgHeight_pdcs1);
            // console.log("datos imagen: ",datosimagen)
            datosPrim_pdcs1 = datosimagen.data;
            ctx_pdcs1.lineWidth = "4";
            pintar_2();

            function preview() {
                (async () => {
                    // console.log("MI ARRAY PDC-S1: ",pdcs1_array)
                    for (let i = 0; i < pdcs1_array.length; i++) {
                        var fusible_imagen = new Image();
                        let cavidad = pdcs1_array[i];
                        console.log("CAVIDAD : ", cavidad);
                        let fusibleColocado = JSON.parse(modularity["PDC-S1"][0])[pdcs1_array[i]];
                        console.log("Fusible Colocado: ", fusibleColocado);

                        let cavidadx = fuses_BB["PDC-S1"][cavidad][0][0];
                        let cavidady = fuses_BB["PDC-S1"][cavidad][0][1];
                        let cavidadw = fuses_BB["PDC-S1"][cavidad][1][0];
                        let cavidadh = fuses_BB["PDC-S1"][cavidad][1][1];
                        // console.log(cavidadx)
                        // console.log(cavidady)
                        // console.log(cavidadw)
                        // console.log(cavidadh)
                        getDistance(cavidadx, cavidady, cavidadw, cavidadh);
                        // console.log("PDC-S1 DISTANCE X",xDistance)
                        // console.log("PDC-S1 DISTANCE Y",yDistance)
                        if (yDistance > xDistance) {
                            orientacion = "v";
                            // console.log("Vertical")
                        } else {
                            // console.log("Horizontal")
                            orientacion = "h";
                        }
                        fusible_imagen.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                        // console.log(fusible_imagen.src);
                        await new Promise((resolve, reject) => {
                            fusible_imagen.onload = function () {
                                ctx_pdcs1.beginPath();
                                // console.log("PDC-S1 DISTANCE X dentro del onload",xDistance)
                                // console.log("PDC-S1 DISTANCE Y dentro del onload",yDistance)
                                ctx_pdcs1.drawImage(this, cavidadx, cavidady, xDistance, yDistance);
                                ctx_pdcs1.closePath();
                                resolve();
                            }
                            fusible_imagen.onerror = function () {
                                // console.log("ERROR AL CARGAR LA IMAGEN")
                                reject();
                            }

                        });


                    }
                })()
            }

            img_pdcs1.onmousedown = function (event) {
                var fusible;
                let keys_pdcs1 = Object.keys(fuses_BB['PDC-S1']);
                // console.log("KEYS DE PDCS: ",keys_pdcs1);
                var x = event.pageX;
                var y = event.pageY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                // console.log(coor);
                var X = document.getElementById("pdcs1_image_v_canvas").getBoundingClientRect();
                pixelx = x - window.scrollX - X.left
                pixely = y - window.scrollY - X.top
                // console.log("Pixel x: "+pixelx+" Pixel y: "+pixely);

                for (i = 0; i < keys_pdcs1.length; i++) {
                    if (pixelx >= fuses_BB['PDC-S1'][keys_pdcs1[i]][0][0] && pixelx <= fuses_BB['PDC-S1'][keys_pdcs1[i]][1][0] && pixely >= fuses_BB['PDC-S1'][keys_pdcs1[i]][0][1] && pixely <= fuses_BB['PDC-S1'][keys_pdcs1[i]][1][1] && color != "empty" && caja == "pdcs1") {
                        fusible_i = fuses_BB['PDC-S1'][keys_pdcs1[i]][0][0];
                        fusible_f = fuses_BB['PDC-S1'][keys_pdcs1[i]][0][1];
                        fusible_i2 = fuses_BB['PDC-S1'][keys_pdcs1[i]][1][0];
                        fusible_f2 = fuses_BB['PDC-S1'][keys_pdcs1[i]][1][1];
                        element = keys_pdcs1[i]
                        fuses_value["PDC-S1"][element] = color
                        // console.log(fuses_value);
                        fusible = element;

                        if (pdcs1_array.length != 0) {
                            if (pdcs1_array.indexOf(element) != -1) {
                                fuses_value["PDC-S1"][element] = "empty";
                                pdcs1_array.splice(pdcs1_array.indexOf(element), 1)
                                restaurar_pdcs1(ctx_pdcs1, img_pdcs1);
                                pintar_2()
                            } else {
                                var temp = color.split(",");
                                if (temp[0] == "eliminar") {
                                    console.log("Fusible eliminado")
                                    fuses_value["PDC-S1"][element] = "empty";
                                    return
                                } else {
                                    if (temp[0] != fuses_types["PDC-S1"][element]) {
                                        console.log("NO COINCIDE")
                                        fuses_value["PDC-S1"][element] = "empty";
                                        $("#warning-alert-PDCS1").fadeTo(2000, 500).slideUp(500, function () {
                                            $("#warning-alert-PDCS1").slideUp(500);
                                        });
                                        return
                                    }
                                }
                                pdcs1_array.push(element)
                                pintar()
                            }
                        } else {
                            var temp = color.split(",");
                            if (temp[0] == "eliminar") {
                                console.log("Fusible eliminado")
                                fuses_value["PDC-S1"][element] = "empty";
                                return
                            } else {
                                if (temp[0] != fuses_types["PDC-S1"][element]) {
                                    console.log("NO COINCIDE")
                                    fuses_value["PDC-S1"][element] = "empty";
                                    $("#warning-alert-PDCS1").fadeTo(2000, 500).slideUp(500, function () {
                                        $("#warning-alert-PDCS1").slideUp(500);
                                    });
                                    return
                                }
                            }
                            pdcs1_array.push(element)
                            pintar()
                        }
                        // console.log("LEYENDO ARRAY 2: ",pdcs1_array);
                    }
                }
                console.log("FUSIBLE: ", fusible);
            }

            function pintar() {
                // console.log("MI ARRAY PDC-S1: ",pdcs1_array)
                pdcs1_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);
                    ctx_pdcs1.beginPath();
                    getDistance(fusible_i, fusible_f, fusible_i2, fusible_f2);
                    if (yDistance > xDistance) {
                        orientacion = "v";
                        // console.log("Vertical")
                    } else {
                        // console.log("Horizontal")
                        orientacion = "h";
                    }
                    fusible_imagen.src = "static/content/cajas/interior/fusibles/" + color + orientacion + ".jpg";
                    // console.log(fusible_imagen.src);
                    fusible_imagen.onload = function () {
                        ctx_pdcs1.drawImage(this, fusible_i, fusible_f, xDistance, yDistance);
                    }
                });
            }

            function pintar_2() {
                pdcs1_array.forEach(function (valor, indice, array) {
                    // console.log("En el índice " + indice + " hay este valor: " + valor);

                    var fusible_imagen_pdcs1 = new Image();
                    pdcs1_array[indice]
                    let cavidad = pdcs1_array[indice];
                    // console.log("CAVIDAD : ",cavidad);
                    let fusibleColocado = fuses_value["PDC-S1"][pdcs1_array[indice]];
                    // console.log("Fusible Colocado: ",fusibleColocado);

                    switch (fusibleColocado) {
                        case "MINI,5,beige":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,7.5,brown":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,10,red":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "MINI,15,blue":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,5,beige":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,7.5,brown":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,10,red":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,15,blue":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,20,yellow":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,25,white":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                        case "ATO,30,green":
                            ctx_pdcs1.beginPath();
                            fusible_imagen_pdcs1.src = "static/content/cajas/interior/fusibles/" + fusibleColocado + orientacion + ".jpg";
                            fusible_imagen_pdcs1.onload = function () {
                                getDistance(fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], fuses_BB['PDC-S1'][cavidad][1][0], fuses_BB['PDC-S1'][cavidad][1][1]);
                                // console.log("Fusible a Repintar: ",cavidad)
                                // console.log("Posición del Fusible a repintar: ",fuses_BB['PDC-S1'][cavidad][0][0])
                                ctx_pdcs1.drawImage(this, fuses_BB['PDC-S1'][cavidad][0][0], fuses_BB['PDC-S1'][cavidad][0][1], xDistance, yDistance);
                            }
                            break;
                    }
                });
            }
        }
    }
}

function restaurar_pdcs1(ctx_pdcs1, img_pdcs1) {
    var datosimagen = ctx_pdcs1.getImageData(0, 0, imgWidth_pdcs1, imgHeight_pdcs1);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcs1[i];
        datos[i + 1] = datosPrim_pdcs1[i + 1];
        datos[i + 2] = datosPrim_pdcs1[i + 2];
    }
    ctx_pdcs1.putImageData(datosimagen, 0, 0);
}


function change_caja_pdce() {
    if (document.getElementById('pdce_option').value === 'Seleccione la caja PDC-E...') {
        // console.log("seleccione una caja")
        document.getElementById('caja_pdce').style.display = "none"
        document.getElementById('caja_pdce_amg').style.display = "none"
        pdce_caja = ""
        pdce_caja_to_db = ""
    }
    ////// PDC-E //////
    if (document.getElementById('pdce_option').value === 'PDC-E') {
        document.getElementById('caja_pdce').style.display = "block";
        document.getElementById('caja_pdce_amg').style.display = "none";
        pdce_caja = "PDC-E"
        pdce_caja_to_db = "PDC-E"
        keys_PDCE = Object.keys(fuses_value["PDC-E"])
        //console.log("keys_PDCE",keys_PDCE)

        //     ////// Si la PDC-E AMG tiene fusibles: //////
        if (pdce_amg_array.length != 0) {
            var hold_config = confirm("¿Desea mantener la configuracion de fusibles de la PDC-E AMG?");
            if (hold_config) {
                //console.log(hold_config);
                pdce_amg_array = pdce_amg_array.slice()
                //console.log("Fuses Value de PDC-E: ", fuses_value["PDC-E_AMG"])
                //console.log(pdce_amg_array)

                for (let index = 0; index < pdce_amg_array.length; index++) {
                    //console.log("Fusibles: ", pdce_amg_array[index]);
                    if (fuses_value["PDC-E_AMG"].hasOwnProperty(pdce_amg_array[index])) {
                        if (fuses_types["PDC-E"][pdce_amg_array[index]]) {
                            pdce_array.push(pdce_amg_array[index]) // envia el valor para saber que color es el fusible que es colocado
                        }
                        //console.log("Valor Fusible en fusesvalue: ", fuses_value["PDC-E_AMG"][pdce_amg_array[index]]);
                        fuses_value["PDC-E"][pdce_amg_array[index]] = fuses_value["PDC-E_AMG"][pdce_amg_array[index]].slice();
                        fuses_value["PDC-E_AMG"][pdce_amg_array[index]] = "empty";
                        //console.log("fusible en pdcr:", fuses_value["PDC-E_AMG"][pdce_amg_array[index]]);
                    } else {
                        console.log("Fusible no copiado: ", pdce_amg_array[index])
                    }
                }
                pdce_amg_array = [];
            } else {
                //console.log(hold_config);
                pdce_amg_array = [];
            }
        } else {
            hold_config = false;
            pdce_array = []
            pdce_amg_array = []
        }
        // for (let i = 0; i < keys_PDCEAMG.length; i++){
        //   // console.log("keys_PDCEAMG[i]",keys_PDCEAMG[i])
        //   // console.log("Fusible: ",fuses_value["PDC-E_AMG"][keys_PDCEAMG[i]])
        //   fuses_value["PDC-E_AMG"][keys_PDCEAMG[i]] = "empty";
        // }
        // pdce_array = [];
        // pdce_amg_array = [];
        var t1 = new ToolTip_pdce_amg(img_pdce_amg, "This is a tool-tip", 150);
        cargar_imagen_pdce_amg();
        console.log("PDC-E_AMG ARRAY FINAL: ", pdce_amg_array);
        console.log("PDC-E ARRAY FINAL: ", pdce_array);
    }
}


//////////////////////////////////////////// ToolTips para Cavidades ////////////////////////////////////////////
// create a tool-tip instance:
var t1 = new ToolTip_pdcs(img_pdcs, "This is a tool-tip", 150);
// The Tool-Tip instance:
function ToolTip_pdcs(img_pdcs, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcs.parentNode, // parent node for img_pdcs
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcs
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-S']);
    // console.log("KEYS DE PDCS: ",keys_cavidad);
    let cavidad;
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
            let fusible_tooltip;
            if (!visible && pos.x >= fuses_BB['PDC-S'][i][0][0] && pos.x <= fuses_BB['PDC-S'][i][1][0] && pos.y >= fuses_BB['PDC-S'][i][0][1] && pos.y <= fuses_BB['PDC-S'][i][1][1]) {
                cavidad = keys_cavidad[i - 1];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-S'][cavidad] == "empty") {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-S'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcs
    function getPos(e) {
        var r = img_pdcs.getBoundingClientRect();
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
    img_pdcs.addEventListener("mousemove", check);
    img_pdcs.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  PDC-R ToolTip
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
            if (!visible && pos.x >= fuses_BB['PDC-R'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-R'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-R'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-R'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-R'][cavidad] == "empty" || fuses_value['PDC-R'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-R'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdcr.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  PDC-RMID ToolTip
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
            if (!visible && pos.x >= fuses_BB['PDC-RMID'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-RMID'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-RMID'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-RMID'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-RMID'][cavidad] == "empty" || fuses_value['PDC-RMID'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-RMID'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdcr_1.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  PDC-RS ToolTip
function ToolTip_pdcr_small(img_pdcr_small, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_pdcr_small.parentNode, // parent node for img_pdcr_small
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_pdcr_small
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['PDC-RS']);
    // console.log("KEYS DE PDC-RS: ",keys_cavidad);
    let cavidad;
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
            if (!visible && pos.x >= fuses_BB['PDC-RS'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-RS'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-RS'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-RS'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-RS'][cavidad] == "empty" || fuses_value['PDC-RS'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-RS'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_pdcr_small
    function getPos(e) {
        var r = img_pdcr_small.getBoundingClientRect();
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
    img_pdcr_small.addEventListener("mousemove", check);
    img_pdcr_small.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  F96 ToolTip
var t1 = new ToolTip_f96(img_f96, "This is a tool-tip", 150);

function ToolTip_f96(img_f96, text, width) {
    var me = this, // self-reference for event handlers
        div = document.createElement("div"), // the tool-tip div
        parent = img_f96.parentNode, // parent node for img_f96
        visible = false; // current status
    // show the tool-tip
    this.show = function (pos) {
        if (!visible) { // ignore if already shown (or reset time)
            visible = true; // lock so it's only shown once
            setDivPos(pos); // set position
            parent.appendChild(div); // add to parent of img_f96
        }
    }
    // hide the tool-tip
    function hide() {
        visible = false; // hide it after timeout
        if (parent.contains(div)) {
            parent.removeChild(div); // remove from DOM
        }
    }

    let keys_cavidad = Object.keys(fuses_BB['F96']);
    // console.log("KEYS DE F96: ",keys_cavidad);
    let cavidad;
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
            if (!visible && pos.x >= fuses_BB['F96'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['F96'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['F96'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['F96'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-RMID']['F96'] == "empty") {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-RMID']['F96'];
                    //console.log(fusible_tooltip)
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
                me.show(posAbs); // show tool-tip at this pos
            } else setDivPos(posAbs);
        } // otherwise, update position
    }
    // get mouse position relative to img_f96
    function getPos(e) {
        var r = img_f96.getBoundingClientRect();
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
    img_f96.addEventListener("mousemove", check);
    img_f96.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  TBLU ToolTip
var t1 = new ToolTip_tblu(img_tblu, "This is a tool-tip", 150);

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
            if (!visible && pos.x >= fuses_BB['TBLU'][i][0][0] && pos.x <= fuses_BB['TBLU'][i][1][0] && pos.y >= fuses_BB['TBLU'][i][0][1] && pos.y <= fuses_BB['TBLU'][i][1][1]) {
                cavidad = keys_cavidad[i - 1];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['TBLU'][cavidad] == "empty") {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['TBLU'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_tblu.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  PDC-D ToolTip
var t1 = new ToolTip_pdcd(img_pdcd, "This is a tool-tip", 150);

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
            if (!visible && pos.x >= fuses_BB['PDC-D'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-D'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-D'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-D'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-D'][cavidad] == "empty") {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-D'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdcd.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}
//  PDC-P ToolTip
var t1 = new ToolTip_pdcp(img_pdcp, "This is a tool-tip", 150);

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
            if (!visible && pos.x >= fuses_BB['PDC-P'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-P'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-P'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-P'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-P'][cavidad] == "empty") {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-P'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdcp.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//  PDC-E ToolTip
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
    // console.log("KEYS DE PDC-E: ",keys_cavidad);
    let cavidad;
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
            if (!visible && pos.x >= fuses_BB['PDC-E'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-E'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-E'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-E'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-E'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-E'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdce.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//  PDC-E_AMG ToolTip
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
    // console.log("KEYS DE PDC-E_AMG: ",keys_cavidad);
    let cavidad;
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
            if (!visible && pos.x >= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-E_AMG'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-E_AMG'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-E_AMG'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdce_amg.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}

//  PDC-S1 ToolTip
var t1 = new ToolTip_pdcs1(img_pdcs1, "This is a tool-tip", 150);

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
    // console.log("KEYS DE PDC-S1: ",keys_cavidad);
    let cavidad;
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
            if (!visible && pos.x >= fuses_BB['PDC-S1'][keys_cavidad[i]][0][0] && pos.x <= fuses_BB['PDC-S1'][keys_cavidad[i]][1][0] && pos.y >= fuses_BB['PDC-S1'][keys_cavidad[i]][0][1] && pos.y <= fuses_BB['PDC-S1'][keys_cavidad[i]][1][1]) {
                cavidad = keys_cavidad[i];
                // set some initial styles, can be replaced by class-name etc.
                div.style.cssText = "position:fixed;padding:7px;font-weight: bold;color:#000;background:rgba(51, 255, 252, 0.6);pointer-events:none;width:" + width + "px";
                if (fuses_value['PDC-S1'][cavidad] == undefined) {
                    fusible_tooltip = "Vacío";
                } else {
                    fusible_tooltip = fuses_value['PDC-S1'][cavidad];
                }
                div.innerHTML = 'Cavidad: ' + cavidad + '<br>Fusible: ' + fusible_tooltip;
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
    img_pdcs1.addEventListener("click", check);
    $(document).on('wheel', function () {
        hide();
    });
}


//////////////////////////////////////////// Edición de los Módulos ////////////////////////////////////////////
function change_caja_pdcr() {
    if (document.getElementById('pdcr_option').value === 'Seleccione la caja PDCR...') {
        // console.log("seleccione una caja")
        document.getElementById('caja_pdcr').style.display = "none"
        document.getElementById('caja_pdcr_1').style.display = "none"
        document.getElementById('caja_pdcr_small').style.display = "none"
        pdcr_caja = ""
        pdcr_caja_to_db = ""
    }
    ////// PDC-R //////
    if (document.getElementById('pdcr_option').value === 'PDCR') {
        // console.log("pdcr")
        document.getElementById('caja_pdcr').style.display = "block";
        document.getElementById('caja_pdcr_1').style.display = "none";
        document.getElementById('caja_pdcr_small').style.display = "none";
        pdcr_caja = "pdcr";
        pdcr_caja_to_db = "PDC-R";
        ////// Si la PDC-RMID tiene fusibles: //////
        if (pdcr_1_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);

                pdcr_array = pdcr_1_array.slice()
                // console.log("Fuses Value de PDC-RMID : ",fuses_value["PDC-RMID"])
                for (let index = 0; index < pdcr_1_array.length; index++) {
                    // console.log("Fusibles: ",pdcr_1_array[index]);
                    // console.log("Fusible valor en fusevalue: ",fuses_value["PDC-RMID"][pdcr_1_array[index]]);
                    fuses_value["PDC-R"][pdcr_1_array[index]] = fuses_value["PDC-RMID"][pdcr_1_array[index]].slice();
                    // console.log("fusible en pdcr:",fuses_value["PDC-R"][pdcr_1_array[index]]);
                    fuses_value["PDC-RMID"][pdcr_1_array[index]] = "empty";
                }
                pdcr_1_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_1_array.length; index++) {
                    fuses_value["PDC-RMID"][pdcr_1_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            }
        }
        ////// Si la PDC-RS tiene fusibles: //////
        else if (pdcr_small_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);

                pdcr_array = pdcr_small_array.slice()
                // console.log("Fuses Value de PDC-RS : ",fuses_value["PDC-RS"])
                for (let index = 0; index < pdcr_small_array.length; index++) {
                    // console.log("Fusibles: ",pdcr_small_array[index]);
                    // console.log("Fusible valor en fusevalue: ",fuses_value["PDC-RS"][pdcr_small_array[index]]);
                    fuses_value["PDC-R"][pdcr_small_array[index]] = fuses_value["PDC-RS"][pdcr_small_array[index]].slice();
                    // console.log("fusible en pdcr:",fuses_value["PDC-R"][pdcr_small_array[index]]);
                    fuses_value["PDC-RS"][pdcr_small_array[index]] = "empty";
                }
                pdcr_small_array = [];
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_small_array.length; index++) {
                    fuses_value["PDC-RS"][pdcr_small_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            }
        } else {
            hold_config = false;
            pdcr_array = []
            pdcr_1_array = []
            pdcr_small_array = []
        }
        precargar_imagen_pdcr();
        console.log("PDC-RMID ARRAY FINAL: ", pdcr_1_array);
        console.log("PDC-RS ARRAY FINAL: ", pdcr_small_array);
        console.log("PDC-R ARRAY FINAL: ", pdcr_array);
    }
    ////// PDC-RMID //////
    if (document.getElementById('pdcr_option').value === 'PDCR_1') {
        // console.log("pdcr_1")
        document.getElementById('caja_pdcr').style.display = "none";
        document.getElementById('caja_pdcr_1').style.display = "block";
        document.getElementById('caja_pdcr_small').style.display = "none";
        pdcr_caja = "pdcr_1";
        pdcr_caja_to_db = "PDC-RMID";
        ////// Si la PDC-R tiene fusibles: //////
        if (pdcr_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);

                // console.log("fuses value : ",fuses_value["PDC-R"])
                for (let index = 0; index < pdcr_array.length; index++) {
                    // console.log("Fusible: ",pdcr_array[index]);
                    if (fuses_value["PDC-RMID"].hasOwnProperty(pdcr_array[index])) {
                        pdcr_1_array.push(pdcr_array[index]);
                        // console.log("Si Existe",fuses_value["PDC-RMID"].hasOwnProperty(pdcr_array[index]))
                        fuses_value["PDC-RMID"][pdcr_array[index]] = fuses_value["PDC-R"][pdcr_array[index]].slice();
                        // console.log("Fusible Copiado a caja destino:",fuses_value["PDC-RMID"][pdcr_array[index]]);
                        fuses_value["PDC-R"][pdcr_array[index]] = "empty";
                    } else {
                        console.log("Fusible no copiado: ", pdcr_array[index]);
                    }

                }
                pdcr_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_array.length; index++) {
                    fuses_value["PDC-R"][pdcr_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
                // console.log("PDC-RMID fuses FINAL: ",fuses_value["PDC-RMID"]);
                // console.log("PDC-R fuses FINAL: ",fuses_value["PDC-R"]);
            }
        }
        ////// Si la PDC-RS tiene fusibles: //////
        else if (pdcr_small_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);
                // console.log("fuses value : ",fuses_value["PDC-RS"])
                for (let index = 0; index < pdcr_small_array.length; index++) {
                    // console.log("Fusible: ",pdcr_small_array[index]);
                    if (fuses_value["PDC-RMID"].hasOwnProperty(pdcr_small_array[index])) {
                        pdcr_1_array.push(pdcr_small_array[index]);
                        // console.log("Si Existe",fuses_value["PDC-RMID"].hasOwnProperty(pdcr_small_array[index]))
                        fuses_value["PDC-RMID"][pdcr_small_array[index]] = fuses_value["PDC-RS"][pdcr_small_array[index]].slice();
                        // console.log("Fusible Copiado a caja destino:",fuses_value["PDC-RMID"][pdcr_small_array[index]]);
                        fuses_value["PDC-RS"][pdcr_small_array[index]] = "empty";
                    } else {
                        console.log("Fusible no copiado: ", pdcr_small_array[index]);
                    }

                }
                pdcr_small_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_small_array.length; index++) {
                    fuses_value["PDC-RS"][pdcr_small_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
                // console.log("PDC-RMID fuses FINAL: ",fuses_value["PDC-RMID"]);
                // console.log("PDC-RS fuses FINAL: ",fuses_value["PDC-RS"]);
            }
        } else {
            hold_config = false;
            pdcr_array = []
            pdcr_1_array = []
            pdcr_small_array = []
        }
        precargar_imagen_pdcr_1();
        console.log("PDC-RMID ARRAY FINAL: ", pdcr_1_array);
        console.log("PDC-RS ARRAY FINAL: ", pdcr_small_array);
        console.log("PDC-R ARRAY FINAL: ", pdcr_array);
    }
    ////// PDC-RS //////
    if (document.getElementById('pdcr_option').value === 'PDCR_SMALL') {
        // console.log("pdcr_small")
        document.getElementById('caja_pdcr').style.display = "none";
        document.getElementById('caja_pdcr_1').style.display = "none";
        document.getElementById('caja_pdcr_small').style.display = "block";
        pdcr_caja = "pdcr_small";
        pdcr_caja_to_db = "PDC-RS";
        ////// Si la PDC-R tiene fusibles: //////
        if (pdcr_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);

                // console.log("fuses value : ",fuses_value["PDC-R"])
                for (let index = 0; index < pdcr_array.length; index++) {
                    // console.log("Fusible: ",pdcr_array[index]);
                    if (fuses_value["PDC-RS"].hasOwnProperty(pdcr_array[index])) {
                        pdcr_small_array.push(pdcr_array[index]);
                        // console.log("Si Existe",fuses_value["PDC-RS"].hasOwnProperty(pdcr_array[index]))
                        fuses_value["PDC-RS"][pdcr_array[index]] = fuses_value["PDC-R"][pdcr_array[index]].slice();
                        // console.log("Fusible Copiado a caja destino:",fuses_value["PDC-RS"][pdcr_array[index]]);
                        fuses_value["PDC-R"][pdcr_array[index]] = "empty";
                    } else {
                        console.log("Fusible no copiado: ", pdcr_array[index]);
                    }

                }
                pdcr_array = [];
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_array.length; index++) {
                    fuses_value["PDC-R"][pdcr_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
                // console.log("PDC-R ARRAY FINAL: ",pdcr_array);
                // console.log("PDC-RS fuses FINAL: ",fuses_value["PDC-RS"]);
                // console.log("PDC-R fuses FINAL: ",fuses_value["PDC-R"]);
            }
        }
        ////// Si la PDC-RMID tiene fusibles: //////
        else if (pdcr_1_array.length != 0) {
            hold_config = confirm("Desea mantener la configuración de fusibles?");
            if (hold_config) {
                console.log(hold_config);

                pdcr_small_array = pdcr_1_array.slice()
                // console.log("Fuses Value de PDC-RMID : ",fuses_value["PDC-RMID"])
                for (let index = 0; index < pdcr_1_array.length; index++) {
                    // console.log("Fusibles: ",pdcr_1_array[index]);
                    // console.log("Fusible valor en fusevalue: ",fuses_value["PDC-RMID"][pdcr_1_array[index]]);
                    fuses_value["PDC-RS"][pdcr_1_array[index]] = fuses_value["PDC-RMID"][pdcr_1_array[index]].slice();
                    // console.log("fusible en pdcr:",fuses_value["PDC-RS"][pdcr_1_array[index]]);
                    fuses_value["PDC-RMID"][pdcr_1_array[index]] = "empty";
                }
                pdcr_1_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
            } else {
                console.log(hold_config);
                for (let index = 0; index < pdcr_1_array.length; index++) {
                    fuses_value["PDC-RMID"][pdcr_1_array[index]] = "empty";
                }
                pdcr_array = [];
                pdcr_1_array = [];
                pdcr_small_array = [];
                // console.log("PDC-RMID ARRAY FINAL: ",pdcr_1_array);
                // console.log("PDC-RS ARRAY FINAL: ",pdcr_small_array);
            }
        } else {
            hold_config = false;
            pdcr_array = []
            pdcr_1_array = []
            pdcr_small_array = []
        }
        precargar_imagen_pdcr_small();
        console.log("PDC-RMID ARRAY FINAL: ", pdcr_1_array);
        console.log("PDC-RS ARRAY FINAL: ", pdcr_small_array);
        console.log("PDC-R ARRAY FINAL: ", pdcr_array);
    }
}



$("#beige_pdcr").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_pdcr").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_pdcr").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcr").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_ato_pdcr").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#natural_pdcr").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#amarillo_pdcr").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_ato_pdcr").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_30_pdcr").on("click", function () {
    color = "MAXI,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#naranja_pdcr").on("click", function () {
    color = "MAXI,40,amber";
    color_style = "#FFA500";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_50_pdcr").on("click", function () {
    color = "MAXI,50,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_mini_pdcr").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#relx_pdcr").on("click", function () {
    color = "RELAY,60,red";
    color_style = "#FF00FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#relt_pdcr").on("click", function () {
    color = "RELAY,70,gray";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcr").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcr(ctx_pdcr, img_pdcr) {
    var datosimagen = ctx_pdcr.getImageData(0, 0, imgWidth_pdcr, imgHeight_pdcr);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcr[i];
        datos[i + 1] = datosPrim_pdcr[i + 1];
        datos[i + 2] = datosPrim_pdcr[i + 2];
    }
    ctx_pdcr.putImageData(datosimagen, 0, 0);
}

$("#beige_pdcr_mid").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_pdcr_mid").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_pdcr_mid").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcr_mid").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_ato_pdcr_mid").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#natural_pdcr_mid").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#amarillo_pdcr_mid").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_ato_pdcr_mid").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_30_pdcr_mid").on("click", function () {
    color = "MAXI,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#naranja_pdcr_mid").on("click", function () {
    color = "MAXI,40,amber";
    color_style = "#FFA500";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_50_pdcr_mid").on("click", function () {
    color = "MAXI,50,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_mini_pdcr_mid").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#relx_pdcr_mid").on("click", function () {
    color = "RELAY,60,red";
    color_style = "#FF00FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#relt_pdcr_mid").on("click", function () {
    color = "RELAY,70,gray";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcr_mid").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_mid";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcr_1(ctx_pdcr_mid, img_pdcr_1) {
    var datosimagen = ctx_pdcr_mid.getImageData(0, 0, imgWidth_pdcr_mid, imgHeight_pdcr_mid);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcr_mid[i];
        datos[i + 1] = datosPrim_pdcr_mid[i + 1];
        datos[i + 2] = datosPrim_pdcr_mid[i + 2];
    }
    ctx_pdcr_mid.putImageData(datosimagen, 0, 0);
}

$("#beige_pdcr_small").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_pdcr_small").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_pdcr_small").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcr_small").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_ato_pdcr_small").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#natural_pdcr_small").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#amarillo_pdcr_small").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_ato_pdcr_small").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_30_pdcr_small").on("click", function () {
    color = "MAXI,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#naranja_pdcr_small").on("click", function () {
    color = "MAXI,40,amber";
    color_style = "#FFA500";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_50_pdcr_small").on("click", function () {
    color = "MAXI,50,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_mini_pdcr_small").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#relx_pdcr_small").on("click", function () {
    color = "RELAY,60,red";
    color_style = "#FF00FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#relt_pdcr_small").on("click", function () {
    color = "RELAY,70,gray";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcr_small").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcr_small";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcr_small(ctx_pdcr_small, img_pdcr_small) {
    var datosimagen = ctx_pdcr_small.getImageData(0, 0, imgWidth_pdcr_small, imgHeight_pdcr_small);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcr_small[i];
        datos[i + 1] = datosPrim_pdcr_small[i + 1];
        datos[i + 2] = datosPrim_pdcr_small[i + 2];
    }
    ctx_pdcr_small.putImageData(datosimagen, 0, 0);
}

$("#beige_f96").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_f96").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_f96").on("click", function () {
    color = "ATO,10,red";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_f96").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_f96").on("click", function () {
    color = "ATO,30,green";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_f96").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "f96";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_f96(ctx_f96, img_f96) {
    var datosimagen = ctx_f96.getImageData(0, 0, imgWidth_f96, imgHeight_f96);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_f96[i];
        datos[i + 1] = datosPrim_f96[i + 1];
        datos[i + 2] = datosPrim_f96[i + 2];
    }
    ctx_f96.putImageData(datosimagen, 0, 0);
}
$("#rojo_pdcs").on("click", function () {
    color = "ATO,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_pdcs").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});
$("#beige_pdcs").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_pdcs").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcs").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcs").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcs";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcs(ctx, img_pdcs) {
    var datosimagen = ctx.getImageData(0, 0, imgWidth_pdcs, imgHeight_pdcs);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcs[i];
        datos[i + 1] = datosPrim_pdcs[i + 1];
        datos[i + 2] = datosPrim_pdcs[i + 2];
    }
    ctx.putImageData(datosimagen, 0, 0);
}

$("#rojo_tblu").on("click", function () {
    color = "ATO,10,red_clear";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "tblu";
    console.log("Caja seleccionada: ", caja);
});
$("#beige_tblu").on("click", function () {
    color = "ATO,5,beige_clear";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "tblu";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_tblu").on("click", function () {
    color = "ATO,15,blue_clear";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "tblu";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_tblu").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "tblu";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_tblu(ctx_tblu, img_tblu) {
    var datosimagen = ctx_tblu.getImageData(0, 0, imgWidth_tblu, imgHeight_tblu);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_tblu[i];
        datos[i + 1] = datosPrim_tblu[i + 1];
        datos[i + 2] = datosPrim_tblu[i + 2];
    }
    ctx_tblu.putImageData(datosimagen, 0, 0);
}

$("#beige_ato_pdcd").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#beige_mini_pdcd").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_mini_pdcd").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_ato_pdcd").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_pdcd").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcd").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_pdcd").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#natural_pdcd").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcd").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcd";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcd(ctx_pdcd, img_pdcd) {
    var datosimagen = ctx_pdcd.getImageData(0, 0, imgWidth_pdcd, imgHeight_pdcd);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcd[i];
        datos[i + 1] = datosPrim_pdcd[i + 1];
        datos[i + 2] = datosPrim_pdcd[i + 2];
    }
    ctx_pdcd.putImageData(datosimagen, 0, 0);
}

$("#beige_pdcp").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_mini_pdcp").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#cafe_multi_pdcp").on("click", function () {
    color = "MULTI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_pdcp").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#verde_pdcp").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#natural_pdcp").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_mini_pdcp").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#azul_ato_pdcp").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#amarillo_pdcp").on("click", function () {
    color = "MULTI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});
$("#eliminar_pdcp").on("click", function () {
    color = "eliminar";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdcp";
    console.log("Caja seleccionada: ", caja);
});

function restaurar_pdcp(ctx_pdcp, img_pdcp) {
    var datosimagen = ctx_pdcp.getImageData(0, 0, imgWidth_pdcp, imgHeight_pdcp);
    var datos = datosimagen.data;
    for (var i = 0; i < datos.length; i++) {
        datos[i] = datosPrim_pdcp[i];
        datos[i + 1] = datosPrim_pdcp[i + 1];
        datos[i + 2] = datosPrim_pdcp[i + 2];
    }
    ctx_pdcp.putImageData(datosimagen, 0, 0);
}

/////////// CAJA PDC-E ///////////
$("#beige_mini_pdce").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#beige_ato_pdce").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#cafe_ato_pdce").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#cafe_mini_pdce").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#rojo_ato_pdce").on("click", function () {
    color = "ATO,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#rojo_mini_pdce").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#verde_ato_pdce").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#azul_ato_pdce").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#azul_mini_pdce").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#natural_ato_pdce").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#amarillo_ato_pdce").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});
$("#naranja_pdce").on("click", function () {
    color = "MAXI,40,amber";
    color_style = "#FFA500";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_50_pdce").on("click", function () {
    color = "MAXI,50,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada: ", caja);
});
$("#reln_pdce").on("click", function () {
    color = "RELAY,70,gray";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdce";
    console.log("Caja seleccionada", caja);
});

/////////// CAJA PDC-E_AMG ///////////
$("#beige_mini_pdce_amg").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#beige_ato_pdce_amg").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#cafe_ato_pdce_amg").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#cafe_mini_pdce_amg").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#rojo_ato_pdce_amg").on("click", function () {
    color = "ATO,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#rojo_mini_pdce_amg").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#verde_ato_pdce_amg").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#azul_ato_pdce_amg").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#azul_mini_pdce_amg").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#natural_ato_pdce_amg").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#amarillo_ato_pdce_amg").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
$("#naranja_pdce_amg").on("click", function () {
    color = "MAXI,40,amber";
    color_style = "#FFA500";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada: ", caja);
});
$("#rojo_50_pdce_amg").on("click", function () {
    color = "MAXI,50,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada: ", caja);
});
$("#reln_pdce_amg").on("click", function () {
    color = "RELAY,70,gray";
    color_style = "#A9A9A9";
    console.log("Color seleccionado: ", color)
    caja = "pdce_amg";
    console.log("Caja seleccionada", caja);
});
/////////// CAJA PDC-S1 ///////////
$("#beige_pdcs1").on("click", function () {
    color = "MINI,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#beige_ato_pdcs1").on("click", function () {
    color = "ATO,5,beige";
    color_style = "#FFD700";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#cafe_ato_pdcs1").on("click", function () {
    color = "ATO,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#cafe_mini_pdcs1").on("click", function () {
    color = "MINI,7.5,brown";
    color_style = "#8B4513";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#rojo_pdcs1").on("click", function () {
    color = "MINI,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#rojo_ato_pdcs1").on("click", function () {
    color = "ATO,10,red";
    color_style = "#FF0000";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#verde_pdcs1").on("click", function () {
    color = "ATO,30,green";
    color_style = "#008000";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#azul_pdcs1").on("click", function () {
    color = "MINI,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#azul_ato_pdcs1").on("click", function () {
    color = "ATO,15,blue";
    color_style = "#0000FF";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#amarillo_ato_pdcs1").on("click", function () {
    color = "ATO,20,yellow";
    color_style = "#FFFF00";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});
$("#natural_pdcs1").on("click", function () {
    color = "ATO,25,white";
    color_style = "#FFFFFF";
    console.log("Color seleccionado: ", color)
    caja = "pdcs1";
    console.log("Caja seleccionada", caja);
});



function build_dic() {
    console.log("PDC-E", pdce_caja);
    console.log("PDC-R", pdcr_caja);
    var caja_seleccionada = pdce_caja == "" ? "PDC-R" : "PDC-E";
    if (pdcr_caja == "" && pdce_caja == "") {
        document.getElementById("informacion").innerHTML = "No ha seleccionado ninguna de las opciones para la caja <span class='badge progress-bar-danger'>" + caja_seleccionada + "</span>.";
        $('#mostrar').click();
    } else {
        if (historial == "") {
            add_module_vision()
        } else {
            document.getElementById("informacion").innerHTML = "El nombre del Módulo que intenta agregar <span class='badge progress-bar-danger'>ya existe</span>.";
            $('#mostrar').click();
        }
    }
}

function add_module_vision() {
    // console.log("VALOR FINAL: ",fuses_value);
    modulo_db = document.getElementById('modulo_vision').value;
    // console.log(pdcr_caja_to_db)
    if (modulo_db.length == 0) {
        document.getElementById("informacion").innerHTML = "Es necesario agregar un <span class='badge progress-bar-danger'>nombre</span> al módulo. Intente de nuevo.";
        $('#mostrar').click();
    } else {
        const newPost = estacion.includes('MBM') ? {
            "DBEVENT": DBEVENT,
            "MODULO": modulo_db,
            "PDC-E": {},
            "PDC-E_AMG": {},
            "PDC-S1": fuses_value['PDC-S1']
        } : {
            "DBEVENT": DBEVENT,
            MODULO: modulo_db,
            "PDC-R": {},
            "PDC-RMID": {},
            "PDC-RS": {},
            "PDC-S": fuses_value['PDC-S'],
            "TBLU": fuses_value['TBLU'],
            "PDC-D": fuses_value['PDC-D'],
            "PDC-P": fuses_value['PDC-P']
        };

        if (pdcr_caja_to_db == "PDC-R") {
            newPost["PDC-R"] = fuses_value['PDC-R']
            newPost["PDC-RMID"] = {}
            newPost["PDC-RS"] = {}
        } else if (pdcr_caja_to_db == "PDC-RMID") {
            newPost["PDC-RMID"] = fuses_value['PDC-RMID']
            newPost["PDC-R"] = {}
            newPost["PDC-RS"] = {}
        } else if (pdcr_caja_to_db == "PDC-RS") {
            newPost["PDC-RS"] = fuses_value['PDC-RS']
            newPost["PDC-R"] = {}
            newPost["PDC-RMID"] = {}
        }

        if (pdce_caja_to_db == "PDC-E") {
            newPost["PDC-E"] = fuses_value['PDC-E']
            newPost["PDC-E_AMG"] = {}
        } else if (pdce_caja_to_db == "PDC-E_AMG") {
            newPost["PDC-E"] = {}
            newPost["PDC-E_AMG"] = fuses_value['PDC-E_AMG']
        }
        //console.log("ESTE ES EL NEWPOST",newPost);

        fetch(dominio + '/api/update/modulos_fusibles/' + edit_id, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
            .then(function (data) {
                console.log(data);
                location.replace("edit_modulos.php")
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

function get_valid_pedido() {
    historial = "";
    // console.log(document.getElementById("modulo_vision").value)
    if (document.getElementById("modulo_vision").value != "") {
        // get the id
        endpoint = dominio + '/api/get/' + DBEVENT + '/modulos_fusibles/modulo/=/' + document.getElementById("modulo_vision").value + '/_/=/_'
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
                if (data.items != 0) {
                    if (data.MODULO == sessionStorage.getItem('edit_vision')) {
                        historial = "";
                        alert_get_historial.innerHTML = "";
                    } else {
                        historial = "si existe"
                        alert_get_historial.innerHTML = '<div class="alert alert-warning" role="alert">El pedido "' + document.getElementById("modulo_vision").value + '" ya existe</div>'
                        // console.log(historial)
                    }
                }
                // console.log(historial)
            })
            .catch(function (err) {
                console.log(err);
            });
        alert_get_historial.innerHTML = '<div class="alert alert-success" role="alert">El pedido "' + document.getElementById("modulo_vision").value + '" no existe</div>'
        // console.log(historial)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});

$('#modal_info').find(".modal-header").css("background", "#f44336");