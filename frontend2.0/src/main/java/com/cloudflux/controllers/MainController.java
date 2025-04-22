package com.cloudflux.controllers;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.*;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import com.cloudflux.utils.AuthManager;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class MainController {
    @FXML
    private Button logoutButton;
    
    @FXML
    private Button uploadButton;
    
    @FXML
    private Button createFolderButton;
    
    @FXML
    private TreeView<String> folderTree;
    
    @FXML
    private TableView<Map<String, String>> filesTable;
    
    @FXML
    private TableColumn<Map<String, String>, String> nameColumn;
    
    @FXML
    private TableColumn<Map<String, String>, String> sizeColumn;
    
    @FXML
    private TableColumn<Map<String, String>, String> modifiedColumn;
    
    @FXML
    private TableColumn<Map<String, String>, String> actionsColumn;
    
    private static final String API_BASE_URL = "http://localhost:8080";
    
    @FXML
    private void initialize() {
        setupEventHandlers();
        loadFiles();
        loadFolders();
    }
    
    private void setupEventHandlers() {
        logoutButton.setOnAction(event -> handleLogout());
        uploadButton.setOnAction(event -> handleUpload());
        createFolderButton.setOnAction(event -> handleCreateFolder());
    }
    
    private void handleLogout() {
        AuthManager.getInstance().logout();
        try {
            Parent root = FXMLLoader.load(getClass().getResource("/fxml/login.fxml"));
            Stage stage = (Stage) logoutButton.getScene().getWindow();
            stage.setScene(new Scene(root));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private void handleUpload() {
        FileChooser fileChooser = new FileChooser();
        File selectedFile = fileChooser.showOpenDialog(uploadButton.getScene().getWindow());
        
        if (selectedFile != null) {
            try {
                HttpClient client = HttpClients.createDefault();
                HttpPost request = new HttpPost(API_BASE_URL + "/files/upload");
                
                // Add authorization header
                request.setHeader("Authorization", "Bearer " + AuthManager.getInstance().getToken());
                
                // Create multipart entity
                MultipartEntityBuilder builder = MultipartEntityBuilder.create();
                builder.addBinaryBody("file", selectedFile);
                builder.addTextBody("folderId", "1"); // Default to root folder
                
                request.setEntity(builder.build());
                
                HttpResponse response = client.execute(request);
                if (response.getStatusLine().getStatusCode() == 200) {
                    loadFiles(); // Refresh file list
                } else {
                    showAlert("Error", "Failed to upload file");
                }
            } catch (IOException e) {
                showAlert("Error", "Failed to connect to server");
                e.printStackTrace();
            }
        }
    }
    
    private void handleCreateFolder() {
        TextInputDialog dialog = new TextInputDialog();
        dialog.setTitle("Create Folder");
        dialog.setHeaderText("Enter folder name:");
        dialog.setContentText("Name:");
        
        dialog.showAndWait().ifPresent(folderName -> {
            try {
                HttpClient client = HttpClients.createDefault();
                HttpPost request = new HttpPost(API_BASE_URL + "/api/folders/create");
                
                // Add authorization header
                request.setHeader("Authorization", "Bearer " + AuthManager.getInstance().getToken());
                request.setHeader("Content-Type", "application/json");
                
                // Create request body
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> body = new HashMap<>();
                body.put("folderName", folderName);
                body.put("parentFolderId", 0); // Default to root folder
                
                request.setEntity(new org.apache.http.entity.StringEntity(mapper.writeValueAsString(body)));
                
                HttpResponse response = client.execute(request);
                if (response.getStatusLine().getStatusCode() == 200) {
                    loadFolders(); // Refresh folder list
                } else {
                    showAlert("Error", "Failed to create folder");
                }
            } catch (IOException e) {
                showAlert("Error", "Failed to connect to server");
                e.printStackTrace();
            }
        });
    }
    
    private void loadFiles() {
        try {
            HttpClient client = HttpClients.createDefault();
            HttpGet request = new HttpGet(API_BASE_URL + "/files/list");
            
            // Add authorization header
            request.setHeader("Authorization", "Bearer " + AuthManager.getInstance().getToken());
            
            HttpResponse response = client.execute(request);
            String responseBody = EntityUtils.toString(response.getEntity());
            
            if (response.getStatusLine().getStatusCode() == 200) {
                // TODO: Parse and display files in the table
            }
        } catch (IOException e) {
            showAlert("Error", "Failed to load files");
            e.printStackTrace();
        }
    }
    
    private void loadFolders() {
        try {
            HttpClient client = HttpClients.createDefault();
            HttpGet request = new HttpGet(API_BASE_URL + "/api/folders/user/1");
            
            // Add authorization header
            request.setHeader("Authorization", "Bearer " + AuthManager.getInstance().getToken());
            
            HttpResponse response = client.execute(request);
            String responseBody = EntityUtils.toString(response.getEntity());
            
            if (response.getStatusLine().getStatusCode() == 200) {
                // TODO: Parse and display folders in the tree view
            }
        } catch (IOException e) {
            showAlert("Error", "Failed to load folders");
            e.printStackTrace();
        }
    }
    
    private void showAlert(String title, String content) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(content);
        alert.showAndWait();
    }
} 