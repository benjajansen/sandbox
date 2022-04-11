package com.benja.dao.file;

import com.benja.model.file.FileLink;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface FileDao extends CrudRepository<FileLink, Long>{

    FileLink save(FileLink file);

    List<FileLink> findAll();

    List<FileLink> findByName(String name);

    FileLink findByFileName(String fileName);

    FileLink findById(Long id);

    FileLink findTopByOrderByIdDesc();
}
