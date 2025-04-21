package com.cloudrand.arcapi.repository;

import com.cloudrand.arcapi.api.model.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FolderRepository extends JpaRepository<Folder, Long> {
    List<Folder> findByUser_UserId(Long userId);

    // Add this method to find by folderId
    Optional<Folder> findByFolderId(Long folderId);
}
