@echo off
setlocal enabledelayedexpansion

:: Nombre de ejecutable
set app_name=app.exe

:: Ruta y nombre del archivo de salida
set temp_output_file=codigo_crash_temp.log

:: Ruta de los archivos
set directory=C:\BIN\

:: Días atrás en los que se eliminarán archivos
set delete_days=5

:: Establecer color de ventana y letras (0=ventana Negra B=letras azul claro)
color 0B

:: Obtener la fecha actual para nombrar la copia
for /f "tokens=1-4 delims=/:. " %%a in ("%date%") do (
	set day=%%a
	set month=%%b
	set year=%%c
)
:: Obtener la hora actual para nombrar la copia
for /f "tokens=1-4 delims=/:. " %%a in ("%time%") do (
	set hour=%%a
	set minute=%%b
	set second=%%c
)

:: Formatear la fecha y hora
set timestamp=%day%-%month%-%year%_%hour%;%minute%;%second%

:: Si ya existe el archivo temporal, crear una copia y después limpiarlo
if exist %directory%%temp_output_file% (

	ECHO Ya hay un archivo llamado %temp_output_file%, creando copia...
	type %directory%%temp_output_file% >> "%directory%codigo_crash_temp_%timestamp%.txt"

	powershell -Command "Clear-Content -Path '%directory%%temp_output_file%' -Force"
	ECHO Archivo temporal limpiado.
)


ECHO ============================================================================
ECHO CORRIENDO %app_name% y generando archivo %temp_output_file%
ECHO ============================================================================
REM COMANDO CORE PARA CORRER PRORAMA EN SEGUNDO PLANO, CONTINUAR EJECUCIÓN DE SCRIPT Y 
REM GENERAR ARCHIVO LOG QUE GUARDE HISTORIAL DE CONSOLA (REDIRECCION Y SALIDA DUPLICADA)
REM Y PERMITA EL USO COMPARTIDO DEL ARCHIVO GENERADO LOG
REM ocultando warnings: start /b powershell -Command "& { .\%app_name% 2> $null | ForEach-Object { $_; $_ | Add-Content '%directory%%temp_output_file%' } }"
start /b powershell -Command "& { .\%app_name% 2>&1 | ForEach-Object { $_; $_ | Add-Content '%directory%%temp_output_file%' } }"
ECHO ============================================================================
ECHO PROGRAMA INICIADO!!
ECHO ============================================================================

:: Esperar a que el archivo se haya creado, se usa este método en lugar de exist porque el archivo está siendo utilizado
:wait_for_file
powershell -Command "& { if (Test-Path '%directory%%temp_output_file%') { exit 0 } else { exit 1 } }"
if %errorlevel%==0 (
	ECHO Archivo encontrado: %temp_output_file%
) else (
	timeout /t 2 > nul
	ECHO Buscando Archivo: %temp_output_file%
	goto wait_for_file
)


:: Inicializar la fecha anterior
set prev_date=


:start
ECHO ============================================================================
ECHO iniciando funcion :::: start ::::
ECHO ============================================================================

:: Obtener la fecha actual
for /f "tokens=1-4 delims=/:. " %%a in ("%date%") do (
	set day=%%a
	set month=%%b
	set year=%%c
)

:: Asignar el nombre del mes
if "%month%"=="01" set month_name=Enero
if "%month%"=="02" set month_name=Febrero
if "%month%"=="03" set month_name=Marzo
if "%month%"=="04" set month_name=Abril
if "%month%"=="05" set month_name=Mayo
if "%month%"=="06" set month_name=Junio
if "%month%"=="07" set month_name=Julio
if "%month%"=="08" set month_name=Agosto
if "%month%"=="09" set month_name=Septiembre
if "%month%"=="10" set month_name=Octubre
if "%month%"=="11" set month_name=Noviembre
if "%month%"=="12" set month_name=Diciembre

:: Obtener la hora actual para el nombre del archivo
for /f "tokens=1-4 delims=/:. " %%a in ("%time%") do (
        set hour=%%a
	set minute=%%b
	set second=%%c
)

