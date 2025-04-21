package com.cloudrand.arcapi.api.controller;

import com.cloudrand.arcapi.api.model.Folder;
import com.cloudrand.arcapi.dto.CreateFolderRequest;
import com.cloudrand.arcapi.service.FolderService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/folders")
@RequiredArgsConstructor
public class FolderController {
    
    @Autowired
    private final FolderService folderService;

    @PostMapping("/create")
    public ResponseEntity<Folder> createFolder(
            HttpServletRequest request,
            @RequestBody CreateFolderRequest folderRequest) {

        Folder createdFolder = folderService.createFolder(request, folderRequest);
        return ResponseEntity.ok(createdFolder);
    }

    // Refactored method to remove the userId from the path and rely on the JWT token
    @GetMapping("/user")
    public ResponseEntity<List<Folder>> getUserFolders(HttpServletRequest request) {
        return ResponseEntity.ok(folderService.getUserFolders(request));
    }
}
