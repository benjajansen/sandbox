/**
 * Created by Benja on 5/28/2017.
 */

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from '../../../models/dataPackages/ShortDataPackage';
import {MatAutocompleteTrigger} from '@angular/material';
import {ItemMaster} from "../../../models/item/ItemMaster";
import {ItemService} from "../../../services/item.service";
import {ItemMasterAutoPackage} from "../../../models/dataPackages/ItemMasterAutoPackage";

@Component({
  selector: 'itemMaster'
  ,templateUrl: './itemMaster.component.html'
})
export class ItemMasterComponent implements OnInit, AfterViewInit{
  @ViewChild(MatAutocompleteTrigger)
    private trigger: MatAutocompleteTrigger;

  itemMasterForm: FormGroup;
  selectorForm: FormGroup;

  itemMasterShort: ShortDataPackage[];
  itemMasterAuto: ItemMasterAutoPackage[];
  categories: ShortDataPackage[];
  groups: ShortDataPackage[];
  unitOfMeasures: ShortDataPackage[];

  newItemMaster: ItemMaster = new ItemMaster();
  itemMasterAdded: boolean = false;

  user: SecurityUser;

  autoCompleteControl = new FormControl();
  filteredOptions: ItemMasterAutoPackage[];

  constructor (private fb: FormBuilder, private itemService:ItemService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getItemsAuto();
    this.getItemsShort();
    this.getCategories();
    this.getGroups();
    this.getUnitOfMeasures();
    this.createForm();

    this.autoCompleteControl.valueChanges.subscribe(
      data => this.filter(data)
    );
  }

  ngAfterViewInit() {
    this.trigger.autocomplete.optionSelected.subscribe(option => {
      if ((this.itemMasterAuto?this.itemMasterAuto.length>0:false) && option.option.value) {
        var id = this.itemMasterAuto.find(cred => cred.code === option.option.value).id
        if (id) {
          this.populateForm(id)
        }
        else {
          //this.itemMasterForm.get('code').setErrors(null)
        }
      }
    });
  }

  filter(val: string){
    this.filteredOptions = this.itemMasterAuto.filter(option =>
      (option.code.toLowerCase() + " " + option.description.toLowerCase() + " " + option.altCode.toLowerCase()).includes(val.toLowerCase())
    );
  }

  getItemsAuto() {
    this.itemService.getItemMasterAuto().subscribe(
      data => {
        this.itemMasterAuto = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.filteredOptions = this.itemMasterAuto;
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

  getCategories() {
    this.itemService.getCategoryShort().subscribe(
      data => {
        this.categories = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.categories);
      },
      error => console.log("1 " + error)
    )
  }

  getGroups() {
    this.itemService.getGroupShort().subscribe(
      data => {
        this.groups = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getUnitOfMeasures() {
    this.itemService.getUnitOfMeasureShort().subscribe(
      data => {
        this.unitOfMeasures = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.unitOfMeasures);
      },
      error => console.log("1 " + error)
    )
  }

  populateForm(itemId:any) {
    this.itemService.getItemMasterById(itemId).subscribe(
      data => {
        //this.itemMasterForm.setValue(this.newItemMaster)
        this.newItemMaster = JSON.parse(JSON.parse(JSON.stringify(data))._body);

        this.itemMasterForm.get('code').setValue(this.newItemMaster.code);
        this.itemMasterForm.get('description').setValue(this.newItemMaster.description);
        this.itemMasterForm.get('cubeSize').setValue(this.newItemMaster.cubeSize);
        this.itemMasterForm.get('measure').setValue(this.newItemMaster.measure?this.newItemMaster.measure.description?this.newItemMaster.measure.description:'':'');
        this.itemMasterForm.get('group').setValue(this.newItemMaster.group?this.newItemMaster.group.description?this.newItemMaster.group.description:'':'');
        this.itemMasterForm.get('category').setValue(this.newItemMaster.category?this.newItemMaster.category.description?this.newItemMaster.category.description:'':'');
        this.itemMasterForm.get('comments').setValue(this.newItemMaster.comments?this.newItemMaster.comments:'');
        this.itemMasterForm.get('suspend').setValue(this.newItemMaster.suspend?this.newItemMaster.suspend:false);
      }
      , error => console.log("2 " + error)
    )
  }

  createForm() {
    this.selectorForm = this.fb.group({
      codeDrop: [
        ''
      ]
    });


    this.itemMasterForm = this.fb.group({
      code: [
        this.newItemMaster.code
        ,[
          Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
      ,description: [
        this.newItemMaster.description
        ,Validators.required
      ]
      ,cubeSize: [
        this.newItemMaster.cubeSize
        ,Validators.required
      ]
      ,measure: [
        this.newItemMaster.measure
      ]
      ,group: [
        this.newItemMaster.group
      ]
      ,category: [
        this.newItemMaster.category
      ]
      ,comments: [
        this.newItemMaster.comments
      ]
      ,suspend: [
        this.newItemMaster.suspend
      ]
      ,suspendDate: [
        this.newItemMaster.suspendDate
      ]
    });

    this.itemMasterForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {

    if (!this.itemMasterForm) {
      return;
    }

    const form = this.itemMasterForm;

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
    if (this.itemMasterShort?this.itemMasterShort.length>0:false) {
      if ((this.itemMasterForm.get('code').value) &&
          (this.itemMasterForm.get('code').value != this.itemMasterShort.find(cred => cred.value == this.autoCompleteControl.value).value)) {
        if (this.itemMasterShort.find(cred => cred.value.toLowerCase() === this.itemMasterForm.get('code').value.toLowerCase())) {
          this.formErrors['code'] += this.validationMessages['code'].duplicate;
          this.itemMasterForm.get('code').setErrors({'incorrect': true});
        }
        else {
          this.itemMasterForm.get('code').setErrors(null)
        }
      }
    }
  }

  formErrors = {
    'codeDrop':''
    ,'code': ''
    ,'description': ''
    ,'cubeSize': ''
    ,'measure': ''
    ,'group': ''
    ,'category':''
    ,'comments': ''
    ,'suspend': ''
  };

  validationMessages = {
    'codeDrop':''
    ,'code': {
      'required':   'AccNo is required.'
      ,'minlength': 'AccNo must be at least 4 characters long.'
      ,'duplicate': 'AccNo must be unique.'
    }
    ,'description': ''
    ,'cubeSize': ''
    ,'measure': ''
    ,'group': ''
    ,'category':''
    ,'comments': ''
    ,'suspend': ''
  }

  onSubmit() {
    this.newItemMaster = this.itemMasterForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newItemMaster.createUser = this.user;
        console.log("What is being sent:");
        console.log(this.newItemMaster)
        this.itemService.sendItemMaster(this.newItemMaster).subscribe(
          data => {
            this.itemMasterAdded = true;
            this.newItemMaster = new ItemMaster();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

  onUpdate() {
    this.newItemMaster = this.itemMasterForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newItemMaster.createUser = this.user;
        this.itemService.updateItemMaster(this.newItemMaster).subscribe(
          data => {
            this.itemMasterAdded = true;
            this.newItemMaster = new ItemMaster();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
