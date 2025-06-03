<!DOCTYPE html>
<html lang="es">

<head>
    <title>Fujikura Automotive México Piedras Negras</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if IE]>
      <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
      <![endif]-->
    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Finex - Multipurpose Business and Corporate HTML5 Template" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <!-- Include All CSS -->
    <link rel="stylesheet" type="text/css" href="static/content/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="static/content/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/owl.carousel.css" />
    <link rel="stylesheet" type="text/css" href="static/content/owl.theme.css" />
    <link rel="stylesheet" type="text/css" href="static/content/magnific-popup.css" />
    <link rel="stylesheet" type="text/css" href="static/content/preset.css" />
    <link rel="stylesheet" type="text/css" href="static/content/animate.css" />
    <link rel="stylesheet" type="text/css" href="static/content/style.css" />
    <link rel="stylesheet" type="text/css" href="static/content/edit_modulos_vision.css" />
    <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
    <link rel="stylesheet" type="text/css" href="static/content/tabstyle.css" />
    <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
    <link rel="stylesheet" type="text/css" href="static/fonts/css/all.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/toastify.css" />

    <!-- End Include All CSS -->
    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="static/content/faviconfuji.png">
    <script type="text/javascript">
        function enter(nextfield) {
            if (window.event && window.event.keyCode == 13) {
                usuarioform();
                return false;
            } else
                return true;
        }
    </script>
    <!-- Favicon Icon -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
</head>

