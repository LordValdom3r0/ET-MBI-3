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
      <link rel="stylesheet" type="text/css" href="static/content/new_mod_t_interiorV2.css" />
      <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
      <link rel="stylesheet" type="text/css" href="static/content/tabstyle.css" />
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
            <a href="new_mod_t_interiorV2.php">Módulos de Torque</a>
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
          <h2>Nuevo pedido - INTERIOR -  Torque </h2>
          <hr>
          <p>
            Ingrese el módulo:
            <input type="text" name="Número de orden" id="modulo_vision" placeholder="Introducir el nombre del módulo" oninput="mayuscula(this); get_valid_pedido();" style="width:30%">
            <div id="alert_get_historial"></div>
          </p>
          <br/>
          <p>Click sobre la imagen para agregar los torques.</p>
        </div>

        <div id="caja_pdcp_t" class="caja_pdcp_t">
          <h4> PDC-P </h4>
          <br/>
          <img id="pdcp_image_t" src="static/content/cajas/interior/pdcp/pdcp.jpg" alt="" width="690" height="595" style="display: none;">
          <canvas id="pdcp_image_t_canvas"></canvas>
        </div>

        <div id="caja_pdcd_t" class="caja_pdcd_t">
          <br/>
          <h4> PDCD</h4>
          <br/>
          <img id="pdcd_image_t" src="static/content/cajas/interior/pdcd2/pdcd2.jpg" alt="" width="730" height="691" style="display: none;">
          <canvas id="pdcd_image_t_canvas"></canvas>
        </div>

        <div id="caja_mfbp1_t" class="caja_mfbp1_t">
          <br/>
          <h4> MFBP-1 </h4>
          <br/>
          <img id="mfbp1_image_t" src="static/content/cajas/interior/mfbp1/mfbp1.jpg" alt="" width="974" height="570" style="display: none;">
          <canvas id="mfbp1_image_t_canvas"></canvas>
        </div>

        <div id="caja_mfbs_t" class="caja_mfbs_t">
          <br/>
          <h4> MFB-S </h4>
          <br/>
          <img id="mfbs_image_t" src="static/content/cajas/interior/mfbs/mfbs.jpg" alt="" width="863" height="644" style="display: none;">
          <canvas id="mfbs_image_t_canvas"></canvas>
        </div>

        <div id="caja_mfbe_t" class="caja_mfbe_t">
          <br/>
          <h4> MFB-E </h4>
          <br/>
          <img id="mfbe_image_t" src="static/content/cajas/interior/mfbe/mfbe.jpg" alt="" width="863" height="644" style="display: none;">
          <canvas id="mfbe_image_t_canvas"></canvas>
        </div>

        <div id="caja_mfbp2_t" class="caja_mfbp2_t">
          <br/>
          <h4> MFBP-2 </h4>
          <br/>
          <img id="mfbp2_image_t" src="static/content/cajas/interior/mfbp2/mfbp2.jpg" alt="" width="980" height="664" style="display: none;">
          <canvas id="mfbp2_image_t_canvas"></canvas>
        </div>

        <div id="caja_pdcr_options">
          <h4> PDCR</h4>
          <br/>
        <p>La caja PDC-R tiene las siguientes opciones de caja: </p>
          <select id="pdcr_option" onchange="change_caja_pdcr()">
            <option selected>Seleccione la caja PDCR...</option>
            <option value="PDCR">PDCR</option>
            <option value="PDCR_MID">PDCR-MID</option>
            <option value="PDC_RSMALL">PDC-RS</option>
          </select>
        <br/>
        <div id="caja_pdcr_t" style="display: none;">
          <br/>
          <p> Usted seleccionó la caja PDCR </p>
          <br/>
          <img id="pdcr_image_t" src="static/content/cajas/interior/pdcr2/pdcr2.jpg" alt="" width="764" height="624" style="display: none;">
          <canvas id="pdcr_image_t_canvas"></canvas>
        </div>
        <div id="caja_pdcr_mid_t" style="display: none;">
          <br/>
          <p> Usted seleccionó la caja PDCR MID </p>
          <br/>
          <img id="pdcr_mid_image_t" src="static/content/cajas/interior/pdcr2_mid/pdcr2_mid.jpg" alt="" width="764" height="624" style="display: none;">
          <canvas id="pdcr_mid_image_t_canvas"></canvas>
        </div>
        <div id="caja_pdcr_small_t" style="display: none;">
          <br/>
          <p> Usted seleccionó la caja PDC-R SMALL </p>
          <br/>
          <img id="pdcr_small_image_t" src="static/content/cajas/interior/pdcr2_small/pdcr2_small.jpg" alt="" width="764" height="624" style="display: none;">
          <canvas id="pdcr_small_image_t_canvas"></canvas>
        </div>
      </div>


      <div id="caja_pdce_options" class="caja_pdce_options">
          <h4> PDC-E</h4>
          <br/>
          <p>La caja PDC-E tiene las siguientes variantes: </p>
          <select id="pdce_option" onchange="change_caja_pdce()">
            <option selected>Seleccione la caja PDC-E...</option>
            <option value="PDC-E">PDC-E</option>
            <option value="PDC-E_AMG">PDC-E AMG</option>
          </select>
          <br/>
          
          <div id="caja_pdce_t" style="display: none;">
          <br/>
          <p> Usted seleccionó la caja PDC-E </p>
          <br/>
          <img id="pdce_1_image" src="static/content/cajas/motor/PDC-E/PDC-E.jpg" alt="" width="997" height="636" style="display: none;">
          <canvas id="PDC-E_image_t_canvas"></canvas>
        </div>

        <div id="caja_pdce_amg_t" style="display: none;">
          <br/>
          <p> Usted seleccionó la caja PDC-E AMG</p>
          <br/>
          <img id="pdce_1_image" src="static/content/cajas/motor/PDC-E/PDC-E_AMG.jpg" alt="" width="997" height="636" style="display: none;">
          <canvas id="PDC-E_AMG_image_t_canvas"></canvas>
        </div>
        </div>

        <div id="caja_pdce_cover">
          <br/>
          <h4> PDC-E COVER</h4>
          <br/>
          <img id="pdce_2_image" src="static/content/cajas/motor/PDC-E/PDC-E_COVER.jpg" alt="" width="994" height="659" style="display: none;">
          <canvas id="PDC-E_COVER_image_t_canvas"></canvas>
        </div>

        <div id="caja_pdcs1_t">
          <br/>
          <h4> PDC-S1 </h4>
          <br/>
          <img id="pdcs1_image" src="static/content/cajas/motor/PDC-S1/PDC-S1.jpg" alt="" width="741" height="741" style="display: none;">
          <canvas id="PDC-S1_image_t_canvas"></canvas>
        </div>


        <div id="caja_g11">
          <br/>
          <h4> G11 </h4>
          <br/>
          <img id="g11_image" src="static/content/cajas/motor/G11/G11.jpg" alt="" width="727" height="789" style="display: none;">
          <canvas id="G11_image_t_canvas"></canvas>
        </div>

        
        <div id="caja_bt_t" class="caja_bt_t">
          <br/>
          <h4> BT </h4>
          <br/>
          <img id="bt_image_t" src="static/content/cajas/interior/bt/bt.jpg" alt="" width="537" height="536" style="display: none;">
          <canvas id="bt_image_t_canvas"></canvas>
        </div>

        <div id="caja_battery-2_t" class="caja_battery-2_t">
          <br/>
          <h4> BATTERY-2 </h4>
          <br/>
          <img id="battery-2_image_t" src="static/content/cajas/interior/BATTERY-2/BATTERY-2.jpg" alt="" width="537" height="536" style="display: none;">
          <canvas id="battery-2_image_t_canvas"></canvas>
        </div>

        <br/>
        <button type="button" class="btn btn-primary btn-lg" onclick="add_module_torque()" style="display: block; margin: 10px;">Agregar módulo</button>
      </div>
    </form>
    <div id="alertasesion" style="display: none;"></div>
  </div>
  <!--====  End of AGREGAR NÚMEROS DE PARTE  ====-->

  <!-- Modal -->
  <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Error al intentar agregar el Módulo</h5>
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
  <script  type="text/javascript" src="static/script/global_visual.js"></script>
  <script  type="text/javascript" src="static/script/smoothscroll.js"></script>

  <script  type="text/javascript" src="static/script/add_mod_t_interiorV2.js"></script>
</body>
</html>
