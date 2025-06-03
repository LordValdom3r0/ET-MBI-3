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
    <link rel="stylesheet" type="text/css" href="static/content/numeroparte.css" />
    <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
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

<body class="index" onload="sesion_4()">
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
            <a href="numeroparte.php">Modularidades</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->

  <!--================================================
  =            BOTONES PARA ELEGIR ACCIÓN            =
  =================================================-->
  <div id="contenedor_principal" class="container" align="center" style="margin-top: 10px;">
    <button type="button" class="btn btn-info btn-lg" id="botonusuario" style="margin: 10px" onclick="formpartemostrar()">Nueva Modularidad</button>
    <button type="button" class="btn btn-info btn-lg" id="botonparte" style="margin: 10px" onclick="location.href='edit.php'">Editar Modularidad</button>
    <button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;">
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of BOTONES PARA ELEGIR ACCIÓN  ====-->

  <!--==============================================
  =            AGREGAR NÚMEROS DE PARTE            =
  ===============================================-->
  <div class="container" align="left" id="formparte" style="display: none;">
    <form id="agregarparte" style="margin-top: 10px">
      <div class="contenedoragregar">

        <div class="numero de parte " for="Número de Parte">
          <h3>Nueva Modularidad <span id="tituloEvento"></span></h3>
          <hr>
          <label>Ingrese el número de Modularidad:</label>
          <input type="text" name="Número de orden" id="pedido" placeholder="Número de referencia" oninput="mayuscula(this);get_valid_pedido_1()" onkeypress = "return get_valid_pedido(event);" style="width:30%;margin-right: 20px">
          <label>Activo:</label>
          <input type="checkbox" id="activo" onchange="comprobaractivo(this)" checked="true">
          <div id="alert_get_historial"></div>
        </div>

        <div id="qr_cajas" class="col-md-6">
                <img id="pdce_image" src="static/content/cajas/motor/PDC-E/PDC-E.jpg" alt="" width="120">
                <h4 style="display: inline-block;"> PDC-E</h4>
                <input type="text" value="12239069202" class="qr_2" name="qrPDC-E" id="PDC-E" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-E" onchange="comprobarpdce(this)" checked="true">
                <br>
                <img id="pdce_amg_image" src="static/content/cajas/motor/PDC-E/PDC-E_AMG.jpg" alt="" width="120">
                <h4 style="display: inline-block;"> PDC-E AMG</h4>
                <input type="text" value="" class="qr_2" name="qrPDC-E_AMG" id="PDC-E_AMG" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-E_AMG" onchange="comprobarpdce_amg(this)">
                <br>
                
                <img id="pdcs1_image" src="static/content/cajas/motor/PDC-S1/PDC-S1.jpg" alt="" width="120">
                <h4 style="display: inline-block;"> PDC-S1 </h4>
                <input type="text" value="12235403215" class="qr_2" name="qrPDC-S1" id="PDC-S1" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-S1" onchange="comprobarpdcs1(this)" checked="true"> 
                <!-- <img id="g11_image" src="static/content/cajas/motor/G11/G11.jpg" alt="" width="120">
                <h4 style="display: inline-block;"> G11 </h4>
                <input type="text" value="12975465900" class="qr" name="qrg11" id="G11" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckG11" onchange="comprobarg11(this)" checked="true">
                <br><br> -->
              </div>
        <div>
          <hr>
          <label>Seleccione uno o varios módulos de la siguiente lista, después de click en agregar o quitar.</label><br>
          <select id="modulos_vision" >
            <option selected> Seleccione un modulo de vision...</option>
          </select>
          <div class="botonesaq">
            <button type="button" class="btn btn-success" onclick="agregarmodulov()" style="display: inline-block; margin: 5px;"><i class="fas fa-plus"> Agregar</i></button>
            <button type="button" class="btn btn-danger" onclick="quitarmodulov()" style="display: inline-block; margin: 5px;"><i class="fas fa-minus"> Quitar</i></button>
          </div>
          <div id="arreglomv">Módulos de visión agregados: </div>
          <hr>
        </div>

        <button type="button" class="btn btn-primary btn-lg" onclick="agregarparte()" style="display: inline-block; margin: 10px;">Agregar nueva Modularidad</button>
        <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;"></div>
      </div>
    </form>
    <div id="alertaaddparte"></div>
  </div>
  <!--====  End of AGREGAR NÚMEROS DE PARTE  ====-->

  <!-- Modal -->
  <style>
    .modal-dialog-centered {
      transform: translate(0, -50%);
      top: 40%;
      margin: 0 auto;
    }
  </style>
  <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Problema con Modularidad: <span id="header"></span></h5>
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
<script  type="text/javascript" src="static/script/numeroparte.js"></script>
<script>
  $(function () {
    $('[data-toggle="tooltip"]').css({"cursor":"pointer"}).tooltip()
  })
</script>
</body>
</html>