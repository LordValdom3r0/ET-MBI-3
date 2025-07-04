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

  <body class="index" onload="sesion_4();loadEvents()">
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

    input[type=checkbox] {
      position: relative;
      width: 80px;
      height: 40px;
      -webkit-appearance: none;
      background: #c6c6c6;
      outline: none;
      border-radius: 20px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
      transition: .5s;
    }
    input:checked[type=checkbox] {
      background: #03a9f4;
    }
    input[type=checkbox]:before {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #fff;
      transform: scale(1,1);
      box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
      transition: .5s;
    }
    input:checked[type=checkbox]:before {
      left: 40px;
    }

    #drop-area,#drop-area-modulos{
      border: 2px dashed #ccc;
      border-radius: 20px;
      width: 480px;
      margin: 10px auto;
      padding: 20px;
    }

    #drop-area.highlight,#drop-area-modulos.highlight{
      border-color: purple;
    }
    #ilx_fail{
      word-break: break-all !important;
    }

    .modal-dialog-centered {
      transform: translate(0, -50%);
      top: 40%;
      margin: 0 auto;
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

    /* Extra styles for the cancel button */
    .guardar_edit {
      color: white;
      background-color: #24D2D2;
    }

    .cancel_edit {
      color: white;
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

    p{
      word-break: break-all !important;
    }

    table td{
      word-wrap: break-word;
      max-width: 150px;
    }
    #myTable td {
      white-space: inherit;
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
            <a href="index.php">Gestión de Datos</a>
            <i class="fa fa-angle-right"></i>
            <a href="manualevento.php">Modo Manual</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->

  <!--==============================================
  =            TABLA CON REGISTROS DE ORDENES            =
  ===============================================-->
  <div id="registros" class="container" align="left" style="display: block;">
    <div>
        <div><button type="button" class="btn btn-primary" id="opciones" data-toggle="modal" data-target="#modal_ver_info" style="display: none;"></div>
        <br>
        <h3>EVENTOS MODO MANUAL</h3>
        <hr>
        <label>Seleccione un evento para acceder a sus Opciones</label>
    </div>

    <div class="container" id="container_principal">
        <div id="containerEventos"></div>
    </div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

    <!--====================================================
  =     MODAL PARA VER INFORMACIÓN (DAT Y EXCEL)     =
  =====================================================-->
  <div class="modal fade" id="modal_ver_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="ver_info_eventName"></h3>
          <button type="button" id="cerrar-carga" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body" align="center">
          <!-- SECCIÓN PARA VER DAT -->
          <button type="button" class="btn btn-info btn-lg" id="ver_modularidades" style="margin: 10px" onclick="location.href='numeroparte.php'">Modularidades</button>
          <!-- SECCIÓN PARA VER MÓDULOS -->
          <button type="button" class="btn btn-info btn-lg" id="ver_modulos" style="margin: 10px" onclick="location.href='modulos.php'">Módulos</button>
          <!-- SECCIÓN PARA VER Módulos Determinantes -->
          <button type="button" class="btn btn-primary btn-lg" id="boton_definiciones" style="margin: 10px" onclick="location.href='definiciones.php'">Módulos Determinantes</button>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  <!--====  End of MODAL PARA VER INFORMACIÓN (DAT Y EXCEL) ====-->

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
<script type="text/javascript" src="static/script/jquery.js"></script>
<script type="text/javascript" src="static/script/login.js"></script>
<script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
<script  type="text/javascript" src="static/script/owl.carousel.js"></script>
<script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
<script  type="text/javascript" src="static/script/mixer.js"></script>
<script  type="text/javascript" src="static/script/count.js"></script>
<script  type="text/javascript" src="static/script/theme.js"></script>
<script  type="text/javascript" src="static/script/smoothscroll.js"></script>
<script  type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
<script  type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
<script  type="text/javascript" src="static/script/manualevento.js"></script>
</body>
</html>