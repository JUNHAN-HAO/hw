@echo off
chcp 65001 >nul
title 项目任务管理系统

echo ================================================
echo           项目任务管理系统启动器
echo ================================================
echo.

echo 正在启动应用...
echo 应用地址: http://localhost:3000
echo.

REM 直接使用完整路径启动npm
"C:\Program Files\nodejs\npm.cmd" start

echo.
echo 应用已启动！
echo 如果浏览器没有自动打开，请手动访问: http://localhost:3000
echo.
pause
