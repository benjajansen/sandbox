package com.benja.model.creditor;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Ben on 29 Jun 2017.
 */
@Entity
@Table(name = "crm_Parameter")
public class CreditorParameter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "crm_ID", nullable = false)
    private Long id;

    @Column(name = "crm_AutoGen")
    private boolean autoGen;

    @Column(name = "crm_LastNo", nullable = false, length = 30)
    private String lastNumberUsed;

    @Column(name = "crm_Length", nullable = false, precision = 11, scale = 0)
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
