package com.benja.model.debtor;

/**
 * Created by Ben on 24 Jul 2017.
 */
public class DebtorCostCentreAutoComp {
    private Long id;
    private String ccNo;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCcNo() {
        return ccNo;
    }

    public void setCcNo(String accNo) {
        this.ccNo = accNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
