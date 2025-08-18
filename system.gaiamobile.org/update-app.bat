@echo off
setlocal

REM Определяем путь к текущей папке (где лежит батник)
set APP_DIR=%~dp0

REM Удаляем старый архив, если есть
if exist "%APP_DIR%application.zip" del "%APP_DIR%application.zip"

REM Переходим в папку приложения
cd /d "%APP_DIR%application"

REM Создаем архив без сжатия с помощью 7-Zip
REM -tzip = формат zip, -mx=0 = без сжатия
7z a -tzip -mx=0 "%APP_DIR%application.zip" *

REM Загружаем на телефон
adb remount
adb push "%APP_DIR%application.zip" /system/b2g/webapps/system.gaiamobile.org/application.zip
adb reboot

endlocal
pause