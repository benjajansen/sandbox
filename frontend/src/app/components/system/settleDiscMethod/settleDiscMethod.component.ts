/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemSettleDiscMethod} from "../../../models/system/SettleDiscMethod";

@Component({
  selector: 'systemSettleDiscMethod'
  ,templateUrl: './settleDiscMethod.component.html'
})
export class SystemSettleDiscMethodComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  settleDiscMethodForm: FormGroup;
  settleDiscMethods : ShortDataPackage[];

  newSettleDiscMethod: SystemSettleDiscMethod = new SystemSettleDiscMethod();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getSettleDiscMethods();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.settleDiscMethods.find(data => data.id === id)) {
      this.newSettleDiscMethod.description = this.settleDiscMethods.find(data => data.id === id).value;
      this.newSettleDiscMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deleteSettleDiscMethod(this.newSettleDiscMethod).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newSettleDiscMethod = new SystemSettleDiscMethod();
            this.clearForm();
            this.getSettleDiscMethods();
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
    if(this.settleDiscMethods.find(data => data.value == value))
      return;
    this.settleDiscMethods.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.settleDiscMethods)
  }

  clearForm() {
    this.settleDiscMethodForm.patchValue({
      description: ""
    });
  }

  getSettleDiscMethods() {
    this.systemService.getSettleDiscMethodShort().subscribe(
      data => {
        this.settleDiscMethods = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.settleDiscMethods);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.settleDiscMethods.find(data => data.id === id)) {
      this.newSettleDiscMethod.description = this.settleDiscMethods.find(data => data.id === id).value;
      this.newSettleDiscMethod.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updateSettleDiscMethod(this.newSettleDiscMethod).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newSettleDiscMethod = new SystemSettleDiscMethod();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.settleDiscMethodForm = this.fb.group({
      description: [
        this.newSettleDiscMethod.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.settleDiscMethodForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.settleDiscMethodForm) {return; }

    const form = this.settleDiscMethodForm;

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
    if (this.settleDiscMethods?this.settleDiscMethods.length>0:false) {
      if ((this.settleDiscMethodForm.get('description').value) &&
        (this.settleDiscMethods.find(cred => cred.value.toLowerCase() == this.settleDiscMethodForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.settleDiscMethodForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.settleDiscMethodForm.get('description').validator?this.settleDiscMethodForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.settleDiscMethodForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'SettleDiscMethod name is required.'
      ,'minlength': 'SettleDiscMethod name must be at least 4 characters long.'
      ,'duplicate': 'SettleDiscMethod name must be unique.'
    }
  }


  onSubmit() {
    this.newSettleDiscMethod = this.settleDiscMethodForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newSettleDiscMethod.createUser = this.user
        this.systemService.sendSettleDiscMethod(this.newSettleDiscMethod).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newSettleDiscMethod = new SystemSettleDiscMethod();
            this.getSettleDiscMethods();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
