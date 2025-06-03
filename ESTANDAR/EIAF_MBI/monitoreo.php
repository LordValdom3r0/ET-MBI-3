﻿<!DOCTYPE html>
<html lang="es">

<head>
    <title>Fujikura Automotive México Piedras Negras</title>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="keywords" content="HTML5 Template" />
      <meta name="description" content="Finex - Multipurpose Business and Corporate HTML5 Template" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <!-- Include All CSS -->
      <link rel="stylesheet" type="text/css" href="static/content/bootstrap.css" />
      <link rel="stylesheet" type="text/css" href="static/content/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
      <link rel="stylesheet" type="text/css" href="static/content/owl.carousel.css" />
      <link rel="stylesheet" type="text/css" href="static/content/owl.theme.css" />
      <link rel="stylesheet" type="text/css" href="static/content/magnific-popup.css" />
      <link rel="stylesheet" type="text/css" href="static/content/preset.css" />
      <link rel="stylesheet" type="text/css" href="static/content/animate.css" />
      <link rel="stylesheet" type="text/css" href="static/content/style.css" />
      <link rel="stylesheet" type="text/css" href="static/content/monitoreo.css" />
      <link rel="stylesheet" type="text/css" href="static/content/normalize.css" />
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

<body class="index" onload="sesion_2();fechaActual()">
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
            <a href="monitoreo.php">Consulta a base de datos</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->

  <!--======================================
  =            CONSULTA SECTION            =
  =======================================-->
  <section class="servicesDetails">
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info" style="display: none;"></div>
    <!--  Creación del SELECT -->
    <div class="container" align="center">
      <!-- <select id="selector" name="select" onchange="changeselector()">
        <option value="Historial" selected>Historial</option>
        <option value="Log">Log</option>
        <option value="manager">Manager</option>
        <option value="modularidades">Modularidades</option>
        <option value="Modulos_Fusibles">Módulos Fusibles</option>
        <option value="Usuarios">Usuarios</option>
        <option value="web">Web</option>
      </select> -->

      <label for="select">Tabla:</label>
      <select id="selector" name="select">
        <option value="Historial" selected>Historial</option>
        <option value="Log">Log</option>
        <option value="manager">Manager</option>
        <!-- <option value="Modulos_Alturas">Módulos Alturas</option> -->
        <!-- <option value="modularidades">Modularidades</option>
        <option value="Modulos_Fusibles">Módulos Fusibles</option> -->
        <option value="Usuarios">Usuarios</option>
        <option value="web">Web</option>
      </select>
      <label id="label_busqueda" for="tipo_busqueda">Tipo de Búsqueda:</label>
      <select id="tipo_busqueda" name="tipo_busqueda">
      </select>

      <div id="tipobusqueda" style="display: none;">
        <label>Tipo de Búsqueda</label>
        <select id="tipo" name="tipo" onchange="tipodebusqueda()">
          <option value="Fecha" selected>Por Fecha</option>
          <option value="Nombre">Por Nombre</option>
          <option value="Gafete">Por Gafete</option>
        </select>
      </div>

      <div id="tipobusqueda2" style="display: none;">
        <label>Tipo de Búsqueda</label>
        <select id="tipo2" name="tipo2" onchange="tipodebusqueda2()">
          <option value="Fecha" selected>Por Fecha</option>
          <option value="Modularidad">Por Modularidad</option>
        </select>
      </div>

      <div id="tipobusqueda3" style="display: none;">
        <label>Tipo de Búsqueda</label>
        <select id="tipo3" name="tipo3" onchange="tipodebusqueda3()">
          <option value="Modulo" selected>Por Módulo</option>
          <option value="ID">Por ID</option>
        </select>
      </div>

      <div id="filtro" style="display: inline-block;">
        <form id="fecha" name="fecha">
          <!-- Campo de entrada de fecha -->
          <label>Fecha inicial:</label>
          <input type="date" id="fechai" name="fechai" min="2019-01-01"  value="2019-01-01">
          <input type="time" id="horai" name="horai" value="07:00:00">
          <label>Fecha final:</label>
          <input type="date" id="fechaf" name="fechaf" min="2019-01-01"  value="2021-01-01">
          <input type="time" id="horaf" name="horaf" value="07:00:00">
        </form>

        <form id="id" name="id" style="display: none;">
          <label>ID inicial:</label>
          <input type="number" id="idi" name="idi" min="0" max="999" value="0">
          <label>ID final:</label>
          <input type="number" id="idf" name="idf" min="0" max="999" value="10">
        </form>

        <form id="modulo" style="display: none;">
          <label>Ingrese el nombre del módulo</label>
          <input type="text" id="moduloinput" oninput="mayuscula(this);" placeholder="Nombre del Módulo">
        </form>

        <form id="modularidad" style="display: none;">
          <label>Ingrese el nombre de la modularidad</label>
          <input type="text" id="modularidad_input" oninput="mayuscula(this);" placeholder="Nombre del Modularidad">
        </form>

        <form id="nombre" style="display: none;">
          <label>Ingrese el nombre del Usuario</label>
          <input type="text" id="nombreinput" placeholder="Nombre del Usuario">
        </form>

        <form id="gafete" style="display: none;">
          <label>Ingrese el Gafete</label>
          <input type="password" id="gafeteinput" oninput="mayuscula(this)" placeholder="Gafete">
        </form>

        <form id="HM" style="display: none;">
          <label>Ingrese el nombre del HM</label>
          <input type="text" id="hminput" oninput="mayuscula(this);" placeholder="Nombre HM">
        </form>
      </div>
      <input type="button" value="Obtener resultados" onclick="capturar()" style="margin-top: 10px">
      <button id="descargar" class=" btn btn-secondary buttons-excel buttons-html5 btn-success">Descargar  <i class='far fa-file-excel'></i></button>
      <!-- <input type="button" value="Disponibilidad de máquina" onclick="location.href='maquina.php'" style="margin-top: 10px">  -->
      <!--====  Agregue un nuevo boton el cual debe de mandar a una nueva página llamada maquina.php  ====-->
    </div>

    <div class="container" id="descarga"></div>
 <!--  PESTAÑA DE GRAFICA  -->
