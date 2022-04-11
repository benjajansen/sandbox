/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {Warehouse} from "../../../models/warehouse/Warehouse";

@Component({
  selector: 'adminWarehouse'
  ,templateUrl: './warehouse.component.html'
})
export class WarehouseComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  warehouseForm: FormGroup;
  warehouses : ShortDataPackage[];

  branches: ShortDataPackage[];
  filteredBranches: ShortDataPackage[];
  branchSelected: boolean = false;

  newWarehouse: Warehouse = new Warehouse();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  formErrors = {
    'description': '',
    'branch': ''
  };

  validationMessages = {
    'description': {
      'required':   'Warehouse name is required.'
      ,'minlength': 'Warehouse name must be at least 4 characters long.'
      ,'duplicate': 'Warehouse name must be unique.'
    },
    'branch': {
      'required':   'Branch required.',
      'incorrect':  'Branch is not valid.'
    }
  }

  constructor (private fb: FormBuilder, private adminService: AdminService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getBranches();
    this.createForm();
  }

  getWarehouses(id: number) {
    this.adminService.getWarehouseShortByBranch(id).subscribe(
      data => {
        this.warehouses = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.warehouses);
      }
      ,
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

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.warehouses.find(data => data.id === id)) {
      this.newWarehouse.name = this.warehouses.find(data => data.id === id).value;
      this.newWarehouse.id = id;
    }
    else return false;

    /*
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.warehouseService.deleteWarehouse(this.newWarehouse).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newWarehouse = new Warehouse();
            this.clearForm();
            this.getWarehouses(this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value).id);
          },

          error => {
            console.log("2 " + error)
            this.deletedError = true;
            this.clearForm();

            //this.modal.nativeElement.show();
          }
        );
      },
      error => console.log("3 " + error)
    )
    */
  }

  clearForm() {
    this.warehouseForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.warehouses.find(data => data.value == value)) {

      return;
    }

    this.warehouses.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.warehouses)
  }

  update(id: number): boolean {
    if (this.warehouses.find(data => data.id === id)) {
      this.newWarehouse.name = this.warehouses.find(data => data.id === id).value;
      this.newWarehouse.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateWarehouse(this.newWarehouse).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newWarehouse = new Warehouse();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.warehouseForm = this.fb.group({
      description: [
        this.newWarehouse.name
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ],
      branch: [
        this.newWarehouse.branch
        ,Validators.required
    ]
    });

    this.warehouseForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.warehouseForm.get('branch').valueChanges.subscribe(
      data => {
        this.filterBranches(data)
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.warehouseForm) {return; }

    const form = this.warehouseForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      console.log("this: " + field);
      this.formErrors[field] = '';
      const control = form.get(field);
      console.log(control);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }

    //Check for duplicate on the Description
    if (this.warehouses?this.warehouses.length>0:false) {
      if ((this.warehouseForm.get('description').value) &&
        (this.warehouses.find(cred => cred.value.toLowerCase() == this.warehouseForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.warehouseForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.warehouseForm.get('description').validator?this.warehouseForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.warehouseForm.get('description').setErrors(null)
      }
    }
  }

  filterBranches(val: string){
    this.filteredBranches = this.branches.filter(option =>
      option.value.toLowerCase().includes(val.toLowerCase())
    );

    //This is to make sure a valid debtor has been selected
    if (this.filteredBranches?this.filteredBranches.length>0:false) {
      if ((this.warehouseForm.get('branch').value) &&
        (!this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value))) {
        this.branchSelected = false;
        this.warehouseForm.get('branch').setErrors({'incorrect':true});
        this.formErrors['branch'] += this.validationMessages['branch'].incorrect;
        this.warehouses = [];
      }
      else if ( (this.warehouseForm.get('branch').value) &&
        (this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value)) &&
        (this.warehouseForm.get('branch').value == this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value).value)) {
        this.branchSelected = true;
        this.warehouseForm.get('branch').setErrors(null);
      }
      else {
        this.branchSelected = false;
        this.warehouseForm.get('branch').setErrors({'incorrect':true});
        this.formErrors['branch'] += this.validationMessages['branch'].incorrect;
        this.warehouses = [];
      }
    }
    else {
      this.branchSelected = false;
    }

    if(this.branchSelected) {
      this.getWarehouses(this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value).id);
    }
  }


  onSubmit() {
    this.newWarehouse = this.warehouseForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newWarehouse.createUser = this.user
        this.adminService.sendWarehouse(this.newWarehouse).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newWarehouse = new Warehouse();
            this.getWarehouses(this.filteredBranches.find(branch => branch.value == this.warehouseForm.get('branch').value).id);
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
