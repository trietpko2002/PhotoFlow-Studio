@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Hay cai Node.js 24 LTS, sau do chay lai tep nay.
 pause
 exit /b 1
)
call npm ci
if errorlevel 1 goto fail
call npm test
if errorlevel 1 goto fail
call npm run dist:win
if errorlevel 1 goto fail
explorer release
pause
exit /b 0
:fail
echo Build that bai. Giu nguyen thong bao loi o tren de kiem tra.
pause
exit /b 1
