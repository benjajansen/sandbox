/**
 * Created by Benja on 5/28/2017.
 */

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Creditor} from '../../../models/creditor/Creditor';
import {CreditorService} from '../../../services/creditor.service';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from '../../../models/dataPackages/ShortDataPackage';
import {SystemService} from '../../../services/system.service';
import {AdminService} from '../../../services/admin.service';
import {DebtCredAutoPackage} from '../../../models/dataPackages/DebtCredAutoPackage';
import {MatAutocompleteTrigger} from '@angular/material';

@Component({
  selector: 'creditor'
  ,templateUrl: './creditor.component.html'
})
export class CreditorComponent implements OnInit, AfterViewInit{
  @ViewChild(MatAutocompleteTrigger)
    private trigger: MatAutocompleteTrigger;

  creditorForm: FormGroup;
  selectorForm: FormGroup;

  creditorsShort: ShortDataPackage[];
  creditorsAuto: DebtCredAutoPackage[];
  classifications: ShortDataPackage[];
  groups: ShortDataPackage[];

  branches: ShortDataPackage[];
  countries: ShortDataPackage[];
  provinces: ShortDataPackage[];
  cities: ShortDataPackage[];

  titles: ShortDataPackage[];
  payTerms: ShortDataPackage[];
  setDiscMethod: ShortDataPackage[];
  tradeLevels: ShortDataPackage[];
  beeLevels: ShortDataPackage[];
  beeTypes: ShortDataPackage[];

  newCreditor: Creditor = new Creditor();
  creditorAdded: boolean = false;

  user: SecurityUser;

  autoCompleteControl = new FormControl();
  filteredOptions: DebtCredAutoPackage[];

  constructor (private fb: FormBuilder, private creditorService:CreditorService, private systemService:SystemService, private SecurityService:SecurityService, private adminService:AdminService) {}

  ngOnInit(): void {
    this.getCreditorsAuto();
    this.getCreditorsShort();
    this.getClassifications();
    this.getGroups();
    this.getBranches();
    this.getCountries();
    this.getProvinces();
    this.getCities();
    this.getTitles();
    this.getPayTerms();
    this.getSetDiscMethod();
    this.getTradeLevel();
    this.getBEELevel();
    this.getBEEType();
    this.createForm();

    this.autoCompleteControl.valueChanges.subscribe(
      data => this.filter(data)
    );
  }

