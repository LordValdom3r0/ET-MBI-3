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
      <link rel="stylesheet" type="text/css" href="static/content/preview.css" />
      <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
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

<body class="index" onload="iniciar_pagina();sesion_3()">
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
  <div class="container" align="left" id="formparte" >
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;"></div>
    <form id="agregarparte" style="margin-top: 10px">
      <div class="contenedoragregar">
       
        <div class="numero de parte " for="Número de Parte">
          <br/>
          <h2 id="modulov_titulo"></h2>
          <button type="button" id="pdf_vision" class="btn btn-danger" title="Descargar Visuales" style="display: none;"><i class="fas fa-file-pdf"></i></button>
          <hr>
        </div>

        <div id="modularidad_vision" class="container" style="position: sticky;">

          <div class="grid justify-end sticky" style="margin-right: -28rem; float:right">
              <p id="time" class="time-tag">Ver Tiempo Aproximado en segundos</p>
              <div id="timeContainer" class="timeContainer">
                <div id="section-a">
              <form action="" >
                <b id="title-section-a"    class="timeFuseType">ROBOT - A</b>
                <p id="category-section-a" class="timeFuseType" style="font-size: small;">(PDC-D y PDC-P)</p>
               <span class="flex-box timeFuseType" >  <p>ATO</p> <input class="input-number" type="number" name="" id="time_a_ATO" value = '6.5' > </span>
               <span class="flex-box timeFuseType" >  <p>MINI</p> <input class="input-number" type="number" name="" id="time_a_MINI" value = '6.5'> </span>
               <span class="flex-box timeFuseType" >  <p>MULTI</p> <input class="input-number" type="number" name="" id="time_a_MULTI" value = '9'> </span>
               <span class="flex-box timeFuseType" style="justify-content: center;"> <input type="button" value="Calcular" onclick="dateTime_a()" ></span>
               <span class="flex-box timeFuseType" style='height: 8rem; max-width: 18rem;'> <div id="timeResult_a" class="timeResult"> </div> </span>
              </form>
            </div>
            <div id="section-b" style="margin-left: 1.5rem;">
              <form action="" >
                <b id="title-section-b"    class="timeFuseType">ROBOT - B</b>
                <p id="category-section-b" class="timeFuseType" style="font-size: small;">(PDC-R ,F96 ,PDC-S y TBLU)</p>
                <span class="flex-box timeFuseType" >  <p>ATO</p> <input class="input-number" type="number" name="" id="time_b_ATO" value = '6.5' > </span>
                <span class="flex-box timeFuseType" >  <p>MINI</p> <input class="input-number" type="number" name="" id="time_b_MINI" value = '6.5'> </span>
                <span class="flex-box timeFuseType" >  <p>MAXI</p> <input class="input-number" type="number" name="" id="time_b_MAXI" value = '9'> </span>
                <span class="flex-box timeFuseType" >  <p>RELAY</p> <input class="input-number" type="number" name="" id="time_b_RELAY" value = '11'> </span>
                <span class="flex-box timeFuseType" >  <p>MULTI</p> <input class="input-number" type="number" name="" id="time_b_MULTI" value = '9'> </span>
                <span class="flex-box timeFuseType" style="justify-content: center;"> <input type="button" value="Calcular" onclick="dateTime_b()" ></span>
                <span class="flex-box timeFuseType" style='height: 9rem; max-width: 18rem;'> <div id="timeResult_b" class="timeResult"> </div> </span>
              </form>
            </div>
          </div>
         <div style="text-align: center; margin-top: 1rem; height: 8rem;"> <b class="timeFuseType" id="fusiblesTotales" > </b></div>
          
        </div>
          <div id="caja_pdcr_options" class="caja_pdcr_options">
            <h4 id="pdcr_title"> PDC-R </h4>
            <div id="caja_pdcr">
              <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
                <img id="pdcr_image_v" src="static/content/cajas/interior/pdcr/pdcr.jpg" alt="" width="754" height="341" style="display: none;">
                <img id="pdcr_1_image_v" src="static/content/cajas/interior/pdcr_1/pdcr_1.jpg" alt="" width="924" height="555" style="display: none;">
                <img id="pdcr_small_image_v" src="static/content/cajas/interior/pdcr_small/pdcrs.jpg" alt="" width="924" height="555" style="display: none;">
            </div>
          </div>

          <div id="caja_f96_v" class="caja_f96_v row">
            <br/>
            <h4> Fuse-Connector F96 </h4>
            <br/>
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <label id="f96_n/a"></label>
            <img id="f96_image_v" src="static/content/cajas/interior/f96/f96.jpg" alt="" width="974" height="512" style="display: none;">
            <canvas id="f96_image_v_canvas" style="float: left;"></canvas>
          </div>
          
          <div id="caja_pdce" class="row">
          <br/>
          <h4 id="pdce_title"> PDC-E </h4>
          <br/>
          <div id="caja_pdce">
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <img id="pdce_image_v" src="static/content/cajas/motor/PDC-E/PDC-E.jpg" alt="" width="843" height="686" style="display: none;">
            <img id="pdce_amg_image_v" src="static/content/cajas/motor/PDC-E/PDC-E_AMG.jpg" alt="" width="843" height="686" style="display: none;">
          </div>
        </div>

        <div id="caja_pdcs1" class="row">
          <br/>
          <h4> PDC-S1 </h4>
          <br/>
          <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
          <img id="pdcs1_image_v" src="static/content/cajas/motor/pdcs1_2/pdcs1_2.jpg" alt="" width="974" height="512" style="display: none;">
          <canvas id="pdcs1_image_v_canvas" style="float: left;"></canvas>
        </div>
        
          <div id="caja_pdcs_v" class="caja_pdcs_v row">
            <br/>
            <h4> PDC-S </h4>
            <br/>
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <img id="pdcs_image_v" src="static/content/cajas/interior/pdcs/pdcs.jpg" alt="" width="974" height="512" style="display: none;">
            <canvas id="pdcs_image_v_canvas" style="float: left;"></canvas>
          </div>

          <div id="caja_tblu_v" class="caja_tblu_v row">
            <br/>
            <h4> TBLU </h4>
            <br/>
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <img id="tblu_image_v" src="static/content/cajas/interior/tblu/tblu.jpg" alt="" width="843" height="686" style="display: none;">
            <canvas id="tblu_image_v_canvas" style="float: left; margin-right: 10px"></canvas>
          </div>

          <div id="caja_pdcd_v" class="caja_pdcd_v row">
            <br/>
            <h4> PDC-D</h4>
            <br/>
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <div class="alert alert-warning" id="warning-alert-PDCD" style="display: none;">
              <button type="button" class="close" data-dismiss="alert">x</button>
              <strong>Ojo! </strong> El Fusible no pertenece a la cavidad seleccionada.
            </div>
            <img id="pdcd_image_v" src="static/content/cajas/interior/pdcd/pdcd.jpg" alt="" width="680" height="726" style="display: none;">
            <canvas id="pdcd_image_v_canvas" style="float: left;"></canvas>
          </div>

          <div id="caja_pdcp_v" class="caja_pdcp_v row">
            <br/>
            <h4> PDC-P</h4>
            <br/>
            <div class="loading">Cargando Modularidad, espere porfavor...<img src="static/content/loader.gif" alt=""></div>
            <div class="alert alert-warning" id="warning-alert-PDCP" style="display: none;">
              <button type="button" class="close" data-dismiss="alert">x</button>
              <strong>Ojo! </strong> El Fusible no pertenece a la cavidad seleccionada.
            </div>
            <img id="pdcp_image_v" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">
            <canvas id="pdcp_image_v_canvas" style="float: left; margin-right: 10px"></canvas>
          </div>
        </div>


        <br/>
        <button type="button" class="btn btn-primary btn-lg" onclick="location.href='edit.php'" style="display: inline-block; margin: 10px;">Regresar a la lista de Modularidades</button>
      </div>
    </form>
    <div id="alertasesion" style="display: none;"></div>
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
  <script type="text/javascript" src="static/script/jquery.js"></script>
  <script type="text/javascript" src="static/script/login.js"></script>
  <script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script  type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script  type="text/javascript" src="static/script/mixer.js"></script>
  <script  type="text/javascript" src="static/script/count.js"></script>
  <script  type="text/javascript" src="static/script/theme.js"></script>
  <script  type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script  type="text/javascript" src="static/script/globalVisual.js"></script>
  <script  type="text/javascript" src="static/script/preview.js"></script>
  <script  type="text/javascript" src="static/script/html2pdf.bundle.min.js"></script>

  <script async src="static/script/opencv.js" type="text/javascript"></script>
</body>
</html>
