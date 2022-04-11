/**
 * Created by Benja on 5/4/2017.
 */

import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DebtorService} from '../../services/debtor.service';
import {SecurityService} from '../../services/security.service';
import {SecurityUser} from '../../models/security/User';
import {ShortDataPackage} from "../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../services/system.service";
import {AdminService} from "../../services/admin.service"
import {DebtCredAutoPackage} from "../../models/dataPackages/DebtCredAutoPackage";
import {MatAutocompleteTrigger} from "@angular/material";
import {GoodsIssueHeader} from "../../models/goodsIssue/GoodsIssueHeader";
import {CostCentreAutoPackage} from "../../models/dataPackages/CostCentreAutoPackage";
import {GoodsIssueService} from "../../services/goodsIssue.service";
import {GoodsIssueDetail} from "../../models/goodsIssue/GoodsIssueDetail";
import {ItemService} from "../../services/item.service";
import {ItemMasterAutoPackage} from "../../models/dataPackages/ItemMasterAutoPackage";
import {GoodsIssueDetailPackage} from "../../models/dataPackages/GoodsIssueDetailPackage";


@Component({
  selector: 'goodsIssue',
  templateUrl: './goodsIssue.component.html',
})
export class GoodsIssueComponent implements OnInit{
  @ViewChild(MatAutocompleteTrigger)
  private trigger: MatAutocompleteTrigger;

  goodsIssueForm: FormGroup;
  goodsIssueDetailForm: FormGroup;

  debtorsAuto: DebtCredAutoPackage[];
  costCentreAuto: CostCentreAutoPackage[];
  itemMasterAuto: ItemMasterAutoPackage[];
  goodsIssueDetails: GoodsIssueDetail[];
  goodsIssueDetailReturn: GoodsIssueDetailPackage = new GoodsIssueDetailPackage();
  goodsIssuesShort: ShortDataPackage[];

  titles: ShortDataPackage[];
  branches: ShortDataPackage[];
  countries: ShortDataPackage[];
  provinces: ShortDataPackage[];
  cities: ShortDataPackage[];

  newGoodsIssueHeader: GoodsIssueHeader = new GoodsIssueHeader();
  newGoodsIssueDetail: GoodsIssueDetail = new GoodsIssueDetail();
  goodsIssueAdded: boolean = false;

  debtorSelected: boolean = false;
  costCentreSelected: boolean = false;
  goodsIssueSelected: boolean = false;

  user: SecurityUser;

  filteredDebtors: DebtCredAutoPackage[];
  filteredCostCentres: CostCentreAutoPackage[];
  filteredGoodsIssues: ShortDataPackage[];


  formErrors = {
    'orderNo':''
    ,'orderDate':''
    ,'type':''
    ,'status':''
    ,'debtor':''
    ,'costCentre':''
    ,'custOrderNo':''
    ,'releaseNo':''
    ,'transporter':''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
    ,'gps': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'cancelled': ''
    ,'cancelledDate': ''
  };

  validationMessages = {
    'orderNo':{
      'incorrect':  'Order Number is not valid'
    }
    ,'orderDate':''
    ,'type':''
    ,'status':''
    ,'debtor':{
      'required':   'Customer Account number is required.',
      'incorrect':  'Customer Account number is not valid'
    }
    ,'costCentre':{
      'required':   'Cost Centre is required.',
      'incorrect':  'Cost Centre is not valid'
    }
    ,'custOrderNo':''
    ,'releaseNo':''
    ,'transporter':''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
    ,'gps': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'cancelled': ''
    ,'cancelledDate': ''
  }

  constructor (private fb: FormBuilder,
               private goodsIssueService:GoodsIssueService,
               private debtorService:DebtorService,
               private systemService:SystemService,
               private adminService:AdminService,
               private itemService:ItemService,
               private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getDebtorsAuto();
    //this.getCostCentreAuto();
    this.getBranches();
    this.getTitles();
    this.getCities();
    this.getCountries();
    this.getProvinces();
    this.getItemsAuto();
    this.createForm();


    console.log(this.newGoodsIssueHeader)
    this.goodsIssueDetails = [this.newGoodsIssueDetail];
  }

