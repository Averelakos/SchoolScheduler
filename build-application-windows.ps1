# RunAsAdmin-NpmDistWin.ps1
# Opens PowerShell as Admin and runs `npm run dist:win`

# Check if already running as Admin
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    # Relaunch script as Admin
    Start-Process powershell.exe -Verb RunAs -ArgumentList @(
        "-NoExit",
        "-Command", "cd '$PWD'; .\build-application-windows.ps1"
    )
    exit
}

# --- Running as Admin below this point ---
Write-Host "Running as Administrator. Building Electron app..." -ForegroundColor Green

# Navigate to the subdirectory (e.g., ./electron-app/)
Set-Location -Path  .\Frontend\

# Run npm command
npm run dist:win

# Pause to see output (optional)
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")