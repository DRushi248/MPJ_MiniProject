package com.cloudrand.arcapi.api.controller;

import com.cloudrand.arcapi.api.model.AuthenticationResponse;
import com.cloudrand.arcapi.api.model.User;
import com.cloudrand.arcapi.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> registerUser(@Valid @RequestBody User user, @RequestParam String confirmPassword) {
        if (!user.getPassword().equals(confirmPassword)) {
            return ResponseEntity.badRequest().body(new AuthenticationResponse("Passwords dont match"));
        }
        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginUser(@RequestParam String username, @RequestParam String password) {
        try{
            return ResponseEntity.ok(userService.authenticate(username, password));
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(new AuthenticationResponse("Invalid Login credentials"));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        return ResponseEntity.ok(userService.logout());
    }

    @PutMapping("/updatedetails")
    public ResponseEntity<?> updateUser(HttpServletRequest request, @RequestBody User updatedUser) {
        return userService.updateUserDetails(request, updatedUser);
    }

    @DeleteMapping("/deleteme")
    public ResponseEntity<?> deleteUser(HttpServletRequest request) {
        return userService.deleteUser(request);
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam String email) {
        return userService.initiatePasswordReset(email);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestParam String email, @RequestParam String otp, @RequestParam String newPassword) {
        return userService.resetPassword(email, otp, newPassword);
    }

    @PostMapping("/resend-otp")
    public ResponseEntity<?> resendOTP(@RequestParam String email) {
        return userService.resendOTP(email);
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOTP(@RequestParam String email, @RequestParam String otp) {
        return userService.verifyOTP(email, otp);
    }
}
