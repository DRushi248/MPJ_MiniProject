package com.cloudrand.arcapi.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private String phoneNumber;
} 