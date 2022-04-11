/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemTitle} from "../../../models/system/Title";

@Component({
  selector: 'systemTitle'
  ,templateUrl: './title.component.html'
})
export class SystemTitleComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  titleForm: FormGroup;
  titles : ShortDataPackage[];

  newTitle: SystemTitle = new SystemTitle();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getTitles();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.titles.find(data => data.id === id)) {
      this.newTitle.description = this.titles.find(data => data.id === id).value;
      this.newTitle.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deleteTitle(this.newTitle).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newTitle = new SystemTitle();
            this.clearForm();
            this.getTitles();
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
    if(this.titles.find(data => data.value == value))
      return;
    this.titles.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.titles)
  }

  clearForm() {
    this.titleForm.patchValue({
      description: ""
    });
  }

  getTitles() {
    this.systemService.getTitleShort().subscribe(
      data => {
        this.titles = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.titles);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.titles.find(data => data.id === id)) {
      this.newTitle.description = this.titles.find(data => data.id === id).value;
      this.newTitle.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updateTitle(this.newTitle).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newTitle = new SystemTitle();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.titleForm = this.fb.group({
      description: [
        this.newTitle.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.titleForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.titleForm) {return; }

    const form = this.titleForm;

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
    if (this.titles?this.titles.length>0:false) {
      if ((this.titleForm.get('description').value) &&
        (this.titles.find(cred => cred.value.toLowerCase() == this.titleForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.titleForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.titleForm.get('description').validator?this.titleForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.titleForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Title name is required.'
      ,'minlength': 'Title name must be at least 4 characters long.'
      ,'duplicate': 'Title name must be unique.'
    }
  }


  onSubmit() {
    this.newTitle = this.titleForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newTitle.createUser = this.user
        this.systemService.sendTitle(this.newTitle).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newTitle = new SystemTitle();
            this.getTitles();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
