package com.cloudrand.arcapi.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateFolderRequest {
    private String folderName;
    private Long parentFolderId;
}
