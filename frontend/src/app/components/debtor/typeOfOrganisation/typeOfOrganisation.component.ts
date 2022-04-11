/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {DebtorTypeOfOrganisation} from "../../../models/debtor/TypeOfOrganisation";
import {DebtorService} from "../../../services/debtor.service";


@Component({
  selector: 'debtorTypeOfOrganisation'
  ,templateUrl: './typeOfOrganisation.component.html'
})
export class DebtorTypeOfOrganisationComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  typeOfOrganisationForm: FormGroup;
  typeOfOrganisations : ShortDataPackage[];

  newTypeOfOrganisation: DebtorTypeOfOrganisation = new DebtorTypeOfOrganisation();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private debtorService: DebtorService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getTypeOfOrganisations();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.typeOfOrganisations.find(data => data.id === id)) {
      this.newTypeOfOrganisation.description = this.typeOfOrganisations.find(data => data.id === id).value;
      this.newTypeOfOrganisation.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.deleteTypeOfOrganisation(this.newTypeOfOrganisation).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newTypeOfOrganisation = new DebtorTypeOfOrganisation();
            this.clearForm();
            this.getTypeOfOrganisations();
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
    if(this.typeOfOrganisations.find(data => data.value == value))
      return;
    this.typeOfOrganisations.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.typeOfOrganisations)
  }

  clearForm() {
    this.typeOfOrganisationForm.patchValue({
      description: ""
    });
  }

  getTypeOfOrganisations() {
    this.debtorService.getTypeOfOrganisationShort().subscribe(
      data => {
        this.typeOfOrganisations = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.typeOfOrganisations);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.typeOfOrganisations.find(data => data.id === id)) {
      this.newTypeOfOrganisation.description = this.typeOfOrganisations.find(data => data.id === id).value;
      this.newTypeOfOrganisation.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.debtorService.updateTypeOfOrganisation(this.newTypeOfOrganisation).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newTypeOfOrganisation = new DebtorTypeOfOrganisation();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.typeOfOrganisationForm = this.fb.group({
      description: [
        this.newTypeOfOrganisation.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.typeOfOrganisationForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.typeOfOrganisationForm) {return; }

    const form = this.typeOfOrganisationForm;

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
    if (this.typeOfOrganisations?this.typeOfOrganisations.length>0:false) {
      if ((this.typeOfOrganisationForm.get('description').value) &&
        (this.typeOfOrganisations.find(cred => cred.value.toLowerCase() == this.typeOfOrganisationForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.typeOfOrganisationForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.typeOfOrganisationForm.get('description').validator?this.typeOfOrganisationForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.typeOfOrganisationForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'TypeOfOrganisation name is required.'
      ,'minlength': 'TypeOfOrganisation name must be at least 4 characters long.'
      ,'duplicate': 'TypeOfOrganisation name must be unique.'
    }
  }


  onSubmit() {
    this.newTypeOfOrganisation = this.typeOfOrganisationForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newTypeOfOrganisation.createUser = this.user
        this.debtorService.sendTypeOfOrganisation(this.newTypeOfOrganisation).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newTypeOfOrganisation = new DebtorTypeOfOrganisation();
            this.getTypeOfOrganisations();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
