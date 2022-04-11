/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {AdminService} from "../../../services/admin.service";
import {AdminBranch} from "../../../models/admin/Branch";

@Component({
  selector: 'adminBranch'
  ,templateUrl: './branch.component.html'
})
export class AdminBranchComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  branchForm: FormGroup;
  branches : ShortDataPackage[];

  newBranch: AdminBranch = new AdminBranch();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Branch name is required.'
      ,'minlength': 'Branch name must be at least 4 characters long.'
      ,'duplicate': 'Branch name must be unique.'
    }
  }

  constructor (private fb: FormBuilder,
               private adminService: AdminService,
               private SecurityService:SecurityService,
               private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getBranches();
    this.createForm();
  }

  getBranches() {
    this.adminService.getBranchShort().subscribe(
      data => {
        this.branches = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.branches);
      }
      ,
      error => console.log("1 " + error)
    )
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.branches.find(data => data.id === id)) {
      this.newBranch.description = this.branches.find(data => data.id === id).value;
      this.newBranch.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.deleteBranch(this.newBranch).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newBranch = new AdminBranch();
            this.clearForm();
            this.getBranches();
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
    this.branchForm.patchValue({
      description: ""
    });
  }

  onEdit(value: string, id: number) {
    if(this.branches.find(data => data.value == value)) {

      return;
    }

    this.branches.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.branches)
  }

  update(id: number): boolean {
    if (this.branches.find(data => data.id === id)) {
      this.newBranch.description = this.branches.find(data => data.id === id).value;
      this.newBranch.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.adminService.updateBranch(this.newBranch).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newBranch = new AdminBranch();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.branchForm = this.fb.group({
      description: [
        this.newBranch.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.branchForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.branchForm) {return; }

    const form = this.branchForm;

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
    if (this.branches?this.branches.length>0:false) {
      if ((this.branchForm.get('description').value) &&
        (this.branches.find(cred => cred.value.toLowerCase() == this.branchForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.branchForm.get('description').setErrors({'incorrect': true})
      } else {
        if(this.branchForm.get('description').validator?this.branchForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.branchForm.get('description').setErrors(null)
      }
    }
  }

  onSubmit() {
    this.newBranch = this.branchForm.value;
    console.log("branch: " + this.newBranch)
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newBranch.createUser = this.user
        console.log("Id: " + this.newBranch.id)
        console.log("description: " + this.newBranch.description)
        console.log("user: " + this.newBranch.createUser)
        console.log("date: " + this.newBranch.createDate)
        this.adminService.sendBranch(this.newBranch).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newBranch = new AdminBranch();
            this.getBranches();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
