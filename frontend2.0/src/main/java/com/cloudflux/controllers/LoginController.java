package com.cloudflux.controllers;

import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.stage.Stage;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class LoginController {
    @FXML
    private TextField usernameField;

    @FXML
    private PasswordField passwordField;

    @FXML
    private Button loginButton;

    @FXML
    private Hyperlink registerLink;

    private static final String API_BASE_URL = "http://localhost:8080";

    @FXML
    private void initialize() {
        loginButton.setOnAction(event -> handleLogin());
    }

    private void handleLogin() {
        String username = usernameField.getText();
        String password = passwordField.getText();

        if (username.isEmpty() || password.isEmpty()) {
            showAlert("Error", "Please enter both username and password");
            return;
        }

        try {
            HttpClient client = HttpClients.createDefault();
            HttpPost request = new HttpPost(API_BASE_URL + "/users/login");

            // Add query parameters
            String url = String.format("%s?username=%s&password=%s",
                    API_BASE_URL + "/users/login",
                    username,
                    password);
            request.setURI(java.net.URI.create(url));

            HttpResponse response = client.execute(request);
            String responseBody = EntityUtils.toString(response.getEntity());

            if (response.getStatusLine().getStatusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, String> responseMap = mapper.readValue(responseBody,
                        new TypeReference<HashMap<String, String>>() {
                        });
                String token = responseMap.get("token");

                // Store token for future requests
                AuthManager.getInstance().setToken(token);

                // Navigate to main application
                navigateToMainApp();
            } else {
                showAlert("Error", "Invalid username or password");
            }
        } catch (IOException e) {
            showAlert("Error", "Failed to connect to server");
            e.printStackTrace();
        }
    }

    @FXML
    private void handleRegister() {
        try {
            Parent root = FXMLLoader.load(getClass().getResource("/fxml/register.fxml"));
            Stage stage = (Stage) registerLink.getScene().getWindow();
            stage.setScene(new Scene(root));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void navigateToMainApp() {
        try {
            Parent root = FXMLLoader.load(getClass().getResource("/fxml/main.fxml"));
            Stage stage = (Stage) loginButton.getScene().getWindow();
            stage.setScene(new Scene(root));
        } catch (IOException e) {
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