package com.benja.controller;


import com.benja.model.goodsIssue.GoodsIssueDetail;
import com.benja.model.goodsIssue.GoodsIssueDetailPackage;
import com.benja.model.goodsIssue.GoodsIssueHeader;
import com.benja.model.goodsIssue.GoodsIssuePackage;
import com.benja.service.GoodsIssueService;
import com.benja.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@RestController
@RequestMapping("/rest/goodsIssue")
public class GoodsIssueResource {

    @Autowired
    private GoodsIssueService goodsIssueService;
    
    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/header/add", method = RequestMethod.POST)
    public GoodsIssueHeader addGoodsIssueHeader(@RequestBody GoodsIssuePackage goodsIssuePackage) {
        GoodsIssueHeader goodsIssue = new GoodsIssueHeader();

        this.populateGoodsIssueFromPackage(goodsIssue, goodsIssuePackage);
        
        return goodsIssueService.saveGoodsIssueHeader(goodsIssue);
    }

    @RequestMapping(value = "/header/id", method = RequestMethod.POST)
    public GoodsIssueHeader getGoodsIssueHeaderById(@RequestBody Long id) {
        return goodsIssueService.findGoodsIssueHeaderById(id);
    }

    @RequestMapping(value = "/header/update", method = RequestMethod.POST)
    public GoodsIssueHeader updateGoodsIssueHeader(@RequestBody GoodsIssuePackage goodsIssuePackage) {
        GoodsIssueHeader goodsIssue = goodsIssueService.findGoodsIssueHeaderById(goodsIssuePackage.getGiNo());

        this.populateGoodsIssueFromPackage(goodsIssue, goodsIssuePackage);

        return goodsIssueService.saveGoodsIssueHeader(goodsIssue);
    }

    private GoodsIssueHeader populateGoodsIssueFromPackage(GoodsIssueHeader goodsIssueHeader, GoodsIssuePackage goodsIssuePackage) {
        try {

            goodsIssueHeader.setId(goodsIssuePackage.getGiNo());
            goodsIssueHeader.setIssueDate(goodsIssuePackage.getIssueDate());
            goodsIssueHeader.setVehReg(goodsIssuePackage.getVehReg());

            goodsIssueHeader.setSealNo(goodsIssuePackage.getSealNo());

            goodsIssueHeader.setModDate(goodsIssuePackage.getModDate());
            goodsIssueHeader.setModUser(goodsIssuePackage.getModUser());

            if(goodsIssueHeader.getCreateUser() == null && goodsIssuePackage.getCreateUser() != null)
                goodsIssueHeader.setCreateUser(goodsIssuePackage.getCreateUser());

        }
        catch (Exception e) {
            return goodsIssueHeader;
        }

        return goodsIssueHeader;
    }
    
//Goods Issue Detail
    @RequestMapping(value = "/detail/add", method = RequestMethod.POST)
    public GoodsIssueDetail addGoodsIssueDetail(@RequestBody GoodsIssueDetailPackage goodsIssueDetailPackage) {
        GoodsIssueDetail goodsIssueDetail = new GoodsIssueDetail();

        this.populateGoodsIssueDetailFromPackage(goodsIssueDetail, goodsIssueDetailPackage);

        return goodsIssueService.saveGoodsIssueDetail(goodsIssueDetail);
    }

    @RequestMapping(value = "/detail/getAllHeaderId", method = RequestMethod.POST)
    public List<GoodsIssueDetail> getGoodsIssueDetailByHeaderId(@RequestBody Long id) {
        List<GoodsIssueDetail> details;

        details = goodsIssueService.findAllGoodsIssueDetailByHeaderId(id);

        return details;
    }

    @RequestMapping(value = "/detail/update", method = RequestMethod.POST)
    public void updateGoodsIssueDetail(@RequestBody GoodsIssueDetailPackage goodsIssueDetailPackage) {
        GoodsIssueDetail goodsIssueDetail = goodsIssueService.findGoodsIssueDetailById(goodsIssueDetailPackage.getId());

        this.populateGoodsIssueDetailFromPackage(goodsIssueDetail, goodsIssueDetailPackage);

        goodsIssueService.saveGoodsIssueDetail(goodsIssueDetail);
    }

    @RequestMapping(value = "/detail/delete", method = RequestMethod.POST)
    public boolean deleteGoodsIssueDetail(@RequestBody GoodsIssueDetail goodsIssueDetail) {

        return goodsIssueService.deleteGoodsIssueDetail(goodsIssueDetail);
    }

    private GoodsIssueDetail populateGoodsIssueDetailFromPackage(GoodsIssueDetail goodsIssueDetail, GoodsIssueDetailPackage goodsIssueDetailPackage) {
        try {

            goodsIssueDetail.setId(goodsIssueDetailPackage.getId());

            if(goodsIssueDetail.getGoodsIssueHeader() == null && goodsIssueDetailPackage.getGoodsIssue() != null)
                goodsIssueDetail.setGoodsIssueHeader(goodsIssueService.findGoodsIssueHeaderById(goodsIssueDetailPackage.getGoodsIssue()));

            //sales order detail

        }
        catch (Exception e) {
            return goodsIssueDetail;
        }

        return goodsIssueDetail;
    }
}
