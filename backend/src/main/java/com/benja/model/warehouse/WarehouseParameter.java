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
@Table(name = "wms_paramaters")
public class WarehouseParameter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_ps_ID", nullable = false)
    private Long id;

    @Column(name = "wms_ps_auto_palletno", nullable = false)
    private boolean palletNo;

    @Column(name = "wms_ps_palletno", nullable = false, precision = 18, scale = 0)
    private BigDecimal nextPalletNo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isPalletNo() {
        return palletNo;
    }

    public void setPalletNo(boolean palletNo) {
        this.palletNo = palletNo;
    }

    public BigDecimal getNextPalletNo() {
        return nextPalletNo;
    }

    public void setNextPalletNo(BigDecimal nextPalletNo) {
        this.nextPalletNo = nextPalletNo;
    }
}
