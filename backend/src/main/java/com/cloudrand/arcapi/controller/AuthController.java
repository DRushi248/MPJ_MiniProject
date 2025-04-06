package com.cloudrand.arcapi.controller;

import com.cloudrand.arcapi.api.model.User;
import com.cloudrand.arcapi.service.AuthService;
import com.cloudrand.arcapi.dto.LoginRequest;
import com.cloudrand.arcapi.dto.RegisterRequest;
import com.cloudrand.arcapi.dto.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
} 