/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {WarehouseZone} from "../../../models/warehouse/Zone";


@Component({
  selector: 'adminZone'
  ,templateUrl: './zone.component.html'
})
export class WarehouseZoneComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  zoneForm: FormGroup;
  zones : ShortDataPackage[];

  warehouses: ShortDataPackage[];
  filteredWarehouses: ShortDataPackage[];
  warehouseSelected: boolean = false;

  newZone: WarehouseZone = new WarehouseZone();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  formErrors = {
    'description': '',
    'warehouse': ''
  };

  validationMessages = {
    'description': {
      'required':   'Zone name is required.'
      ,'minlength': 'Zone name must be at least 4 characters long.'
      ,'duplicate': 'Zone name must be unique.'
    },
    'warehouse': {
      'required':   'Warehouse required.',
      'incorrect':  'Warehouse is not valid.'
    }
  }

  constructor (private fb: FormBuilder, private adminService: AdminService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getWarehouses();
    this.createForm();
  }

  getZones(id: number) {
    this.adminService.getZoneShortByWarehouse(id).subscribe(
      data => {
        this.zones = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.zones);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  getWarehouses() {
    this.adminService.getWarehouseShort().subscribe(
      data => {
        this.warehouses = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.warehouses);
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
    if (this.zones.find(data => data.id === id)) {
      this.newZone.description = this.zones.find(data => data.id === id).value;
      this.newZone.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.deleteZone(this.newZone).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newZone = new WarehouseZone();
            this.clearForm();
            this.getZones(this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value).id);
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
  }

  clearForm() {
    this.zoneForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.zones.find(data => data.value == value)) {

      return;
    }

    this.zones.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.zones)
  }

  update(id: number): boolean {
    if (this.zones.find(data => data.id === id)) {
      this.newZone.description = this.zones.find(data => data.id === id).value;
      this.newZone.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateZone(this.newZone).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newZone = new WarehouseZone();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.zoneForm = this.fb.group({
      description: [
        this.newZone.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ],
      warehouse: [
        this.newZone.warehouse
        ,Validators.required
    ]
    });

    this.zoneForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.zoneForm.get('warehouse').valueChanges.subscribe(
      data => {
        this.filterWarehouses(data)
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.zoneForm) {return; }

    const form = this.zoneForm;

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

    //Check for duplicate on the Description
    if (this.zones?this.zones.length>0:false) {
      if ((this.zoneForm.get('description').value) &&
        (this.zones.find(cred => cred.value.toLowerCase() == this.zoneForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.zoneForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.zoneForm.get('description').validator?this.zoneForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.zoneForm.get('description').setErrors(null)
      }
    }
  }

  filterWarehouses(val: string){
    this.filteredWarehouses = this.warehouses.filter(option =>
      option.value.toLowerCase().includes(val.toLowerCase())
    );

    //This is to make sure a valid debtor has been selected
    if (this.filteredWarehouses?this.filteredWarehouses.length>0:false) {
      if ((this.zoneForm.get('warehouse').value) &&
        (!this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value))) {
        this.warehouseSelected = false;
        this.zoneForm.get('warehouse').setErrors({'incorrect':true});
        this.formErrors['warehouse'] += this.validationMessages['warehouse'].incorrect;
        this.zones = [];
      }
      else if ( (this.zoneForm.get('warehouse').value) &&
        (this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value)) &&
        (this.zoneForm.get('warehouse').value == this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value).value)) {
          this.warehouseSelected = true;
          this.zoneForm.get('warehouse').setErrors(null);
      }
      else {
        this.warehouseSelected = false;
        this.zoneForm.get('warehouse').setErrors({'incorrect':true});
        this.formErrors['warehouse'] += this.validationMessages['warehouse'].incorrect;
        this.zones = [];
      }
    }
    else {
      this.warehouseSelected = false;
    }

    if(this.warehouseSelected) {
      this.getZones(this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value).id);
    }
  }


  onSubmit() {
    this.newZone = this.zoneForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newZone.createUser = this.user
        this.adminService.sendZone(this.newZone).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newZone = new WarehouseZone();
            this.getZones(this.filteredWarehouses.find(warehouse => warehouse.value == this.zoneForm.get('warehouse').value).id);
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
