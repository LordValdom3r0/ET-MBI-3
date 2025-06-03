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
    <link rel="stylesheet" type="text/css" href="static/content/index.css" />
    <link rel="stylesheet" type="text/css" href="static/content/responsive.css" />
    <link rel="stylesheet" type="text/css" href="static/content/jquery.dataTables.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/responsive.dataTables.min.css" />
    <link rel="stylesheet" type="text/css" href="static/fonts/css/all.min.css" />
    <link rel="stylesheet" type="text/css" href="static/content/botones.css" />
    <link rel="stylesheet" type="text/css" href="static/content/dats.css" />
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

  <body class="index" onload="sesion_4();">
    <!-- ========= preloader ========== -->
    <div class="preloader">
      <img src="static/content/loader.gif" alt="">
    </div>
    <!-- ========= End preloader ========== -->
 <!--=======================================
  =                 HEADER                  =
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
            <a href="index.php">Referencias</a>
            <!-- <i class="fa fa-angle-right"></i>
            <a href="manualevento.php">Manual</a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--====  End of BREADCRUMB  ====-->

  <section class="section-dats">
    <div class="container">

        <br>
        <h3>Copie la ruta de archivos de los .dats que desea consultar</h3>
        <br>
        <div class="flex-box justify-between">
          <textarea name="contenedor" id="areatext" cols="60" rows="6"></textarea>
          <div id="consultados" class="consultados"></div>
        </div>
        <br>
        <button id="obtener" class="botonazo btn btn-cyan" onclick="buscarDats()">Buscar</button>

    </div>
  </section>
      <br>
  <section class="section-ubicacion" id="section-ubicacion">
    <div class="container" id="cargadoEn">
    <h3>Aqui se mostraran las estaciones donde esta cargados</h3>
      <br>
       <div class="lista" id="listaDats">

       </div> 
      
    </div>
  </section>

  <section id='sectionDats' class="section-data grid justify-center">
    
    </section>
    
    <img id="loading" style="display: none; margin:0 auto;" src="static/content/loader.gif" alt="Cargando">
  
  
  <!--Esto permite que el header tome un color celeste al hacer scroll en la página-->
  <div class="content" id="counter"></div>
  <!-- Fin de header color celeste al hacer scroll -->
  
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
<script  type="text/javascript" src="static/script/moment.min.js"></script>
<script  type="text/javascript" src="static/script/smoothscroll.js"></script>
<script  type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
<script  type="text/javascript" src="static/script/datatables/dataTables.responsive.min.js"></script>
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
<script  type="text/javascript" src="static/script/dats.js"></script>
</body>
</html>