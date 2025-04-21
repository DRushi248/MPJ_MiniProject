package com.cloudrand.arcapi.service;

import com.cloudrand.arcapi.api.model.Folder;
import com.cloudrand.arcapi.api.model.User;
import com.cloudrand.arcapi.dto.CreateFolderRequest;
import com.cloudrand.arcapi.jwt.JwtUtil;
import com.cloudrand.arcapi.repository.FolderRepository;
import com.cloudrand.arcapi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FolderService {

    @Autowired
    private final FolderRepository folderRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final JwtUtil jwtUtil;

    public Folder createFolder(HttpServletRequest request, CreateFolderRequest folderRequest) {
        Long userId = extractUID(request);  // Extract user ID from JWT token

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Folder folder = new Folder();
        folder.setFolderName(folderRequest.getFolderName());
        folder.setUser(user);

        // Handle optional parent folder
        if (folderRequest.getParentFolderId() != null && folderRequest.getParentFolderId() > 0) {
            Folder parent = folderRepository.findById(folderRequest.getParentFolderId())
                    .orElseThrow(() -> new RuntimeException("Parent folder not found"));
            folder.setParentFolder(parent);
        } else {
            folder.setParentFolder(null);
        }

        return folderRepository.save(folder);
    }



    public List<Folder> getUserFolders(HttpServletRequest request) {
        Long userId = extractUID(request);  // Extract user ID from JWT token
        return folderRepository.findByUser_UserId(userId);  // Retrieve folders for the user
    }

    private String extractToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        throw new RuntimeException("JWT Token is missing.");
    }

    private Long extractUID(HttpServletRequest request) {
        String token = extractToken(request);
        return jwtUtil.extractUserId(token);  // Extract user ID from the JWT token
    }
}
