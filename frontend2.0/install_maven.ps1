# Download Maven
$mavenUrl = "https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip"
$mavenZip = "$env:TEMP\apache-maven-3.9.6-bin.zip"
$mavenDir = "C:\Program Files\Apache\maven"

Write-Host "Downloading Maven..."
Invoke-WebRequest -Uri $mavenUrl -OutFile $mavenZip

# Create Maven directory if it doesn't exist
if (-not (Test-Path $mavenDir)) {
    New-Item -ItemType Directory -Path $mavenDir
}

# Extract Maven
Write-Host "Installing Maven..."
Expand-Archive -Path $mavenZip -DestinationPath $mavenDir -Force

# Add to PATH
$path = [Environment]::GetEnvironmentVariable("Path", "Machine")
if ($path -notlike "*$mavenDir\bin*") {
    [Environment]::SetEnvironmentVariable("Path", "$path;$mavenDir\bin", "Machine")
}

Write-Host "Maven installation completed!" 