<!-- 
 <div class="sticky-section">

  <div class="pestana" id="pestaña">
    <p>Ver Grafica</p>

  </div>
  
  <div class="sticky-canvas" id="grafico" style="width: 0px; height: 0px;" >
    <div class="grafico" id="myChart" ></div>
  </div>
</div> -->
  <!-- END OF PESTAÑA DE GRAFICA -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div id="resultado" align="center" style="margin-top: 40px"></div>
        </div>
      </div>
    </div>
    
    <div id="alertawarning" align="center"></div>
  </section>
  <!--====  End of CONSULTA SECTION  ====-->


  <!-- Modal -->
  <style>
    .modal-dialog-centered {
      transform: translate(0, -50%);
      top: 40%;
      margin: 0 auto;
    }

    #modal_info p{
      word-break: break-all !important;
    }
    thead tr:first-child Th{
      position: sticky;
      z-index: 12;
      top: 11rem;
      background: white;
    }
    thead Th{
      position: sticky;
      z-index: 12;
      top: 11rem;
      background: white;
    }
  </style>
  <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Información de <span id="header"></span></h5>
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
<!--====================================================
  =            POP-UP PARA EDITAR LOS PEDIDOS            =
  =====================================================-->
  <div class="modal fade" id="modal_estacions_edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" id="modal-dialog"  role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalCenterTitle"><span id="comentario_edit_title">Insertar Comentario</span></h3>
                <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true" style="float: right;">&times;</span>
  </button>
            </div>
            <div class="modal-body">
                <div align="center" id="formusuario">
                    <form id="" style="margin-top: 10px">
                      <div> <label>Hm:</label>  <p id="pedidoHM"></p></div>
                        <div class="contenedoragregar">
                            <!-- <label for="modulo"><b>Comentario:</b></label> -->
                            <textarea type="text" id="comentario_edit" name="comentario" style=" width: 50rem; height: 20rem;"> </textarea>
                            <br>
                            
                            <label>Estación:</label>
                            <select id="estacion_edit">
                                <option id="TORQUE" value="TORQUE">TORQUE</option>
                                <option id="VISION" value="VISION">VISION</option>
                                <option id="INSERCION" value="INSERCION">INSERCION</option>
                            </select>
                            
                            <label for="evento_edit">Evento:</label>
                            <select id="evento_edit">
                                <option id="X294" value="X294">X294</option>
                                <option id="X296" value="X296">X296</option>
                            </select>

                            <label for="fase_edit">Fase:</label>
                            <select id="fase_edit">
                                <option value="BL1">BL1</option>
                                <option value="BL2">BL2</option>
                                <option value="BL3">BL3</option>
                                <option value="BL4">BL4</option>      
                            </select>

                            <label for="conduccion_edit">conduccion:</label>
                            <select id="conduccion_edit">
                                <option value="IZQUIERDO">IZQUIERDO</option>
                                <option value="DERECHO">DERECHO</option> 
                            </select>
                            
                        </div>
                    </form>
                    <div class="container alert alert-success alert-dismissible" id="alertaadd" style="display: none;">
                        <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                        <strong id="alerta_estacion"></strong>
                    </div>
                    <div class="container alert alert-danger alert-dismissible" id="alertaadd_fail" style="display: none;">
                        <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
                        <strong id="alerta_estacion_fail"></strong>
                    </div>
                    <div id="alertaadd"></div>
                </div>
            </div>
            <div class="modal-footer" id="modal-comment-footer">
                <button type="button" data-dismiss="modal" class="cancel_edit">Cancelar</button>
                <button type="button" class="guardar_edit" onclick="guardar_edit(dateHM , hm)">Guardar Cambios</button>
            </div>
        </div>
    </div>

    <div id="registros" class="container" align="left">
      <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_estacions" style="display: none;"></div>
      <div><button type="button" class="btn btn-primary" id="mostrar_estacions" data-toggle="modal" data-target="#modal_estacions_edit" style="display: none;"></div>
      
      </div>
      <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
      <div class="content" id="counter"></div>
  </div>
