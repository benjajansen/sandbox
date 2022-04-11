/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemBEEType} from "../../../models/system/BEEType";

@Component({
  selector: 'systemBEEType'
  ,templateUrl: './beeType.component.html'
})
export class SystemBEETypeComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  beeTypeForm: FormGroup;
  beeTypes : ShortDataPackage[];

  newBEEType: SystemBEEType = new SystemBEEType();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getBEETypes();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.beeTypes.find(data => data.id === id)) {
      this.newBEEType.description = this.beeTypes.find(data => data.id === id).value;
      this.newBEEType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deleteBEEType(this.newBEEType).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newBEEType = new SystemBEEType();
            this.clearForm();
            this.getBEETypes();
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
    if(this.beeTypes.find(data => data.value == value))
      return;
    this.beeTypes.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.beeTypes)
  }

  clearForm() {
    this.beeTypeForm.patchValue({
      description: ""
    });
  }

  getBEETypes() {
    this.systemService.getBEETypeShort().subscribe(
      data => {
        this.beeTypes = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.beeTypes);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.beeTypes.find(data => data.id === id)) {
      this.newBEEType.description = this.beeTypes.find(data => data.id === id).value;
      this.newBEEType.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updateBEEType(this.newBEEType).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newBEEType = new SystemBEEType();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.beeTypeForm = this.fb.group({
      description: [
        this.newBEEType.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.beeTypeForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.beeTypeForm) {return; }

    const form = this.beeTypeForm;

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
    if (this.beeTypes?this.beeTypes.length>0:false) {
      if ((this.beeTypeForm.get('description').value) &&
        (this.beeTypes.find(cred => cred.value.toLowerCase() == this.beeTypeForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.beeTypeForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.beeTypeForm.get('description').validator?this.beeTypeForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.beeTypeForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'BEEType name is required.'
      ,'minlength': 'BEEType name must be at least 4 characters long.'
      ,'duplicate': 'BEEType name must be unique.'
    }
  }


  onSubmit() {
    this.newBEEType = this.beeTypeForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newBEEType.createUser = this.user
        this.systemService.sendBEEType(this.newBEEType).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newBEEType = new SystemBEEType();
            this.getBEETypes();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
