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

<body class="index" onload="sesion_2()">
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
    body {font-family: Arial, Helvetica, sans-serif;}

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
            <a href="index.php">Home</a>
            <i class="fa fa-angle-right"></i>
            <a href="monitoreo.php">Consulta a base de datos</a>
            <i class="fa fa-angle-right"></i>
            <a href="maquina.php">Disponibilidad de Máquina</a>
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
    <!--  Creación del SELECT -->
    <div class="container" align="center">
      <div id="filtromaquina" style="display: inline-block;">
        <form id="formulariomaquina" name="formulario">
          <!-- Campo de entrada de fecha -->
          <label>Fecha inicial:</label>
          <input type="date" id="fi" name="fechai" min="2019-01-01" max="2021-12-31" value="2021-02-12">
          <label>Fecha final:</label>
          <input type="date" id="ff" name="fechaf" min="2019-01-01" max="2021-12-31" value="2021-02-14">
        </form>
      </div>
      <input type="button" value="Obtener resultados" onclick="capturarmaquina()" style="margin-top: 10px">
    </div>

    <div id="resultadomaquina" class="container" align="center">
      <canvas id="chart" width="400" height="350"></canvas>
    </div>
    <div id="alertawarning" align="center" style="display: none"></div>
  </section>
  <!--====  End of CONSULTA SECTION  ====-->
  

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
  <script type="text/javascript" src="static/script/usuarios - interior.js"></script>
  <script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
  <script  type="text/javascript" src="static/script/owl.carousel.js"></script>
  <script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
  <script  type="text/javascript" src="static/script/mixer.js"></script>
  <script  type="text/javascript" src="static/script/count.js"></script>
  <script  type="text/javascript" src="static/script/theme.js"></script>
  <script  type="text/javascript" src="static/script/smoothscroll.js"></script>
  <script  type="text/javascript" src="static/script/jquery.dataTables.min.js"></script>
  <script  type="text/javascript" src="static/script/chart/dist/Chart.js"></script>
  <script  type="text/javascript" src="static/script/chart/dist/Chart.bundle.min.js"></script>
  <script  type="text/javascript" src="static/script/maquina.js"></script>
</body>

</html>
