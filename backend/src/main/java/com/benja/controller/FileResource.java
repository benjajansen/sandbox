package com.benja.controller;

import com.benja.model.Photo;
import com.benja.model.file.FileLink;
import com.benja.model.security.SecurityUser;
import com.benja.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
@RestController
@RequestMapping("/rest/file")
public class FileResource {

    private String imageName;

    @Autowired
    private FileService fileService;

    @RequestMapping(value = "/admin/upload", method = RequestMethod.POST)
    public String uploadAdminFile(MultipartHttpServletRequest request){      //HttpServletResponse response, HttpServletRequest request) {
        MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
        Iterator<String> it = multipartHttpServletRequest.getFileNames();

        MultipartFile multipartFile = multipartHttpServletRequest.getFile(it.next());

        //String fileName = multipartFile.getOriginalFilename();
        String[] fileFrags = multipartFile.getOriginalFilename().split("\\.");
        String extension = fileFrags[fileFrags.length-1];

        String fileName;
        FileLink file = fileService.findByMaxId();

        if(file == null) {
            fileName = "0000000001";
        } else {
            fileName = String.format("%010d", file.getId());
        }

        String path = new File("src/main/resources/static/admin").getAbsolutePath() + "\\" + fileName + "." + extension;
        try {
            multipartFile.transferTo(new File(path));
            System.out.println(path);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Upload Success!";
    }

    @RequestMapping(value = "/fileLink/add", method = RequestMethod.POST)
    public FileLink addFileLink(@RequestBody FileLink fileLink) {
        return fileService.save(fileLink);
    }

    @RequestMapping(value = "/fileLink/id", method = RequestMethod.POST)
    public FileLink getFileLinkById(@RequestBody Long id) {
        return fileService.findById(id);
    }

    @RequestMapping(value = "/fileLink/update", method = RequestMethod.POST)
    public void updateFileLink(@RequestBody FileLink fileLink) {
        FileLink currentPhoto = fileService.findById(fileLink.getId());
        currentPhoto.setFileName(fileLink.getFileName());
        fileService.save(currentPhoto);
    }
}
