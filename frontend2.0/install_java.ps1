# Download Java 17
$javaUrl = "https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe"
$javaInstaller = "$env:TEMP\jdk-17_windows-x64_bin.exe"

Write-Host "Downloading Java 17..."
Invoke-WebRequest -Uri $javaUrl -OutFile $javaInstaller

# Install Java 17
Write-Host "Installing Java 17..."
Start-Process -FilePath $javaInstaller -ArgumentList "/s" -Wait

# Set JAVA_HOME
$javaPath = "C:\Program Files\Java\jdk-17"
[Environment]::SetEnvironmentVariable("JAVA_HOME", $javaPath, "Machine")
$env:JAVA_HOME = $javaPath

# Add to PATH
$path = [Environment]::GetEnvironmentVariable("Path", "Machine")
if ($path -notlike "*$javaPath\bin*") {
    [Environment]::SetEnvironmentVariable("Path", "$path;$javaPath\bin", "Machine")
}

Write-Host "Java 17 installation completed!" 