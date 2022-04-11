/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {ItemUnitOfMeasure} from "../../../models/item/UnitOfMeasure";
import {SecurityUser} from "../../../models/security/User";
import {ItemService} from "../../../services/item.service";
import {SecurityService} from "../../../services/security.service";



@Component({
  selector: 'itemUnitOfMeasure'
  ,templateUrl: './unitOfMeasure.component.html'
})
export class ItemUnitOfMeasureComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  unitOfMeasureForm: FormGroup;
  unitOfMeasures : ShortDataPackage[];

  newUnitOfMeasure: ItemUnitOfMeasure = new ItemUnitOfMeasure();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private itemService: ItemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getUnitOfMeasures();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.unitOfMeasures.find(data => data.id === id)) {
      this.newUnitOfMeasure.description = this.unitOfMeasures.find(data => data.id === id).value;
      this.newUnitOfMeasure.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.deleteUnitOfMeasure(this.newUnitOfMeasure).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newUnitOfMeasure = new ItemUnitOfMeasure();
            this.clearForm();
            this.getUnitOfMeasures();
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

  onEdit(value: string, id: number) {
    if(this.unitOfMeasures.find(data => data.value == value))
      return;
    this.unitOfMeasures.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.unitOfMeasures)
  }

  clearForm() {
    this.unitOfMeasureForm.patchValue({
      description: ""
    });
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

  update(id: number): boolean {
    if (this.unitOfMeasures.find(data => data.id === id)) {
      this.newUnitOfMeasure.description = this.unitOfMeasures.find(data => data.id === id).value;
      this.newUnitOfMeasure.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.updateUnitOfMeasure(this.newUnitOfMeasure).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newUnitOfMeasure = new ItemUnitOfMeasure();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.unitOfMeasureForm = this.fb.group({
      description: [
        this.newUnitOfMeasure.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.unitOfMeasureForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.unitOfMeasureForm) {return; }

    const form = this.unitOfMeasureForm;

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
    if (this.unitOfMeasures?this.unitOfMeasures.length>0:false) {
      if ((this.unitOfMeasureForm.get('description').value) &&
        (this.unitOfMeasures.find(cred => cred.value.toLowerCase() == this.unitOfMeasureForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.unitOfMeasureForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.unitOfMeasureForm.get('description').validator?this.unitOfMeasureForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.unitOfMeasureForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Unit of Measure description is required.'
      ,'minlength': 'Unit of Measure description must be at least 4 characters long.'
      ,'duplicate': 'Unit of Measure description must be unique.'
    }
  }


  onSubmit() {
    this.newUnitOfMeasure = this.unitOfMeasureForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newUnitOfMeasure.createUser = this.user
        this.itemService.sendUnitOfMeasure(this.newUnitOfMeasure).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newUnitOfMeasure = new ItemUnitOfMeasure();
            this.getUnitOfMeasures();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
