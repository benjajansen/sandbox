/**
 * Created by Benja on 5/28/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from '../../../models/dataPackages/ShortDataPackage';
import {ItemMaster} from "../../../models/item/ItemMaster";
import {ItemService} from "../../../services/item.service";
import {ItemMasterAutoPackage} from "../../../models/dataPackages/ItemMasterAutoPackage";
import {ItemLink} from "../../../models/item/ItemLink";
import {DebtCredAutoPackage} from "../../../models/dataPackages/DebtCredAutoPackage";
import {DebtorService} from "../../../services/debtor.service";

@Component({
  selector: 'itemLink'
  ,templateUrl: './itemLink.component.html'
})
export class ItemLinkComponent implements OnInit{
  itemLinkForm: FormGroup;
  itemInfoForm: FormGroup;

  itemMasterShort: ShortDataPackage[];
  itemMasterAuto: ItemMasterAutoPackage[];

  debtorsShort: ShortDataPackage[];
  debtorsAuto: DebtCredAutoPackage[];

  newItemLink: ItemLink = new ItemLink();
  itemLinkAdded: boolean = false;

  user: SecurityUser;

  filteredItems: ItemMasterAutoPackage[];
  filteredDebtors: DebtCredAutoPackage[];

  constructor (private fb: FormBuilder, private itemService:ItemService, private debtorService:DebtorService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getItemsAuto();
    this.getItemsShort();
    this.getDebtorsAuto();
    this.getDebtorsShort();
    this.createForm();
  }

  /*
  ngAfterViewInit() {
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.itemMasterAuto?this.itemMasterAuto.length>0:false) && option.option.value) {
        var id = this.itemMasterAuto.find(cred => cred.code === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.itemLinkForm.get('code').setErrors(null)
        }
      }
    });
  }
*/

  getItemsAuto() {
    this.itemService.getItemMasterAuto().subscribe(
      data => {
        this.itemMasterAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredItems = this.itemMasterAuto;
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getItemsShort() {
    this.itemService.getItemMasterShort().subscribe(
      data => {
        this.itemMasterShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getDebtorsAuto() {
    this.debtorService.getDebtorAuto().subscribe(
      data => {
        this.debtorsAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredDebtors = this.debtorsAuto;
      },
      error => console.log("1 " + error)
    )
  }

  getDebtorsShort() {
    this.debtorService.getDebtorShort().subscribe(
      data => {
        this.debtorsShort = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      },
      error => console.log("1 " + error)
    )
  }

  populateForm(itemId:any) {
    this.itemService.getItemMasterById(itemId).subscribe(
      data => {
        //this.itemLinkForm.setValue(this.newItemLink)
        this.newItemLink = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        this.itemLinkForm.get('item').setValue(this.newItemLink.item);
        this.itemLinkForm.get('debtor').setValue(this.newItemLink.debtor);
        this.itemLinkForm.get('alternativeCode').setValue(this.newItemLink.alternativeCode?this.newItemLink.alternativeCode:'');
        this.itemLinkForm.get('pickMethod').setValue(this.newItemLink.pickMethod?this.newItemLink.pickMethod.name?this.newItemLink.pickMethod.name:'':'');
        this.itemLinkForm.get('comments').setValue(this.newItemLink.comments?this.newItemLink.comments:'');

        this.itemLinkForm.get('minQty').setValue(this.newItemLink.minQty?this.newItemLink.minQty:0);
        this.itemLinkForm.get('maxQty').setValue(this.newItemLink.maxQty?this.newItemLink.maxQty:0);
        this.itemLinkForm.get('reorderQty').setValue(this.newItemLink.reorderQty?this.newItemLink.reorderQty:0);
        this.itemLinkForm.get('expiryDate').setValue(this.newItemLink.expiryDate?this.newItemLink.expiryDate:false);
        this.itemLinkForm.get('bestBefore').setValue(this.newItemLink.bestBefore?this.newItemLink.bestBefore:false);

        this.itemLinkForm.get('onOrderQuantity').setValue(this.newItemLink.onOrderQuantity?this.newItemLink.onOrderQuantity:0);
        this.itemLinkForm.get('receivedQuantity').setValue(this.newItemLink.receivedQuantity?this.newItemLink.receivedQuantity:0);
        this.itemLinkForm.get('receivedNettWeight').setValue(this.newItemLink.receivedNettWeight?this.newItemLink.receivedNettWeight:0);
        this.itemLinkForm.get('receivedPallets').setValue(this.newItemLink.receivedPallets?this.newItemLink.receivedPallets:0);

        this.itemLinkForm.get('issuedQuantity').setValue(this.newItemLink.issuedQuantity?this.newItemLink.issuedQuantity:0);
        this.itemLinkForm.get('issuedNettWeight').setValue(this.newItemLink.issuedNettWeight?this.newItemLink.issuedNettWeight:0);
        this.itemLinkForm.get('issuedPallets').setValue(this.newItemLink.issuedPallets?this.newItemLink.issuedPallets:0);

        this.itemLinkForm.get('onHandQuantity').setValue(this.newItemLink.onHandQuantity?this.newItemLink.onHandQuantity:0);
        this.itemLinkForm.get('onHandNettWeight').setValue(this.newItemLink.onHandNettWeight?this.newItemLink.onHandNettWeight:0);
        this.itemLinkForm.get('onHandPallets').setValue(this.newItemLink.onHandPallets?this.newItemLink.onHandPallets:0);

        this.itemLinkForm.get('suspend').setValue(this.newItemLink.suspend?this.newItemLink.suspend:false);
        this.itemLinkForm.get('suspendDate').setValue(this.newItemLink.suspendDate?this.newItemLink.suspendDate:'');
      }
      , error => console.log("2 " + error)
    )
  }

  createForm() {
    this.itemInfoForm = this.fb.group( {
      description: [
        this.newItemLink.item?this.newItemLink.item.description?this.newItemLink.item.description:'':''
      ],
      measure: [
        this.newItemLink.item?this.newItemLink.item.measure?this.newItemLink.item.measure:'':''
      ],
      group: [
        this.newItemLink.item?this.newItemLink.item.group?this.newItemLink.item.group:'':''
      ],
      category: [
        this.newItemLink.item?this.newItemLink.item.category?this.newItemLink.item.category:'':''
      ]
    });

    this.itemLinkForm = this.fb.group({
      item: [
        this.newItemLink.item,
        Validators.required
      ],
      debtor: [
        this.newItemLink.debtor,
        Validators.required
      ],
      alternativeCode: [
        this.newItemLink.alternativeCode
      ],
      pickMethod: [
        this.newItemLink.pickMethod,
        Validators.required
      ],
      comments: [
        this.newItemLink.comments
      ],
      minQty: [
        this.newItemLink.minQty
      ],
      maxQty: [
        this.newItemLink.maxQty
      ],
      reorderQty: [
        this.newItemLink.reorderQty
      ],
      expiryDate: [
        this.newItemLink.expiryDate
      ],
      bestBefore: [
        this.newItemLink.bestBefore
      ],
      onOrderQuantity: [
        this.newItemLink.onOrderQuantity
      ],
      receivedQuantity: [
        this.newItemLink.receivedQuantity
      ],
      receivedNettWeight: [
        this.newItemLink.receivedNettWeight
      ],
      receivedPallets: [
        this.newItemLink.receivedPallets
      ],
      issuedQuantity: [
        this.newItemLink.issuedQuantity
      ],
      issuedNettWeight: [
        this.newItemLink.issuedNettWeight
      ],
      issuedPallets: [
        this.newItemLink.issuedPallets
      ],
      onHandQuantity: [
        this.newItemLink.onHandQuantity
      ],
      onHandNettWeight: [
        this.newItemLink.onHandNettWeight
      ],
      onHandPallets: [
        this.newItemLink.onHandPallets
      ],
      suspend: [
        this.newItemLink.suspend
      ],
      suspendDate: [
        this.newItemLink.suspendDate
      ]
    });

    this.itemLinkForm.get('item').valueChanges.subscribe(
      data => this.filterItems(data)
    );

    this.itemLinkForm.get('debtor').valueChanges.subscribe(
      data => this.filterDebtors(data)
    );

    this.itemLinkForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  filterItems(val: string){
    this.filteredItems = this.itemMasterAuto.filter(option =>
      (option.code.toLowerCase() + " " + option.description.toLowerCase() + " " + option.altCode.toLowerCase()).includes(val.toLowerCase())
    );
  }

  filterDebtors(val: string){
    if(this.debtorsAuto)
      this.filteredDebtors = this.debtorsAuto.filter(option =>
        (option.accNo.toLowerCase() + " " + option.tradeName.toLowerCase() + " " + option.regName.toLowerCase()).includes(val.toLowerCase())
      );
  }

  onValueChanged(data?: any) {

    if (!this.itemLinkForm) {
      return;
    }

    const form = this.itemLinkForm;

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
    //Form is invalid when you don't have an option selected in both the autocompletes.

    //You'll also have to set a flag, although this has traditionally been where you do error checking, you'll now have to check for something else as well.
    //Speaking of error checking. You'll need to cator for stupid users.
    //If a user selects a Debtor or Item, and then decides to change the code or Account number selected,
    //then you'll need to check and make sure that account number or code actually matches an existing code or account number.
    //also, you'll need to have the user first select either a customer or an Item and then send a request to the backend for
    //all of the linked customers or items to the selected one, this will ensure that less bandwith gets used.
    //It should be update if the values selected is already been submitted before.
    //In order to check this you'll need to write a service that returns the ID combinations of the submitted links.

    if(!this.itemLinkForm.get('item').value) {
      this.formErrors['item'] += this.validationMessages['item'].required;
      this.itemLinkForm.get('item').setErrors({'incorrect': true});
    }
    else if(!this.itemLinkForm.get('debtor').value){
      this.formErrors['debtor'] += this.validationMessages['debtor'].required;
      this.itemLinkForm.get('debtor').setErrors({'incorrect': true});
    }
    else {
      if(!this.itemMasterShort.find(item => item.value === this.itemLinkForm.get('item').value)) {
        this.formErrors['item'] += this.validationMessages['item'].falseValue;
        this.itemLinkForm.get('item').setErrors({'incorrect': true});
        console.log("can't find item")
      }
      if(!this.debtorsShort.find(item => item.value === this.itemLinkForm.get('debtor').value)) {
        this.formErrors['debtor'] += this.validationMessages['debtor'].falseValue;
        this.itemLinkForm.get('debtor').setErrors({'incorrect': true});
        console.log("can't find item")
      }
    }



/*
    if (this.itemMasterShort?this.itemMasterShort.length>0:false) {
      if ((this.itemLinkForm.get('code').value) &&
          (this.itemLinkForm.get('code').value != this.itemMasterShort.find(cred => cred.value == this.itemAutoControl.value).value)) {
        if (this.itemMasterShort.find(cred => cred.value.toLowerCase() === this.itemLinkForm.get('code').value.toLowerCase())) {
          this.formErrors['code'] += this.validationMessages['code'].duplicate;
          this.itemLinkForm.get('code').setErrors({'incorrect': true});
        }
        else {
          this.itemLinkForm.get('code').setErrors(null)
        }
      }
    }
*/


  }

  formErrors = {
    'item':''
    ,'debtor':''
    ,'fifo':''
    ,'lifo':''
    ,'batchNo':''
    ,'serialNo':''
    ,'lotNo':''
    ,'productDate':''
    ,'expiryDate':''
    ,'bestBefore':''
    ,'container':''
    ,'location':''
    ,'minQty':''
    ,'maxQty':''
    ,'reorderQty':''
  };

  validationMessages = {
    'item':{
      'required':   'Item is required.'
      ,'falseValue': 'Must select an Item previously created.'
    }
    ,'debtor':{
      'required':   'Debtor is required.'
      ,'falseValue': 'Must select a Debtor previously created.'
    }
    ,'fifo':''
    ,'lifo':''
    ,'batchNo':''
    ,'serialNo':''
    ,'lotNo':''
    ,'productDate':''
    ,'expiryDate':''
    ,'bestBefore':''
    ,'container':''
    ,'location':''
    ,'minQty':''
    ,'maxQty':''
    ,'reorderQty':''
  }

  onSubmit() {
    this.newItemLink = this.itemLinkForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newItemLink.createUser = this.user;
        console.log("What is being sent:");
        console.log(this.newItemLink)
        this.itemService.sendItemMaster(new ItemMaster()).subscribe(
          data => {
            this.itemLinkAdded = true;
            this.newItemLink = new ItemLink();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newItemLink = this.itemLinkForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newItemLink.createUser = this.user;
        this.itemService.updateItemMaster(new ItemMaster()).subscribe(
          data => {
            this.itemLinkAdded = true;
            this.newItemLink = new ItemLink();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
