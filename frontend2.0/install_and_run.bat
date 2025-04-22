@echo off
echo Running as administrator...
powershell -Command "Start-Process cmd -ArgumentList '/c cd /d %~dp0 && %~nx0' -Verb RunAs"
exit /b

:admin
echo Installing Java 17...
powershell -ExecutionPolicy Bypass -Command "& {Invoke-WebRequest -Uri 'https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe' -OutFile '%TEMP%\jdk-17_windows-x64_bin.exe'}"
"%TEMP%\jdk-17_windows-x64_bin.exe" /s

echo Installing Maven...
powershell -ExecutionPolicy Bypass -Command "& {
    $mavenUrl = 'https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip'
    $mavenZip = '%TEMP%\apache-maven-3.9.6-bin.zip'
    $mavenDir = 'C:\Program Files\Apache\maven'
    Invoke-WebRequest -Uri $mavenUrl -OutFile $mavenZip
    if (-not (Test-Path $mavenDir)) { New-Item -ItemType Directory -Path $mavenDir }
    Expand-Archive -Path $mavenZip -DestinationPath $mavenDir -Force
}"

echo Setting up environment variables...
setx JAVA_HOME "C:\Program Files\Java\jdk-17" /M
setx PATH "%PATH%;C:\Program Files\Java\jdk-17\bin;C:\Program Files\Apache\maven\bin" /M

echo Please restart your computer for the changes to take effect.
echo After restart, run this script again to start the application.
pause
exit 