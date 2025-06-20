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

  <!--============================
  =            HEADER            =
  =============================-->
  <?php 
  include('header.php')
  ?>
  <!--====  End of HEADER  ====-->


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
          <h3>Consultar historial</h3>
          <hr>
          <label>Ingrese el número de pedido a consultar:</label>
          <input type="text" name="Número de orden" id="pedido" placeholder="Introducir orden" oninput="mayuscula(this);" style="width:30%">
          <input type="button" class="btn btn-primary btn-lg" value="Buscar" onclick="get_valid_pedido_1()" style="margin-left: 20px">
          <div id="alert_get_historial"></div>
          <select id="historial_option_date" onchange="pedido_selected()" style="display: none;">
            <option selected>Seleccione la fecha </option>
          </select>
          <div id="pedido_seleccionado" style="display:none;">
            <br>
            </br>
          </div>
        </div>




        <div class="agregarmodulos">
          <div id="mod_vision">

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
                    <div id="pdcr_container" class="item active">
                      <div id="caja_pdcr"></div>
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
              </div>
          </div>
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
  <?php include('footer.php')?>
  <!--====  End of FOOTER O PIE DE PÁGINA  ====-->

  <a href="#" id="backToTop"><i class="fa fa-angle-up"></i></a>
  <!-- Include All JS -->
  <script async src="static/script/opencv.js" type="text/javascript"></script>
  <script async src="static/script/drawing_interior_imgs.js" type="text/javascript"></script>

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
