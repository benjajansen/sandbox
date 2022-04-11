/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {ItemService} from "../../../services/item.service";
import {ItemCategory} from "../../../models/item/Category";


@Component({
  selector: 'itemCategory'
  ,templateUrl: './category.component.html'
})
export class ItemCategoryComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  categoryForm: FormGroup;
  categories : ShortDataPackage[];

  newCategory: ItemCategory = new ItemCategory();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private itemService: ItemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getCategories();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.categories.find(data => data.id === id)) {
      this.newCategory.description = this.categories.find(data => data.id === id).value;
      this.newCategory.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.deleteCategory(this.newCategory).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newCategory = new ItemCategory();
            this.clearForm();
            this.getCategories();
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
    if(this.categories.find(data => data.value == value))
      return;
    this.categories.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.categories)
  }

  clearForm() {
    this.categoryForm.patchValue({
      description: ""
    });
  }

  getCategories() {
    this.itemService.getCategoryShort().subscribe(
      data => {
        this.categories = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.categories);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.categories.find(data => data.id === id)) {
      this.newCategory.description = this.categories.find(data => data.id === id).value;
      this.newCategory.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.itemService.updateCategory(this.newCategory).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newCategory = new ItemCategory();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.categoryForm = this.fb.group({
      description: [
        this.newCategory.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.categoryForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.categoryForm) {return; }

    const form = this.categoryForm;

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
    if (this.categories?this.categories.length>0:false) {
      if ((this.categoryForm.get('description').value) &&
        (this.categories.find(cred => cred.value.toLowerCase() == this.categoryForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.categoryForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.categoryForm.get('description').validator?this.categoryForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.categoryForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'Category name is required.'
      ,'minlength': 'Category name must be at least 4 characters long.'
      ,'duplicate': 'Category name must be unique.'
    }
  }


  onSubmit() {
    this.newCategory = this.categoryForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.newCategory.createUser = this.user
        this.itemService.sendCategory(this.newCategory).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newCategory = new ItemCategory();
            this.getCategories();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
