package com.cloudrand.arcapi.service;

import com.cloudrand.arcapi.api.model.AuthenticationResponse;
import com.cloudrand.arcapi.api.model.Role;
import com.cloudrand.arcapi.api.model.User;
import com.cloudrand.arcapi.jwt.JwtUtil;
import com.cloudrand.arcapi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by ID
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Create a new user with default role
    public User createUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(user.getRole() != null ? user.getRole() : Role.USER);  // Default role to USER
        return userRepository.save(user);
    }

    // Authenticate user
    public ResponseEntity<?> authenticateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.badRequest().body("Invalid email or password");
    }

    // Update user details
    public ResponseEntity<?> updateUserDetails(HttpServletRequest request, User updatedUser) {
        Long userId = extractUID(request);
        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            User user = existingUser.get();

            user.setUsername(updatedUser.getUsername() != null ? updatedUser.getUsername() : user.getUsername());
            user.setProfilePicture(updatedUser.getProfilePicture() != null ? updatedUser.getProfilePicture() : user.getProfilePicture());
            user.setPhone(updatedUser.getPhone() != null ? updatedUser.getPhone() : user.getPhone());
            user.setEmail(updatedUser.getEmail() != null ? updatedUser.getEmail() : user.getEmail());

            return ResponseEntity.ok(userRepository.save(user));
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    public User updateUser(Long userId, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            return userRepository.save(user);
        }
        throw new RuntimeException("User not found");
    }

    // Delete user
    public ResponseEntity<?> deleteUser(HttpServletRequest request) {
        Long userId = extractUID(request);
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return ResponseEntity.ok("User deleted successfully");
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    public ResponseEntity<?> deleteUser(long userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return ResponseEntity.ok("User deleted successfully");
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    // Password Reset & OTP (Mocked)
    public ResponseEntity<?> initiatePasswordReset(String email) {
        return ResponseEntity.ok("OTP sent to " + email);
    }

    public ResponseEntity<?> resetPassword(String email, String otp, String newPassword) {
        return ResponseEntity.ok("Password reset successful");
    }

    public ResponseEntity<?> resendOTP(String email) {
        return ResponseEntity.ok("OTP resent to " + email);
    }

    public ResponseEntity<?> verifyOTP(String email, String otp) {
        return ResponseEntity.ok("OTP verified successfully");
    }

    public AuthenticationResponse authenticate(String username, String password){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        String token = jwtUtil.generateToken(userDetails);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse register(User request){
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        request.setRole(Role.USER); // Default role
        userRepository.save(request);
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        String token = jwtUtil.generateToken(userDetails);
        return new AuthenticationResponse(token);
    }

    public AuthenticationResponse logout(){
        return new AuthenticationResponse("User logged out successfully.");
    }

    private String extractToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        throw new RuntimeException("JWT Token is missing.");
    }

    private Long extractUID(HttpServletRequest request){
        String token = extractToken(request);
        String username = jwtUtil.extractUsername(token);
        return userRepository.findByUsername(username)
                .map(User::getUserId)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
