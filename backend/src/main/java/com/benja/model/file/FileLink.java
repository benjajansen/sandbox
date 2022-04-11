package com.benja.model.file;

import com.benja.model.Comment;
import com.benja.model.security.SecurityUser;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "fl_file")
public class FileLink {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "fl_id", nullable = false)
    private Long id;

    @Column(name = "fl_name", nullable = false)
    private String name;

    @Column(name = "fl_file_name", nullable = false)
    private String fileName;

    @ManyToOne
    @JoinColumn(name = "fl_fk_create_user", nullable = false)
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "fl_create_date", nullable = false)
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public SecurityUser getCreateUser() {
        return createUser;
    }

    public void setCreateUser(SecurityUser createUser) {
        this.createUser = createUser;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
