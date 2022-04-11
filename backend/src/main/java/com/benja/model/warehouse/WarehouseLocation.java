package com.benja.model.warehouse;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "wms_location")
public class WarehouseLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_ln_id", nullable = false)
    private Long id;

    @Column(name = "wms_ln_identifier", nullable = false, length = 15)
    private String identifier;

    @Column(name = "wms_ln_description", nullable = false, length = 50)
    private String description;

    @ManyToOne
    @JoinColumn(name = "wms_ln_fk_zone", nullable = false)
    private WarehouseZone warehouseZone;

    @Column(name = "wms_ln_pick_seq", nullable = false, precision = 18, scale = 0)
    private BigDecimal pickSequence;

    @Column(name = "wms_ln_putaway_seq", nullable = false, precision = 18, scale = 0)
    private BigDecimal putAwaySequence;

    @Column(name = "wms_ln_hold", nullable = false)
    private boolean locationHold;

    @Column(name = "wms_ln_cube_size", nullable = false, precision = 18, scale = 5)
    private BigDecimal cubeSize;

    @ManyToOne
    @JoinColumn(name = "wms_ln_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_ln_create_date")
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
