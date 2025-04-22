@echo off
echo Setting up environment variables...

:: Set JAVA_HOME
setx JAVA_HOME "C:\Program Files\Java\jdk-21" /M
echo JAVA_HOME set to C:\Program Files\Java\jdk-21

:: Set MAVEN_HOME
setx MAVEN_HOME "C:\Program Files\Apache\Maven\apache-maven-3.9.9" /M
echo MAVEN_HOME set to C:\Program Files\Apache\Maven\apache-maven-3.9.9

:: Add Java and Maven to PATH
setx PATH "%PATH%;%JAVA_HOME%\bin;%MAVEN_HOME%\bin" /M
echo Added Java and Maven to PATH

echo.
echo Please restart your computer for the changes to take effect.
echo After restart, run 'mvn clean javafx:run' in this directory to start the application.
pause 