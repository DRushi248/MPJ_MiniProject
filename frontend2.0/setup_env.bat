@echo off
echo Setting up environment variables...

:: Set JAVA_HOME - Update this path to match your Java 21 installation directory
setx JAVA_HOME "C:\Program Files\Java\jdk-21" /M

:: Set MAVEN_HOME - Update this path to match your Maven installation directory
setx MAVEN_HOME "C:\Program Files\Apache\Maven\apache-maven-3.9.9" /M

:: Add Java and Maven to PATH
setx PATH "%PATH%;%JAVA_HOME%\bin;%MAVEN_HOME%\bin" /M

echo Environment variables set successfully!
echo Please restart your computer for the changes to take effect.
echo After restarting, open a new command prompt and run:
echo mvn -v
echo java -version
echo to verify the installations. 