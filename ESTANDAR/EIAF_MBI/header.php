  <!--============================
  =            HEADER            =
  =============================-->
  <link rel="stylesheet" type="text/css" href="static/content/botones.css" />

  <header class="header">
    <div class="menu-spacer"></div>

      <div class="row">
        <div class="col-lg-3 col-sm-3">
          <div class="logo logotipo">
           <a href="index.php">
             <img src="static/content/Fujikura.svg.png" alt="" width="170">
           </a>
         </div>
        </div>
        <div class="col-lg-9 col-sm-9">
          <nav class="mainnav">
            <div class="logoMobile hidden-lg hidden-sm hidden-md">
              <a href="index.php">
                <img alt="" src="static/content/Fujikura.svg.png">
              </a>
            </div>
            <div class="mobileMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul>
              <!-- <li><div id="qrcode" style="width:100px; height:100px; margin-top:15px;"></div></li> -->
              <li><div id='user' class= "usuario"></div></li>
              <?php 
              // Read the JSON file  
              $json = file_get_contents('../direcciones.json'); 

              // Decode the JSON file 
              $json_data = json_decode($json,true);

              // echo '<pre>'; 
              // var_dump($json_data["ESTACIONES"][4]); 
              // echo '</pre>';

              $conteo =  count($json_data["ESTACIONES"]);
              $direcciones =  $json_data["ESTACIONES"];
              

              // var_dump($conteo);
              // var_dump($direcciones);
              
            ?>
            

              <select name="IPS" id="selectIP" style="margin-right: 1rem;">
                <option value='{"ESTACION":"LOCAL",           "DIRECCION":"127.0.0.1:5000" }' selected>LOCAL</option>
                <?php 
                for ($i=0; $i < $conteo ; $i++) { 
                  echo  
                  '<option value='."{".'"ESTACION"'.':'.'"'.$direcciones[$i]["ESTACION"].'",'.'"DIRECCION"'.':'.'"'.$direcciones[$i]["DIRECCION"].'",'.'"CARPETA"'.':'. '"'.$direcciones[$i]["CARPETA"].'"'.'}'.'>'.str_replace("_"," ",$direcciones[$i]["ESTACION"]).'</option>';
                }
               
                ?>
              </select>
              <!-- <li><a href="home.php">Home</a></li> -->
              <!-- <li><a id="comentariosHeader" href="comentarios.php" class="cool-link" style="display: none;">Comentarios</a></li> -->
              <li><a href="monitoreo.php" class="cool-link">Historial</a></li>
              <!-- <li><a href="maquina.php">Disponibilidad de Máquina</a></li> -->
              <!-- <li><a href="historial - interior.php" class="cool-link">Historial</a></li> -->
              <li><a href="index.php" class="cool-link">Gestión de Datos</a></li>
              <li><a href="dats.php" class="cool-link">Referencias</a></li>
              <li><button id="iniciarsesion" data-toggle="modal" data-target="#login_modal" style="width:auto;" class="login">Iniciar Sesión</button></li>
              <li><button id="cerrarsesion" onclick="cerrar()" class="login" style="display: none;">Cerrar Sesión</button></li>
            </ul>
          </nav>

      </div>
    </div>
  </header>

  <!--====  End of HEADER  ====-->
    <!-- ======MODAL PARA SELECCIONAR ESTACION PARA LOCALHOST ========-->
   <!-- The Modal -->
<div class="modal fade" id="modalLocalhost">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Elija la estacion que se conectara localmente</h4>
        <button type="button" class="close" data-dismiss="modal">×</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body grid autoFlow-columns align-center justify-evenly">
        
        <a class="btn btn-verde" onclick= 'asignacion({"ESTACION":"EVA_MBI", "CARPETA":"EVTA_MBI"})' >EVTA MBI</a>
        <a class="btn btn-verde" onclick= 'asignacion({"ESTACION":"EIAF_MBI","CARPETA":"EIAF_MBI"})' >EIAF MBI</a>
        <a class="btn btn-verde" onclick= 'asignacion({"ESTACION":"EVTA_MBM","CARPETA":"EVTA_MBI"})' >EVTA MBM</a>
        <a class="btn btn-verde" onclick= 'asignacion({"ESTACION":"EIAF_MBM","CARPETA":"EIAF_MBI"})' >EIAF MBM</a>

      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="genric-btn primary-border circle" data-dismiss="modal">Cerrar</button>
      </div>

    </div>
  </div>
</div>