@echo off
chcp 65001 >nul
echo 正在启动项目任务管理系统...
echo.

REM 添加Node.js到PATH
set PATH=%PATH%;C:\Program Files\nodejs

REM 验证Node.js和npm是否可用
echo 检查Node.js版本:
node --version
if errorlevel 1 (
    echo 错误: Node.js未找到，请确保已正确安装Node.js
    echo 请访问 https://nodejs.org/ 下载并安装Node.js
    pause
    exit /b 1
)

echo 检查npm版本:
npm --version
if errorlevel 1 (
    echo 错误: npm未找到
    pause
    exit /b 1
)

echo.
echo Node.js和npm已准备就绪！
echo 正在启动开发服务器...
echo.
echo 应用将在 http://localhost:3000 打开
echo 按 Ctrl+C 可以停止服务器
echo.

REM 启动React应用
echo 执行: npm start
echo.
"C:\Program Files\nodejs\npm.cmd" start

echo.
echo 如果应用没有自动打开，请手动访问: http://localhost:3000
pause
