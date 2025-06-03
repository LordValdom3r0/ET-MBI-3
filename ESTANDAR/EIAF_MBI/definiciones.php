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
    <link rel="stylesheet" type="text/css" href="static/content/definiciones.css"/>
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
            <a href="definiciones.php">Definiciones Especiales</a>
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
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_variantes" style="display: none;"></div>
    <div><button type="button" class="btn btn-primary" id="mostrar_variantes" data-toggle="modal" data-target="#modal_variantes_edit" style="display: none;"></div>
    <div>
      <br>
      <h3>Definiciones Especiales <span id="tituloEvento"></span></h3>
      <hr>
      
      <label id="section_descripcion" >Agregue módulos para determinar el tipo de caja <span id="caja_mb">PDC-R</span>  que llevarán la modularidades.</label>
    </div>
    <!--================================================
    =            BOTONES PARA ELEGIR ACCIÓN            =
    =================================================-->
    <!-- <div class="container" align="center" style="margin-top: 10px;">
        <button type="button" class="btn btn-info btn-lg" id="botonusuario" style="margin: 10px" onclick="variantesPDCR()">Variantes PDC-R</button>
        <button type="button" class="btn btn-info btn-lg disabled" id="botonparte" style="margin: 10px" onclick="modulos_torque()">Otros</button>
        <button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_elim" style="display: none;">
    </div> -->
    <!--====  End of BOTONES PARA ELEGIR ACCIÓN  ====-->
    <!--======================================
    =            VARIANTES PDC-R            =
    =======================================-->
    <div class="container" align="center" id="form_pdcr">
        <button type="button" class="btn btn-info btn-lg" id="agregar_pdcr" style="margin: 10px" onclick="variantesPDC_add()">Agregar</button>
        <button type="button" class="btn btn-info btn-lg" id="modificar_pdcr" style="margin: 10px" onclick="variantesPDC_edit()">Modificar</button>
    </div>
    <!--====  End of VARIANTES PDC-R  ====-->
    
    <!--======================================
    =   AGREGAR MODULOS DETERMINANTES PDC-R   =
    =======================================-->
    <div class="container" align="center" id="form_add_variante" style="display: none;">
      <form id="agregarusuario" style="margin-top: 10px">
            <div class="contenedoragregar">
                <label for="usuario"><b>Módulo</b></label>
                <input type="text" placeholder="Ingrese el nombre del módulo" id="modulo" name="modulo" oninput="mayuscula(this);get_valid_modulo()" required>
                <br>
                <label>Activo: </label> <input type="checkbox" id="activo" onchange="comprobaractivo(this)" checked="true">
                <br>
                <label>Caja:</label><br>
                <select id="variante">
                    <option id="PDC-R" value="PDC-R">PDC-R</option>
                    <option id="PDC-RMID" value="PDC-RMID">PDC-RMID</option>
                    <option id="PDC-RS" value="PDC-RS">PDC-RS</option>
                </select>
                <br>
                <button type="button" class="btn btn-success btn-lg" onclick="agregarVariante()" style="display: inline-block; margin: 10px;">Agregar Módulo Determinante</button>
            </div>
      </form>
      <div class="container alert alert-success alert-dismissible" id="alertaadd" style="display: none;">
                <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                <strong id="alerta_variante"></strong>
      </div>
      <div class="container alert alert-danger alert-dismissible" id="alertaadd_fail" style="display: none;">
                <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                <strong id="alerta_variante_fail"></strong>
      </div>
    </div>
    <!--====  End of AGREGAR MODULOS DETERMINANTES PDC-R  ====-->
    <div id="tabla">
    </div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

  <div class="modal fade" id="modal_variantes" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
  <div class="modal fade" id="modal_variantes_edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalCenterTitle"><span id="modulo_edit_title"></span></h3>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div align="center" id="formusuario">
            <form id="" style="margin-top: 10px">
                <div class="contenedoragregar">
                    <label for="modulo"><b>Módulo</b></label>
                    <input type="text" placeholder="Ingrese el nombre del módulo" id="modulo_edit" name="modulo" oninput="mayuscula(this);get_valid_modulo_edit()" required>
                    <br>
                    <label>Activo: </label> <input type="checkbox" id="activo_edit" onchange="comprobaractivo_edit(this)" checked="true">
                    <br>
                    <label id="variante_title">Variante PDC-R:</label><br>
                    <select id="variante_edit">
                        <option id="PDC-R" value="PDC-R">PDC-R</option>
                        <option id="PDC-RMID" value="PDC-RMID">PDC-RMID</option>
                        <option id="PDC-RS" value="PDC-RS">PDC-RS</option>
                    </select>
                </div>
                </form>
                <div class="container alert alert-success alert-dismissible" id="alertaadd" style="display: none;">
                    <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                    <strong id="alerta_variante"></strong>
                </div>
                <div class="container alert alert-danger alert-dismissible" id="alertaadd_fail" style="display: none;">
                    <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                    <strong id="alerta_variante_fail"></strong>
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
<script  type="text/javascript" src="static/script/definiciones.js"></script>
</body>
</html>