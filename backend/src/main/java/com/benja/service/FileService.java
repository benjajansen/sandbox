package com.benja.service;

import com.benja.model.file.FileLink;

import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
public interface FileService {

    FileLink save(FileLink file);

    List<FileLink> findAll();

    List<FileLink> findByName(String name);

    FileLink findByFileName(String fileName);

    FileLink findById(Long id);

    FileLink findByMaxId();
}
