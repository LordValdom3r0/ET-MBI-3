@echo off
setlocal enabledelayedexpansion

set processName=GraphicalDeviceInterface.exe
set isRunning=false

:check_process
set isRunning=false

for /f "tokens=2 delims=," %%a in ('tasklist /nh /fi "imagename eq %processName%" /fo csv') do (
    set isRunning=true
)

if "%isRunning%"=="false" (
    echo %processName% is not running. Starting it now from D:\BIN\GDI_OPENCV\GraphicalDeviceInterface.exe ...
    start "" "D:\BIN\GDI_OPENCV\GraphicalDeviceInterface.exe"
) else (
    echo %processName% is running from D:\BIN\GDI_OPENCV\GraphicalDeviceInterface.exe ...
)

timeout /t 10 > nul
goto check_process