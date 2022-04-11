/**
 * Created by Benja on 5/4/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DebtorService} from '../../services/debtor.service';
import {SecurityService} from '../../services/security.service';
import {SecurityUser} from '../../models/security/User';
import {ShortDataPackage} from "../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../services/system.service";
import {AdminService} from "../../services/admin.service"
import {DebtCredAutoPackage} from "../../models/dataPackages/DebtCredAutoPackage";

import {SalesOrderHeader} from "../../models/salesOrder/SalesOrderHeader";
import {CostCentreAutoPackage} from "../../models/dataPackages/CostCentreAutoPackage";
import {SalesOrderService} from "../../services/salesOrder.service";
import {SalesOrderDetail} from "../../models/salesOrder/SalesOrderDetail";
import {ItemService} from "../../services/item.service";
import {ItemMasterAutoPackage} from "../../models/dataPackages/ItemMasterAutoPackage";
import {SalesOrderDetailPackage} from "../../models/dataPackages/SalesOrderDetailPackage";


@Component({
  selector: 'salesOrderHeader',
  templateUrl: './salesOrderHeader.component.html',
})
export class SalesOrderHeaderComponent implements OnInit{

  salesOrderForm: FormGroup;
  salesOrderDetailForm: FormGroup;

  debtorsAuto: DebtCredAutoPackage[];
  costCentreAuto: CostCentreAutoPackage[];
  itemMasterAuto: ItemMasterAutoPackage[];
  salesOrderDetails: SalesOrderDetail[];
  salesOrderDetailReturn: SalesOrderDetailPackage = new SalesOrderDetailPackage();
  salesOrdersShort: ShortDataPackage[];

  titles: ShortDataPackage[];
  branches: ShortDataPackage[];
  countries: ShortDataPackage[];
  provinces: ShortDataPackage[];
  cities: ShortDataPackage[];

  newSalesOrderHeader: SalesOrderHeader = new SalesOrderHeader();
  newSalesOrderDetail: SalesOrderDetail = new SalesOrderDetail();
  salesOrderAdded: boolean = false;

  debtorSelected: boolean = false;
  costCentreSelected: boolean = false;
  salesOrderSelected: boolean = false;

  user: SecurityUser;

  filteredDebtors: DebtCredAutoPackage[];
  filteredCostCentres: CostCentreAutoPackage[];
  filteredSalesOrders: ShortDataPackage[];


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
               private salesOrderService:SalesOrderService,
               private debtorService:DebtorService,
               private systemService:SystemService,
               private adminService:AdminService,
               private itemService:ItemService,
               private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getDebtorsAuto();
    this.getBranches();
    this.getTitles();
    this.getCities();
    this.getCountries();
    this.getProvinces();
    this.getItemsAuto();
    this.createForm();

    this.salesOrderDetails = [this.newSalesOrderDetail];
  }

  filterDebtors(val: string){
    this.filteredDebtors = this.debtorsAuto.filter(option =>
      (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
    );

    //This is to make sure a valid debtor has been selected
    if (this.filteredDebtors?this.filteredDebtors.length>0:false) {
      if ((this.salesOrderForm.get('debtor').value) &&
        (!this.filteredDebtors.find(debt => debt.accNo == this.salesOrderForm.get('debtor').value))) {
        this.debtorSelected = false;
        this.salesOrderForm.get('debtor').setErrors({'incorrect':true});
        this.formErrors['debtor'] += this.validationMessages['debtor'].incorrect;
      }
      else if ( (this.salesOrderForm.get('debtor').value) &&
        (this.filteredDebtors.find(debt => debt.accNo == this.salesOrderForm.get('debtor').value)) &&
        (this.salesOrderForm.get('debtor').value == this.filteredDebtors.find(debt => debt.accNo == this.salesOrderForm.get('debtor').value).accNo)) {
        this.debtorSelected = true;
        this.salesOrderForm.get('debtor').setErrors(null);
      }
    }
    else {
      this.debtorSelected = false;
    }

    if(this.debtorSelected) {
      this.getCostCentreByDebtorAuto(this.filteredDebtors.find(debt => debt.accNo == this.salesOrderForm.get('debtor').value).id);
    }
  }

  filterCostCentres(val: string){
    this.filteredCostCentres = this.costCentreAuto.filter(option =>
      (option.ccNo.toLowerCase() + " " + option.name.toLowerCase()).includes(val.toLowerCase())
    );

    if ((this.debtorSelected) &&
        (this.filteredCostCentres?this.filteredCostCentres.length>0:false)) {
      if ((this.salesOrderForm.get('costCentre').value) &&
        (!this.filteredCostCentres.find(cost => cost.ccNo == this.salesOrderForm.get('costCentre').value))) {
        this.costCentreSelected = false;
        this.salesOrderForm.get('costCentre').setErrors({'incorrect':true});
        this.formErrors['costCentre'] += this.validationMessages['costCentre'].incorrect;
      }
      else if ( (this.salesOrderForm.get('costCentre').value) &&
        (this.filteredCostCentres.find(cost => cost.ccNo == this.salesOrderForm.get('costCentre').value)) &&
        (this.salesOrderForm.get('costCentre').value == this.filteredCostCentres.find(cost => cost.ccNo == this.salesOrderForm.get('costCentre').value).ccNo)) {
        this.costCentreSelected = true;
        this.salesOrderForm.get('costCentre').setErrors(null);
      }
    }
    else {
      this.costCentreSelected = false;
    }

    if(this.costCentreSelected) {
      this.getSalesOrderShort();
      /*
      this.getSalesOrderByDebtorAndCostCentre(
        this.filteredDebtors.find(debt => debt.accNo == this.salesOrderForm.get('debtor').value).id,
        this.filteredCostCentres.find(cost => cost.ccNo == this.salesOrderForm.get('costCentre').value).id);
        */
    }
  }

  filterSalesOrders(val: string) {
    this.filteredSalesOrders = this.salesOrdersShort.filter(option =>
      (option.id + " " + option.value).includes(val)
    );

    if ((this.costCentreSelected) &&
      (this.filteredSalesOrders?this.filteredSalesOrders.length>0:false)) {
      if ((this.salesOrderForm.get('orderNo').value) &&
        (!this.filteredSalesOrders.find(sale => sale.id == this.salesOrderForm.get('orderNo').value))) {
        this.salesOrderSelected = false;
        this.salesOrderForm.get('orderNo').setErrors({'incorrect':true});
        this.formErrors['orderNo'] += this.validationMessages['orderNo'].incorrect;
      }
      else if ( (this.salesOrderForm.get('orderNo').value) &&
        (this.filteredSalesOrders.find(sale => sale.id == this.salesOrderForm.get('orderNo').value)) &&
        (this.salesOrderForm.get('orderNo').value == this.filteredSalesOrders.find(sale => sale.id == this.salesOrderForm.get('orderNo').value).id)) {
        this.salesOrderSelected = true;
        this.salesOrderForm.get('orderNo').setErrors(null);
      }
    }
    else {
      this.salesOrderSelected = false;
      this.salesOrderForm.get('orderNo').setErrors({'incorrect':true});
      this.formErrors['orderNo'] += this.validationMessages['orderNo'].incorrect;
    }

    if(this.salesOrderSelected) {
      this.getSalesOrderById(
        this.filteredSalesOrders.find(sale => sale.id == this.salesOrderForm.get('orderNo').value).id);
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

  getSalesOrderShort() {
    this.salesOrderService.getSalesOrderHeaderShort().subscribe(
      data => {
        this.salesOrdersShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredSalesOrders = this.salesOrdersShort;
        console.log(this.salesOrdersShort);
      },
      error => console.log("1 " + error)
    )
  }
  /*
  getSalesOrderByDebtorAndCostCentre(debtor: number, costCentre: number) {
    this.salesOrderService.getSalesOrderShortByDebtorAndCostCentre(debtor, costCentre).subscribe(
      data => {
        this.salesOrdersShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredSalesOrders = this.salesOrdersShort;
        console.log(this.salesOrdersShort);
      },
      error => console.log("1 " + error)
    )
  }
*/

  getSalesOrderById(id: number) {
    this.salesOrderService.getSalesOrderHeaderById(id).subscribe(
      data => {
        this.newSalesOrderHeader = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.newSalesOrderHeader);
        this.populateForm();
        this.getSalesOrderDetailByHeaderId(id);
      },
      error => console.log("1 " + error)
    )
  }

  getSalesOrderDetailByHeaderId(id: number) {
    this.salesOrderService.getAllSalesOrderDetailByHeaderId(id).subscribe(
      data => {
        this.salesOrderDetails = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.salesOrderDetails = [...this.salesOrderDetails, this.newSalesOrderDetail];
        console.log(this.salesOrderDetails);
      },
      error => console.log("1 " + error)
    )
  }

  soValid() {
    console.log("so Valid")
    console.log(this.salesOrderDetails)
  }

  soAdd(soDetails: SalesOrderDetail, index: number) {

      this.salesOrderDetails = [...this.salesOrderDetails, soDetails];
  }

  soEdit(soDetails: SalesOrderDetail, index: number) {
    console.log("edit")
    console.log(index)
    console.log(this.salesOrderDetails[index])
    console.log(soDetails)


    this.salesOrderDetails[index].pickMethod = soDetails.pickMethod;
    this.salesOrderDetails[index].orderQty = soDetails.orderQty;
    this.salesOrderDetails[index].itemLink.item.code = soDetails.itemLink.item.toString();
    console.log(this.salesOrderDetails[index])
  }

  soDelete(index: number) {
    if (this.salesOrderDetails[index].id) {
      console.log(this.salesOrderDetails[index])
      this.salesOrderService.deleteSalesOrderDetail(this.salesOrderDetails[index]).subscribe(
        data => {
          console.log(index + " is delete")
        },
        error2 => console.log("Dom error: " + error2)
      );
    }

    this.salesOrderDetails.splice(index, 1);
  }

  populateForm() {
    console.log("pop called")

    //this.salesOrderForm.get('orderDate').setValue(this.newSalesOrderHeader.orderDate);
    this.salesOrderForm.get('status').setValue(this.newSalesOrderHeader.status);
    //this.salesOrderForm.get('debtor').setValue(this.newSalesOrderHeader.debtor?this.newSalesOrderHeader.debtor.accNo?this.newSalesOrderHeader.debtor.accNo:'':'');
    //this.salesOrderForm.get('costCentre').setValue(this.newSalesOrderHeader.costCentre?this.newSalesOrderHeader.costCentre.ccNo?this.newSalesOrderHeader.costCentre.ccNo:'':'');
    this.salesOrderForm.get('custOrderNo').setValue(this.newSalesOrderHeader.custOrderNo);
    this.salesOrderForm.get('releaseNo').setValue(this.newSalesOrderHeader.releaseNo);
    this.salesOrderForm.get('transporter').setValue(this.newSalesOrderHeader.transporter);
    this.salesOrderForm.get('street1').setValue(this.newSalesOrderHeader.street1?this.newSalesOrderHeader.street1:'');
    this.salesOrderForm.get('street2').setValue(this.newSalesOrderHeader.street2?this.newSalesOrderHeader.street2:'');
    this.salesOrderForm.get('street3').setValue(this.newSalesOrderHeader.street3?this.newSalesOrderHeader.street3:'');
    this.salesOrderForm.get('street4').setValue(this.newSalesOrderHeader.street4?this.newSalesOrderHeader.street4:'');
    this.salesOrderForm.get('streetPostalCode').setValue(this.newSalesOrderHeader.streetPostalCode?this.newSalesOrderHeader.streetPostalCode:'');
    this.salesOrderForm.get('city').setValue(this.newSalesOrderHeader.city?this.newSalesOrderHeader.city.description?this.newSalesOrderHeader.city.description:'':'');
    this.salesOrderForm.get('gps').setValue(this.newSalesOrderHeader.gps?this.newSalesOrderHeader.gps:'');
    this.salesOrderForm.get('oppSName').setValue(this.newSalesOrderHeader.oppSName?this.newSalesOrderHeader.oppSName:'');
    this.salesOrderForm.get('oppFName').setValue(this.newSalesOrderHeader.oppFName?this.newSalesOrderHeader.oppFName:'');
    this.salesOrderForm.get('oppTitle').setValue(this.newSalesOrderHeader.oppTitle?this.newSalesOrderHeader.oppTitle.description?this.newSalesOrderHeader.oppTitle.description:'':'');
    this.salesOrderForm.get('oppCellNo').setValue(this.newSalesOrderHeader.oppCellNo?this.newSalesOrderHeader.oppCellNo:'');
    this.salesOrderForm.get('oppEmail').setValue(this.newSalesOrderHeader.oppEmail?this.newSalesOrderHeader.oppEmail:'');
    this.salesOrderForm.get('delInstruction').setValue(this.newSalesOrderHeader.street1?this.newSalesOrderHeader.delInstruction:'');
    this.salesOrderForm.get('comments').setValue(this.newSalesOrderHeader.street1?this.newSalesOrderHeader.comments:'');
  }

  createForm() {
    this.salesOrderForm = this.fb.group({
      id: [
        this.newSalesOrderHeader.id
      ]
      ,orderDate: [
        this.newSalesOrderHeader.orderDate
        ,Validators.required
      ]
      ,status: [
        this.newSalesOrderHeader.status
      ]
      ,debtor: [
        this.newSalesOrderHeader.debtor
        ,Validators.required
      ]
      ,costCentre: [
        this.newSalesOrderHeader.costCentre
        ,Validators.required
      ]
      ,custOrderNo: [
        this.newSalesOrderHeader.custOrderNo
      ]
      ,releaseNo: [
        this.newSalesOrderHeader.releaseNo
      ]
      ,transporter: [
        this.newSalesOrderHeader.transporter
      ]
      ,street1: [
        this.newSalesOrderHeader.street1
      ]
      ,street2: [
        this.newSalesOrderHeader.street2
      ]
      ,street3: [
        this.newSalesOrderHeader.street3
      ]
      ,street4: [
        this.newSalesOrderHeader.street4
      ]
      ,streetPostalCode: [
        this.newSalesOrderHeader.streetPostalCode
      ]
      ,city: [
        this.newSalesOrderHeader.city
      ]
      ,gps: [
        this.newSalesOrderHeader.gps
      ]
      ,oppSName: [
        this.newSalesOrderHeader.oppSName
      ]
      ,oppFName: [
        this.newSalesOrderHeader.oppFName
      ]
      ,oppTitle: [
        this.newSalesOrderHeader.oppTitle
      ]
      ,oppCellNo: [
        this.newSalesOrderHeader.oppCellNo
      ]
      ,oppEmail: [
        this.newSalesOrderHeader.oppEmail
      ]
      ,delInstruction: [
        this.newSalesOrderHeader.delInstruction
      ]
      ,comments: [
        this.newSalesOrderHeader.comments
      ]
    });

    this.salesOrderForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.salesOrderForm.get('debtor').valueChanges.subscribe(
      data => {
        this.filterDebtors(data)
      }
    );

    this.salesOrderForm.get('costCentre').valueChanges.subscribe(
      data => {
        this.filterCostCentres(data)
      }
    );

    this.salesOrderForm.get('id').valueChanges.subscribe(
      data => {
        this.filterSalesOrders(data)
      }
    );

    this.salesOrderDetailForm = this.fb.group({
      salesOrder: [
        this.newSalesOrderDetail.salesOrder
      ]
      ,item: [
        this.newSalesOrderDetail.itemLink.item
      ]
      ,pickingOrder: [
        this.newSalesOrderDetail.pickMethod
      ]
      ,quantity: [
        this.newSalesOrderDetail.orderQty
      ]
    })

    this.salesOrderDetailForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onClick() {
    console.log("clicked")
  }

  onValueChanged(data?: any) {
    if (!this.salesOrderForm) {return; }
    if (!this.salesOrderDetailForm) {return; }

    const form = this.salesOrderForm;

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
      if ((this.salesOrderForm.get('ccNo').value) &&
          (this.salesOrderForm.get('ccNo').value != this.costCentreShort.find(debt => debt.value == this.autoCompleteControl.value).value)) {
        if (this.costCentreShort.find(debt => debt.value.toLowerCase() === this.salesOrderForm.get('ccNo').value.toLowerCase())) {
          this.formErrors['ccNo'] += this.validationMessages['ccNo'].duplicate;
          this.salesOrderForm.get('ccNo').setErrors({'incorrect': true});
        }
        else {
          this.salesOrderForm.get('accNo').setErrors(null)
        }
      }
    }
    */
  }



  onSubmit() {
    this.newSalesOrderHeader = this.salesOrderForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newSalesOrderHeader.createUser = this.user;
        this.salesOrderService.sendSalesOrderHeader(this.newSalesOrderHeader).subscribe(
          data => {
            this.salesOrderAdded = true;
            this.newSalesOrderHeader = new SalesOrderHeader();

            for(var i = 0; i <= this.salesOrderDetails.length - 1; i++){
              this.salesOrderDetailReturn.salesOrder = JSON.parse(JSON.parse(JSON.stringify(data))._body).orderNo;
              this.salesOrderDetailReturn.quantity = this.salesOrderDetails[i].orderQty;
              this.salesOrderDetailReturn.item = this.salesOrderDetails[i].itemLink.item.code;
              this.salesOrderDetailReturn.pickingOrder = this.salesOrderDetails[i].pickMethod;

              console.log("submit");

              this.salesOrderService.sendSalesOrderDetail(this.salesOrderDetails[i]).subscribe(
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
    this.newSalesOrderHeader = this.salesOrderForm.value;
    console.log(this.newSalesOrderHeader);
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newSalesOrderHeader.createUser = this.user;
        this.salesOrderService.updateSalesOrderHeader(this.newSalesOrderHeader).subscribe(
          data => {
            this.salesOrderAdded = true;
            this.newSalesOrderHeader = new SalesOrderHeader();

            for(var i = 0; i <= this.salesOrderDetails.length - 1; i++){
              if (!this.salesOrderDetails[i].id) {
                this.salesOrderDetailReturn.salesOrder = JSON.parse(JSON.parse(JSON.stringify(data))._body).orderNo;
                this.salesOrderDetailReturn.quantity = this.salesOrderDetails[i].orderQty;
                this.salesOrderDetailReturn.item = this.salesOrderDetails[i].itemLink.item.code;
                this.salesOrderDetailReturn.pickingOrder = this.salesOrderDetails[i].pickMethod;

                console.log("sales order detail to send")
                console.log(this.salesOrderDetails[i])

                console.log("update one");

                this.salesOrderService.sendSalesOrderDetail(this.salesOrderDetails[i]).subscribe(
                  data => {
                    console.log(i + " is deur")
                  },
                  error2 => console.log("Add error: " + error2)
                );
              } else {
                console.log("sales order detail to update")
                this.salesOrderDetailReturn = new SalesOrderDetailPackage();
                console.log(this.salesOrderDetails[i])
                console.log("package")
                console.log(this.salesOrderDetailReturn)
                this.salesOrderDetailReturn.salesOrder = this.salesOrderDetails[i].salesOrder.id
                console.log("1")
                this.salesOrderDetailReturn.quantity = this.salesOrderDetails[i].orderQty;
                console.log("2")
                this.salesOrderDetailReturn.item = this.salesOrderDetails[i].itemLink.item.code;
                console.log("3")
                this.salesOrderDetailReturn.pickingOrder = this.salesOrderDetails[i].pickMethod;
                console.log("4")
                this.salesOrderDetailReturn.id = this.salesOrderDetails[i].id;

                console.log("update two");

                this.salesOrderService.updateSalesOrderDetail(this.salesOrderDetailReturn).subscribe(
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
