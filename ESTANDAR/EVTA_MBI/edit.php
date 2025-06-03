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
  <link rel="stylesheet" type="text/css" href="static/content/edit.css" />
  <link rel="stylesheet" type="text/css" href="static/fonts/css/all.min.css" />
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

<body class="index" onload="cargartabla();sesion_4()">
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
            <a href="edit.php">Edición de Números de Parte</a>
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
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info"
        style="display: none;"></div>
    <div><button type="button" class="btn btn-primary" id="mostrar_qr" data-toggle="modal" data-target="#modal_qr"
        style="display: none;"></div>
    <div>
      <br>
      <h3>Edición de Números de Parte <span id="tituloEvento"></span></h3>
      <hr>
      <span>
        <h4>Por Dia:</h4> <input type="checkbox" name="day" id="lastDay" onclick="lastDay()">
      </span>
    </div>
    <div id="tabla"></div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

  <div class="modal fade" id="modal_qr" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
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

  <!--====================================================
  =            POP-UP PARA EDITAR LOS PEDIDOS            =
  =====================================================-->
  <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalCenterTitle"><span id="pedidoedit"></span></h3>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#num_parte"> NÚMERO DE PARTE
                <hr></a>
            </h4>
          </div>
          <div id="num_parte" class="panel-collapse collapse">
            <div class="panel-body">
              <div>
                <label for="pedidoeditar" style="margin-left: 16%">Número de parte: </label>
                <input type="text" id="pedidoeditar" name="pedidoeditar" oninput="mayuscula(this);get_valid_pedido_1()"
                  onkeypress="return get_valid_pedido(event);" style="width: 30%;margin-right: 20px">
                Activo: <input type="checkbox" id="activo" onchange="comprobaractivo(this)">
                <div id="alert_get_historial"></div>
              </div>
            </div>
          </div>
          <!-- Sección de los códigos QR -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#qr_cajas">QR DE LAS CAJAS
                <hr></a>
            </h4>
          </div>
          <div id="qr_cajas" class="panel-collapse collapse">
            <div class="panel-body" style="margin-left: 15%">
            <div id="section_mbi_1">
              <img id="pdcr_image_t" src="static/content/cajas/interior/pdcr_t/pdcr_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-R</h4>
              <input type="text" class="qr" name="qrPDC-R" id="PDC-R" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-R" onchange="comprobarpdcr(this)">
              <br>
              <img id="pdcr_mid_image_t" src="static/content/cajas/interior/pdcrmid_t/pdcrmid_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-RMID</h4>
              <input type="text" class="qr" name="qrPDC-RMID" id="PDC-RMID" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-RMID" onchange="comprobarpdcrmid(this)">
              <br>
              <!-- Por el momento es un parche para evitar que el frontend oculte los módulos de cada modularidad... resolver cuando haya tiempo (Es solo agregar todo lo relacionado a la pdcrs) -->
              <img id="pdcr_s_image_t" src="static/content/cajas/interior/pdcrs_t/pdcrs_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-RS</h4>
              <input type="text" class="qr" name="qrPDC-RS" id="PDC-RS" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-RS" onchange="comprobarpdcrs(this)">
              <br>
              <!-- Por el momento es un parche para evitar que el frontend oculte los módulos de cada modularidad... resolver cuando haya tiempo (Es solo agregar todo lo relacionado a la pdcrs) -->
              <img id="pdcd_image_t" src="static/content/cajas/interior/pdcd/pdcd_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-D</h4>
              <input type="text" class="qr" name="qrPDC-D" id="PDC-D" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-D" onchange="comprobarpdcd(this)">
              <br>
              <img id="pdcp_image_t" src="static/content/cajas/interior/pdcp/pdcp_t.JPG" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-P</h4>
              <input type="text" class="qr" name="qrPDC-P" id="PDC-P" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-P" onchange="comprobarpdcp(this)">
            </div>
              <br>
            <div id="section_mbi_2">
              <img id="mfbp1_image_t" src="static/content/cajas/interior/mfbp1/mfbp1_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-P1 </h4>
              <input type="text" class="qr" name="qrMFB-P1" id="MFB-P1" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P1" onchange="comprobarmfbp1(this)">
              <br>
              <img id="mfbs_image_t" src="static/content/cajas/interior/mfbs/mfbs_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-S </h4>
              <input type="text" class="qr" name="qrMFB-S" id="MFB-S" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-S" onchange="comprobarmfbs(this)">
              <br>
              <img id="mfbp2_image_t" src="static/content/cajas/interior/mfbp2/mfbp2_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-P2 </h4>
              <input type="text" class="qr" name="qrMFB-P2" id="MFB-P2" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P2" onchange="comprobarmfbp2(this)">
              <br>
              <img id="mfbe_image_t" src="static/content/cajas/interior/mfbe/mfbe_t.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-E </h4>
              <input type="text" class="qr" name="qrMFB-E" id="MFB-E" placeholder="Escanee el código QR"
                oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-E" onchange="comprobarmfbe(this)">
            </div>
            <div id="section_mbm_1">
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
                
              </div>
              <div id="section_mbm_2">
                <img id="mfbe_image" src="static/content/cajas/motor/MFB-E/MFB-E.jpg" alt="" width="120">
                <h4 style="display: inline-block;"> MFB-E </h4>
                <input type="text" value="12975407416" class="qr_2" name="qrMFB-E" id="MFB-E" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-E" onchange="comprobarmfbe(this)" checked="true">
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
              <br>
            </div>
          </div>
          <!-- Sección de MÓDULOS DE VISIÓN -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_vision"> MODULOS DE VISION
                <hr></a>
            </h4>
          </div>
          <div id="mod_vision" class="panel-collapse collapse">
            <div class="panel-body">
              <p>Seleccione uno o varios módulos de la siguiente lista, después de click en agregar o quitar.</p>
              <select id="modulos_vision">
                <option selected> Seleccione un modulo de vision...</option>
              </select>
              <div class="botonesaq">
                <button type="button" class="btn btn-success" onclick="agregarmodulov()"
                  style="display: block; margin: 5px;"><i class="fas fa-plus"> Agregar</i></button>
                <button type="button" class="btn btn-danger" onclick="quitarmodulov()"
                  style="display: block; margin: 5px;"><i class="fas fa-minus"> Quitar</i></button>
              </div>
              <div id="arreglomv">Módulos de visión agregados: </div>
              <button type="button" class="btn btn-secondary" onclick="clearmodulov()"
                style="display: inline-block; margin: 5px;">Clear</button>
              <p> Vaya a la sección de módulos de torque para agregar módulos de torque a la orden.</p>
            </div>
          </div>
          <!-- Sección de MÓDULOS DE TORQUE -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_torque">MODULOS DE TORQUE
                <hr></a>
            </h4>
          </div>
          <div id="mod_torque" class="panel-collapse collapse">
            <div class="panel-body">
              <p> Busque el módulo en la siguiente lista, después dé click en agregar </p>
              <select id="modulos_torque">
                <option selected> Seleccione un modulo de torque...</option>
              </select>
              <div class="botonesaq">
                <button type="button" class="btn btn-success" onclick="agregarmodulot()"
                  style="display: block; margin: 5px;"><i class="fas fa-plus"> Agregar</i></button>
                <button type="button" class="btn btn-danger" onclick="quitarmodulot()"
                  style="display: block; margin: 5px;"><i class="fas fa-minus"> Quitar</i></button>
              </div>
              <div id="arreglomt">Módulos de torque agregados: </div>
              <button type="button" class="btn btn-secondary" onclick="clearmodulot()"
                style="display: inline-block; margin: 5px;">Clear</button>
            </div>
          </div>
          <!-- Sección de MÓDULOS DE ALTURA -->
          <!-- <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_altura">MODULOS DE ALTURA <hr></a>
            </h4>
          </div>
          <div id="mod_altura" class="panel-collapse collapse">
            <div class="panel-body">
              <p>El módulo de altura es calculado a partir de los módulos de visión.</p>
            </div>
          </div> -->
        </div>
        <div class="modal-footer">
          <button type="button" data-dismiss="modal" class="cancel_edit">Cancelar</button>
          <button type="button" class="guardar_edit" onclick="guardar_edit()">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
  <!--====  End of POP-UP PARA EDITAR LOS PEDIDOS  ====-->




  <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
  <div class="content" id="counter"></div>
  <!-- Fin de header color celeste al hacer scroll -->

  <!--============================================
  =            FOOTER O PIE DE PÁGINA            =
  =============================================-->
  <?php include('templates/footer.php') ?>
   <!--====  End of FOOTER O PIE DE PÁGINA  ====-->

  <a href="#" id="backToTop" class="none"><i class="fa fa-angle-up"></i></a>
  <button id="btn-delRef" class="btn-trash" onclick="borraPedidos()"><i class="fa fa-trash"></i></button>
  <!-- Include All JS -->
  <script type="text/javascript" src="static/script/jquery.js"></script>
  <script type="text/javascript" src="static/script/login.js"></script>
  <script type="text/javascript" src="static/script/moment.min.js"></script>
  <script type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script type="text/javascript" src="static/script/mixer.js"></script>
  <script type="text/javascript" src="static/script/count.js"></script>
  <script type="text/javascript" src="static/script/theme.js"></script>
  <script type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
  <script type="text/javascript" src="static/script/editorden.js"></script>
</body>

</html>