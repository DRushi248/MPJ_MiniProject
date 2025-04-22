@echo off
echo Checking Java version...
java -version
if %errorlevel% neq 0 (
    echo Java is not installed or not in PATH
    echo Please install Java 17 from: https://www.oracle.com/java/technologies/downloads/#java17
    pause
    exit /b
)

echo Checking Maven...
mvn -v
if %errorlevel% neq 0 (
    echo Maven is not installed or not in PATH
    echo Please install Maven from: https://maven.apache.org/download.cgi
    pause
    exit /b
)

echo Building and running the application...
mvn clean javafx:run
pause 