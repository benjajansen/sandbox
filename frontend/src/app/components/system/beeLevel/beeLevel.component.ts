/**
 * Created by Benja on 5/28/2017.
 */

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {SystemBEELevel} from "../../../models/system/BEELevel";
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";

@Component({
  selector: 'systemBEELevel'
  ,templateUrl: './beeLevel.component.html'
})
export class SystemBEELevelComponent implements OnInit{
  beeLevelForm: FormGroup;
  beeLevels: ShortDataPackage[];

  newBEELevel: SystemBEELevel = new SystemBEELevel();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService) {}

  ngOnInit(): void {
    this.getBEELevels();
    this.createForm();
  }

  getBEELevels() {
    this.systemService.getBEELevelShort().subscribe(
      data => {
        this.beeLevels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.beeLevels);
      },
      error => console.log("1 " + error)
    )
  }

  onDelete(id: number) {
    if (this.beeLevels.find(data => data.id === id)) {
      this.newBEELevel.description = this.beeLevels.find(data => data.id === id).value;
      this.newBEELevel.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deleteBEELevel(this.newBEELevel).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newBEELevel = new SystemBEELevel();
            this.clearForm();
            this.getBEELevels();
          },

          error => {
            console.log("2 " + error)
            this.deletedError = true;
            this.clearForm();

           // this.modal.nativeElement.show();
          }
        );
      },
      error => console.log("3 " + error)
    )
  }

  clearForm() {
    this.beeLevelForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.beeLevels.find(data => data.value == value)) {
      this.getBEELevels();
      return;
    }

    this.beeLevels.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.beeLevels)
  }

  update(id: number): boolean {
    if (this.beeLevels.find(data => data.id === id)) {
      this.newBEELevel.description = this.beeLevels.find(data => data.id === id).value;
      this.newBEELevel.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updateBEELevel(this.newBEELevel).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newBEELevel = new SystemBEELevel();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.beeLevelForm = this.fb.group({
      description: [
        this.newBEELevel.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.beeLevelForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.beeLevelForm) {return; }

    const form = this.beeLevelForm;

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
    if (this.beeLevels?this.beeLevels.length>0:false) {
      if ((this.beeLevelForm.get('description').value) &&
        (this.beeLevels.find(cred => cred.value.toLowerCase() == this.beeLevelForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.beeLevelForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.beeLevelForm.get('description').validator?this.beeLevelForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.beeLevelForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Description is required.'
      ,'minlength': 'Description must be at least 4 characters long.'
      ,'duplicate': 'AccNo must be unique.'
    }
  }

  onSubmit() {
    this.newBEELevel = this.beeLevelForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.sendBEELevel(this.newBEELevel).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newBEELevel = new SystemBEELevel();
            this.getBEELevels();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }
}