:: Construir la fecha actual en el formato deseado
set current_date=%day%%month_name%%year%

ECHO ============================================================================
ECHO Hora Actual: !hour!:!minute!:!second!
ECHO current_date: !current_date!
ECHO prev_date: !prev_date!
ECHO ============================================================================

:: Verificar si la fecha ha cambiado
if not "%prev_date%"=="%current_date%" (
	set prev_date=%current_date%

	:: Construir el nombre del archivo
	set datename=!prev_date!_!hour!;!minute!;!second!
	set output_file=%directory%codigo_crash_!datename!.txt

	ECHO ============================================================================
	ECHO Guardando copia de Archivo temporal...
	ECHO ============================================================================

	if exist %directory%%temp_output_file% (
    		:: Generando copia del archivo temporal
		type %directory%%temp_output_file% >> "!output_file!"

		ECHO Nuevo archivo de historial creado: !output_file!

    		ECHO Limpiando archivo temporal %directory%%temp_output_file%
		powershell -Command "Clear-Content -Path '%directory%%temp_output_file%' -Force"

		ECHO Archivo limpiado
	
	) else (
    		echo Archivo temporal no encontrado: %directory%%temp_output_file%
	)

)



REM ============================================================================
REM Obteniendo Fecha para eliminar archivos de días anteriores
REM ============================================================================
:: Obtener fecha de días anteriores
for /f "tokens=1,2,3 delims=-" %%a in ('powershell -Command "(Get-Date).AddDays(-%delete_days%).ToString('dd-MM-yyyy')"') do (
    set day=%%a
    set month=%%b
    set year=%%c
)

:: Asignar el nombre del mes
if "%month%"=="01" set month_name=Enero
if "%month%"=="02" set month_name=Febrero
if "%month%"=="03" set month_name=Marzo
if "%month%"=="04" set month_name=Abril
if "%month%"=="05" set month_name=Mayo
if "%month%"=="06" set month_name=Junio
if "%month%"=="07" set month_name=Julio
if "%month%"=="08" set month_name=Agosto
if "%month%"=="09" set month_name=Septiembre
if "%month%"=="10" set month_name=Octubre
if "%month%"=="11" set month_name=Noviembre
if "%month%"=="12" set month_name=Diciembre

:: Construir la fecha en el formato deseado
set two_days_ago=%day%%month_name%%year%

ECHO ============================================================================
ECHO Fecha (-%delete_days%) en formato convertido para Eliminar Archivos: codigo_crash_%two_days_ago%...
ECHO ============================================================================

:: Prefijo de los archivos a eliminar
set prefix=codigo_crash_%two_days_ago%

:: Bandera para verificar si se eliminaron archivos
set files_deleted=0

:: Buscar y eliminar archivos con el prefijo
for %%f in ("%directory%%prefix%*.txt") do (
    if exist "%%f" (
        echo Eliminando archivo: %%f
        del "%%f"
        set /a files_deleted+=1
    )
)

:: Verificar si se encontraron y eliminaron archivos
if %files_deleted%==0 (
    echo No se encontraron archivos para eliminar con el prefijo: %prefix%
) else (
    echo Archivos eliminados: %files_deleted%
)

ECHO ============================================================================
ECHO Ciclo Finalizado. Esperando el siguiente...
ECHO ============================================================================

:: Esperar 14400 segundos antes de la próxima verificación (4Hrs)
timeout /t 14400 > nul
goto start


REM Este ajuste asegura que los print() se vuelquen inmediatamente al archivo de salida, resolviendo el problema del búfer. (colocar en python en main.py)
REM import sys
REM sys.stdout.reconfigure(line_buffering=True)


REM ============================================================================
REM anterior método de ejecución de app desde ventana de cmd
REM cmd /k app.exe
REM ============================================================================

REM ============================================================================
REM code by: Aarón Castillo Tobías
REM ============================================================================