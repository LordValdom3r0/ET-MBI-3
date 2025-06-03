<!DOCTYPE html>
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
    <link rel="stylesheet" type="text/css" href="static/content/automatico.css" />
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
  </head>

  <body class="index" onload="sesion_4();loadEvents()">
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
    <div class="searching">
      <div class="color flex-box">
        <button onclick="searchDAT()"> <i class='fa fa-search'></i> </button><input type="text" name="searchDAT" id="searchDAT" placeholder="Buscar Pedido (ILX O IRX)" onkeypress="acceptEnter()">
      </div>
    </div>

    <div id="selector" style = 'margin-top: 1rem;'>
      <label id="Campo" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 22px; color: #0c0c0cb4;"> FLUJO </label>
      <select id="selector1" name="selector1" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 20px; color: #0c0c0cb4;">
        <option value="x296"> X296 </option>
        <option value="z296"> Z296 </option>
        <option value="x294"> X294 </option>
        <option value="todos" selected> TODOS </option>
      </select> 

      <label id="Campo" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 22px; color: #0c0c0cb4;">CONDUCCIÓN</label>
      <select id="selector2" name="selector2" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 20px; color: #0c0c0cb4;">
       <option value="izquierda"> IZQUIERDA </option>
       <option value="derecha"> DERECHA </option>
       <option value="todos" selected> TODOS </option>
      </select>

        <label id="Campo" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 22px; color: #0c0c0cb4;">STATUS</label>
        <select id="selector3" name="selector3" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 20px; color: #0c0c0cb4;">
        <option value="activos"> ACTIVOS </option>
        <option value="inactivos"> INACTIVOS </option>
        <option value="todos" selected> TODOS </option>
        </select>

        <button class='btn btn-gris' id="cambiar">Seleccionar</button>
    </div>

    <div>
      <br>
      <h3>EVENTOS</h3>
      <hr>
      <h4><a id="busqueda">Seleccione Aqui para buscar Referencias </a></h4>
      <!-- Buscador por block de Nota -->
    <div id="conjunto" class="section flex-box cerrar">
      <span class="column" style="min-width: 50%;">
          <br>
          <div class="grid" style="margin-left: 2rem;">
              <h4 style="margin-bottom: 1rem;">Inserte Aqui por fila las Referencias que desea buscar</h4>
              <nav class="grid auto-flow-column">
                <span>Verde<p class="green-circle">  </p> - Encontrado    </span>
                <span>Rojo <p class="red-circle">    </p> - No Encontrado </span>
                <span>Azul <p class="blue-circle">   </p> - Duplicado     </span>
              </nav>
              <textarea name="contenedor" id="areatext" cols="30" rows="10"></textarea>
              <button id="obtener" class="botonazo" onclick="busqueda_eventos()">Buscar</button>
          </div>

      </span>

      <span class="column" id="resultado" style="min-width: 50%; margin: 3rem auto;">
          <div class="grid" style="margin-left: 2rem;">
          <h4>Aqui se mostrará los valores que fueron consultados</h4>
              <div class="resultados" id="resultados">
                  <span>.</span>
              </div>
          </div>  


      </span>
  </div>
      <!-- href="busqueda.php" -->
      <hr>
      <label>Agregue módulos y modularidades al evento que pertenezcan, o cree uno nuevo.
    </div>
    <div class="container alert alert-danger alert-dismissible" id="ilx_fail" style="display: none;">
      <button type="button" class="close" data-hide="alert" aria-hidden="true">&times;</button>
      <strong>Las siguientes modularidades no han sido cargadas a la estación debido a que contienen módulos que no existen en la base de datos:</strong> <br/>Módulos de Visión--><span style="border-image: initial; border: 2px solid green;"></span><br/>Módulos de Torques--><span style="border-image: initial; border: 2px solid black;"></span><hr> <span id="ilx_fail_alert"></span>
    </div>

    <div class="container" id="container_principal">
      <!-- Apartado para crear un nuevo evento -->
      <div class="flex-box team_sect">
          <div class="evento-info text-center">
              <h4 class="title" id="new_event">Nuevo Evento</h4>
              <p></p>
          </div>
          <div class="eventos">
            <figure>
              <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_new_event" style="display: none;"></div>
              <div><button type="button" class="btn btn-primary" id="mostrarError" data-toggle="modal" data-target="#modal_modules" style="display: none;"></div>
              <!-- <img src="static/content/newfase.png" onmouseover="this.style.cursor='pointer'" alt="Agregar Evento" id="new_event_img"/> -->
              <i class="fas fa-plus-circle" id="new_event_img" onmouseover="this.style.cursor='pointer'"></i>
            </figure>
        </div>
      </div>
      <!-- Lista de eventos ya existentes en la Base de Datos -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12 team_sect">
        <div class="eventos">
            <figure>
                <img src="static/content/fase.jpg" alt="team_img" />
                <p class="evento-botones">
                    <button data-toggle="modal" data-target="#modal_cargar_info" data-tooltip="tooltip" data-placement="top" title="Cargar Información"><i class="fas fa-file-upload" aria-hidden="true"></i></button>
                    <button data-tooltip="tooltip" data-placement="top" title="Ver Información"><i class="fas fa-list-alt" aria-hidden="true"></i></button>
                    <button data-tooltip="tooltip" data-placement="top" title="Historial de Matrices"><i class="fas fa-history" aria-hidden="true"></i></button>
                    <button data-tooltip="tooltip" data-placement="top" title="Eliminar evento"><i class="fas fa-trash" aria-hidden="true"></i></button>
                </p>
            </figure>
        </div>
        <div class="evento-info text-center">
            <h4 class="title">BL3-X294-IZQUIERDA</h4>
            <p>Validación Matriz de Modularidades fusibles Interior X294 Izq. Fase BL3 17-08-2021</p>
        </div>
      </div> -->
      <div id="containerEventos" class="containerEventos"></div>
    </div>
  </div>
  <div id="alertasesion" style="display: none;"></div>
  <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

  <div class="modal fade" id="modal_new_event" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalCenterTitle"><span id="header">Nuevo Evento</span></h3>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="add_event" class="text-center" style="margin: 10px 50px" onsubmit="return false">
            <div>
              <label><b>Nombre:</b></label>
              <input type="text" placeholder="Ingrese el nombre del evento. Ejemplo: (BL3)" id="new_event_name" required>
              <br>
              <label>Conducción:</label>
              <select name="conduccion" id="conduccion">
                <option value="izquierda">Izquierda</option>
                <option value="derecha">Derecha</option>
              </select>
              <br>
              <label>Número:</label>
              <select name="numero" id="numero">
                <option value="X294">X294</option>
                <option value="X296">X296</option>
                <option value="Z296">Z296</option>
              </select>
              <br>
              <label>Activo:</label>
              <br>
              <input type="checkbox" id="activo" onchange="comprobaractivo(this)" checked>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" data-dismiss="modal" class="btn-danger">Cancelar</button>
          <button type="button" class="btn btn-info" data-dismiss="modal" onclick="crearEvento()">Crear</button>
        </div>
      </div>
    </div>
  </div>

