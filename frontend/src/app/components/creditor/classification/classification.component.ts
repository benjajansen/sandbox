/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {CreditorClassification} from "../../../models/creditor/Classification";
import {CreditorService} from "../../../services/creditor.service";


@Component({
  selector: 'creditorClassification'
  ,templateUrl: './classification.component.html'
})
export class CreditorClassificationComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  classificationForm: FormGroup;
  classifications : ShortDataPackage[];

  newClassification: CreditorClassification = new CreditorClassification();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private creditorService: CreditorService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getClassifications();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.classifications.find(data => data.id === id)) {
      this.newClassification.description = this.classifications.find(data => data.id === id).value;
      this.newClassification.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.creditorService.deleteClassification(this.newClassification).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newClassification = new CreditorClassification();
            this.clearForm();
            this.getClassifications();
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
    if(this.classifications.find(data => data.value == value))
      return;
    this.classifications.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.classifications)
  }

  clearForm() {
    this.classificationForm.patchValue({
      description: ""
    });
  }

  getClassifications() {
    this.creditorService.getClassificationShort().subscribe(
      data => {
        this.classifications = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.classifications);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.classifications.find(data => data.id === id)) {
      this.newClassification.description = this.classifications.find(data => data.id === id).value;
      this.newClassification.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.creditorService.updateClassification(this.newClassification).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newClassification = new CreditorClassification();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.classificationForm = this.fb.group({
      description: [
        this.newClassification.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.classificationForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.classificationForm) {return; }

    const form = this.classificationForm;

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
    if (this.classifications?this.classifications.length>0:false) {
      if ((this.classificationForm.get('description').value) &&
        (this.classifications.find(cred => cred.value.toLowerCase() == this.classificationForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.classificationForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.classificationForm.get('description').validator?this.classificationForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.classificationForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Classification name is required.'
      ,'minlength': 'Classification name must be at least 4 characters long.'
      ,'duplicate': 'Classification name must be unique.'
    }
  }


  onSubmit() {
    this.newClassification = this.classificationForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newClassification.createUser = this.user
        this.creditorService.sendClassification(this.newClassification).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newClassification = new CreditorClassification();
            this.getClassifications();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
