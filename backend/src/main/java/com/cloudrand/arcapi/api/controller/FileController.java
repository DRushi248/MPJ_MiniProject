package com.cloudrand.arcapi.api.controller;

import com.cloudrand.arcapi.api.model.File;
import com.cloudrand.arcapi.service.FileService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    // Upload a file
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            HttpServletRequest request,
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "folderId", required = false) Long folderId
    ) {
        try {
            fileService.uploadFile(request, file, folderId);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload file");
        }
    }

    // List user files
    @GetMapping("/list")
    public ResponseEntity<List<File>> listUserFiles(HttpServletRequest request) {
        return ResponseEntity.ok(fileService.getFilesByUser(request));
    }

    // Download a file
    @GetMapping("/download/{id}")
    public ResponseEntity<String> downloadFile(@PathVariable Long id) {
        try {
            File file = fileService.downloadFile(id);
            return ResponseEntity.ok("File download link: " + file.getFilePath());
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body("File not found");
        }
    }

    // Delete a file
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFile(@PathVariable Long id) {
        try {
            fileService.deleteFile(id);
            return ResponseEntity.ok("File deleted successfully");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to delete file");
        }
    }

    // Share a file
    @PostMapping("/share/{id}")
    public ResponseEntity<String> shareFile(@PathVariable Long id) {
        try {
            String shareLink = fileService.generateShareLink(id);
            return ResponseEntity.ok("Share link generated: " + shareLink);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body("File not found");
        }
    }

    // Get version history
    @GetMapping("/version/{id}")
    public ResponseEntity<List<File>> getFileVersionHistory(@PathVariable Long id) {
        try {
            List<File> fileVersions = fileService.getFileVersionHistory(id);
            return ResponseEntity.ok(fileVersions);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    // Update file metadata
    @PutMapping("/update/{id}")
    public ResponseEntity<File> updateFileMetadata(
            @PathVariable Long id,
            @RequestBody File updatedFile
    ) {
        try {
            File updated = fileService.updateFileMetadata(id, updatedFile);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }
}
