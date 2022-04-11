package com.benja.service;

import com.benja.model.Photo;
import com.benja.model.security.SecurityUser;

import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
public interface PhotoService {

    Photo save(Photo photo);

    List<Photo> findAll();

    List<Photo> findByUser(SecurityUser user);

    Photo findByPhotoId(Long photoId);
}
