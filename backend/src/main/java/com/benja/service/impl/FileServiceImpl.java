package com.benja.service.impl;


import com.benja.dao.file.FileDao;
import com.benja.model.file.FileLink;
import com.benja.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileDao fileDao;

    @Override
    public FileLink save(FileLink file) {
        return fileDao.save(file);
    }

    @Override
    public List<FileLink> findAll() {
        return fileDao.findAll();
    }

    @Override
    public List<FileLink> findByName(String name) {
        return fileDao.findByName(name);
    }

    @Override
    public FileLink findByFileName(String fileName) {
        return fileDao.findByFileName(fileName);
    }

    @Override
    public FileLink findById(Long id) {
        return fileDao.findById(id);
    }

    @Override
    public FileLink findByMaxId() {
        return fileDao.findTopByOrderByIdDesc();
    }

}
