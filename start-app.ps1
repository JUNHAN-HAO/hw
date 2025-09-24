# 项目任务管理系统启动脚本
Write-Host "正在启动项目任务管理系统..." -ForegroundColor Green
Write-Host ""

# 设置Node.js路径
$nodePath = "C:\Program Files\nodejs"
$env:PATH = $env:PATH + ";$nodePath"
Write-Host "✓ Node.js路径已添加到PATH" -ForegroundColor Green

# 设置执行策略
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force -ErrorAction SilentlyContinue
Write-Host "✓ PowerShell执行策略已设置" -ForegroundColor Green

# 验证Node.js
Write-Host "检查Node.js版本:" -ForegroundColor Yellow
$nodeVersion = & "C:\Program Files\nodejs\node.exe" --version
Write-Host "✓ Node.js版本: $nodeVersion" -ForegroundColor Green

# 验证npm
Write-Host "检查npm版本:" -ForegroundColor Yellow  
$npmVersion = & "C:\Program Files\nodejs\npm.cmd" --version
Write-Host "✓ npm版本: $npmVersion" -ForegroundColor Green

Write-Host ""
Write-Host "Node.js和npm已准备就绪！" -ForegroundColor Green
Write-Host "正在启动开发服务器..." -ForegroundColor Yellow
Write-Host ""
Write-Host "应用将在 http://localhost:3000 打开" -ForegroundColor Cyan
Write-Host "按 Ctrl+C 可以停止服务器" -ForegroundColor Gray
Write-Host ""

# 启动React应用
Write-Host "执行: npm start" -ForegroundColor Yellow
& "C:\Program Files\nodejs\npm.cmd" start