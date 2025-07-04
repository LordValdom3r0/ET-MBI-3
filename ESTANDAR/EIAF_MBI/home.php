﻿<!DOCTYPE html>
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

      /* Set a style for all buttons */
      button {
        background-color: #4CAFAE;
        color: white;
        padding: 10px 10px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
      }

      button:hover {
        opacity: 0.8;
      }

      /* Extra styles for the cancel button */
      .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
      }
      /* Center the image and position the close button */
      .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
        position: relative;
      }

      img.avatar {
        width: 40%;
        border-radius: 50%;
      }

      .contenedorlogin {
        padding: 16px;
      }

      span.psw {
        float: right;
        padding-top: 16px;
      }

      /* The Modal (background) */
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
      }

      /* Modal Content/Box */
      .modal-content {
        background-color: #fefefe;
        margin: 8% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
        border: 1px solid #888;
        width: 70%; /* Could be more or less, depending on screen size */
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

      /* Add Zoom Animation */
      .animate {
        -webkit-animation: animatezoom 0.6s;
        animation: animatezoom 0.6s
      }

      @-webkit-keyframes animatezoom {
         from {-webkit-transform: scale(0)}
         to {-webkit-transform: scale(1)}
      }

      @keyframes animatezoom {
         from {transform: scale(0)}
         to {transform: scale(1)}
      }

      /* Change styles for span and cancel button on extra small screens */
      @media screen and (max-width: 300px) {
         span.psw {
           display: block;
           float: none;
         }
         .cancelbtn {
            width: 100%;
         }
      }
   </style>


   <div id="id01" class="modal">

      <form class="modal-content animate" name="formusuarios" id="formusuarios">
         <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="static/content/admin.png" alt="Avatar" class="avatar">
         </div>
         <div class="contenedorlogin">
            <div id="alerta" style="display: none;"></div>

            <label for="psw"><b>Ingrese su Código de Acceso </b></label>
            <input type="password" id="psw" placeholder="Escanee o introduzca su Código" name="psw" oninput="mayuscula(this)" onkeypress="return enter(document.formusuarios.log)" required>

            <button type="button" onclick="usuarioform()" name="log">Iniciar Sesión</button>
         </div>

         <div class="contenedorlogin" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
         </div>
      </form>
   </div>
   <!--====  End of LOGIN de Usuarios  ====-->

   <!--================================
   =            BREADCRUMB            =
   =================================-->
   <section class="breadcrumbSec" style="background-image:url('static/content/breadcum/5.jpg')">
      <div class="container">
         <div class="row">
            <div class="col-xs-12 text-center breadsec">
               <h1 class="breadTitle">HOME</h1>
               <div class="breadCumpNav">
               </div>
            </div>
         </div>
      </div>
   </section>
   <!--====  End of BREADCRUMB  ====-->

   <!--===============================
   =            ACERCA DE            =
   ================================-->
   <section id="about_sec" class="commonSection aboutCont">
      <div class="container">
         <div class="row">
            <div class="col-md-6 col-sm-12">
               <div class="aboutcontain">
                  <div class="themeHeadding black">
                     <h2>Nosotros Somos AMTC</h2>
                  </div>
                  <p>
                     FUJIKURA AUTOMOTIVE MEXICO, S. de R.L. de C.V. es líder en la Industria Automotriz, dedicada al Diseño, desarrollo y manufactura de arneses eléctricos y moldeo de partes de plástico para automóviles de pasajeros y vehículos comerciales, comprometida a proporcionar un lugar de trabajo seguro, saludable, limpio y ordenado con práticas ambientales responsables esenciales para la sostenbilidad de nuestro negocio y de la sociedad.
                  </p>
                  <p>
                     Estamos comprometidos en operar y promover todos los aspectos relacionados con el medio ambiente, la salud y la seguridad de nuestro personal, y de nuestras partes interesadas.
                  </p>
                  <a href="acerca" class="themeBtn">Leer Más</a>
               </div>
            </div>
            <div class="col-md-6 col-sm-12">
               <div class="aboutimg">
                  <img src="static/content/about/Fujikuraplanta4.jpg" alt="">
               </div>
            </div>
         </div>
      </div>
   </section>
   <!--====  End of ACERCA DE  ====-->

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
   <script type="text/javascript" src="static/script/login.js"></script>
   <script type="text/javascript" src="static/script/usuarios - interior.js"></script>
   <script type="text/javascript" src="static/script/jquery.js"></script>
   <script  type="text/javascript" src="static/script/bootstrap.min.js"></script>
   <script  type="text/javascript" src="static/script/owl.carousel.js"></script>
   <script  type="text/javascript" src="static/script/jquery.magnific-popup.js"></script>
   <script  type="text/javascript" src="static/script/mixer.js"></script>
   <script  type="text/javascript" src="static/script/count.js"></script>
   <script  type="text/javascript" src="static/script/theme.js"></script>
   <script  type="text/javascript" src="static/script/smoothscroll.js"></script>
</body>
</html>
