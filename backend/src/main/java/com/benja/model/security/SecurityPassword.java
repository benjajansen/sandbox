package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_password")
public class SecurityPassword {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sec_fk_user", nullable = false)
    private SecurityUser user;

    @Column(name = "sec_current_password", nullable = false, length = 50)
    private String currentPassword;

    @Column(name = "sec_previous_one", length = 50)
    private String previousOne;

    @Column(name = "sec_previous_two", length = 50)
    private String previousTwo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SecurityUser getUser() {
        return user;
    }

    public void setUser(SecurityUser user) {
        this.user = user;
    }

    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public String getPreviousOne() {
        return previousOne;
    }

    public void setPreviousOne(String previousOne) {
        this.previousOne = previousOne;
    }

    public String getPreviousTwo() {
        return previousTwo;
    }

    public void setPreviousTwo(String previousTwo) {
        this.previousTwo = previousTwo;
    }
}
