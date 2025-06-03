<!DOCTYPE html>
<html lang="en">

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
<!-- onload="sesion_trazabilidad()" -->
  <body class="index">
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
    table.dataTable>tbody>tr.child ul.dtr-details {
    display: grid;
    list-style-type: none;
    margin: 0;
    /* padding: 0 */
    grid-template-columns: 1fr 1fr 1fr;
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
            <a href="trazabilidadcheck.php">Trazabilidad Check</a>
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
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;"></div>
    <div><button type="button" class="btn btn-primary" id="mostrar_qr" data-toggle="modal" data-target="#modal_qr" style="display: none;"></div>
    <div>
      <br>
      <h3>Consulta a Servidor FAMX2</h3>
      <hr>
      <div align="center">
        <button type="button" class="btn btn-info btn-lg" id="lista_all" style="margin: 10px" onclick="famx2_registros_all()">Registros de FAMX2 (Todos)</button>
        <button type="button" class="btn btn-info btn-lg" id="lista_motor" style="margin: 10px" onclick="famx2_registros_interior()">Registros de FAMX2 (Interior)</button>
        <!-- <button type="button" class="btn btn-info btn-lg" id="AD_Alertas_emails" style="margin: 10px" onclick="famx2_registros_general(this)">AD_Alertas_emails</button>
        <button type="button" class="btn btn-info btn-lg" id="AD_listado_accesos" style="margin: 10px" onclick="famx2_registros_general(this)">AD_listado_accesos</button>
        <button type="button" class="btn btn-info btn-lg" id="AD_listado_apps" style="margin: 10px" onclick="famx2_registros_general(this)">AD_listado_apps</button>
        <button type="button" class="btn btn-info btn-lg" id="AD_usuarios" style="margin: 10px" onclick="famx2_registros_general(this)">AD_usuarios</button>
        <button type="button" class="btn btn-info btn-lg" id="AD_usuarios_accesos_xref" style="margin: 10px" onclick="famx2_registros_general(this)">AD_usuarios_accesos_xref</button>
        <button type="button" class="btn btn-info btn-lg" id="AD_usuarios_accesos_xref_new" style="margin: 10px" onclick="famx2_registros_general(this)">AD_usuarios_accesos_xref_new</button>
        <button type="button" class="btn btn-info btn-lg" id="Calidad_codigo_defectos" style="margin: 10px" onclick="famx2_registros_general(this)">Calidad_codigo_defectos</button>
        <button type="button" class="btn btn-info btn-lg" id="Calidad_reparacion" style="margin: 10px" onclick="famx2_registros_general(this)">Calidad_reparacion</button>
        <button type="button" class="btn btn-info btn-lg" id="Calidad_usuarios" style="margin: 10px" onclick="famx2_registros_general(this)">Calidad_usuarios</button>
        <button type="button" class="btn btn-info btn-lg" id="cutting_spec" style="margin: 10px" onclick="famx2_registros_general(this)">cutting_spec</button>
        <button type="button" class="btn btn-info btn-lg" id="EN_cross_Autarken" style="margin: 10px" onclick="famx2_registros_general(this)">EN_cross_Autarken</button>
        <button type="button" class="btn btn-info btn-lg" id="EN_cross_Autarken_delete" style="margin: 10px" onclick="famx2_registros_general(this)">EN_cross_Autarken_delete</button>
        <button type="button" class="btn btn-info btn-lg" id="EN_cross_Modulos" style="margin: 10px" onclick="famx2_registros_general(this)">EN_cross_Modulos</button>
        <button type="button" class="btn btn-info btn-lg" id="EN_cross_Partes_Plasticas" style="margin: 10px" onclick="famx2_registros_general(this)">EN_cross_Partes_Plasticas</button>
        <button type="button" class="btn btn-info btn-lg" id="EN_fam_cutting_spec" style="margin: 10px" onclick="famx2_registros_general(this)">EN_fam_cutting_spec</button>
        <button type="button" class="btn btn-info btn-lg" id="FAA_BOM_PRD" style="margin: 10px" onclick="famx2_registros_general(this)">FAA_BOM_PRD</button>
        <button type="button" class="btn btn-info btn-lg" id="FAA_INV_Inventory_Extract" style="margin: 10px" onclick="famx2_registros_general(this)">FAA_INV_Inventory_Extract</button>
        <button type="button" class="btn btn-info btn-lg" id="FAA_ITEM_COST" style="margin: 10px" onclick="famx2_registros_general(this)">FAA_ITEM_COST</button>
        <button type="button" class="btn btn-info btn-lg" id="FAA_ITEM_MASTER" style="margin: 10px" onclick="famx2_registros_general(this)">FAA_ITEM_MASTER</button>
        <button type="button" class="btn btn-info btn-lg" id="FAA_rutas" style="margin: 10px" onclick="famx2_registros_general(this)">FAA_rutas</button>
        <button type="button" class="btn btn-info btn-lg" id="FG_historial_lotes_con_inter_org" style="margin: 10px" onclick="famx2_registros_general(this)">FG_historial_lotes_con_inter_org</button>
        <button type="button" class="btn btn-info btn-lg" id="FG_lotes_con_inter_org" style="margin: 10px" onclick="famx2_registros_general(this)">FG_lotes_con_inter_org</button>
        <button type="button" class="btn btn-info btn-lg" id="FG_lotes_con_SUBTRX" style="margin: 10px" onclick="famx2_registros_general(this)">FG_lotes_con_SUBTRX</button>
        <button type="button" class="btn btn-info btn-lg" id="FG_lotes_con_wip_pn3" style="margin: 10px" onclick="famx2_registros_general(this)">FG_lotes_con_wip_pn3</button>
        <button type="button" class="btn btn-info btn-lg" id="FG_lotes_con_wip_pn4" style="margin: 10px" onclick="famx2_registros_general(this)">FG_lotes_con_wip_pn4</button>
        <button type="button" class="btn btn-info btn-lg" id="gama_modulos_variante" style="margin: 10px" onclick="famx2_registros_general(this)">gama_modulos_variante</button>
        <button type="button" class="btn btn-info btn-lg" id="gamaens" style="margin: 10px" onclick="famx2_registros_general(this)">gamaens</button> ESTE NO FUNCIONA BIEN AL REALIZAR CONSULTAS
        <button type="button" class="btn btn-info btn-lg" id="GFPS_CIRCUITOS_PLAN" style="margin: 10px" onclick="famx2_registros_general(this)">GFPS_CIRCUITOS_PLAN</button> -->
        <br><hr>
        <input type="text" name="HM" id="hm" placeholder="Introducir HM" style="width:30%;display: none;">
        <input type="button" class="btn btn-primary btn-lg" id="buscar" value="Buscar" onclick="famx2_registros_hmInfo()" style="margin-left: 20px; display: none;">
      </div>
      <br>
    </div>
    <div id="tabla"></div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

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

  <!--====================================================
  =            POP-UP PARA EDITAR LOS PEDIDOS            =
  =====================================================-->
  <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
              <a data-toggle="collapse" data-parent="#accordion" href="#num_parte"> NÚMERO DE PARTE <hr></a>
            </h4>
          </div>      
          <div id="num_parte" class="panel-collapse collapse">
            <div class="panel-body">
              <div>
                <label for="pedidoeditar" style="margin-left: 16%">Número de parte: </label>
                <input type="text" id="pedidoeditar" name="pedidoeditar" oninput="mayuscula(this);get_valid_pedido_1()" onkeypress = "return get_valid_pedido(event);" style="width: 30%;margin-right: 20px">
                Activo: <input type="checkbox" id="activo" onchange="comprobaractivo(this)">
                <div id="alert_get_historial"></div>
              </div>
            </div>
          </div>     
          <!-- Sección de los códigos QR -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#qr_cajas">QR DE LAS CAJAS <hr></a>
            </h4>
          </div>
          <div id="qr_cajas" class="panel-collapse collapse">
            <div class="panel-body" style="margin-left: 15%">
              <img id="pdcr_image_t" src="static/content/cajas/interior/pdcr2/pdcr2.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-R</h4>                  
              <input type="text" class="qr" name="qrPDC-R" id="PDC-R" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">                 
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-R" onchange="comprobarpdcr(this)">
              <br>
              <img id="pdcr_mid_image_t" src="static/content/cajas/interior/pdcr_1/pdcr_1.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-RMID</h4>
              <input type="text" class="qr" name="qrPDC-RMID" id="PDC-RMID" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-RMID" onchange="comprobarpdcrmid(this)">
              <br>
              <img id="pdcd_image_t" src="static/content/cajas/interior/pdcd2/pdcd2.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> PDC-D</h4>
              <input type="text" class="qr" name="qrPDC-D" id="PDC-D" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-D" onchange="comprobarpdcd(this)">
              <br>
              <img id="mfbp1_image_t" src="static/content/cajas/interior/mfbp1/mfbp1.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-P1 </h4>
              <input type="text" class="qr" name="qrMFB-P1" id="MFB-P1" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P1" onchange="comprobarmfbp1(this)">
              <br>
              <img id="mfbs_image_t" src="static/content/cajas/interior/mfbs/mfbs.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-S </h4>
              <input type="text" class="qr" name="qrMFB-S" id="MFB-S" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-S" onchange="comprobarmfbs(this)">
              <br><br>
              <img id="mfbp2_image_t" src="static/content/cajas/interior/mfbp2/mfbp2.jpg" alt="" width="120">
              <h4 style="display: inline-block; margin-right: 20px"> MFB-P2 </h4>
              <input type="text" class="qr" name="qrMFB-P2" id="MFB-P2" placeholder="Escanee el código QR" oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
              Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P2" onchange="comprobarmfbp2(this)">                
              <br>
            </div>
          </div>
          <!-- Sección de MÓDULOS DE VISIÓN -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_vision"> MODULOS DE VISION <hr></a>
            </h4>
          </div>
          <div id="mod_vision" class="panel-collapse collapse">
            <div class="panel-body">
              <p>Seleccione uno o varios módulos de la siguiente lista, después de click en agregar o quitar.</p>
              <select id="modulos_vision" >
                <option selected> Seleccione un modulo de vision...</option>
              </select>
              <div class="botonesaq">
                <button type="button" class="btn btn-success" onclick="agregarmodulov()" style="display: block; margin: 5px;"><i class="fas fa-plus"> Agregar</i></button>
                <button type="button" class="btn btn-danger" onclick="quitarmodulov()" style="display: block; margin: 5px;"><i class="fas fa-minus"> Quitar</i></button>
              </div>
              <div id="arreglomv">Módulos de visión agregados: </div>
              <button type="button" class="btn btn-secondary" onclick="clearmodulov()" style="display: inline-block; margin: 5px;">Clear</button>
              <p> Vaya a la sección de módulos de torque para agregar módulos de torque a la orden.</p>
            </div>
          </div>
          <!-- Sección de MÓDULOS DE TORQUE -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#mod_torque">MODULOS DE TORQUE <hr></a>
            </h4>
          </div>
          <div id="mod_torque" class="panel-collapse collapse">
            <div class="panel-body">
              <p> Busque el módulo en la siguiente lista, después dé click en agregar  </p>
              <select id="modulos_torque" >
                <option selected> Seleccione un modulo de torque...</option>
              </select>
              <div class="botonesaq">
                <button type="button" class="btn btn-success" onclick="agregarmodulot()" style="display: block; margin: 5px;"><i class="fas fa-plus"> Agregar</i></button>
                <button type="button" class="btn btn-danger" onclick="quitarmodulot()" style="display: block; margin: 5px;"><i class="fas fa-minus"> Quitar</i></button>
              </div>
              <div id="arreglomt">Módulos de torque agregados:    </div>
              <button type="button" class="btn btn-secondary" onclick="clearmodulot()" style="display: inline-block; margin: 5px;">Clear</button>
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

 <!--=======================================
  =                 FOOTER                 =
  ========================================-->
  <?php include('footer.php')?>
  <!--====  End of FOOTER O PIE DE PÁGINA  ====-->

  
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
<script  type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
<script  type="text/javascript" src="static/script/trazabilidadcheck.js"></script>
</body>
</html>