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
    <link rel="stylesheet" type="text/css" href="static/content/edit_modulos.css" />
    <link rel="stylesheet" type="text/css" href="static/content/jquery.dataTables.min.css" />
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

  <body class="index" onload="cargartabla();sesion_4()">
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
            <a href="modulos.php">Módulos</a>
            <i class="fa fa-angle-right"></i>
            <a href="edit_modulos.php">Edición de Módulos</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->

  <!--================================================
  =            BOTONES PARA ELEGIR ACCIÓN            =
  =================================================-->
  <div class="container" align="center" style="margin-top: 10px;">
    <button type="button" class="btn btn-info btn-lg" id="botonusuario" style="margin: 10px" onclick="modulos('fusibles')">Módulos de Visión</button>
    <button type="button" class="btn btn-info btn-lg" id="botonparte" style="margin: 10px" onclick="modulos('torques')">Módulos de Torque</button>
    <button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_elim" style="display: none;">
  </div>
  <!--====  End of BOTONES PARA ELEGIR ACCIÓN  ====-->

  <!--==============================================
  =            TABLA CON REGISTROS DE USUARIOS     =
  ===============================================-->
  <div id="registros" class="container" align="left" style="display: block;">
    <div>
      <br>
      <h3>Lista de Módulos <span id="tituloEvento"></span></h3>
      <hr>
    </div>
    <div id="tabla"></div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE USUARIOS  ====-->

  <!-- Modal -->
  <div class="modal fade" id="modal_elim" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Módulo Eliminado</h5>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close" style="display: none;">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body alert alert-success" role="alert">
          El módulo <span id="modulo" class="badge progress-bar-danger"></span> ha sido eliminado correctamente.
        </div>
      </div>
    </div>
  </div>




<!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
<div class="content" id="counter"></div>
<!-- Fin de header color celeste al hacer scroll -->

 <!--=======================================
  =                 FOOTER                 =
  ========================================-->
  <?php include('templates/footer.php')?>

  <a href="#" id="backToTop" class="none"><i class="fa fa-angle-up"></i></a>
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
<script  type="text/javascript" src="static/script/edit_modulos.js"></script>
</body>
</html>