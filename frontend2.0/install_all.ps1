# Run as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {  
    $arguments = "& '" + $myinvocation.mycommand.definition + "'"
    Start-Process powershell -Verb runAs -ArgumentList $arguments
    Break
}

# Install Java 17
Write-Host "Installing Java 17..."
.\install_java.ps1

# Install Maven
Write-Host "Installing Maven..."
.\install_maven.ps1

# Verify installations
Write-Host "Verifying installations..."
java -version
mvn -version

# Build and run the application
Write-Host "Building and running the application..."
mvn clean javafx:run 