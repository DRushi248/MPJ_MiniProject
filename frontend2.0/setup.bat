@echo off
setlocal enabledelayedexpansion

:: Check if running as administrator
net session >nul 2>&1
if %errorLevel% == 0 (
    goto :admin
) else (
    echo Requesting administrator privileges...
    powershell -Command "Start-Process cmd -ArgumentList '/c cd /d %~dp0 && %~nx0' -Verb RunAs"
    exit /b
)

:admin
echo Running as administrator...

:: Create temporary directory
set TEMP_DIR=%TEMP%\cloudflux_setup
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

:: Download Java 17
echo Downloading Java 17...
powershell -Command "& {
    $ProgressPreference = 'SilentlyContinue'
    Invoke-WebRequest -Uri 'https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe' -OutFile '%TEMP_DIR%\jdk-17.exe'
}"

:: Install Java 17
echo Installing Java 17...
start /wait "" "%TEMP_DIR%\jdk-17.exe" /s

:: Download Maven
echo Downloading Maven...
powershell -Command "& {
    $ProgressPreference = 'SilentlyContinue'
    Invoke-WebRequest -Uri 'https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip' -OutFile '%TEMP_DIR%\maven.zip'
}"

:: Install Maven
echo Installing Maven...
powershell -Command "& {
    if (-not (Test-Path 'C:\Program Files\Apache\maven')) {
        New-Item -ItemType Directory -Path 'C:\Program Files\Apache\maven' -Force
    }
    Expand-Archive -Path '%TEMP_DIR%\maven.zip' -DestinationPath 'C:\Program Files\Apache\maven' -Force
}"

:: Set environment variables
echo Setting up environment variables...
setx JAVA_HOME "C:\Program Files\Java\jdk-17" /M
setx PATH "%PATH%;C:\Program Files\Java\jdk-17\bin;C:\Program Files\Apache\maven\bin" /M

:: Clean up
echo Cleaning up temporary files...
rmdir /s /q "%TEMP_DIR%"

:: Verify installations
echo Verifying installations...
call :verify_java
call :verify_maven

:: Run the application
echo Starting the application...
call :run_application

goto :eof

:verify_java
java -version >nul 2>&1
if %errorLevel% neq 0 (
    echo Java installation failed. Please install Java 17 manually.
    pause
    exit /b 1
)
echo Java installation verified.
goto :eof

:verify_maven
mvn -version >nul 2>&1
if %errorLevel% neq 0 (
    echo Maven installation failed. Please install Maven manually.
    pause
    exit /b 1
)
echo Maven installation verified.
goto :eof

:run_application
echo Building and running the application...
mvn clean javafx:run
if %errorLevel% neq 0 (
    echo Application failed to start. Please check the error messages above.
    pause
    exit /b 1
)
goto :eof 