  ngAfterViewInit() {
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.creditorsAuto?this.creditorsAuto.length>0:false) && option.option.value) {
        var id = this.creditorsAuto.find(cred => cred.accNo === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.creditorForm.get('accNo').setErrors(null)
        }
      }
    });
  }

  filter(val: string){
    this.filteredOptions = this.creditorsAuto.filter(option =>
      (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
    );
  }

  getCreditorsAuto() {
    this.creditorService.getCreditorAuto().subscribe(
      data => {
        this.creditorsAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredOptions = this.creditorsAuto;
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getCreditorsShort() {
    this.creditorService.getCreditorShort().subscribe(
      data => {
        this.creditorsShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getClassifications() {
    this.creditorService.getClassificationShort().subscribe(
      data => {
        this.classifications = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getGroups() {
    this.creditorService.getGroupShort().subscribe(
      data => {
        this.groups = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getBranches() {
    this.adminService.getBranchShort().subscribe(
      data => {
        this.branches = JSON.parse(JSON.parse(JSON.stringify(data))._body);
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
      },
      error => console.log(error)
    )
  }

  getCountries() {
    this.adminService.getCountryShort().subscribe(
      data => {
        this.countries = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
      error => console.log(error)
    )
  }

  getTitles() {
    this.systemService.getTitleShort().subscribe(
      data => {
        this.titles = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getPayTerms() {
    this.systemService.getPaymentTermShort().subscribe(
      data => {
        this.payTerms = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getSetDiscMethod() {
    this.systemService.getSettleDiscMethodShort().subscribe(
      data => {
        this.setDiscMethod = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getTradeLevel() {
    this.systemService.getTradeLevelShort().subscribe(
      data => {
        this.tradeLevels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getBEELevel() {
    this.systemService.getBEELevelShort().subscribe(
      data => {
        this.beeLevels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getBEEType() {
    this.systemService.getBEETypeShort().subscribe(
      data => {
        this.beeTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  populateForm(credId:any) {
    this.creditorService.getCreditorById(credId).subscribe(
      data => {
        //this.creditorForm.setValue(this.newCreditor)
        this.newCreditor = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        this.creditorForm.get('accNo').setValue(this.newCreditor.accNo);
        this.creditorForm.get('tradeName').setValue(this.newCreditor.tradeName);
        this.creditorForm.get('regName').setValue(this.newCreditor.regName);
        this.creditorForm.get('parent').setValue(this.newCreditor.parent?this.newCreditor.parent.accNo?this.newCreditor.parent.accNo:'':'');
        this.creditorForm.get('regNo').setValue(this.newCreditor.regNo?this.newCreditor.regNo:'');
        this.creditorForm.get('vatVendor').setValue(this.newCreditor.vatVendor?this.newCreditor.vatVendor:false);
        this.creditorForm.get('vatNo').setValue(this.newCreditor.vatNo?this.newCreditor.vatNo:'');
        this.creditorForm.get('telNo').setValue(this.newCreditor.telNo?this.newCreditor.telNo:'');
        this.creditorForm.get('faxNo').setValue(this.newCreditor.faxNo?this.newCreditor.faxNo:'');
        this.creditorForm.get('webSite').setValue(this.newCreditor.webSite?this.newCreditor.webSite:'');
        this.creditorForm.get('street1').setValue(this.newCreditor.street1?this.newCreditor.street1:'');
        this.creditorForm.get('street2').setValue(this.newCreditor.street2?this.newCreditor.street2:'');
        this.creditorForm.get('street3').setValue(this.newCreditor.street3?this.newCreditor.street3:'');
        this.creditorForm.get('street4').setValue(this.newCreditor.street4?this.newCreditor.street4:'');
        this.creditorForm.get('streetPostalCode').setValue(this.newCreditor.streetPostalCode?this.newCreditor.streetPostalCode:'');
        this.creditorForm.get('box1').setValue(this.newCreditor.box1?this.newCreditor.box1:'');
        this.creditorForm.get('box2').setValue(this.newCreditor.box2?this.newCreditor.box2:'');
        this.creditorForm.get('box3').setValue(this.newCreditor.box3?this.newCreditor.box3:'');
        this.creditorForm.get('box4').setValue(this.newCreditor.box4?this.newCreditor.box4:'');
        this.creditorForm.get('boxPostalCode').setValue(this.newCreditor.boxPostalCode?this.newCreditor.boxPostalCode:'');
        this.creditorForm.get('accSName').setValue(this.newCreditor.accSName?this.newCreditor.accSName:'');
        this.creditorForm.get('accFName').setValue(this.newCreditor.accFName?this.newCreditor.accFName:'');
        this.creditorForm.get('accTitle').setValue(this.newCreditor.accTitle?this.newCreditor.accTitle.description?this.newCreditor.accTitle.description:'':'');
        this.creditorForm.get('accCellNo').setValue(this.newCreditor.accCellNo?this.newCreditor.accCellNo:'');
        this.creditorForm.get('accEmail').setValue(this.newCreditor.accEmail?this.newCreditor.accEmail:'');
        this.creditorForm.get('oppSName').setValue(this.newCreditor.oppSName?this.newCreditor.oppSName:'');
        this.creditorForm.get('oppFName').setValue(this.newCreditor.oppFName?this.newCreditor.oppFName:'');
        this.creditorForm.get('oppTitle').setValue(this.newCreditor.oppTitle?this.newCreditor.oppTitle.description?this.newCreditor.oppTitle.description:'':'');
        this.creditorForm.get('oppCellNo').setValue(this.newCreditor.oppCellNo?this.newCreditor.oppCellNo:'');
        this.creditorForm.get('oppEmail').setValue(this.newCreditor.oppEmail?this.newCreditor.oppEmail:'');
        this.creditorForm.get('bankName').setValue(this.newCreditor.bankName?this.newCreditor.bankName:'');
        this.creditorForm.get('bankBranchNo').setValue(this.newCreditor.bankBranchNo?this.newCreditor.bankBranchNo:'');
        this.creditorForm.get('bankAccNo').setValue(this.newCreditor.bankAccNo?this.newCreditor.bankAccNo:'');
        this.creditorForm.get('bankAccName').setValue(this.newCreditor.bankAccName?this.newCreditor.bankAccName:'');
        this.creditorForm.get('settleDiscount').setValue(this.newCreditor.settleDiscount?this.newCreditor.settleDiscount:0);
        this.creditorForm.get('settleDays').setValue(this.newCreditor.settleDays?this.newCreditor.settleDays:0);
        this.creditorForm.get('tradeDiscount').setValue(this.newCreditor.tradeDiscount?this.newCreditor.tradeDiscount:0);
        this.creditorForm.get('beeScore').setValue(this.newCreditor.beeScore?this.newCreditor.beeScore:0);
        this.creditorForm.get('beeCertReceived').setValue(this.newCreditor.beeCertReceived?this.newCreditor.beeCertReceived:false);
        this.creditorForm.get('beeCertExpDate').setValue(this.newCreditor.beeCertExpDate?this.newCreditor.beeCertExpDate:'');
        this.creditorForm.get('beeOwnership').setValue(this.newCreditor.beeOwnership?this.newCreditor.beeOwnership:0);
        this.creditorForm.get('beeYouth').setValue(this.newCreditor.beeYouth?this.newCreditor.beeYouth:0);
        this.creditorForm.get('empDisabled').setValue(this.newCreditor.empDisabled?this.newCreditor.empDisabled:0);
        this.creditorForm.get('orderReq').setValue(this.newCreditor.orderReq?this.newCreditor.orderReq:false);
        this.creditorForm.get('suspended').setValue(this.newCreditor.suspended?this.newCreditor.suspended:false);
        this.creditorForm.get('branch').setValue(this.newCreditor.branch?this.newCreditor.branch.description?this.newCreditor.branch.description:'':'');
        this.creditorForm.get('classification').setValue(this.newCreditor.classification?this.newCreditor.classification.description?this.newCreditor.classification.description:'':'');
        this.creditorForm.get('province').setValue(this.newCreditor.province?this.newCreditor.province.description?this.newCreditor.province.description:'':'');
        this.creditorForm.get('country').setValue(this.newCreditor.country?this.newCreditor.country.description?this.newCreditor.country.description:'':'');
        this.creditorForm.get('city').setValue(this.newCreditor.city?this.newCreditor.city.description?this.newCreditor.city.description:'':'');
        this.creditorForm.get('payTerm').setValue(this.newCreditor.payTerm?this.newCreditor.payTerm.description?this.newCreditor.payTerm.description:'':'');
        this.creditorForm.get('settleDiscMethod').setValue(this.newCreditor.settleDiscMethod?this.newCreditor.settleDiscMethod.description?this.newCreditor.settleDiscMethod.description:'':'');
        this.creditorForm.get('tradeLevel').setValue(this.newCreditor.tradeLevel?this.newCreditor.tradeLevel.description?this.newCreditor.tradeLevel.description:'':'');
        this.creditorForm.get('beeLevel').setValue(this.newCreditor.beeLevel?this.newCreditor.beeLevel.description?this.newCreditor.beeLevel.description:'':'');
        this.creditorForm.get('beeType').setValue(this.newCreditor.beeType?this.newCreditor.beeType.description?this.newCreditor.beeType.description:'':'');
      }
      , error => console.log("2 " + error)
    )
  }

  createForm() {
    this.selectorForm = this.fb.group({
      accNoDrop: [
        ''
      ]
    });


    this.creditorForm = this.fb.group({
      accNo: [
        this.newCreditor.accNo
        ,[
          Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
      ,tradeName: [
        this.newCreditor.tradeName
        ,Validators.required
      ]
      ,regName: [
        this.newCreditor.regName
        ,Validators.required
      ]
      ,parent: [
        this.newCreditor.parent
      ]
      ,regNo: [
        this.newCreditor.regNo
      ]
      ,vatVendor: [
        this.newCreditor.vatVendor
      ]
      ,vatNo: [
        this.newCreditor.vatNo
      ]
      ,telNo: [
        this.newCreditor.telNo
      ]
      ,faxNo: [
        this.newCreditor.faxNo
      ]
      ,webSite: [
        this.newCreditor.webSite
      ]
      ,street1: [
        this.newCreditor.street1
      ]
      ,street2: [
        this.newCreditor.street2
      ]
      ,street3: [
        this.newCreditor.street3
      ]
      ,street4: [
        this.newCreditor.street4
      ]
      ,streetPostalCode: [
        this.newCreditor.streetPostalCode
      ]
      ,box1: [
        this.newCreditor.box1
      ]
      ,box2: [
        this.newCreditor.box2
      ]
      ,box3: [
        this.newCreditor.box3
      ]
      ,box4: [
        this.newCreditor.box4
      ]
      ,boxPostalCode: [
        this.newCreditor.boxPostalCode
      ]
      ,group: [
        this.newCreditor.group
      ]
      ,classification: [
        this.newCreditor.classification
      ]
      ,branch: [
        this.newCreditor.branch
      ]
      ,country: [
        this.newCreditor.country
      ]
      ,province: [
        this.newCreditor.province
      ]
      ,city: [
        this.newCreditor.city
      ]
      ,accSName: [
        this.newCreditor.accSName
      ]
      ,accFName: [
        this.newCreditor.accFName
      ]
      ,accTitle: [
        this.newCreditor.accTitle
      ]
      ,accCellNo: [
        this.newCreditor.accCellNo
      ]
      ,accEmail: [
        this.newCreditor.accEmail
      ]
      ,oppSName: [
        this.newCreditor.oppSName
      ]
      ,oppFName: [
        this.newCreditor.oppFName
      ]
      ,oppTitle: [
        this.newCreditor.oppTitle
      ]
      ,oppCellNo: [
        this.newCreditor.oppCellNo
      ]
      ,oppEmail: [
        this.newCreditor.oppEmail
      ]
      ,bankName: [
        this.newCreditor.bankName
      ]
      ,bankBranchNo: [
        this.newCreditor.bankBranchNo
      ]
      ,bankAccNo: [
        this.newCreditor.bankAccNo
      ]
      ,bankAccName: [
        this.newCreditor.bankName
      ]
      ,payTerm: [
        this.newCreditor.payTerm
      ]
      ,settleDiscount: [
        this.newCreditor.settleDiscount
      ]
      ,settleDays: [
        this.newCreditor.settleDays
      ]
      ,settleDiscMethod: [
        this.newCreditor.settleDiscMethod
      ]
      ,tradeDiscount: [
        this.newCreditor.tradeDiscount
      ]
      ,tradeLevel: [
        this.newCreditor.tradeLevel
      ]
      ,beeType: [
        this.newCreditor.beeType
      ]
      ,beeScore: [
        this.newCreditor.beeScore
      ]
      ,beeLevel: [
        this.newCreditor.beeLevel
      ]
      ,beeCertReceived: [
        this.newCreditor.beeCertReceived
      ]
      ,beeCertExpDate: [
        this.newCreditor.beeCertExpDate
      ]
      ,beeOwnership: [
        this.newCreditor.beeOwnership
      ]
      ,beeWoman: [
        this.newCreditor.beeWoman
      ]
      ,beeYouth: [
        this.newCreditor.beeYouth
      ]
      ,empDisabled: [
        this.newCreditor.empDisabled
      ]
      ,orderReq: [
        this.newCreditor.orderReq
      ]
      ,suspended: [
        this.newCreditor.suspended
      ]
      ,suspendedDate: [
        this.newCreditor.suspendedDate
      ]
    });

    this.creditorForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.creditorForm) {
      return;
    }

    const form = this.creditorForm;

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

    //Check for duplicate on the Account Number
    if (this.creditorsShort?this.creditorsShort.length>0:false) {
      if ((this.creditorForm.get('accNo').value) &&
          (this.creditorForm.get('accNo').value != this.creditorsShort.find(cred => cred.value == this.autoCompleteControl.value).value)) {
        if (this.creditorsShort.find(cred => cred.value.toLowerCase() === this.creditorForm.get('accNo').value.toLowerCase())) {
          this.formErrors['accNo'] += this.validationMessages['accNo'].duplicate;
          this.creditorForm.get('accNo').setErrors({'incorrect': true});
        }
        else {
          this.creditorForm.get('accNo').setErrors(null)
        }
      }
    }
  }

  formErrors = {
    'accNoDrop':''
    ,'accNo': ''
    ,'tradeName': ''
    ,'regName': ''
    ,'parent': ''
    ,'regNo': ''
    ,'vatVendor':''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'webSite': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'box1': ''
    ,'box2': ''
    ,'box3': ''
    ,'box4': ''
    ,'boxPostalCode': ''
    ,'accSName': ''
    ,'accFName': ''
    ,'accTitle': ''
    ,'accCellNo': ''
    ,'accEmail': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'bankName': ''
    ,'bankBranchNo': ''
    ,'bankAccNo': ''
    ,'bankAccName': ''
    ,'settleDiscount': ''
    ,'settleDays': ''
    ,'tradeDiscount': ''
    ,'beeScore': ''
    ,'beeCertReceived': ''
    ,'beeCertExpDate': ''
    ,'beeOwnership': ''
    ,'beeYouth': ''
    ,'empDisabled': ''
    ,'orderReq': ''
    ,'suspended': ''
  };

  validationMessages = {
    'accNoDrop':''
    ,'accNo': {
      'required':   'AccNo is required.'
      ,'minlength': 'AccNo must be at least 4 characters long.'
      ,'duplicate': 'AccNo must be unique.'
    }
    ,'tradeName': ''
    ,'regName': ''
    ,'parent': ''
    ,'regNo': ''
    ,'vatVendor':''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'webSite': ''
    ,'street1': ''
    ,'street2': ''
    ,'street3': ''
    ,'street4': ''
    ,'streetPostalCode': ''
    ,'box1': ''
    ,'box2': ''
    ,'box3': ''
    ,'box4': ''
    ,'boxPostalCode': ''
    ,'accSName': ''
    ,'accFName': ''
    ,'accTitle': ''
    ,'accCellNo': ''
    ,'accEmail': ''
    ,'oppSName': ''
    ,'oppFName': ''
    ,'oppTitle': ''
    ,'oppCellNo': ''
    ,'oppEmail': ''
    ,'bankName': ''
    ,'bankBranchNo': ''
    ,'bankAccNo': ''
    ,'bankAccName': ''
    ,'settleDiscount': ''
    ,'settleDays': ''
    ,'tradeDiscount': ''
    ,'beeScore': ''
    ,'beeCertReceived': ''
    ,'beeCertExpDate': ''
    ,'beeOwnership': ''
    ,'beeYouth': ''
    ,'empDisabled': ''
    ,'orderReq': ''
    ,'suspended': ''
  }

  onSubmit() {
    this.newCreditor = this.creditorForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCreditor.createUser = this.user;
        this.creditorService.sendCreditor(this.newCreditor).subscribe(
          data => {
            this.creditorAdded = true;
            this.newCreditor = new Creditor();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newCreditor = this.creditorForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCreditor.createUser = this.user;
        this.creditorService.updateCreditor(this.newCreditor).subscribe(
          data => {
            this.creditorAdded = true;
            this.newCreditor = new Creditor();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
