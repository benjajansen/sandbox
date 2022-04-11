package com.benja.dao;

import com.benja.model.Photo;
import com.benja.model.security.SecurityUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/4/2017.
 */
@Repository
public interface PhotoDao extends CrudRepository<Photo, Long> {
    Photo save(Photo photo);

    List<Photo> findByUser(SecurityUser user);

    List<Photo> findAll();

    Photo findByPhotoId(Long photoId);
}
