package com.cloudflux.utils;

public class AuthManager {
    private static AuthManager instance;
    private String token;
    
    private AuthManager() {}
    
    public static AuthManager getInstance() {
        if (instance == null) {
            instance = new AuthManager();
        }
        return instance;
    }
    
    public String getToken() {
        return token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }
    
    public boolean isAuthenticated() {
        return token != null && !token.isEmpty();
    }
    
    public void logout() {
        token = null;
    }
} 