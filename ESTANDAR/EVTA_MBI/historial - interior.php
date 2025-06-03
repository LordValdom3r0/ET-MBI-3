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
      <link rel="stylesheet" type="text/css" href="static/content/home.css" />
      <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
      <link rel="stylesheet" type="text/css" href="static/content/tabstyle.css" />
      <link rel="stylesheet" type="text/css" href="static/fonts/css/all.min.css" />
      <!-- End Include All CSS -->
      <!-- Favicon Icon -->
      <link rel="icon" type="image/png" href="static/content/faviconfuji.png">
      <script type="text/javascript">
        function enter(nextfield) {
          if(window.event && window.event.keyCode == 13) {
            usuarioform();
            return false; }
            else
              return true; }
          </script>
      <!-- Favicon Icon -->
      <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->
</head>

<body class="index" onload="sesion_2()">
  <!-- ========= preloader ========== -->
  <div class="preloader">
    <img src="static/content/loader.gif" alt="">
  </div>
  <!-- ========= End preloader ========== -->

 <!--=======================================
  =                 HEADER                 =
  ========================================-->
  <?php include('templates/header.php')?>


  <!--=======================================
  =            LOGIN de Usuarios            =
  ========================================-->
  <style>
    /* Full-width input fields */
    input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    .img-centro {
      margin: 10px auto 10px;
      display: block;
    }

    /* Set a style for all buttons */
    .login,.cancelbtn {
      background-color: #4CAFAE;
      color: white;
      padding: 10px 10px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
    }
    .cancelbtn {
      background-color: #f44336;
    }

    button:hover {
      opacity: 0.8;
    }
    /* The Close Button (x) */
    .close {
      position: absolute;
      right: 25px;
      top: 0;
      color: #000;
      font-size: 35px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: red;
      cursor: pointer;
    }
  </style>
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
  <section class="breadcrumbSec" style="background-image:url('static/content/breadcum/5.jpg')">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center breadsec">
          <h1 class="breadTitle">Mercedes-Benz</h1>
          <div class="breadCumpNav">
            <a href="home.php">Home</a>
            <i class="fa fa-angle-right"></i>
            <a href="historial - interior.php">Historial</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->


  <!--==============================================
  =            AGREGAR NÚMEROS DE PARTE            =
  ===============================================-->
  <div class="container" align="left" id="formparte" style="display: block;">
    <form id="agregarparte" style="margin-top: 10px">
      <div class="container_get_historial">
        <div class="pedido" for="Número de Parte">
          <p>   </p>
          <h3>Consultar historial</h3>
          <hr>
          <p>
            Ingrese el número de pedido a consultar:
            <input type="text" name="Número de orden" id="pedido" placeholder="Introducir orden" oninput="mayuscula(this);" style="width:30%">
            <input type="button" class="btn btn-primary btn-lg" value="Buscar" onclick="get_valid_pedido_1()" style="margin-left: 20px">
            <div id="alert_get_historial"></div>
          </p>
          <select id="historial_option_date" onchange="pedido_selected()" style="display: none;">
            <option selected>Seleccione la fecha </option>
          </select>
          <div id="pedido_seleccionado" style="display:none;">
            <br>
            </br>
          </div>
        </div>

        <div class="agregarmodulos">
          <p> </p>
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_vision"> MODULOS DE VISION</a>
              <i class="far fa-question-circle" data-toggle="tooltip" data-placement="right" title="Click en MODULOS DE VISION para desplegar la información del registro seleccionado en forma de carrusel."></i>
              <hr>
            </h4>
          </div>
          <div id="mod_vision" class="panel-collapse collapse">

              <div id="text_init_vision">
                <p> Ingrese un pedido válido para generar los datos. </p>
              </div>

              <div id="vision_result"   style="display: none;">

                <div id="carousel_vision" class="carousel slide" data-ride="carousel">
                  <ul class="carousel-indicators">
                    <li data-target="carousel_vision" data-slide-to="0" class="active"></li>
                    <li data-target="carousel_vision" data-slide-to="1"></li>
                    <li data-target="carousel_vision" data-slide-to="2"></li>
                    <li data-target="carousel_vision" data-slide-to="3"></li>
                    <li data-target="carousel_vision" data-slide-to="4"></li>
                  </ul>

                  <div class="carousel-inner">
                    <div class="item active">
                      <canvas id="pdcr_image_v_canvas" class="img-fluid" style="margin-left: 15%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;" id="pdcr_caption">PDC-R</h3>
                      </div>
                    </div>

                    <div class="item">
                      <canvas id="pdcs_image_v_canvas" class="img-fluid" style="margin-left: 7%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-S</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="tblu_image_v_canvas" class="img-fluid" style="margin-left: 13%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">TBLU</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="pdcd_image_v_canvas" class="img-fluid" style="margin-left: 20%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-D</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="pdcp_image_v_canvas" class="img-fluid" style="margin-left: 20%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-P</h3>
                      </div>
                    </div>
                  </div>

                  <a href="#carousel_vision" class="left carousel-control" data-slide="prev"></a><i class="fas fa-angle-double-left">  Anterior</i>
                  <div style="float: right;">
                    <a href="#carousel_vision" class="right carousel-control" data-slide="next"></a><strong>Siguiente  </strong><i class="fas fa-angle-double-right"></i>
                  </div>
                </div>
                <img id="pdcr_image_v" src="static/content/cajas/interior/pdcr/pdcr.jpg" alt="" width="754" height="341" style="display: none;">
                <img id="pdcr_1_image_v" src="static/content/cajas/interior/pdcr_1/pdcr_1.jpg" alt="" width="754" height="341" style="display: none;">
                <img id="pdcs_image_v" src="static/content/cajas/interior/pdcs/pdcs.jpg" alt="" width="974" height="512" style="display: none;">
                <img id="tblu_image_v" src="static/content/cajas/interior/btlu/btlu.jpg" alt="" width="843" height="686" style="display: none;">
                <img id="pdcd_image_v" src="static/content/cajas/interior/pdcd/pdcd.jpg" alt="" width="680" height="726" style="display: none;">
                <img id="pdcp_image_v" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">

                <!-- <div class="caja_pdcr_v">
                  <br>
                  <h4> PDC-R </h4>
                  </br>
                  <img id="pdcr_image_v" src="static/content/cajas/interior/pdcr/pdcr.jpg" alt="" width="754" height="341" style="display: none;">
                  <canvas id="pdcr_image_v_canvas" ></canvas>

                </div>

                <div class="caja_pdcs_v">
                  <br/>
                  <h4> PDC-S </h4>
                  <br/>
                  <img id="pdcs_image_v" src="static/content/cajas/interior/pdcs/pdcs.jpg" alt="" width="974" height="512" style="display: none;">
                  <canvas id="pdcs_image_v_canvas" ></canvas>
                </div>

                <div class="caja_tblu_v">
                  <br/>
                  <h4> TB_LU </h4>
                  <br/>
                  <img id="tblu_image_v" src="static/content/cajas/interior/btlu/btlu.jpg" alt="" width="843" height="686" style="display: none;">
                  <canvas id="tblu_image_v_canvas" ></canvas>
                </div>

                <div class="caja_pdcd_v">
                  <br/>
                  <h4> PDC-D</h4>
                  <br/>
                  <img id="pdcd_image_v" src="static/content/cajas/interior/pdcd/pdcd.jpg" alt="" width="680" height="726" style="display: none;">
                  <canvas id="pdcd_image_v_canvas" ></canvas>
                </div>

                <div class="caja_pdcp_v">
                  <br/>
                  <h4> PDC-P</h4>
                  <br/>
                  <img id="pdcp_image_v" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">
                  <canvas id="pdcp_image_v_canvas" ></canvas>
                </div> -->


              </div>

          </div>

          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_torque">MODULOS DE TORQUE</a>
              <i class="far fa-question-circle" data-toggle="tooltip" data-placement="right" title="Click en MODULOS DE TORQUE para desplegar la información del registro seleccionado en forma de carrusel."></i>
              <hr>
            </h4>
          </div>
          <div id="mod_torque" class="panel-collapse collapse">
            <div id="text_init_torque">
              <p> Ingrese un pedido válido para generar los datos. </p>
            </div>

            <div id="torque_result" style="display: none;">

              <div id="carousel_torque" class="carousel slide" data-ride="carousel" style="background-color: #cccccc">
                <ul class="carousel-indicators">
                  <li data-target="carousel_torque" data-slide-to="0" class="active"></li>
                  <li data-target="carousel_torque" data-slide-to="1"></li>
                  <li data-target="carousel_torque" data-slide-to="2"></li>
                  <li data-target="carousel_torque" data-slide-to="3"></li>
                  <li data-target="carousel_torque" data-slide-to="4"></li>
                  <li data-target="carousel_torque" data-slide-to="5"></li>
                  <li data-target="carousel_torque" data-slide-to="6"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="item active">
                    <div style="display: block;float: left;">
                      <canvas id="pdcp_image_t_canvas" class="img-fluid" ></canvas>                      
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">PDC-P</h3>                        
                    </div>
                    <strong><div id="pdcp_text_t" style="text-align: center;float: left;padding-left: 140px"></div></strong>
                  </div>

                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="pdcd_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">PDC-D</h3>
                    </div>
                    <strong><div id="pdcd_text_t" style="text-align: center;float: left;padding-left: 124px"></div></strong>
                  </div>
                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="mfbp1_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">MFB-P1</h3>
                    </div>
                    <strong><div id="mfbp1_text_t" style="text-align: center;"></div></strong>
                  </div>
                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="mfb_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">MFB-P</h3>
                    </div>
                    <strong><div id="mfb_text_t" style="text-align: center;float: left;padding-left: 55px"></div></strong>
                  </div>
                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="mfbp2_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">MFB-P2</h3>
                    </div>
                    <strong><div id="mfbp2_text_t" style="text-align: center;"></div></strong>
                  </div>
                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="pdcr_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">PDC-R</h3>
                    </div>
                    <strong><div id="pdcr_text_t" style="text-align: center;float: left;padding-left: 100px"></div></strong>
                  </div>
                  <div class="item">
                    <div style="display: block;float: left;">
                      <canvas id="bt_image_t_canvas" class="img-fluid" ></canvas>
                    </div>
                    <div>
                      <h3 style="color: #FFFFFF;text-align: center;padding-top: 20px;padding-bottom: 20px">BATTERY</h3>
                    </div>
                    <strong><div id="bt_text_t" style="text-align: center;float: left;padding-left: 220px"></div></strong>
                  </div>
                </div>

                <a href="#carousel_torque" class="left carousel-control" data-slide="prev"></a><i class="fas fa-angle-double-left">  Anterior</i>
                <div style="float: right;">
                  <a href="#carousel_torque" class="right carousel-control" data-slide="next"></a><strong>Siguiente  </strong><i class="fas fa-angle-double-right"></i>
                </div>
              </div>
              <img id="pdcp_image_t" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">
              <img id="pdcd_image_t" src="static/content/cajas/interior/pdcd2/pdcd2.jpg" alt="" width="730" height="691" style="display: none;">
              <img id="mfbp1_image_t" src="static/content/cajas/interior/mfbp1/mfbp1.jpg" alt="" width="974" height="570" style="display: none;">
              <img id="mfb_image_t" src="static/content/cajas/interior/mfbs/mfbs.jpg" alt="" width="863" height="644" style="display: none;">
              <img id="mfbp2_image_t" src="static/content/cajas/interior/mfbp2/mfbp2.jpg" alt="" width="980" height="664" style="display: none;">
              <img id="pdcr_image_t" src="static/content/cajas/interior/pdcr2/pdcr2.jpg" alt="" width="764" height="624" style="display: none;">
              <img id="bt_image_t" src="static/content/cajas/interior/bt/bt.jpg" alt="" width="537" height="536" style="display: none;">

            </div>

          </div>

          <!-- <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_altura">MODULOS DE ALTURA</a>
              <i class="far fa-question-circle" data-toggle="tooltip" data-placement="right" title="Click en MODULOS DE ALTURA para desplegar la información del registro seleccionado en forma de carrusel."></i>
              <hr>
            </h4>
          </div>
          <div id="mod_altura" class="panel-collapse collapse">
            <div id="text_init_altura">
                <p>Ingrese un pedido válido para generar los datos. </p>
            </div>
            <div id="altura_result"   style="display: none;">
              <div id="carousel_altura" class="carousel slide" data-ride="carousel">
                  <ul class="carousel-indicators">
                    <li data-target="carousel_altura" data-slide-to="0" class="active"></li>
                    <li data-target="carousel_altura" data-slide-to="1"></li>
                    <li data-target="carousel_altura" data-slide-to="2"></li>
                    <li data-target="carousel_altura" data-slide-to="3"></li>
                    <li data-target="carousel_altura" data-slide-to="4"></li>
                  </ul>

                  <div class="carousel-inner">
                    <div class="item active">
                      <canvas id="pdcr_image_a_canvas" class="img-fluid" style="margin-left: 15%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;" id="pdcr_caption_altura">PDC-R</h3>
                      </div>
                    </div>

                    <div class="item">
                      <canvas id="pdcs_image_a_canvas" class="img-fluid" style="margin-left: 7%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-S</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="tblu_image_a_canvas" class="img-fluid" style="margin-left: 13%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">TBLU</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="pdcd_image_a_canvas" class="img-fluid" style="margin-left: 20%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-D</h3>
                      </div>
                    </div>
                    <div class="item">
                      <canvas id="pdcp_image_a_canvas" class="img-fluid" style="margin-left: 20%"></canvas>
                      <div class="carousel-caption">
                        <h3 style="color: white;text-align: right;">PDC-P</h3>
                      </div>
                    </div>
                  </div>

                  <a href="#carousel_altura" class="left carousel-control" data-slide="prev"></a><i class="fas fa-angle-double-left">  Anterior</i>
                  <div style="float: right;">
                    <a href="#carousel_altura" class="right carousel-control" data-slide="next"></a><strong>Siguiente  </strong><i class="fas fa-angle-double-right"></i>
                  </div>
              </div>
              <img id="pdcr_image_a" src="static/content/cajas/interior/pdcr/pdcr.jpg" alt="" width="754" height="341" style="display: none;">
              <img id="pdcr_1_image_a" src="static/content/cajas/interior/pdcr_1/pdcr_1.jpg" alt="" width="754" height="341" style="display: none;">
              <img id="pdcs_image_a" src="static/content/cajas/interior/pdcs/pdcs.jpg" alt="" width="974" height="512" style="display: none;">
              <img id="tblu_image_a" src="static/content/cajas/interior/btlu/btlu.jpg" alt="" width="843" height="686" style="display: none;">
              <img id="pdcd_image_a" src="static/content/cajas/interior/pdcd/pdcd.jpg" alt="" width="680" height="726" style="display: none;">
              <img id="pdcp_image_a" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">
            </div>
          </div> -->
        </div>
      </div>
    </form>
    <div id="alertaaddparte"></div>
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#excel"> Exportar Información a EXCEL</a>
        <i class="far fa-question-circle" data-toggle="tooltip" data-placement="right" title="Click en el icono de EXCEL para exportar la información recopilada de la base de datos."></i>
        <hr>
      </h4>
    </div>
    <div id="excel" class="panel-collapse collapse">
      <div id="descarga"></div>
    </div>
  </div>
  <!--====  End of AGREGAR NÚMEROS DE PARTE  ====-->



  <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
  <div class="content" id="counter"></div>
  <!-- Fin de header color celeste al hacer scroll -->

 <!--=======================================
  =                 FOOTER                 =
  ========================================-->
  <?php include('templates/footer.php')?>

  <a href="#" id="backToTop" class="none"><i class="fa fa-angle-up"></i></a>
  <!-- Include All JS -->
  <script async src="static/script/opencv.js" type="text/javascript"></script>
  <script async src="static/script/drawing_interior_imgs.js" type="text/javascript"></script>
  <script async src="static/script/global_visual.js" type="text/javascript"></script>
  <script type="text/javascript" src="static/script/jquery.js"></script>
  <script type="text/javascript" src="static/script/login.js"></script>
  <script type="text/javascript" src="static/script/historial-interior.js"></script>
  <script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script  type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script  type="text/javascript" src="static/script/mixer.js"></script>
  <script  type="text/javascript" src="static/script/count.js"></script>
  <script  type="text/javascript" src="static/script/theme.js"></script>
  <script  type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script  type="text/javascript" src="static/script/tab.js"></script>

  <script type="text/javascript" src="static/script/datatables/JSZip-2.5.0/jszip.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
  <script type="text/javascript" src="static/script/datatables/DataTables-1.10.22/js/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/DataTables-1.10.22/js/dataTables.bootstrap4.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.bootstrap4.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.php5.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.print.min.js"></script>
  <script>
    $(function () {
      $('[data-toggle="tooltip"]').css({"cursor":"pointer"}).tooltip()
    })
  </script>
</body>
</html>
