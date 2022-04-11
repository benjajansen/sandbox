package com.benja.service.impl;

import com.benja.dao.PhotoDao;
import com.benja.model.Photo;
import com.benja.model.security.SecurityUser;
import com.benja.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
@Service
public class PhotoServiceImpl implements PhotoService {

    @Autowired
    private PhotoDao photoDao;

    @Override
    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    public List<Photo> findAll() {
        return photoDao.findAll();
    }

    public List<Photo> findByUser(SecurityUser user) {
        return photoDao.findByUser(user);
    }

    public Photo findByPhotoId(Long photoId) {
        return photoDao.findByPhotoId(photoId);
    }
}
