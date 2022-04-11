/**
 * Created by Benja on 5/4/2017.
 */

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Debtor} from '../../../models/debtor/Debtor';
import {DebtorService} from '../../../services/debtor.service';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {AdminService} from "../../../services/admin.service"
import {DebtCredAutoPackage} from "../../../models/dataPackages/DebtCredAutoPackage";
import {MatAutocompleteTrigger} from "@angular/material";


@Component({
  selector: 'debtor',
  templateUrl: './debtor.component.html'
})
export class DebtorComponent implements OnInit, AfterViewInit{
  @ViewChild(MatAutocompleteTrigger)
  private trigger: MatAutocompleteTrigger;

  debtorForm: FormGroup;
  selectorForm: FormGroup;

  debtorsShort: ShortDataPackage[];
  debtorsAuto: DebtCredAutoPackage[];
  businessTypes: ShortDataPackage[];
  businessUnits: ShortDataPackage[];
  categories: ShortDataPackage[];
  typeOfOrganisations: ShortDataPackage[];

  paymentMethods: ShortDataPackage[];
  paymentTerms: ShortDataPackage[];
  paymentTypes: ShortDataPackage[];
  titles: ShortDataPackage[];

  branches: ShortDataPackage[];
  countries: ShortDataPackage[];
  provinces: ShortDataPackage[];
  cities: ShortDataPackage[];

  newDebtor: Debtor = new Debtor();
  debtorAdded: boolean = false;
  user: SecurityUser;

  autoCompleteControl = new FormControl();
  filteredOptions: DebtCredAutoPackage[];

  constructor (private fb: FormBuilder, private debtorService:DebtorService, private systemService:SystemService, private adminService:AdminService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getDebtorsAuto();
    this.getBranches();
    this.getTitles();
    this.getCities();
    this.getCountries();
    this.getProvinces();
    this.getDebtorsShort();
    this.getTypeOfOrganisations();
    this.getPaymentTypes();
    this.getPaymentTerms();
    this.getCategories();
    this.getBusinessUnits();
    this.getBusinessTypes();
    this.getPaymentMethods();
    this.createForm();

    this.autoCompleteControl.valueChanges.subscribe(
      data => {
        this.filter(data)
      }
    );
  }

