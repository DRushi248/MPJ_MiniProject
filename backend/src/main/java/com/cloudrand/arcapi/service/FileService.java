package com.cloudrand.arcapi.service;

import com.cloudrand.arcapi.api.model.File;
import com.cloudrand.arcapi.api.model.User;
import com.cloudrand.arcapi.jwt.JwtUtil;
import com.cloudrand.arcapi.repository.FileRepository;
import com.cloudrand.arcapi.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    // Directory where files will be stored
    private final Path rootLocation = Paths.get("uploaded-files");

    // Upload a file
    public File uploadFile(HttpServletRequest request, MultipartFile file, Long folderId) throws IOException {
        User user = extractUserFromRequest(request);

        if (!Files.exists(rootLocation)) {
            Files.createDirectories(rootLocation);
        }

        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path destinationPath = rootLocation.resolve(fileName);
        Files.copy(file.getInputStream(), destinationPath);

        File dbFile = new File();
        dbFile.setUser(user);
        dbFile.setFileName(fileName);
        dbFile.setFilePath(destinationPath.toString());
        dbFile.setFileSize(file.getSize());
//        dbFile.setData(file.getBytes());
        if (folderId != null) {
            // TODO: set folder once FolderService is ready
            // Folder folder = folderService.getFolderById(folderId);
            // dbFile.setFolder(folder);
        }

        return fileRepository.save(dbFile);
    }

    // Get files for the current user
    public List<File> getFilesByUser(HttpServletRequest request) {
        User user = extractUserFromRequest(request);
        return fileRepository.findByUser(user);
    }

    // Download a file
    public File downloadFile(Long fileId) {
        return fileRepository.findById(fileId)
                .orElseThrow(() -> new RuntimeException("File not found"));
    }

    // Delete a file
    public void deleteFile(Long fileId) throws IOException {
        Optional<File> file = fileRepository.findById(fileId);
        if (file.isPresent()) {
            Path filePath = Paths.get(file.get().getFilePath());
            Files.delete(filePath);
            fileRepository.delete(file.get());
        } else {
            throw new RuntimeException("File not found");
        }
    }

    // Share a file
    public String generateShareLink(Long fileId) {
        return fileRepository.findById(fileId)
                .map(f -> "http://localhost:8080/files/download/" + fileId)
                .orElseThrow(() -> new RuntimeException("File not found"));
    }

    // Update file metadata
    public File updateFileMetadata(Long fileId, File updatedFile) {
        return fileRepository.findById(fileId).map(file -> {
            file.setFileName(updatedFile.getFileName());
            file.setFolder(updatedFile.getFolder());
            return fileRepository.save(file);
        }).orElseThrow(() -> new RuntimeException("File not found"));
    }

    // Get version history
    public List<File> getFileVersionHistory(Long fileId) {
        return fileRepository.findByFileIdOrderByVersionAsc(fileId);
    }

    // Extract user from JWT
    private User extractUserFromRequest(HttpServletRequest request) {
        Long userId = extractUID(request);
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
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
        return jwtUtil.extractUserId(token);
    }
}