<!--====  End of POP-UP PARA EDITAR LOS PEDIDOS  ====-->
 <!--=======================================
  =                 FOOTER                 =
  ========================================-->
  <?php include('footer.php')?>
  <!--====  End of FOOTER O PIE DE PÁGINA  ====-->


  <a href="#" id="backToTop"><i class="fa fa-angle-up"></i></a>
  <!-- Include All JS -->
  <script type="text/javascript" src="static/script/jquery.js"></script>
  <script type="text/javascript" src="static/script/login.js"></script>
  <script type="text/javascript" src="static/script/archivo.js"></script>
  <script type="text/javascript" src="static/script/moment.js"></script>
  <script type="text/javascript" src="static/script/resultados.js"></script>
  <script type="text/javascript" src="static/script/cajaComentario.js"></script>
  <script type="text/javascript" src="static/script/canvasjs.min.js"></script>
  <script  type="text/javascript"src="static/script/bootstrap.min.js"></script>
  <script  type="text/javascript"src="static/script/owl.carousel.js"></script>
  <script  type="text/javascript"src="static/script/jquery.magnific-popup.js"></script>
  <script  type="text/javascript"src="static/script/mixer.js"></script>
  <script  type="text/javascript"src="static/script/count.js"></script>
  <script  type="text/javascript"src="static/script/theme.js"></script>
  <script  type="text/javascript"src="static/script/smoothscroll.js"></script>
  <script  type="text/javascript"src="static/script/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="static/script/jquery.canvasjs.min.js"></script>
  <script  type="text/javascript"src="static/script/datatables/dataTables.responsive.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/JSZip-2.5.0/jszip.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/pdfmake-0.1.36/pdfmake.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/pdfmake-0.1.36/vfs_fonts.js"></script>
  <script type="text/javascript" src="static/script/datatables/DataTables-1.10.22/js/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/DataTables-1.10.22/js/dataTables.bootstrap4.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.bootstrap4.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.html5.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/Buttons-1.6.5/js/buttons.print.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/buttons.html5.styles.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/buttons.html5.styles.templates.min.js"></script>
</body>
</html>