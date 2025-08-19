@echo off
setlocal

REM Путь к папке, где лежит батник
set APP_DIR=%~dp0

REM Имя текущей папки (например, system.gaiamobile.org)
for %%I in ("%APP_DIR:~0,-1%") do set APP_NAME=%%~nxI

REM Удаляем старый архив, если есть
if exist "%APP_DIR%application.zip" del "%APP_DIR%application.zip"

REM Переходим в папку application
cd /d "%APP_DIR%application"

REM Создаем архив без сжатия с помощью 7-Zip
7z a -tzip -mx=0 "%APP_DIR%application.zip" *

REM Загружаем на телефон (имя папки берется автоматически)
adb remount
adb push "%APP_DIR%application.zip" /data/local/webapps/%APP_NAME%/application.zip
adb reboot

endlocal

REM Задержка 3 секунды перед выходом (можно менять)
timeout /t 3 >nul