  filterDebtors(val: string){
    this.filteredDebtors = this.debtorsAuto.filter(option =>
      (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
    );

    //This is to make sure a valid debtor has been selected
    if (this.filteredDebtors?this.filteredDebtors.length>0:false) {
      if ((this.goodsIssueForm.get('debtor').value) &&
        (!this.filteredDebtors.find(debt => debt.accNo == this.goodsIssueForm.get('debtor').value))) {
        this.debtorSelected = false;
        this.goodsIssueForm.get('debtor').setErrors({'incorrect':true});
        this.formErrors['debtor'] += this.validationMessages['debtor'].incorrect;
      }
      else if ( (this.goodsIssueForm.get('debtor').value) &&
        (this.filteredDebtors.find(debt => debt.accNo == this.goodsIssueForm.get('debtor').value)) &&
        (this.goodsIssueForm.get('debtor').value == this.filteredDebtors.find(debt => debt.accNo == this.goodsIssueForm.get('debtor').value).accNo)) {
        this.debtorSelected = true;
        this.goodsIssueForm.get('debtor').setErrors(null);
      }
    }
    else {
      this.debtorSelected = false;
    }

    if(this.debtorSelected) {
      this.getCostCentreByDebtorAuto(this.filteredDebtors.find(debt => debt.accNo == this.goodsIssueForm.get('debtor').value).id);
    }
  }

  filterCostCentres(val: string){
    this.filteredCostCentres = this.costCentreAuto.filter(option =>
      (option.ccNo.toLowerCase() + " " + option.name.toLowerCase()).includes(val.toLowerCase())
    );

    if ((this.debtorSelected) &&
        (this.filteredCostCentres?this.filteredCostCentres.length>0:false)) {
      if ((this.goodsIssueForm.get('costCentre').value) &&
        (!this.filteredCostCentres.find(cost => cost.ccNo == this.goodsIssueForm.get('costCentre').value))) {
        this.costCentreSelected = false;
        this.goodsIssueForm.get('costCentre').setErrors({'incorrect':true});
        this.formErrors['costCentre'] += this.validationMessages['costCentre'].incorrect;
      }
      else if ( (this.goodsIssueForm.get('costCentre').value) &&
        (this.filteredCostCentres.find(cost => cost.ccNo == this.goodsIssueForm.get('costCentre').value)) &&
        (this.goodsIssueForm.get('costCentre').value == this.filteredCostCentres.find(cost => cost.ccNo == this.goodsIssueForm.get('costCentre').value).ccNo)) {
        this.costCentreSelected = true;
        this.goodsIssueForm.get('costCentre').setErrors(null);
      }
    }
    else {
      this.costCentreSelected = false;
    }

    if(this.costCentreSelected) {
      this.getGoodsIssueShort();
      /*
      this.getGoodsIssueByDebtorAndCostCentre(
        this.filteredDebtors.find(debt => debt.accNo == this.goodsIssueForm.get('debtor').value).id,
        this.filteredCostCentres.find(cost => cost.ccNo == this.goodsIssueForm.get('costCentre').value).id);
        */
    }
  }

  filterGoodsIssues(val: string) {
    this.filteredGoodsIssues = this.goodsIssuesShort.filter(option =>
      (option.id + " " + option.value).includes(val)
    );

    if ((this.costCentreSelected) &&
      (this.filteredGoodsIssues?this.filteredGoodsIssues.length>0:false)) {
      if ((this.goodsIssueForm.get('orderNo').value) &&
        (!this.filteredGoodsIssues.find(sale => sale.id == this.goodsIssueForm.get('orderNo').value))) {
        this.goodsIssueSelected = false;
        this.goodsIssueForm.get('orderNo').setErrors({'incorrect':true});
        this.formErrors['orderNo'] += this.validationMessages['orderNo'].incorrect;
      }
      else if ( (this.goodsIssueForm.get('orderNo').value) &&
        (this.filteredGoodsIssues.find(sale => sale.id == this.goodsIssueForm.get('orderNo').value)) &&
        (this.goodsIssueForm.get('orderNo').value == this.filteredGoodsIssues.find(sale => sale.id == this.goodsIssueForm.get('orderNo').value).id)) {
        this.goodsIssueSelected = true;
        this.goodsIssueForm.get('orderNo').setErrors(null);
      }
    }
    else {
      this.goodsIssueSelected = false;
      this.goodsIssueForm.get('orderNo').setErrors({'incorrect':true});
      this.formErrors['orderNo'] += this.validationMessages['orderNo'].incorrect;
    }

    if(this.goodsIssueSelected) {
      this.getGoodsIssueByOrderNumber(
        this.filteredGoodsIssues.find(sale => sale.id == this.goodsIssueForm.get('orderNo').value).id);
    }
  }

  getDebtorsAuto() {
    this.debtorService.getDebtorAuto().subscribe(
      data => {
        this.debtorsAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredDebtors = this.debtorsAuto;
        console.log(this.debtorsAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getCostCentreAuto() {
    this.debtorService.getCostCentreAuto().subscribe(
      data => {
        this.costCentreAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredCostCentres = this.costCentreAuto;
        console.log(this.costCentreAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getCostCentreByDebtorAuto(debtorId: number) {
    console.log("CC debtID: ")
    console.log(debtorId)
    this.debtorService.getCostCentreByDebtorAuto(debtorId).subscribe(
      data => {
        this.costCentreAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredCostCentres = this.costCentreAuto;
        console.log(this.costCentreAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getBranches() {
    this.adminService.getBranchShort().subscribe(
      data => {
        this.branches = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.branches);
      },
      error => console.log(error)
    )
  }

  getProvinces() {
    this.adminService.getProvinceShort().subscribe(
      data => {
        this.provinces = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.provinces);
      },
      error => console.log(error)
    )
  }

  getCities() {
    this.adminService.getCityTownShort().subscribe(
      data => {
        this.cities = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.cities);
      },
      error => console.log(error)
    )
  }

  getCountries() {
    this.adminService.getCountryShort().subscribe(
      data => {
        this.countries = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.countries);
      },
      error => console.log(error)
    )
  }

  getTitles() {
    this.systemService.getTitleShort().subscribe(
      data => {
        this.titles = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.titles);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getItemsAuto() {
    this.itemService.getItemMasterAuto().subscribe(
      data => {
        this.itemMasterAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log("items")
        console.log(this.itemMasterAuto)
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getGoodsIssueShort() {
    this.goodsIssueService.getGoodsIssueHeaderShort().subscribe(
      data => {
        this.goodsIssuesShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredGoodsIssues = this.goodsIssuesShort;
        console.log(this.goodsIssuesShort);
      },
      error => console.log("1 " + error)
    )
  }
  /*
  getGoodsIssueByDebtorAndCostCentre(debtor: number, costCentre: number) {
    this.goodsIssueService.getGoodsIssueShortByDebtorAndCostCentre(debtor, costCentre).subscribe(
      data => {
        this.goodsIssuesShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredGoodsIssues = this.goodsIssuesShort;
        console.log(this.goodsIssuesShort);
      },
      error => console.log("1 " + error)
    )
  }
*/

  getGoodsIssueByOrderNumber(id: number) {
    this.goodsIssueService.getGoodsIssueHeaderById(id).subscribe(
      data => {
        this.newGoodsIssueHeader = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.newGoodsIssueHeader);
        this.populateForm();
        this.getGoodsIssueDetailByOrderNumber(id);
      },
      error => console.log("1 " + error)
    )
  }

  getGoodsIssueDetailByOrderNumber(headerId: number) {
    this.goodsIssueService.getAllGoodsIssueDetailByHeaderId(headerId).subscribe(
      data => {
        this.goodsIssueDetails = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.goodsIssueDetails = [...this.goodsIssueDetails, this.newGoodsIssueDetail];
        console.log(this.goodsIssueDetails);
      },
      error => console.log("1 " + error)
    )
  }

  soValid() {
    console.log("so Valid")
    console.log(this.goodsIssueDetails)
  }

  soAdd(soDetails: GoodsIssueDetail, index: number) {

      this.goodsIssueDetails = [...this.goodsIssueDetails, soDetails];
  }

  soEdit(soDetails: GoodsIssueDetail, index: number) {
    console.log("edit")
    console.log(index)
    console.log(this.goodsIssueDetails[index])
    console.log(soDetails)


    this.goodsIssueDetails[index].lineNumber = soDetails.lineNumber;
    this.goodsIssueDetails[index].salesOrderDetail.itemLink.item.code = soDetails.salesOrderDetail.itemLink.item.toString();
    console.log(this.goodsIssueDetails[index])
  }

  soDelete(index: number) {
    if (this.goodsIssueDetails[index].id) {
      console.log(this.goodsIssueDetails[index])
      this.goodsIssueService.deleteGoodsIssueDetail(this.goodsIssueDetails[index]).subscribe(
        data => {
          console.log(index + " is delete")
        },
        error2 => console.log("Dom error: " + error2)
      );
    }

    this.goodsIssueDetails.splice(index, 1);
  }

  populateForm() {
    console.log("pop called")
/*
    //this.goodsIssueForm.get('orderDate').setValue(this.newGoodsIssue.orderDate);
    this.goodsIssueForm.get('type').setValue(this.newGoodsIssue.sealNo);
    this.goodsIssueForm.get('status').setValue(this.newGoodsIssue.status);
    //this.goodsIssueForm.get('debtor').setValue(this.newGoodsIssue.debtor?this.newGoodsIssue.debtor.accNo?this.newGoodsIssue.debtor.accNo:'':'');
    //this.goodsIssueForm.get('costCentre').setValue(this.newGoodsIssue.costCentre?this.newGoodsIssue.costCentre.ccNo?this.newGoodsIssue.costCentre.ccNo:'':'');
    this.goodsIssueForm.get('custOrderNo').setValue(this.newGoodsIssue.custOrderNo);
    this.goodsIssueForm.get('releaseNo').setValue(this.newGoodsIssue.releaseNo);
    this.goodsIssueForm.get('transporter').setValue(this.newGoodsIssue.transporter);
    this.goodsIssueForm.get('street1').setValue(this.newGoodsIssue.street1?this.newGoodsIssue.street1:'');
    this.goodsIssueForm.get('street2').setValue(this.newGoodsIssue.street2?this.newGoodsIssue.street2:'');
    this.goodsIssueForm.get('street3').setValue(this.newGoodsIssue.street3?this.newGoodsIssue.street3:'');
    this.goodsIssueForm.get('street4').setValue(this.newGoodsIssue.street4?this.newGoodsIssue.street4:'');
    this.goodsIssueForm.get('streetPostalCode').setValue(this.newGoodsIssue.streetPostalCode?this.newGoodsIssue.streetPostalCode:'');
    this.goodsIssueForm.get('branch').setValue(this.newGoodsIssue.branch?this.newGoodsIssue.branch.description?this.newGoodsIssue.branch.description:'':'');
    this.goodsIssueForm.get('province').setValue(this.newGoodsIssue.province?this.newGoodsIssue.province.description?this.newGoodsIssue.province.description:'':'');
    this.goodsIssueForm.get('country').setValue(this.newGoodsIssue.country?this.newGoodsIssue.country.description?this.newGoodsIssue.country.description:'':'');
    this.goodsIssueForm.get('city').setValue(this.newGoodsIssue.city?this.newGoodsIssue.city.description?this.newGoodsIssue.city.description:'':'');
    this.goodsIssueForm.get('gps').setValue(this.newGoodsIssue.gps?this.newGoodsIssue.gps:'');
    this.goodsIssueForm.get('oppSName').setValue(this.newGoodsIssue.oppSName?this.newGoodsIssue.oppSName:'');
    this.goodsIssueForm.get('oppFName').setValue(this.newGoodsIssue.oppFName?this.newGoodsIssue.oppFName:'');
    this.goodsIssueForm.get('oppTitle').setValue(this.newGoodsIssue.oppTitle?this.newGoodsIssue.oppTitle.description?this.newGoodsIssue.oppTitle.description:'':'');
    this.goodsIssueForm.get('oppCellNo').setValue(this.newGoodsIssue.oppCellNo?this.newGoodsIssue.oppCellNo:'');
    this.goodsIssueForm.get('oppEmail').setValue(this.newGoodsIssue.oppEmail?this.newGoodsIssue.oppEmail:'');
    this.goodsIssueForm.get('delInstruction').setValue(this.newGoodsIssue.street1?this.newGoodsIssue.delInstruction:'');
    this.goodsIssueForm.get('comments').setValue(this.newGoodsIssue.street1?this.newGoodsIssue.comments:'');
    this.goodsIssueForm.get('cancelled').setValue(this.newGoodsIssue.cancelled?this.newGoodsIssue.cancelled:false);
    this.goodsIssueForm.get('cancelledDate').setValue(this.newGoodsIssue.cancelledDate?this.newGoodsIssue.cancelledDate:'');
    */
  }

  createForm() {
    this.goodsIssueForm = this.fb.group({

      orderNo: [
        this.newGoodsIssueHeader.id
      ]
      /*
      ,orderDate: [
        this.newGoodsIssue.orderDate
        ,Validators.required
      ]
      ,type: [
        this.newGoodsIssue.type
      ]
      ,status: [
        this.newGoodsIssue.status
      ]
      ,debtor: [
        this.newGoodsIssue.debtor
        ,Validators.required
      ]
      ,costCentre: [
        this.newGoodsIssue.costCentre
        ,Validators.required
      ]
      ,custOrderNo: [
        this.newGoodsIssue.custOrderNo
      ]
      ,releaseNo: [
        this.newGoodsIssue.releaseNo
      ]
      ,transporter: [
        this.newGoodsIssue.transporter
      ]
      ,street1: [
        this.newGoodsIssue.street1
      ]
      ,street2: [
        this.newGoodsIssue.street2
      ]
      ,street3: [
        this.newGoodsIssue.street3
      ]
      ,street4: [
        this.newGoodsIssue.street4
      ]
      ,streetPostalCode: [
        this.newGoodsIssue.streetPostalCode
      ]
      ,branch: [
        this.newGoodsIssue.branch
      ]
      ,country: [
        this.newGoodsIssue.country
      ]
      ,province: [
        this.newGoodsIssue.province
      ]
      ,city: [
        this.newGoodsIssue.city
      ]
      ,gps: [
        this.newGoodsIssue.gps
      ]
      ,oppSName: [
        this.newGoodsIssue.oppSName
      ]
      ,oppFName: [
        this.newGoodsIssue.oppFName
      ]
      ,oppTitle: [
        this.newGoodsIssue.oppTitle
      ]
      ,oppCellNo: [
        this.newGoodsIssue.oppCellNo
      ]
      ,oppEmail: [
        this.newGoodsIssue.oppEmail
      ]
      ,delInstruction: [
        this.newGoodsIssue.delInstruction
      ]
      ,comments: [
        this.newGoodsIssue.comments
      ]
      ,cancelled: [
        this.newGoodsIssue.cancelled
      ]
      ,cancelledDate: [
        this.newGoodsIssue.cancelledDate
      ]
      */
    });

    this.goodsIssueForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.goodsIssueForm.get('debtor').valueChanges.subscribe(
      data => {
        this.filterDebtors(data)
      }
    );

    this.goodsIssueForm.get('costCentre').valueChanges.subscribe(
      data => {
        this.filterCostCentres(data)
      }
    );

    this.goodsIssueForm.get('orderNo').valueChanges.subscribe(
      data => {
        this.filterGoodsIssues(data)
      }
    );

    this.goodsIssueDetailForm = this.fb.group({
      goodsIssue: [
        this.newGoodsIssueDetail.goodsIssueHeader
      ]
      /*
      ,type: [
        this.newGoodsIssueDetail.type
        ,Validators.required
      ]
      ,item: [
        this.newGoodsIssueDetail.type
      ]
      */
      ,quantity: [
        this.newGoodsIssueDetail.lineNumber
      ]
    })

    this.goodsIssueDetailForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onClick() {
    console.log("clicked")
  }

  onValueChanged(data?: any) {
    if (!this.goodsIssueForm) {return; }
    if (!this.goodsIssueDetailForm) {return; }

    const form = this.goodsIssueForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }

    /*
    //Check for duplicate on the Account Number
    if (this.costCentreShort?this.costCentreShort.length>0:false) {
      if ((this.goodsIssueForm.get('ccNo').value) &&
          (this.goodsIssueForm.get('ccNo').value != this.costCentreShort.find(debt => debt.value == this.autoCompleteControl.value).value)) {
        if (this.costCentreShort.find(debt => debt.value.toLowerCase() === this.goodsIssueForm.get('ccNo').value.toLowerCase())) {
          this.formErrors['ccNo'] += this.validationMessages['ccNo'].duplicate;
          this.goodsIssueForm.get('ccNo').setErrors({'incorrect': true});
        }
        else {
          this.goodsIssueForm.get('accNo').setErrors(null)
        }
      }
    }
    */
  }



  onSubmit() {
    this.newGoodsIssueHeader = this.goodsIssueForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newGoodsIssueHeader.createUser = this.user;
        this.goodsIssueService.sendGoodsIssueHeader(this.newGoodsIssueHeader).subscribe(
          data => {
            this.goodsIssueAdded = true;
            this.newGoodsIssueHeader = new GoodsIssueHeader();

            for(var i = 0; i <= this.goodsIssueDetails.length - 1; i++){
              //this.goodsIssueDetailReturn.goodsIssue = JSON.parse(JSON.parse(JSON.stringify(data))._body).orderNo;
              this.goodsIssueDetailReturn.quantity = this.goodsIssueDetails[i].lineNumber;
              this.goodsIssueDetailReturn.item = this.goodsIssueDetails[i].salesOrderDetail.itemLink.item.code;
              //this.goodsIssueDetailReturn.type = this.goodsIssueDetails[i].type;

              console.log("submit");

              this.goodsIssueService.sendGoodsIssueDetail(this.goodsIssueDetails[i]).subscribe(
                data => {
                  console.log(i + " is deur")
                },
                error2 => console.log("Dom error: " + error2)
              );
            }

          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newGoodsIssueHeader = this.goodsIssueForm.value;
    console.log(this.newGoodsIssueHeader);
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newGoodsIssueHeader.createUser = this.user;
        this.goodsIssueService.updateGoodsIssueHeader(this.newGoodsIssueHeader).subscribe(
          data => {
            this.goodsIssueAdded = true;
            this.newGoodsIssueHeader = new GoodsIssueHeader();

            for(var i = 0; i <= this.goodsIssueDetails.length - 1; i++){
              if (!this.goodsIssueDetails[i].id) {
                //this.goodsIssueDetailReturn.goodsIssue = JSON.parse(JSON.parse(JSON.stringify(data))._body).orderNo;

                //this.goodsIssueDetailReturn.type = this.goodsIssueDetails[i].type;

                console.log("sales order detail to send")
                console.log(this.goodsIssueDetails[i])

                console.log("update one");

                this.goodsIssueService.sendGoodsIssueDetail(this.goodsIssueDetails[i]).subscribe(
                  data => {
                    console.log(i + " is deur")
                  },
                  error2 => console.log("Add error: " + error2)
                );
              } else {
                console.log("sales order detail to update")
                this.goodsIssueDetailReturn = new GoodsIssueDetailPackage();
                console.log(this.goodsIssueDetails[i])
                console.log("package")
                console.log(this.goodsIssueDetailReturn)
                //this.goodsIssueDetailReturn.goodsIssue = this.goodsIssueDetails[i].goodsIssue.orderNo
                console.log("1")
                //this.goodsIssueDetailReturn.quantity = this.goodsIssueDetails[i].quantity;
                console.log("2")
                //this.goodsIssueDetailReturn.item = this.goodsIssueDetails[i].item.code;
                console.log("3")
                //this.goodsIssueDetailReturn.pickingOrder = this.goodsIssueDetails[i].pickingOrder;
                console.log("4")
                //this.goodsIssueDetailReturn.type = this.goodsIssueDetails[i].type;
                console.log("5")
                this.goodsIssueDetailReturn.id = this.goodsIssueDetails[i].id;

                console.log("update two");

                this.goodsIssueService.updateGoodsIssueDetail(this.goodsIssueDetailReturn).subscribe(
                  data => {
                    console.log(i + " is deur")
                  },
                  error2 => console.log("Update error: " + error2)
                );
              }
            }

          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
