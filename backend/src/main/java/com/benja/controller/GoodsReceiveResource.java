package com.benja.controller;

import com.benja.model.goodsReceive.GoodsReceiveDetail;
import com.benja.model.goodsReceive.GoodsReceiveDetailPackage;
import com.benja.model.goodsReceive.GoodsReceiveHeader;
import com.benja.model.goodsReceive.GoodsReceivePackage;
import com.benja.service.GoodsReceiveService;
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
@RequestMapping("/rest/goodsReceive")
public class GoodsReceiveResource {

    @Autowired
    private GoodsReceiveService goodsReceiveService;
    
    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/goodsReceive/add", method = RequestMethod.POST)
    public GoodsReceiveHeader addGoodsReceiveHeader(@RequestBody GoodsReceivePackage goodsReceivePackage) {
        GoodsReceiveHeader goodsReceive = new GoodsReceiveHeader();

        this.populateGoodsReceiveFromPackage(goodsReceive, goodsReceivePackage);
        
        return goodsReceiveService.saveGoodsReceiveHeader(goodsReceive);
    }

    @RequestMapping(value = "/goodsReceive/id", method = RequestMethod.POST)
    public GoodsReceiveHeader getGoodsReceiveHeaderById(@RequestBody Long id) {
        return goodsReceiveService.findGoodsReceiveHeaderById(id);
    }

    @RequestMapping(value = "/goodsReceive/update", method = RequestMethod.POST)
    public GoodsReceiveHeader updateGoodsReceiveHeader(@RequestBody GoodsReceivePackage goodsReceivePackage) {
        GoodsReceiveHeader goodsReceive = goodsReceiveService.findGoodsReceiveHeaderById(goodsReceivePackage.getGiNo());

        this.populateGoodsReceiveFromPackage(goodsReceive, goodsReceivePackage);

        return goodsReceiveService.saveGoodsReceiveHeader(goodsReceive);
    }

    private GoodsReceiveHeader populateGoodsReceiveFromPackage(GoodsReceiveHeader goodsReceiveHeader, GoodsReceivePackage goodsReceivePackage) {
        try {

            goodsReceiveHeader.setId(goodsReceivePackage.getGiNo());
            goodsReceiveHeader.setReceiveDate(goodsReceivePackage.getReceiveDate());
            goodsReceiveHeader.setVehReg(goodsReceivePackage.getVehReg());

            goodsReceiveHeader.setSealNo(goodsReceivePackage.getSealNo());

            goodsReceiveHeader.setModDate(goodsReceivePackage.getModDate());
            goodsReceiveHeader.setModUser(goodsReceivePackage.getModUser());

            if(goodsReceiveHeader.getCreateUser() == null && goodsReceivePackage.getCreateUser() != null)
                goodsReceiveHeader.setCreateUser(goodsReceivePackage.getCreateUser());

        }
        catch (Exception e) {
            return goodsReceiveHeader;
        }

        return goodsReceiveHeader;
    }
    
//Goods Receive Detail
    @RequestMapping(value = "/goodsReceiveDetail/add", method = RequestMethod.POST)
    public GoodsReceiveDetail addGoodsReceiveDetail(@RequestBody GoodsReceiveDetailPackage goodsReceiveDetailPackage) {
        GoodsReceiveDetail goodsReceiveDetail = new GoodsReceiveDetail();

        this.populateGoodsReceiveDetailFromPackage(goodsReceiveDetail, goodsReceiveDetailPackage);

        return goodsReceiveService.saveGoodsReceiveDetail(goodsReceiveDetail);
    }

    @RequestMapping(value = "/goodsReceiveDetail/getAllHeaderId", method = RequestMethod.POST)
    public List<GoodsReceiveDetail> getGoodsReceiveDetailByHeaderId(@RequestBody Long id) {
        List<GoodsReceiveDetail> details;

        details = goodsReceiveService.findAllGoodsReceiveDetailByHeaderId(id);

        return details;
    }

    @RequestMapping(value = "/goodsReceiveDetail/update", method = RequestMethod.POST)
    public void updateGoodsReceiveDetail(@RequestBody GoodsReceiveDetailPackage goodsReceiveDetailPackage) {
        GoodsReceiveDetail goodsReceiveDetail = goodsReceiveService.findGoodsReceiveDetailById(goodsReceiveDetailPackage.getId());

        this.populateGoodsReceiveDetailFromPackage(goodsReceiveDetail, goodsReceiveDetailPackage);

        goodsReceiveService.saveGoodsReceiveDetail(goodsReceiveDetail);
    }

    private GoodsReceiveDetail populateGoodsReceiveDetailFromPackage(GoodsReceiveDetail goodsReceiveDetail, GoodsReceiveDetailPackage goodsReceiveDetailPackage) {
        try {

            goodsReceiveDetail.setId(goodsReceiveDetailPackage.getId());

            /*
            if(goodsReceiveDetail.getGoodsReceiveHeader() == null && goodsReceiveDetailPackage.getGoodsReceive() != null)
                goodsReceiveDetail.setGoodsReceiveHeader(goodsReceiveService.findGoodsReceiveHeaderById(goodsReceiveDetailPackage.getGoodsReceive()));
                */

            //sales order detail

        }
        catch (Exception e) {
            return goodsReceiveDetail;
        }

        return goodsReceiveDetail;
    }

    @RequestMapping(value = "/goodsReceiveDetail/delete", method = RequestMethod.POST)
    public boolean deleteGoodsReceiveDetail(@RequestBody GoodsReceiveDetail goodsReceiveDetail) {

        return goodsReceiveService.deleteGoodsReceiveDetail(goodsReceiveDetail);
    }
}
