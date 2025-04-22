# CloudFlux JavaFX Frontend

## Prerequisites
- Java 17 or later
- Maven 3.8 or later

## Setup Instructions

1. Install Java 17
   - Download from: https://www.oracle.com/java/technologies/downloads/#java17
   - Add Java to PATH environment variable
   - Verify installation: `java -version`

2. Install Maven
   - Download from: https://maven.apache.org/download.cgi
   - Extract to a directory (e.g., C:\Program Files\Apache\maven)
   - Add Maven's bin directory to PATH
   - Verify installation: `mvn -v`

## Running the Application

### Option 1: Using run.bat
1. Double-click `run.bat` in the project root directory
2. The script will check prerequisites and run the application

### Option 2: Using Command Line
1. Open command prompt in the project directory
2. Run: `mvn clean javafx:run`

### Option 3: Using IDE
1. Import project as Maven project in IntelliJ IDEA or Eclipse
2. Run `Main` class from `src/main/java/com/cloudflux/Main.java`

## Application Features
- User authentication (login/register)
- File upload and download
- Folder creation and management
- File sharing
- File versioning

## Backend Requirements
- Backend server must be running on `localhost:8080`
- All API endpoints must be available as specified in the Postman collection

## Test Credentials
- Username: hk1910
- Password: securePassword123
