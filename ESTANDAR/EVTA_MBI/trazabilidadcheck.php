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
  <link rel="stylesheet" type="text/css" href="static/content/trazabilidad.css" />
  <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
  <link rel="stylesheet" type="text/css" href="static/content/jquery.dataTables.min.css" />
  <link rel="stylesheet" type="text/css" href="static/content/responsive.dataTables.min.css" />
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

<body class="index" onload="sesion_4()">
  <!-- ========= preloader ========== -->
  <div class="preloader">
    <img src="static/content/loader.gif" alt="">
  </div>
  <!-- ========= End preloader ========== -->
  <!--=======================================
  =                 HEADER            =
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
            <a href="trazabilidadcheck.php">Trazabilidad Check</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->


  <!--==============================================
  =          TABLA CON REGISTROS DE ORDENES         =
  ===============================================-->
  <div id="registros" class="container" align="left" style="display: block;">
    <div><button type="button" class="btn btn-primary" id="mostrar" data-toggle="modal" data-target="#modal_info"
        style="display: none;"></div>
    <div><button type="button" class="btn btn-primary" id="mostrar_qr" data-toggle="modal" data-target="#modal_qr"
        style="display: none;"></div>
    <div>
      <br>
      <center>
        <h3>Trazabilidad</h3>
      </center>
      <hr>
      <div align="center">
        <div class="botones">
          <!--
            <button type="button" class="btn btn-info btn-lg" id="lista_all" style="margin: 10px" onclick="famx2_registros_all()">Registros de FAMX2 (Todos)</button>
            <button type="button" class="btn btn-info btn-lg" id="lista_interior" style="margin: 10px" onclick="famx2_registros_interior()">Registros de FAMX2 (Interior)</button>
            <button type="button" class="btn btn-info btn-lg" id="lista_interior" style="margin: 10px" onclick="famx2_registros_motor()">Registros de FAMX2 (Motor)</button>
            <button type="button" class="btn btn-info btn-lg" id="lista_interior" style="margin: 10px" onclick="famx2_registros_cockpit()">Registros de FAMX2 (Cockpit)</button>
           -->
          <button type="button" class="btn btn-lg" id="lista_ubicación"
            style="margin: 10px; background-color: rgb(20, 40, 220); color: rgb(255, 255, 255);"
            onclick="famx2_buscar_gamaens()">Gamaens</button>
          <button type="button" class="btn btn-lg" id="lista_ubicación"
            style="margin: 10px; background-color: rgb(20, 40, 220); color: rgb(255, 255, 255);"
            onclick="famx2_cambio_ubicación()">Actualizar Registros</button>
          <button type="button" class="btn btn-lg" id="lista_valores"
            style="margin: 10px; background-color: rgb(7, 99, 53); color: rgb(255, 255, 255);"
            onclick="famx2_registros_valores()">Valores</button>
          <button type="button" class="btn btn-lg" id="lista_ubicación"
            style="margin: 10px; background-color: rgb(20, 40, 220); color: rgb(255, 255, 255);"
            onclick="famx2_tramada()">Actualizar Registros de TRAMADA</button>
          <button type="button" class="btn btn-lg" id="lista_historial"
            style="margin: 10px; background-color: rgb(93, 99, 11); color: rgb(255, 255, 255);"
            onclick="historial_actualizaciones()">Historial de Actualizaciones</button>
        </div>

        <div id="filtro_gamaens" style="display: none;">
          <select id="tipo_busqueda_gamaens" name="tipo_busqueda_gamaens" style="display: none;" onchange="cleardiv4()">
            <option value="HM2">HM</option>
            <option value="REFERENCIAS">REFERENCIA</option>
          </select>
          <div id="hm2" style="display: none;">
            <form id="hmform">
              <label>Ingrese el nombre del HM</label>
              <input type="text" id="hm2input" oninput="mayuscula(this);" placeholder="Nombre HM">
            </form>
          </div>
          <div id="referencia" style="display: none;">
            <form id="referenciaform">
              <label>Ingrese el nombre de la REFERENCIA</label>
              <input type="text" id="referenciainput" oninput="mayuscula(this);" placeholder="Nombre REFERENCIA">
            </form>
          </div>
        </div>
        <form id="HM" style="display: none;">
          <label id='lbl_ingreso'>Ingrese el nombre del HM</label>
          <input type="text" id="hminput" oninput="mayuscula(this);" placeholder="Nombre HM">
        </form>
        <div id="buscar" style="display: none;">
          <form id="buscando">
            <input id="busca" style="background-color: darkblue ; color: #ccc;" type="button" class="btn" value="Buscar"
              onclick="hmbuscar()" style="margin-top: 10px">
          </form>
        </div>
        <div id="buscar2" style="display: none;">
          <form id="buscando">
            <input id="busca2" style="background-color: darkblue ; color: #ccc;" type="button" class="btn"
              value="buscar" onclick="famx2_gamaens()" style="margin-top: 10px">
          </form>
        </div>
        <div id="buscar3" style="display: none;">
          <form id="buscando">
            <input id="busca3" style="background-color: darkblue ; color: #ccc;" type="button" class="btn"
              value="Buscar-tr" onclick="trbuscar()" style="margin-top: 10px">
          </form>
        </div>
      </div>
      <br>
      <nav>
        <!-- <button id="crearElemento">Agregar elemento</button>
        <button id="crear_lista">Crear Lista de Personas</button> -->
      </nav>
    </div>

    <div id="contenedor"></div>
    <div class="tabla" id="tabla"></div>
    <!-- seccion para editar valores -->
    <div class="editor">
      <div id="selectdiv" style="display: none;">
        <form id="select">
          <label id="Campo"
            style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 20px; color: #0c0c0cb4;">CAMPO:</label>
          <select id="selector" name="selector"
            style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 16px; color: #0c0c0cb4;"
            onchange="cleardiv2()">

            <option value="UBICACION" style="background-color: rgba(0, 89, 255, 0.63);" selected>UBICACIÓN</option>
            <option value="REFERENCIA" style="background-color: rgba(0, 89, 255, 0.63);">REFERENCIA</option>

            <option value="MATPUR" style="background-color: rgba(93, 71, 255, 0.459);">MATPUR</option>
            <option value="ENTPUR" style="background-color: rgba(93, 71, 255, 0.459);">ENTPUR</option>
            <option value="SALPUR" style="background-color: rgba(93, 71, 255, 0.459);">SALPUR</option>

            <option value="NAMEPREENSAMBLE" style="background-color: rgba(46, 138, 34, 0.541);">NAMEPREENSAMBLE</option>
            <option value="ENTPREENSAMBLE" style="background-color: rgba(46, 138, 34, 0.541);">ENTPREENSAMBLE</option>
            <option value="SALPREENSAMBLE" style="background-color: rgba(46, 138, 34, 0.541);">SALPREENSAMBLE</option>

            <option value="NAMECONVEYOR" style=" background-color: rgba(88, 255, 233, 0.685);">NAMECONVEYOR</option>
            <option value="NO_TABLERO" style=" background-color: rgba(88, 255, 233, 0.685);">NO TABLERO</option>
            <option value="ENTCONVEYOR" style=" background-color: rgba(88, 255, 233, 0.685);">ENTCONVEYOR</option>
            <option value="SALCONVEYOR" style=" background-color: rgba(88, 255, 233, 0.685);">SALCONVEYOR</option>

            <option value="NAMECLIPS" style="background-color: rgba(102, 255, 102, 0.692);">NAMECLIPS</option>
            <option value="ENTCLIPS" style="background-color: rgba(102, 255, 102, 0.692);">ENTCLIPS</option>
            <option value="SALCLIPS" style="background-color: rgba(102, 255, 102, 0.692);">SALCLIPS</option>

            <option value="NAMEFET" style="background-color: rgba(102, 255, 102, 0.692);">NAMEFET</option>
            <option value="ENTFET" style="background-color: rgba(102, 255, 102, 0.692);">ENTFET</option>
            <option value="SALFET" style="background-color: rgba(102, 255, 102, 0.692);">SALFET</option>

            <option value="NAMETORQUE" style="background-color: rgba(61, 61, 61, 0.541);">NAMETORQUE</option>
            <option value="ENTTORQUE" style="background-color: rgba(61, 61, 61, 0.541);">ENTTORQUE</option>
            <option value="SALTORQUE" style="background-color: rgba(61, 61, 61, 0.541);">SALTORQUE</option>

            <option value="NAMEINSERCION" style="background-color: rgba(61, 61, 61, 0.541);">NAMEINSERCION</option>
            <option value="ENTINSERCION" style="background-color: rgba(61, 61, 61, 0.541);">ENTINSERCION</option>
            <option value="SALINSERCION" style="background-color: rgba(61, 61, 61, 0.541);">SALINSERCION</option>

            <option value="NAMEVISION" style="background-color: rgba(61, 61, 61, 0.541);">NAMEVISION</option>
            <option value="ENTVISION" style="background-color: rgba(61, 61, 61, 0.541);">ENTVISION</option>
            <option value="SALVISION" style="background-color: rgba(61, 61, 61, 0.541);">SALVISION</option>

            <option value="NAMEINDUCCION" style="background-color: rgba(173, 76, 152, 0.541);">NAMEINDUCCION</option>
            <option value="ENTINDUCCION" style="background-color: rgba(173, 76, 152, 0.541);">ENTINDUCCION</option>
            <option value="SALINDUCCION" style="background-color: rgba(173, 76, 152, 0.541);">SALINDUCCION</option>

            <option value="NAME_FINAL_AUDIT" style="background-color: rgba(121, 121, 121, 0.541);">NAME FINAL_AUDIT
            </option>
            <option value="FINAL_AUDIT" style="background-color: rgba(121, 121, 121, 0.541);">FINAL AUDIT</option>
            <option value="USUARIO_FINAL_AUDIT" style="background-color: rgba(121, 121, 121, 0.541);">USUARIO
              FINAL_AUDIT</option>

            <option value="SERVIDO" style="background-color: rgba(252, 255, 66, 0.685);">SERVIDO</option>
            <option value="STATUS" style="background-color: rgba(252, 255, 66, 0.685);">STATUS</option>
            <option value="ASIGNADO" style="background-color: rgba(252, 255, 66, 0.685);">ASIGNADO</option>
            <option value="ENT_APT" style="background-color: rgba(252, 255, 66, 0.685);">ENT APT</option>
            <option value="PEDIDO" style="background-color: rgba(252, 255, 66, 0.685);">PEDIDO</option>
            <option value="PLANIFICACION" style="background-color: rgba(252, 255, 66, 0.685);">PLANIFICACION</option>
            <option value="PLANIFICADO" style="background-color: rgba(252, 255, 66, 0.685);">PLANIFICADO</option>

            <option value="INSPECTORREPARAR" style=" background-color: rgba(255, 71, 71, 0.541);">INSPECTORREPARAR
            </option>
            <option value="ENTREPARAR" style=" background-color: rgba(255, 71, 71, 0.541);">ENTREPARAR</option>
            <option value="SALREPARAR" style=" background-color: rgba(255, 71, 71, 0.541);">SALREPARAR</option>

          </select>
      </div>

      <!-- Campo de entrada de fecha -->
      <div id="filtro" style="display: none;">
        <select id="tipo_busqueda" name="tipo_busqueda" style="visibility:hidden">
        </select>
        <div id="fecha" style="display: none;">
          <form id="fechaform">
            <label
              style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 20px; color: #0c0c0cb4;">FECHA:</label>
            <input
              style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 16px; color: #0c0c0cb4;"
              type="date" id="fechai" name="fechai" min="2019-01-01" value="2025-06-15">
            <input type="time" id="timer" step="1">
          </form>
        </div>
        <div id="fecha" style="display: none;">
          <form id="fechaform">
            <label>Fecha:</label>
            <input type="date" id="fechahoy" name="fechahoy" value="">
            <input type="time" id="timer" step="1">
          </form>
        </div>

        <div id="valor" style="display: none;">
          <form id="valorform">
            <label>Introduzca el nuevo valor</label>
            <input type="text" id="valorinput" placeholder="Valor Nuevo">
          </form>
        </div>
        <div id="valorubicacion" style="display: none;">
          <form id="valorform">
            <label>Introduzca el nuevo valor</label>
            <select id="valorselector" name="valorselector" onchange="cleardiv2()">

              <option value="ENTRADA_A_PUR" style="background-color: rgba(93, 71, 255, 0.459);" selected>ENTRADA_A_PUR
              </option>
              <option value="SALIDA_DEL_PUR" style="background-color: rgba(93, 71, 255, 0.459);">SALIDA_DEL_PUR</option>

              <option value="ENTRADA_A_PREENSAMBLE" style="background-color: rgba(46, 138, 34, 0.541);">
                ENTRADA_A_PREENSAMBLE</option>
              <option value="SALIDA_DEL_PREENSAMBLE" style="background-color: rgba(46, 138, 34, 0.541);">
                SALIDA_DEL_PREENSAMBLE</option>

              <option value="ENTRADA_AL_CONVEYOR" style=" background-color: rgba(88, 255, 233, 0.685);">
                ENTRADA_AL_CONVEYOR</option>
              <option value="SALIDA_DEL_CONVEYOR" style=" background-color: rgba(88, 255, 233, 0.685);">
                SALIDA_DEL_CONVEYOR</option>

              <option value="ENTRADA_A_CLIPS" style="background-color: rgba(102, 255, 102, 0.692);">ENTRADA_A_CLIPS
              </option>
              <option value="SALIDA_DE_CLIPS" style="background-color: rgba(102, 255, 102, 0.692);">SALIDA_DE_CLIPS
              </option>

              <option value="ENTRADA_A_FET" style="background-color: rgba(102, 255, 102, 0.692);">ENTRADA_A_FET</option>
              <option value="SALIDA_DE_FET" style="background-color: rgba(102, 255, 102, 0.692);">SALIDA_DE_FET</option>

              <option value="ENTRADA_A_TORQUE" style="background-color: rgba(61, 61, 61, 0.541);">ENTRADA_A_TORQUE
              </option>
              <option value="SALIDA_DE_TORQUE" style="background-color: rgba(61, 61, 61, 0.541);">SALIDA_DE_TORQUE
              </option>

              <option value="ENTRADA_A_INSERCION" style="background-color: rgba(61, 61, 61, 0.541);">ENTRADA_A_INSERCION
              </option>
              <option value="SALIDA_DE_INSERCION" style="background-color: rgba(61, 61, 61, 0.541);">SALIDA_DE_INSERCION
              </option>

              <option value="ENTRADA_A_VISION" style="background-color: rgba(61, 61, 61, 0.541);">ENTRADA_A_VISION
              </option>
              <option value="SALIDA_DE_VISION" style="background-color: rgba(61, 61, 61, 0.541);">SALIDA_DE_VISION
              </option>

              <option value="ENTRADA_A_INDUCCION" style="background-color: rgba(173, 76, 152, 0.541);">
                ENTRADA_A_INDUCCION</option>
              <option value="SALIDA_DE_INDUCCION" style="background-color: rgba(173, 76, 152, 0.541);">
                SALIDA_DE_INDUCCION</option>

              <option value="ENTRADA_A_REPARAR" style=" background-color: rgba(255, 71, 71, 0.541);">ENTRADA_A_REPARAR
              </option>
              <option value="SALIDA_DE_REPARAR" style=" background-color: rgba(255, 71, 71, 0.541);">SALIDA_DE_REPARAR
              </option>

            </select>
          </form>
        </div>
      </div>
      <div id="actualiza" style="display: none;">
        <form id="actualizar"
          style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, sans-serif;">
          <input id="actualizacion" style="background-color: rgb(0, 0, 139); color: #ffffff; font-size: 18px;"
            type="button" class="btn" value="Actualizar" onclick="actualizar()" style="margin-top: 10px">
        </form>
      </div>
      <div id="actualizanull" style="display: none;">
        <form id="actualizarnull"
          style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, sans-serif;">
          <input id="actualizacion" style="background-color: rgba(213, 180, 53, 0.86); color: #ffffff; font-size: 18px;"
            type="button" class="btn" value="Null" onclick="actualizarnull()" style="margin-top: 10px">
        </form>
      </div>
    </div>
    <!------------  -------------->

    <div id="alertasesion" style="display: none;"></div>
    <div class="salto-linea"> </div>
    <div id="contactos"> </div>

    <!--====  End of TABLA CON REGISTROS DE ORDENES  ====-->

    <div class="modal fade" id="modal_info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
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
            <div id="torque" style="display: none;" onchange="cleardiv5()">
              <label>Tipo de torque</label>
              <select name="tipo_de_torque" id="tipo_de_torque">
                <option value="PDCP">PDC-P</option>
                <option value="PDCD">PDC-D</option>
                <option value="BATTERY">BATTERY</option>
                <option value="MFBP1">MFB-P1</option>
                <option value="MFBS">MFB-S</option>
                <option value="MFBP2">MFB-P2</option>
                <option value="PDCR">PDC-R</option>
              </select>
              <div id="torqueacambiar">
                <label>Torque a Cambiar </label>
                <select name="PDCPselect" id="PDCPselect" style="display: none;">
                  <option value="E1">E1</option>
                </select>
                <select name="PDCDselect" id="PDCDselect" style="display: none;">
                  <option value="PDC-P">E1</option>
                </select>
                <select name="BATTERYselect" id="BATTERYselect" style="display: none;">
                  <option value="BT">BT</option>
                </select>
                <select name="MFBP1select" id="MFBP1select" style="display: none;">
                  <option value="A46">A46</option>
                  <option value="A43">A43</option>
                  <option value="A41">A41</option>
                  <option value="A42">A42</option>
                </select>
                <select name="MFBSselect" id="MFBSselect" style="display: none;">
                  <option value="A51">A51</option>
                  <option value="A52">A52</option>
                  <option value="A53">A53</option>
                  <option value="A54">A54</option>
                </select>
                <select name="MFBP2select" id="MFBP2select" style="display: none;">
                  <option value="A20">A20</option>
                  <option value="A21">A21</option>
                  <option value="A23">A23</option>
                  <option value="A24">A24</option>
                  <option value="A25">A25</option>
                  <option value="A27">A27</option>
                  <option value="A30">A24</option>
                </select>
                <select name="PDCRselect" id="PDCRselect" style="display: none;">
                  <option value="E1">E1</option>
                </select>
              </div>
              <input type="text" id="torqueinput" placeholder="Insertar Nuevo Valor del torque" style="display: none;">
              <input type="button" class="btn" style="color: rgb(255, 255, 255); background-color: #000;"
                value="actualizar" id="nuevotorque" onclick="">
            </div>
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
            <h5 class="modal-title" id="exampleModalCenterTitle">Información de <span id="header"></span></h5>
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
                  <input type="text" id="pedidoeditar" name="pedidoeditar"
                    oninput="mayuscula(this);get_valid_pedido_1()" onkeypress="return get_valid_pedido(event);"
                    style="width: 30%;margin-right: 20px">
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
                <img id="pdcr_image_t" src="static/content/cajas/interior/pdcr2/pdcr2.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> PDC-R</h4>
                <input type="text" class="qr" name="qrPDC-R" id="PDC-R" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-R" onchange="comprobarpdcr(this)">
                <br>
                <img id="pdcr_mid_image_t" src="static/content/cajas/interior/pdcr_1/pdcr_1.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> PDC-RMID</h4>
                <input type="text" class="qr" name="qrPDC-RMID" id="PDC-RMID" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-RMID" onchange="comprobarpdcrmid(this)">
                <br>
                <img id="pdcd_image_t" src="static/content/cajas/interior/pdcd2/pdcd2.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> PDC-D</h4>
                <input type="text" class="qr" name="qrPDC-D" id="PDC-D" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckPDC-D" onchange="comprobarpdcd(this)">
                <br>
                <img id="mfbp1_image_t" src="static/content/cajas/interior/mfbp1/mfbp1.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> MFB-P1 </h4>
                <input type="text" class="qr" name="qrMFB-P1" id="MFB-P1" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P1" onchange="comprobarmfbp1(this)">
                <br>
                <img id="mfbs_image_t" src="static/content/cajas/interior/mfbs/mfbs.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> MFB-S </h4>
                <input type="text" class="qr" name="qrMFB-S" id="MFB-S" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-S" onchange="comprobarmfbs(this)">
                <br><br>
                <img id="mfbp2_image_t" src="static/content/cajas/interior/mfbp2/mfbp2.jpg" alt="" width="120">
                <h4 style="display: inline-block; margin-right: 20px"> MFB-P2 </h4>
                <input type="text" class="qr" name="qrMFB-P2" id="MFB-P2" placeholder="Escanee el código QR"
                  oninput="mayuscula(this)" style="width: 30%; margin: 20px; display: none;">
                Checkbox: <input type="checkbox" class="myCheck" id="myCheckMFB-P2" onchange="comprobarmfbp2(this)">
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
  </div>
  <!--====  End of POP-UP PARA EDITAR LOS PEDIDOS  ====-->




  <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
  <div class="content" id="counter"></div>
  <!-- Fin de header color celeste al hacer scroll -->

  <!--============================================
  =            FOOTER O PIE DE PÁGINA            =
  =============================================-->
  <?php include('templates/footer.php')?>
  <!--====  End of FOOTER O PIE DE PÁGINA  ====-->

  <a href="#" id="backToTop" class="none"><i class="fa fa-angle-up"></i></a>
  <!-- Include All JS -->
  <script type="text/javascript" src="static/script/jquery.js"></script>
  <script type="text/javascript" src="static/script/login.js"></script>
  <script type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script type="text/javascript" src="static/script/mixer.js"></script>
  <script type="text/javascript" src="static/script/count.js"></script>
  <script type="text/javascript" src="static/script/theme.js"></script>
  <script type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
  <script type="text/javascript" src="static/script/trazabilidadcheck.js"></script>
  <script type="text/javascript" src="static/script/moment.min.js"></script>
</body>

</html>