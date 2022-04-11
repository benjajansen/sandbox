/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemPickMethod} from "../../../models/system/PickMethod";

@Component({
  selector: 'systemPickMethod'
  ,templateUrl: './pickMethod.component.html'
})
export class SystemPickMethodComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  pickMethodForm: FormGroup;
  pickMethods : ShortDataPackage[];

  newPickMethod: SystemPickMethod = new SystemPickMethod();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getPickMethods();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.pickMethods.find(data => data.id === id)) {
      this.newPickMethod.name = this.pickMethods.find(data => data.id === id).value;
      this.newPickMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deletePickMethod(this.newPickMethod).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newPickMethod = new SystemPickMethod();
            this.clearForm();
            this.getPickMethods();
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
    if(this.pickMethods.find(data => data.value == value))
      return;
    this.pickMethods.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.pickMethods)
  }

  clearForm() {
    this.pickMethodForm.patchValue({
      name: ""
    });
  }

  getPickMethods() {
    this.systemService.getPickMethodShort().subscribe(
      data => {
        this.pickMethods = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.pickMethods);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.pickMethods.find(data => data.id === id)) {
      this.newPickMethod.name = this.pickMethods.find(data => data.id === id).value;
      this.newPickMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updatePickMethod(this.newPickMethod).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newPickMethod = new SystemPickMethod();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.pickMethodForm = this.fb.group({
      name: [
        this.newPickMethod.name
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.pickMethodForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.pickMethodForm) {return; }

    const form = this.pickMethodForm;

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
    if (this.pickMethods?this.pickMethods.length>0:false) {
      if ((this.pickMethodForm.get('name').value) &&
        (this.pickMethods.find(cred => cred.value.toLowerCase() == this.pickMethodForm.get('name').value.toLowerCase()))) {
        this.formErrors['name'] += this.validationMessages['name'].duplicate;
        this.pickMethodForm.get('name').setErrors({'incorrect': true})
      }
      else {
        if(this.pickMethodForm.get('name').validator?this.pickMethodForm.get('name').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.pickMethodForm.get('name').setErrors(null)
      }
    }
  }

  formErrors = {
    'name': ''
  };

  validationMessages = {
    'name': {
      'required':   'PickMethod name is required.'
      ,'minlength': 'PickMethod name must be at least 4 characters long.'
      ,'duplicate': 'PickMethod name must be unique.'
    }
  }


  onSubmit() {
    this.newPickMethod = this.pickMethodForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newPickMethod.createUser = this.user
        this.systemService.sendPickMethod(this.newPickMethod).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newPickMethod = new SystemPickMethod();
            this.getPickMethods();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
