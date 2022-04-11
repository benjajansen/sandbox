package com.benja.model.security;

import com.benja.model.warehouse.Warehouse;
import com.benja.model.debtor.Debtor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_user")
public class SecurityUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_id", nullable = false)
    private Long id;

    @Column(name = "sec_first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "sec_last_name", nullable = false, length = 50)
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "sec_fk_customer")
    private Debtor customer;

    @ManyToOne
    @JoinColumn(name = "sec_fk_warehouse")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "sec_fk_group_header")
    private SecurityGroupHeader groupHeader;

    @Column(name = "sec_job_title", length = 60)
    private String jobTitle;

    @Column(name = "sec_tel_no", length = 20)
    private String telNo;

    @Column(name = "sec_cell_no", length = 20)
    private String cellNo;

    @Column(name = "sec_email", nullable = false, length = 100)
    private String email;

    @Column(name = "sec_logon_name", nullable = false, length = 50)
    private String logonName;

    @Column(name = "sec_register_date", nullable = false)
    private Date registerDate;

    @ManyToOne
    @JoinColumn(name = "sec_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "sec_create_date", nullable = false)
    private Date createDate;

    @Column(name = "sec_active", nullable = false)
    private boolean active;

    @Column(name = "sec_inactive_date")
    private Date inactiveDate;
/*
This looks like it creates another table that only has a fk to user and photo's with the purpose of seeing which users liked which photos
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Photo> photoList;

    @ManyToMany
    private List<Photo> likedPhotoList;
*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Debtor getCustomer() {
        return customer;
    }

    public void setCustomer(Debtor customer) {
        this.customer = customer;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public SecurityGroupHeader getGroupHeader() {
        return groupHeader;
    }

    public void setGroupHeader(SecurityGroupHeader groupHeader) {
        this.groupHeader = groupHeader;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public String getCellNo() {
        return cellNo;
    }

    public void setCellNo(String cellNo) {
        this.cellNo = cellNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLogonName() {
        return logonName;
    }

    public void setLogonName(String logonName) {
        this.logonName = logonName;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Date getInactiveDate() {
        return inactiveDate;
    }

    public void setInactiveDate(Date inactiveDate) {
        this.inactiveDate = inactiveDate;
    }
}