  ngAfterViewInit() {
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.debtorsAuto?this.debtorsAuto.length>0:false) && option.option.value) {
        var id = this.debtorsAuto.find(debt => debt.accNo === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.debtorForm.get('accNo').setErrors(null)
        }
      }
    });
  }

  filter(val: string){
    this.filteredOptions = this.debtorsAuto.filter(option =>
      (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
    );
  }

  getDebtorsAuto() {
    this.debtorService.getDebtorAuto().subscribe(
      data => {
        this.debtorsAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredOptions = this.debtorsAuto;
        console.log(this.debtorsAuto);
      },
      error => console.log("1 " + error)
    )
  }

  getDebtorsShort() {
    this.debtorService.getDebtorShort().subscribe(
      data => {
        this.debtorsShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.debtorsShort);
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

  getBusinessTypes() {
    this.debtorService.getBusinessTypeShort().subscribe(
      data => {
        this.businessTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.businessTypes);
      },
      error => console.log("1 " + error)
    )
  }

  getBusinessUnits() {
    this.debtorService.getBusinessUnitShort().subscribe(
      data => {
        this.businessUnits = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.businessUnits);
      },
      error => console.log("1 " + error)
    )
  }

  getCategories() {
    this.debtorService.getCategoryShort().subscribe(
      data => {
        this.categories = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.categories)
      },
      error => console.log("1 " + error)
    )
  }

  getTypeOfOrganisations() {
    this.debtorService.getTypeOfOrganisationShort().subscribe(
      data => {
        this.typeOfOrganisations = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.typeOfOrganisations)
      },
      error => console.log(error)
    )
  }

  getPaymentMethods() {
    this.systemService.getPaymentMethodShort().subscribe(
      data => {
        this.paymentMethods = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentMethods)
      },
      error => console.log(error)
    )
  }

  getPaymentTerms() {
    this.systemService.getPaymentTermShort().subscribe(
      data => {
        this.paymentTerms = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentTerms)
      },
      error => console.log(error)
    )
  }

  getPaymentTypes() {
    this.systemService.getPaymentTypeShort().subscribe(
      data => {
        this.paymentTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.paymentTypes);
      },
      error => console.log(error)
    )
  }

  populateForm(debtId:any) {
    console.log(debtId);

    this.debtorService.getDebtorById(debtId).subscribe(
      data => {
        this.newDebtor = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        this.debtorForm.get('accNo').setValue(this.newDebtor.accNo);
        this.debtorForm.get('tradeName').setValue(this.newDebtor.tradeName);
        this.debtorForm.get('regName').setValue(this.newDebtor.regName);
        this.debtorForm.get('parent').setValue(this.newDebtor.parent?this.newDebtor.parent.accNo?this.newDebtor.parent.accNo:'':'');
        this.debtorForm.get('regNo').setValue(this.newDebtor.regNo?this.newDebtor.regNo:'');
        this.debtorForm.get('vatNo').setValue(this.newDebtor.vatNo?this.newDebtor.vatNo:'');
        this.debtorForm.get('telNo').setValue(this.newDebtor.telNo?this.newDebtor.telNo:'');
        this.debtorForm.get('faxNo').setValue(this.newDebtor.faxNo?this.newDebtor.faxNo:'');
        this.debtorForm.get('webSite').setValue(this.newDebtor.webSite?this.newDebtor.webSite:'');
        this.debtorForm.get('street1').setValue(this.newDebtor.street1?this.newDebtor.street1:'');
        this.debtorForm.get('street2').setValue(this.newDebtor.street2?this.newDebtor.street2:'');
        this.debtorForm.get('street3').setValue(this.newDebtor.street3?this.newDebtor.street3:'');
        this.debtorForm.get('street4').setValue(this.newDebtor.street4?this.newDebtor.street4:'');
        this.debtorForm.get('streetPostalCode').setValue(this.newDebtor.streetPostalCode?this.newDebtor.streetPostalCode:'');
        this.debtorForm.get('box1').setValue(this.newDebtor.box1?this.newDebtor.box1:'');
        this.debtorForm.get('box2').setValue(this.newDebtor.box2?this.newDebtor.box2:'');
        this.debtorForm.get('box3').setValue(this.newDebtor.box3?this.newDebtor.box3:'');
        this.debtorForm.get('box4').setValue(this.newDebtor.box4?this.newDebtor.box4:'');
        this.debtorForm.get('boxPostalCode').setValue(this.newDebtor.boxPostalCode?this.newDebtor.boxPostalCode:'');
        this.debtorForm.get('accSName').setValue(this.newDebtor.accSName?this.newDebtor.accSName:'');
        this.debtorForm.get('accFName').setValue(this.newDebtor.accFName?this.newDebtor.accFName:'');
        this.debtorForm.get('accTitle').setValue(this.newDebtor.accTitle?this.newDebtor.accTitle.description?this.newDebtor.accTitle.description:'':'');
        this.debtorForm.get('accCellNo').setValue(this.newDebtor.accCellNo?this.newDebtor.accCellNo:'');
        this.debtorForm.get('accEmail').setValue(this.newDebtor.accEmail?this.newDebtor.accEmail:'');
        this.debtorForm.get('oppSName').setValue(this.newDebtor.oppSName?this.newDebtor.oppSName:'');
        this.debtorForm.get('oppFName').setValue(this.newDebtor.oppFName?this.newDebtor.oppFName:'');
        this.debtorForm.get('oppTitle').setValue(this.newDebtor.oppTitle?this.newDebtor.oppTitle.description?this.newDebtor.oppTitle.description:'':'');
        this.debtorForm.get('oppCellNo').setValue(this.newDebtor.oppCellNo?this.newDebtor.oppCellNo:'');
        this.debtorForm.get('oppEmail').setValue(this.newDebtor.oppEmail?this.newDebtor.oppEmail:'');
        this.debtorForm.get('bankName').setValue(this.newDebtor.bankName?this.newDebtor.bankName:'');
        this.debtorForm.get('bankBranchNo').setValue(this.newDebtor.bankBranchNo?this.newDebtor.bankBranchNo:'');
        this.debtorForm.get('bankAccNo').setValue(this.newDebtor.bankAccNo?this.newDebtor.bankAccNo:'');
        this.debtorForm.get('bankAccName').setValue(this.newDebtor.bankAccName?this.newDebtor.bankAccName:'');
        this.debtorForm.get('orderReq').setValue(this.newDebtor.orderReq?this.newDebtor.orderReq:false);
        this.debtorForm.get('suspended').setValue(this.newDebtor.suspend?this.newDebtor.suspend:false);
        this.debtorForm.get('branch').setValue(this.newDebtor.branch?this.newDebtor.branch.description?this.newDebtor.branch.description:'':'');
        this.debtorForm.get('province').setValue(this.newDebtor.province?this.newDebtor.province.description?this.newDebtor.province.description:'':'');
        this.debtorForm.get('country').setValue(this.newDebtor.country?this.newDebtor.country.description?this.newDebtor.country.description:'':'');
        this.debtorForm.get('city').setValue(this.newDebtor.city?this.newDebtor.city.description?this.newDebtor.city.description:'':'');
        this.debtorForm.get('payTerm').setValue(this.newDebtor.payTerm?this.newDebtor.payTerm.description?this.newDebtor.payTerm.description:'':'');
        this.debtorForm.get('busUnit').setValue(this.newDebtor.busUnit?this.newDebtor.busUnit.description?this.newDebtor.busUnit.description:'':'');
        this.debtorForm.get('category').setValue(this.newDebtor.category?this.newDebtor.category.description?this.newDebtor.category.description:'':'');
        this.debtorForm.get('typeOrg').setValue(this.newDebtor.typeOrg?this.newDebtor.typeOrg.description?this.newDebtor.typeOrg.description:'':'');
        this.debtorForm.get('busType').setValue(this.newDebtor.busType?this.newDebtor.busType.description?this.newDebtor.busType.description:'':'');
        this.debtorForm.get('payMethod').setValue(this.newDebtor.payMethod?this.newDebtor.payMethod.description?this.newDebtor.payMethod.description:'':'');
        this.debtorForm.get('payType').setValue(this.newDebtor.payType?this.newDebtor.payType.description?this.newDebtor.payType.description:'':'');
        this.debtorForm.get('payType').setValue(this.newDebtor.payType?this.newDebtor.payType.description?this.newDebtor.payType.description:'':'');
        this.debtorForm.get('arrearsInt').setValue(this.newDebtor.arrearsInt?this.newDebtor.arrearsInt:false);
        this.debtorForm.get('intPerc').setValue(this.newDebtor.intPerc?this.newDebtor.intPerc:0);

        this.debtorForm.get('insured').setValue(this.newDebtor.insured?this.newDebtor.insured:false);
        this.debtorForm.get('creditRef').setValue(this.newDebtor.creditRef?this.newDebtor.creditRef:'');
        this.debtorForm.get('creditExpDate').setValue(this.newDebtor.creditExpDate?this.newDebtor.creditExpDate:'');
        this.debtorForm.get('creditAmount').setValue(this.newDebtor.creditAmount?this.newDebtor.creditAmount:0);
        this.debtorForm.get('creditAvail').setValue(this.newDebtor.creditAvail?this.newDebtor.creditAvail:0);
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

    this.debtorForm = this.fb.group({
      accNo: [
        this.newDebtor.accNo
        ,[
          Validators.minLength(4)
        ]
      ]
      ,tradeName: [
        this.newDebtor.tradeName
        ,Validators.required
      ]
      ,regName: [
        this.newDebtor.regName
        ,Validators.required
      ]
      ,parent: [
        this.newDebtor.parent
      ]
      ,regNo: [
        this.newDebtor.regNo
      ]
      ,vatNo: [
        this.newDebtor.vatNo
      ]
      ,telNo: [
        this.newDebtor.telNo
      ]
      ,faxNo: [
        this.newDebtor.faxNo
      ]
      ,webSite: [
        this.newDebtor.webSite
      ]
      ,street1: [
        this.newDebtor.street1
      ]
      ,street2: [
        this.newDebtor.street2
      ]
      ,street3: [
        this.newDebtor.street3
      ]
      ,street4: [
        this.newDebtor.street4
      ]
      ,streetPostalCode: [
        this.newDebtor.streetPostalCode
      ]
      ,box1: [
        this.newDebtor.box1
      ]
      ,box2: [
        this.newDebtor.box2
      ]
      ,box3: [
        this.newDebtor.box3
      ]
      ,box4: [
        this.newDebtor.box4
      ]
      ,boxPostalCode: [
        this.newDebtor.boxPostalCode
      ]
      ,busUnit: [
        this.newDebtor.busUnit
      ]
      ,category: [
        this.newDebtor.category
      ]
      ,typeOrg: [
        this.newDebtor.typeOrg
      ]
      ,busType: [
        this.newDebtor.busType
      ]
      ,branch: [
        this.newDebtor.branch
      ]
      ,country: [
        this.newDebtor.country
      ]
      ,province: [
        this.newDebtor.province
      ]
      ,city: [
        this.newDebtor.city
      ]
      ,accSName: [
        this.newDebtor.accSName
      ]
      ,accFName: [
        this.newDebtor.accFName
      ]
      ,accTitle: [
        this.newDebtor.accTitle
      ]
      ,accCellNo: [
        this.newDebtor.accCellNo
      ]
      ,accEmail: [
        this.newDebtor.accEmail
      ]
      ,oppSName: [
        this.newDebtor.oppSName
      ]
      ,oppFName: [
        this.newDebtor.oppFName
      ]
      ,oppTitle: [
        this.newDebtor.oppTitle
      ]
      ,oppCellNo: [
        this.newDebtor.oppCellNo
      ]
      ,oppEmail: [
        this.newDebtor.oppEmail
      ]
      ,bankName: [
        this.newDebtor.bankName
      ]
      ,bankBranchNo: [
        this.newDebtor.bankBranchNo
      ]
      ,bankAccNo: [
        this.newDebtor.bankAccNo
      ]
      ,bankAccName: [
        this.newDebtor.bankAccName
      ]
      ,payTerm: [
        this.newDebtor.payTerm
      ]
      ,payMethod: [
        this.newDebtor.payMethod
      ]
      ,payType: [
        this.newDebtor.payType
      ]
      ,arrearsInt: [
        this.newDebtor.arrearsInt
      ]
      ,intPerc: [
        this.newDebtor.intPerc
      ]

      ,startDayTime: [
        this.newDebtor.startDayTime
      ]
      ,endDayTime: [
        this.newDebtor.endDayTime
      ]
      ,saturday: [
        this.newDebtor.saturday
      ]
      ,sunday: [
        this.newDebtor.sunday
      ]
      ,holidays: [
        this.newDebtor.holidays
      ]
      ,backOrder: [
        this.newDebtor.backOrder
      ]

      ,insured: [
        this.newDebtor.insured
      ]
      ,orderReq: [
        this.newDebtor.orderReq
      ]
      ,creditRef: [
        this.newDebtor.creditRef
      ]
      ,creditExpDate: [
        this.newDebtor.creditExpDate
      ]
      ,creditAmount: [
        this.newDebtor.creditAmount
      ]
      ,creditAvail: [
        this.newDebtor.creditAvail
      ]
      ,suspended: [
        this.newDebtor.suspend
      ]
    });

    this.debtorForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.debtorForm) {return; }

    const form = this.debtorForm;

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
    if (this.debtorsShort?this.debtorsShort.length>0:false) {
      if ((this.debtorForm.get('accNo').value) &&
          (this.debtorForm.get('accNo').value != this.debtorsShort.find(debt => debt.value == this.autoCompleteControl.value).value)) {
        if (this.debtorsShort.find(debt => debt.value.toLowerCase() === this.debtorForm.get('accNo').value.toLowerCase())) {
          this.formErrors['accNo'] += this.validationMessages['accNo'].duplicate;
          this.debtorForm.get('accNo').setErrors({'incorrect': true});
        }
        else {
          this.debtorForm.get('accNo').setErrors(null)
        }
      }
    }
  }

  formErrors = {
    'accNo': ''
    ,'tradeName': ''
    ,'regName': ''
    ,'parent': ''
    ,'regNo': ''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'website': ''
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
    ,'busUnit': ''
    ,'category': ''
    ,'typeOrg': ''
    ,'busType': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
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
    ,'payTerm': ''
    ,'payMethod': ''
    ,'payType': ''
    ,'arrearsInt': ''
    ,'intPerc': ''

    ,'ficaExpDate': ''

    ,'insured': ''
    ,'orderReq': ''
    ,'creditRef': ''
    ,'creditExpDate': ''
    ,'creditAmount': ''
    ,'creditAvail': ''
    ,'suspended': ''
  };

  validationMessages = {
    'accNo': {
      'required':   'AccNo is required.'
      ,'minlength': 'AccNo must be at least 4 characters long.'
      ,'duplicate': 'AccNo must be unique.'
    }
    ,'tradeName': ''
    ,'regName': ''
    ,'parent': ''
    ,'regNo': ''
    ,'vatNo': ''
    ,'telNo': ''
    ,'faxNo': ''
    ,'website': ''
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
    ,'busUnit': ''
    ,'category': ''
    ,'typeOrg': ''
    ,'busType': ''
    ,'branch': ''
    ,'country': ''
    ,'province': ''
    ,'city': ''
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
    ,'payTerm': ''
    ,'payMethod': ''
    ,'payType': ''
    ,'arrearsInt': ''
    ,'intPerc': ''
    ,'ficaExpDate': ''
    ,'insured': ''
    ,'orderReq': ''
    ,'creditRef': ''
    ,'creditExpDate': ''
    ,'creditAmount': ''
    ,'creditAvail': ''
    ,'suspended': ''
  }

  onSubmit() {
    this.newDebtor = this.debtorForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newDebtor.createUser = this.user;
        this.debtorService.sendDebtor(this.newDebtor).subscribe(
          data => {
            this.debtorAdded = true;
            this.newDebtor = new Debtor();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newDebtor = this.debtorForm.value;
    console.log(this.newDebtor);
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newDebtor.createUser = this.user;
        this.debtorService.updateDebtor(this.newDebtor).subscribe(
          data => {
            this.debtorAdded = true;
            this.newDebtor = new Debtor();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
