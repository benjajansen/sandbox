/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SecurityUser} from "../../../models/security/User";
import {ItemService} from "../../../services/item.service";
import {SecurityService} from "../../../services/security.service";
import {ItemGroup} from "../../../models/item/Group"


@Component({
  selector: 'itemGroup'
  ,templateUrl: './group.component.html'
})
export class ItemGroupComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  groupForm: FormGroup;
  groups : ShortDataPackage[];

  newGroup: ItemGroup = new ItemGroup();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private itemService: ItemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getGroups();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.groups.find(data => data.id === id)) {
      this.newGroup.description = this.groups.find(data => data.id === id).value;
      this.newGroup.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.deleteGroup(this.newGroup).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newGroup = new ItemGroup();
            this.clearForm();
            this.getGroups();
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
    if(this.groups.find(data => data.value == value))
      return;
    this.groups.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.groups)
  }

  clearForm() {
    this.groupForm.patchValue({
      description: ""
    });
  }

  getGroups() {
    this.itemService.getGroupShort().subscribe(
      data => {
        this.groups = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.groups);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.groups.find(data => data.id === id)) {
      this.newGroup.description = this.groups.find(data => data.id === id).value;
      this.newGroup.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.updateGroup(this.newGroup).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newGroup = new ItemGroup();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.groupForm = this.fb.group({
      description: [
        this.newGroup.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.groupForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.groupForm) {return; }

    const form = this.groupForm;

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
    if (this.groups?this.groups.length>0:false) {
      if ((this.groupForm.get('description').value) &&
        (this.groups.find(cred => cred.value.toLowerCase() == this.groupForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.groupForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.groupForm.get('description').validator?this.groupForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.groupForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Group name is required.'
      ,'minlength': 'Group name must be at least 4 characters long.'
      ,'duplicate': 'Group name must be unique.'
    }
  }


  onSubmit() {
    this.newGroup = this.groupForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newGroup.createUser = this.user
        this.itemService.sendGroup(this.newGroup).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newGroup = new ItemGroup();
            this.getGroups();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
