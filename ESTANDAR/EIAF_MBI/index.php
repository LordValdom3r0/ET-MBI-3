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
      <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
      <link rel="stylesheet" type="text/css" href="static/content/toastify.css" />
      <link rel="stylesheet" type="text/css" href="static/content/normalize.css" />

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

<body class="index" onload="sesion_1()">
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
            <a href="index.php">Gestión de Datos</a>
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
    <!-- <button type="button" class="btn btn-azul btn-lg" id="trazabilidadcheck" style="margin: 10px" onclick="location.href='trazabilidadcheck.php'">Trazabilidad Consulta</button> -->
    <button type="button" class="btn btn-success btn-lg disabled" id="botonusuario" style="margin: 10px" onclick="formusuariomostrar()">Usuarios</button>
    <button type="button" class="btn btn-success btn-lg disabled" id="botonparte" style="margin: 10px" onclick="form_numeros_mostrar()">Números de Parte</button>
    <!-- <button type="button" class="btn btn-cafe btn-xs" id="dbbkup" style="margin: 10px;display: none;" onclick="dbbkup()">Respaldo de Base de Datos</button> -->
  </div>
  <!--====  End of BOTONES PARA ELEGIR ACCIÓN  ====-->

  <!--======================================
  =            NÚMEROS DE PARTE            =
  =======================================-->
  <div align="center" id="form_numeros" style="display: none;">
    <button type="button" class="btn btn-warning btn-lg disabled" id="boton_manual" style="margin: 10px" onclick="location.href='manualevento.php'">Manual</button>
    <button type="button" class="btn btn-info btn-lg disabled" id="boton_auto" style="margin: 10px" onclick="location.href='automatico.php'">Automático</button>
    <button type="button" class="btn btn-relx btn-lg" id="boton_visuales" style="margin: 10px" onclick="location.href='visualesevento.php'">Visuales</button>
  </div>
  <!--====  End of NÚMEROS DE PARTE  ====-->

  <!--======================================
  =            MODO AUTOMÁTICO            =
  =======================================-->
  <div align="center" id="form_auto" style="display: none;">
    <button type="button" class="btn btn-info btn-lg" id="boton_cargar_modularidades" style="margin: 10px" data-toggle="modal" data-target="#modal_cargar_modularidades">Modularidades</button>
    <button type="button" class="btn btn-info btn-lg" id="boton_cargar_modulos" style="margin: 10px" data-toggle="modal" data-target="#modal_cargar_modulos">Módulos</button>
  </div>
  <!--====  End of MODO AUTOMÁTICO  ====-->
  <div class="container alert alert-danger alert-dismissible" id="ilx_fail" style="display: none;">
    <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
    <strong>Las siguientes modularidades no han sido cargadas a la estación debido a que contienen módulos que no existen en la base de datos:</strong> <br/> <span id="ilx_fail_alert"></span>
  </div>

  <!-- Modal -->
  <style>
    .modal-dialog-centered {
      transform: translate(0, -50%);
      top: 40%;
      margin: 0 auto;
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
  </style>

  <div class="modal fade" id="modal_cargar_modularidades" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Cargar Archivo para Modularidades</h5>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close" onclick="clear_archivo()">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label><p id="informacion_cargar">Haga "Click" en el cuadro de búsqueda para abrir el explorador de Windows y seleccionar un archivo, o arrastre desde la carpeta.</p></label>
          <div id="drop-area">
            <div style="text-align: center;padding: 100px;">
              <input type="file" id="cargar_input" onchange="handleFiles(this.files)" multiple>
              <div class="alert alert-success" id="carga_exitosa" style="display: none;">
                Archivo cargado <strong>exitósamente.</strong>
              </div>
              <div class="alert alert-danger" id="carga_fail" style="display: none;">
                Ha ocurrido un <strong>error.</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="cargar" class="btn btn-primary">Cargar Archivo</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="update_modularities()">Finalizar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modal_cargar_modulos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Cargar Archivo para Módulos</h5>
          <button type="button" id="cerrar-modulos" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label><p>Haga "Click" en el cuadro de búsqueda para abrir el explorador de Windows y seleccionar un archivo, o arrastre desde la carpeta.</p></label>
          <div id="drop-area-modulos">
            <div style="text-align: center;padding: 100px;">
              <input type="file" id="cargar_input_modulos" onchange="handleFiles_modulos(this.files)">
              <div class="alert alert-success" id="update_exitoso" style="display: none;">
                Actualización de Módulos realizado con <strong>éxito.</strong>
              </div>
              <div class="alert alert-danger" id="update_fail" style="display: none;">
                Ocurrió un <strong>error</strong> con la Actualización de Módulos.
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="update_modulos" class="btn btn-primary">Actualizar Módulos</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="clear_archivo_modulos()">Cancelar</button>
        </div>
      </div>
    </div>
  </div>

  <!--======================================
  =            Alerta para DB BACKUP       =
  =======================================-->
  <div class="container alert alert-success alert-dismissible" id="db_bkup_success" style="display: none;">
    <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
    <strong>Se realizó con éxito el respaldo a la base de datos.</strong><br/>
    <p><strong>Directorio:</strong> <span id="dir"></span></p>
    <p><strong>Nombre del archivo:</strong> <span id="nombre"></span></p>
  </div>
  <div class="container alert alert-danger alert-dismissible" id="db_bkup_fail" style="display: none;">
    <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
    <strong>Error al intentar hacer el respaldo de la DB. Verifique que la carpeta destino existe en la computadora e inténtelo de nuevo.</strong><br/>
    <p><strong>Directorio (Carpeta Destino):</strong> <span id="dir_fail"></span></p>
  </div>
  <!--==== End of Alerta para DB BACKUP====-->

  <!--======================================
  =            AGREGAR USUARIOS            =
  =======================================-->
  <div class="container" align="center" id="formusuario" style="display: none;">
    <form id="agregarusuario" style="margin-top: 10px">
      <div class="contenedoragregar">
        <label for="usuario"><b>Nombre</b></label>
        <input type="text" placeholder="Ingrese el nombre del usuario" id="usuario" name="usuario" oninput="get_valid_usuario()" required>

        <label for="pass"><b>Password</b></label>
        <input type="password" id="gafet" placeholder="Ingrese el gafet" name="pass" oninput="mayuscula(this);get_valid_gafet()" required>
        <br>
        <label>Activo:</label> <input type="checkbox" id="activo" onchange="comprobaractivo(this)" checked="true">
        <br>
        <label>Seleccione el tipo de usuario:</label><br>
        <select id="tipo">
          <option id="CALIDAD" value="CALIDAD">CALIDAD</option>
          <option id="MANTENIMIENTO" value="MANTENIMIENTO">MANTENIMIENTO</option>
          <option id="OPERADOR" value="OPERADOR">OPERADOR</option>
          <option id="PRODUCCION" value="PRODUCCION">PRODUCCION</option>
          <option id="INGENIERIA" value="INGENIERIA">INGENIERIA</option>
          <option id="AMTC" value="AMTC">AMTC</option>
        </select>
        <br>

          <div>
            <div id="grid-table">
              
            <div id="estaciones">
                    <div id="tbl_stations"></div>
                    <div id="tbl_stations2"></div>
                    <div id="tbl_stations3"></div>
                  <div id="estaciones"></div>
                  </div>
            </div>
          </div>

        <button type="button" class="btn btn-primary btn-lg" onclick="agregarusuario()" style="display: inline-block; margin: 10px;">Agregar Usuario</button>
        <button type="button" class="btn btn-primary btn-lg" onclick="location.href='edit_usuarios.php'" style="display: inline-block; margin: 10px;">Editar Usuarios</button>
      </div>
    </form>
    <div id="alertaadd"></div>
  </div>
  <!--====  End of AGREGAR USUARIOS  ====-->

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
  <script type="text/javascript" src="static/script/usuarios - interior.js"></script>
  <script  type="text/javascript" src="static/script/toastify.js"></script>
  <script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script  type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script  type="text/javascript" src="static/script/mixer.js"></script>
  <script  type="text/javascript" src="static/script/count.js"></script>
  <script  type="text/javascript" src="static/script/theme.js"></script>
  <script  type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script>
    $(function () {
      $('[data-toggle="tooltip"]').css({"cursor":"pointer"}).tooltip()
    })

    $('#login_modal').on('shown.bs.modal', function () {
    $('#psw').focus();
})
  </script>
</body>
</html>