<body class="index" onload="iniciar_pagina();sesion_3()">
    <!-- ========= preloader ========== -->
    <div class="preloader">
        <img src="static/content/loader.gif" alt="">
    </div>
    <!-- ========= End preloader ========== -->

    <!--=======================================
  =                   HEADER                 =
  ========================================-->
    <?php include('templates/header.php')?>




    <!--=======================================
  =            LOGIN de Usuarios            =
  ========================================-->
    <div class="modal fade" id="login_modal" name="login_modal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalCenterTitle">Inicio de Sesión</h3>
                    <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style="float: right;">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="static/content/admin.png" alt="Avatar" class="img-centro">
                    <div id="alerta" style="display: none;"></div>

                    <label for="psw"><b>Ingrese su Código de Acceso </b></label>
                    <input type="password" id="psw" placeholder="Escanee o introduzca su Código" name="psw"
                        oninput="mayuscula(this)" onkeypress="return enter(document.getElementById('log'))" required>

                    <button type="button" onclick="usuarioform()" id="log" class="login">Iniciar Sesión</button>
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="cancelbtn">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    <!--====  End of LOGIN de Usuarios  ====-->


    <!--================================
  =            BREADCRUMB            =
  =================================-->
    <section class="breadcrumbSec" style="background-image:url('static/content/breadcum/5.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center breadsec">
                    <h1 class="breadTitle">Mercedes-Benz</h1>
                    <div class="breadCumpNav">
                        <a href="home.php">Home</a>
                        <i class="fa fa-angle-right"></i>
                        <a href="index.php">Gestión de Datos</a>
                        <i class="fa fa-angle-right"></i>
                        <a href="modulos.php">Módulos</a>
                        <i class="fa fa-angle-right"></i>
                        <a href="edit_modulos_vision.php">Módulos de Visión</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--====  End of BREADCRUMB  ====-->


    <!--==============================================
  =            AGREGAR NÚMEROS DE PARTE            =
  ===============================================-->
    <div class="container" align="left" id="formparte">




        <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info"
                style="display: none;"></div>




        <form id="agregarparte" style="margin-top: 10px">
            <div class="contenedoragregar">

                <div class="numero de parte " for="Número de Parte">
                    <br />
                    <h2 id="modulot_titulo"></h2>
                    <hr>
                    <p>
                        Ingrese el módulo:
                        <input type="text" name="Número de orden" id="modulo_torque"
                            placeholder="Introducir el nombre del módulo" oninput="mayuscula(this); get_valid_pedido();"
                            style="width:30%">
                        <div id="alert_get_historial"></div>
                    </p>
                    <br />
                    <p>Click sobre la imagen para agregar los fusibles.</p>
                </div>




                <!-- <div id="caja_pdcs_v" class="caja_pdcs_v row"> -->
                <br />
                <p>seleccione las siguientes opciones de Cajas: </p>
                <select id="box_option" onchange="add_box(this.value)">
                    <option value="null" selected>Seleccione una Caja...</option>
                    <option value="BATTERY,bttry">BATTERY</option>
                    <option value="BATTERY-2,bttry2">BATTERY-2</option>
                    <option value="MFB-E,mfbe">MFB-E</option>
                    <option value="MFB-P1,mfbp1">MFB-P1</option>
                    <option value="MFB-P2,mfbp2">MFB-P2</option>
                    <option value="MFB-S,mfbs">MFB-S</option>
                    <option value="MFB-S2,mfbs2">MFB-S2</option>
                    <option value="PDC-D,pdcd">PDC-D</option>
                    <option value="PDC-P,pdcp">PDC-P</option>
                    <option value="PDC-R,pdcr">PDC-R</option>
                    <option value="PDC-RMID,pdcr_1">PDC-RMID</option>
                    <option value="PDC-RS,pdcrs">PDC-RS</option>
                </select>



                <div class="flex-box row-reverse" style="width: min-content;">


                    <div id="div_pickColor" class="div_pickColor">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style="text-align: center;background-color: #fa9c00">
                                <h3>Tipos de terminal</h3>
                            </li>
                            <li class="list-group-item">
                                <button type="button" id="terminal_default" class="btn btn-verde">Por defecto</button>

                                <button type="button" id="terminal_A" class="btn btn-amarillo">A</button>
                                <button type="button" id="terminal_B" class="btn btn-naranja">B</button>
                                <button type="button" id="terminal_C" class="btn btn-rojo">C</button>
                                <button type="button" id="terminal_D" class="btn btn-azul">D</button>
                            </li>
                        </ul>


                        <!-- <ul class="list-group list-group-flush">
                            <li class="list-group-item" style="text-align: center;background-color: #00ffea">
                                <h3>Quitar Fusible</h3>
                            </li>
                            <li class="list-group-item">
                                <button type="button" style="margin-left: 35%;" id="eliminar" class="btn btn-info"><i
                                        class="fas fa-trash"></i></button>
                            </li>
                        </ul> -->

                    </div>



                    <div class="elementos">


                        <section id="section_box" style="display: none;  margin:0 4rem;">
                            <br />
                            <div class="flex-box justify-between">
                                <h4>BOX</h4>
                                <a id="quit_box" value="" class="btn btn-rojo" onclick="deleteBox(this)">X</a>
                            </div>
                            <br />
                            <div class="alert alert-warning" id="warning-alert" style="display: none;">
                                <button type="button" class="close" data-dismiss="alert">x</button>
                                <strong>Ojo! </strong> El Fusible no pertenece a la cavidad seleccionada.
                            </div>
                            <img id="box_image_v" src="static/content/cajas/interior/box/box.jpg" alt="" width="974"
                                height="512" style="display: none;">
                            <canvas id="box_image_v_canvas" style="float: left;"></canvas>
                        </section>
                    </div>

                </div>

                <!-- </div> -->
                <br />





                <button type="button" class="btn btn-danger btn-lg" onclick="location.href='edit_modulos.php'"
                    style="display: inline-block; margin: 10px;">Cancelar</button>
                <button type="button" class="btn btn-primary btn-lg" onclick="build_dic()"
                    style="display: inline-block; margin: 10px;">Guardar Módulo</button>
            </div>
        </form>




        <div id="alertasesion" style="display: none;"></div>

    </div>
    <!--====  End of AGREGAR NÚMEROS DE PARTE  ====-->

    <!-- Modal -->
    <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Error al intentar editar el Módulo</h5>
                    <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style="float: right;">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="informacion"></p>
                </div>
            </div>
        </div>
    </div>


    <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
    <div class="content" id="counter"></div>
    <!-- Fin de header color celeste al hacer scroll -->

    <!--=======================================
  =                  FOOTER                =
  ========================================-->
    <?php include('templates/footer.php')?>



    <a href="#" id="backToTop" class="none"><i class="fa fa-angle-up"></i></a>
    <!-- Include All JS -->
    <script type="text/javascript" src="static/script/jquery.js"></script>
    <script type="text/javascript" src="static/script/login.js"></script>
    <script type="text/javascript" src="static/script/bootstrap.min.js"></script>
    <script type="text/javascript" src="static/script/owl.carousel.js"></script>
    <script type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
    <script type="text/javascript" src="static/script/mixer.js"></script>
    <script type="text/javascript" src="static/script/count.js"></script>
    <script type="text/javascript" src="static/script/theme.js"></script>
    <script type="text/javascript" src="static/script/smoothscroll.js"></script>
    <script type="text/javascript" src="static/script/global_visual.js"></script>
    <script type="text/javascript" src="static/script/edit_mod_t_v2.js"></script>
    <script type="text/javascript" src="static/script/toastify.js"></script>
    <script async src="static/script/opencv.js" type="text/javascript"></script>
</body>

</html>