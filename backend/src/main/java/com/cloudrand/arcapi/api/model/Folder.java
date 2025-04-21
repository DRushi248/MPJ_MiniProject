package com.cloudrand.arcapi.api.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "folders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Folder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "folderId")
    private Long folderId;

    @Column(name = "folderName", nullable = false)
    private String folderName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    private User user; // Folder belongs to a user

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parentFolderId")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Folder parentFolder; // Nested folders

    @OneToMany(mappedBy = "folder", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<File> files; // List of files in this folder

    @OneToMany(mappedBy = "parentFolder", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Folder> subfolders; // List of subfolders
}
