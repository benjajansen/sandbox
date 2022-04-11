package com.benja.model.debtor;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Ben on 29 Jun 2017.
 */
@Entity
@Table(name = "drm_Parameter")
public class DebtorParameter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_ID", nullable = false)
    private Long id;

    @Column(name = "drm_AutoGen")
    private boolean autoGen;

    @Column(name = "drm_LastNo", nullable = false, length = 30)
    private String lastNumberUsed;

    @Column(name = "drm_Length", nullable = false, precision = 11, scale = 0)
    private BigDecimal accLength;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isAutoGen() {
        return autoGen;
    }

    public void setAutoGen(boolean autoGen) {
        this.autoGen = autoGen;
    }

    public String getLastNumberUsed() {
        return lastNumberUsed;
    }

    public void setLastNumberUsed(String lastNumberUsed) {
        this.lastNumberUsed = lastNumberUsed;
    }

    public BigDecimal getAccLength() {
        return accLength;
    }

    public void setAccLength(BigDecimal accLength) {
        this.accLength = accLength;
    }
}
