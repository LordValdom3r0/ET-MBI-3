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
    <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
    <link rel="stylesheet" type="text/css" href="static/content/jquery.dataTables.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/responsive.dataTables.min.css" />
    <link rel="stylesheet" type="text/css" href="static/fonts/css/all.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
    <link rel="stylesheet" type="text/css" href="static/content/comentarios.css" />
    <!-- End Include All CSS -->
    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="static/content/faviconfuji.png" />
    <!-- Favicon Icon -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="index" onload="sesion_4()">
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

    <div class="modal fade" id="login_modal" name="login_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                    <input type="password" id="psw" placeholder="Escanee o introduzca su Código" name="psw" oninput="mayuscula(this)" onkeypress="return enter(document.getElementById('log'))" required>

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
    <section class="breadcrumbSec" style="background-image:url('static/content/breadcum/3.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center breadsec">
                    <h1 class="breadTitle">Mercedes-Benz</h1>
                    <div class="breadCumpNav">
                        <a href="index.php">Home</a>
                        <i class="fa fa-angle-right"></i>
                        <a href="comentarios.php">Comentarios</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--====  End of BREADCRUMB  ====-->

    <!--==============================================
    =            Sección de Comentarios            =
    ===============================================-->
    <div class="container" align="center" id="registros" style="margin-bottom: 2rem;">
        <div class="container" align="left">
            <br>
            <h3>Comentarios</h3>
            <hr>
            <label>Seleccione una estación, y a continuación, escriba su comentario o nota.
        </div>
        <br>
        
        <button class="btn btn-primary btn-lg"  onclick="mostrarComentario()">Ver</button>
        <button class="btn btn-primary btn-lg"  onclick= "crearComentario()">Crear</button>
        <form class="container" id="crear" style = "display: none;">
            <br>
            <label for="browsers">Estación:</label>
            <select id="browsers">
                <option value="TORQUE">TORQUE</option>
                <option value="INSERCION">INSERCION</option>
                <option value="VISION">VISION</option>
            </select>
            
            <br>
            <label for="evento">Evento:</label>
            <select id="evento">
                <option id="X294" value="X294">X294</option>
                <option id="X296" value="X296">X296</option>
            </select>
            <label for="fase">Fase:</label>
            <select id="fase">
                <option value="BL1">BL1</option>
                <option value="BL2">BL2</option>
                <option value="BL3">BL3</option>
                <option value="BL4">BL4</option>
                
            </select>
            <label for="conduccion">conduccion:</label>
            <select id="conduccion">
                <option value="IZQUIERDO">IZQUIERDO</option>
                <option value="DERECHO">DERECHO</option> 
            </select>
            <input type="text" placeholder="Ingrese sus comentarios" id="comentario">
            <button type="button" class="btn btn-success btn-lg" onclick="enviarComentario()"> Guardar Comentario</button>
            </form>
            <div id="tabla"></div>
        </div>
        <div id="alertasesion" style="display: none;"></div>
        <!--====  End of Sección de Comentarios  ====-->
        <!-- POP-UP PARA MOSTRAR COMENTARIO EN UN MODAL -->
        <div class="modal fade" id="modal_qr" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title" id="exampleModalCenterTitle"><span id="header"></span></h3>
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
        <div id="registros" class="container" align="left" style="display: block;">
            <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;"></div>
            <div><button type="button" class="btn btn-primary" id="mostrar_qr" data-toggle="modal" data-target="#modal_qr" style="display: none;"></div>
            <div id="tabla"></div>
          </div>
          <div id="alertasesion" style="display: none;"></div>
          
          <!-- End of mostrar comentario modal -->
        <!--====================================================
  =            POP-UP PARA EDITAR LOS PEDIDOS            =
  =====================================================-->
        <div class="modal fade" id="modal_estacions_edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalCenterTitle"><span id="comentario_edit_title">Edición de Comentario</span></h3>
                        <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
                    </div>
                    <div class="modal-body">
                        <div align="center" id="formusuario">
                            <form id="" style="margin-top: 10px">
                                <div class="contenedoragregar">
                                    <label for="modulo"><b>Comentario:</b></label>
                                    <input type="text" placeholder="Ingrese el comentario nuevo" id="comentario_edit" name="comentario">
                                    <br>
                                    <label>Estación:</label>
                                    <select id="estacion_edit">
                                        <option id="TORQUE" value="TORQUE">TORQUE</option>
                                        <option id="VISION" value="VISION">VISION</option>
                                        <option id="INSERCION" value="INSERCION">INSERCION</option>
                                    </select>
                                    
                                    <label for="evento_edit">Evento:</label>
                                    <select id="evento_edit">
                                        <option id="X294" value="X294">X294</option>
                                        <option id="X296" value="X296">X296</option>
                                       
                                    </select>
                                    <label for="fase_edit">Fase:</label>
                                    <select id="fase_edit">
                                        <option value="BL1">BL1</option>
                                        <option value="BL2">BL2</option>
                                        <option value="BL3">BL3</option>
                                        <option value="BL4">BL4</option>
                                        
                                    </select>
                                    <label for="conduccion_edit">conduccion:</label>
                                    <select id="conduccion_edit">
                                        <option value="IZQUIERDO">IZQUIERDO</option>
                                        <option value="DERECHO">DERECHO</option> 
                                    </select>
                                </div>
                            </form>
                            <div class="container alert alert-success alert-dismissible" id="alertaadd" style="display: none;">
                                <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                                <strong id="alerta_estacion"></strong>
                            </div>
                            <div class="container alert alert-danger alert-dismissible" id="alertaadd_fail" style="display: none;">
                                <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                                <strong id="alerta_estacion_fail"></strong>
                            </div>
                            <div id="alertaadd"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="cancel_edit">Cancelar</button>
                        <button type="button" class="guardar_edit" onclick="guardar_edit()">Guardar Cambios</button>
                    </div>
                </div>
            </div>

            <div id="registros" class="container" align="left">
                <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_estacions" style="display: none;"></div>
                <div><button type="button" class="btn btn-primary" id="mostrar_estacions" data-toggle="modal" data-target="#modal_estacions_edit" style="display: none;"></div>
                
                </div>
                <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
                <div class="content" id="counter"></div>
            </div>
        <!--====  End of POP-UP PARA EDITAR LOS PEDIDOS  ====-->

        

 <!--=======================================
  =                   FOOTER               =
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
        <script type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
        <script type="text/javascript" src="static/script/comentarios.js"></script>
</body>

</html>