<!--====================================================
  =     MODAL PARA VER LOS ERRORES DE MODULO     =
  =====================================================-->
  <div class="modal fade" id="modal_modules" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalCenterTitle"><span id="header">Error de Carga de Módulos</span></h3>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div style="margin: 1rem;">
          <strong>Las siguientes modularidades no han sido cargadas a la estación debido a que contienen módulos que no
            existen en la base de datos:</strong> <br />Módulos de Visión--><span
            style="border-image: initial; border: 2px solid green;"></span><br />Módulos de Torques--><span
            style="border-image: initial; border: 2px solid black;"></span>
          </div>
      <hr> <span id="ilx_fail_alert"></span>
        <div id="modal_error" class="modal-body">
          
        </div>
        <div class="modal-footer">
    
        </div>
      </div>
    </div>
  </div>


  <!--====================================================
  =     MODAL PARA CARGAR INFORMACIÓN (DAT Y EXCEL)     =
  =====================================================-->
  <div class="modal fade" id="modal_cargar_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="cargar_info_eventName"></h3>
          <button type="button" id="cerrar-carga" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- SECCIÓN PARA DETERMINANTES -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#cargar_determinantes">1.-CARGAR MÓDULOS DETERMINANTES <hr></a>
            </h4>
          </div>
          <!-- OPCION DEDICADA PARA FAMX2 -->
          <div id="cargar_definiciones" class="panel-collapse collapse">
            <div class="panel-body">
              <button type="button" class="btn btn-primary btn-lg" id="boton_definiciones" style="margin: 10px" onclick="location.href='determinantes.html'">Módulos Determinantes</button>
            </div>
          </div>
          <!-- /OPCION DEDICADA PARA FAMX2 -->
          <div id="cargar_determinantes" class="panel-collapse collapse">
            <div class="panel-body">
              <div id="section_mbm">
                <!-- SECCIÓN PARA VER Modulos Determinantes -->
                <label>Selecciona el Botón de Abajo para declarar un Módulo Determinante</label>
                <button type="button" class="btn btn-primary btn-lg" id="boton_definiciones_modal" style="margin: 10px"
                onclick="location.href='definiciones.php'">Módulos Determinantes</button>
              </div>
              <div id="section_mbi">
              <label><p>Haga "Click" en el cuadro de búsqueda para abrir el explorador de Windows y seleccionar un archivo, o arrastre desde la carpeta.</p></label>
              <div id="drop-area-determinantes">
                <div style="text-align: center;padding: 100px;">
                  <input type="file" id="cargar_input_determinantes" onchange="handleFiles_determinantes(this.files)">
                  <div class="loadingFile" id="loadingFile_d" style = "display: none;"><img src="static/content/loader.gif" alt="loading"></div>
                  <div class="alert alert-success" id="carga_completa" style="display: none;">
                    Actualización de Módulos realizado con <strong>éxito.</strong>
                  </div>
                  <div class="alert alert-danger" id="fallido" style="display: none;">
                    Ocurrió un <strong>error</strong> con la Actualización de Módulos.
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-secondary" onclick="clear_archivo_determinantes()">Cancelar</button>
                  <button type="button" id="update_determinantes" class="btn btn-primary">Actualizar Módulos</button>
                </div>
              </div>
              </div>
              <br>
            </div>
          </div>
          <!-- SECCIÓN PARA EXCEL -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#cargar_excel">2.-CARGAR MÓDULOS (EXCEL) <hr></a>
            </h4>
          </div>
          <div id="cargar_excel" class="panel-collapse collapse">
            <div class="panel-body">
              <label><p>Haga "Click" en el cuadro de búsqueda para abrir el explorador de Windows y seleccionar un archivo, o arrastre desde la carpeta.</p></label>
              <div id="drop-area-modulos">
                <div style="text-align: center;padding: 100px;">
                  <input type="file" id="cargar_input_modulos" onchange="handleFiles_modulos(this.files)">
                  <div class="loadingFile" id="loadingFile_m" style = "display: none;"><img src="static/content/loader.gif" alt="loading"></div>
                  <div class="alert alert-success" id="update_exitoso" style="display: none;">
                    Actualización de Módulos realizado con <strong>éxito.</strong>
                  </div>
                  <div class="alert alert-danger" id="update_fail" style="display: none;">
                    Ocurrió un <strong>error</strong> con la Actualización de Módulos.
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-secondary" onclick="clear_archivo_modulos()">Cancelar</button>
                  <button type="button" id="update_modulos" class="btn btn-primary">Actualizar Módulos</button>
                </div>
              </div>
              <br>
              
            </div>
          </div>
          <!-- SECCIÓN PARA DAT -->
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#cargar_dat">3.-CARGAR MODULARIDADES (.DAT) <hr></a>
            </h4>
          </div>
          <div id="cargar_dat" class="panel-collapse collapse">
            <div class="panel-body">
              <label><p id="informacion_cargar">Haga "Click" en el cuadro de búsqueda para abrir el explorador de Windows y seleccionar un archivo, o arrastre desde la carpeta.</p></label>
              <div id="drop-area">
                <div style="text-align: center;padding: 100px;">
                  <input type="file" id="cargar_input" onchange="handleFiles(this.files)" multiple>
                  <div class="loadingFile" id="loadingFile" style = "display: none;"><img src="static/content/loader.gif" alt="loading"></div>
                  <div class="alert alert-success" id="carga_exitosa" style="display: none;">
                    Archivo cargado <strong>exitósamente.</strong>
                  </div>
                  <div class="alert alert-danger" id="carga_fail" style="display: none;">
                    Ha ocurrido un <strong>error.</strong>
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" id="cargar" class="btn btn-primary">Cargar Archivo</button>
                  <button type="button" class="btn btn-success" data-dismiss="modal" onclick="update_modularities()">Finalizar</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  <!--====  End of MODAL PARA CARGAR INFORMACIÓN (DAT Y EXCEL) ====-->

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
          <button type="button" class="btn btn-info btn-lg" id="ver_modularidades" style="margin: 10px" onclick="location.href='edit.php'">Modularidades</button>
          <!-- SECCIÓN PARA VER MÓDULOS -->
          <button type="button" class="btn btn-info btn-lg" id="ver_modulos" style="margin: 10px" onclick="location.href='edit_modulos.php'">Módulos</button>
          <!-- SECCIÓN PARA VER VISUALES -->
          <button type="button" class="btn btn-relx btn-lg" id="boton_visuales" style="margin: 10px" onclick="location.href='visuales.php'">Visuales</button>
          <!-- SECCIÓN PARA VER Modulos Determinantes -->
          <button type="button" class="btn btn-primary btn-lg" id="boton_definiciones" style="margin: 10px" onclick="location.href='definiciones.php'">Módulos Determinantes</button>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  <!--====  End of MODAL PARA VER INFORMACIÓN (DAT Y EXCEL) ====-->



  <!--====================================================
  =        MODAL PARA VER HISTORIAL DE EVENTO            =
  =====================================================-->
  <div class="modal fade" id="modal_historial_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="historial_info_eventName"></h3>
          <button type="button" id="cerrar" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" style="float: right;">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="tabla"></div>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>
  <!--====  End of MODAL PARA VER HISTORIAL DE EVENTO ====-->

<!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
<div class="content" id="counter"></div>
<!-- Fin de header color celeste al hacer scroll -->

 <!--=======================================
  =                   FOOTER                 =
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
<script  type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
<script  type="text/javascript" src="static/script/automatico.js"></script>
<script  type="text/javascript" src="static/script/busqueda.js"></script>
</body>
</html>