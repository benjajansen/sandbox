/**
 * Created by Benja on 5/28/2017.
 */

import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from '../../../services/security.service';
import {SecurityUser} from '../../../models/security/User';
import {ShortDataPackage} from "../../../models/dataPackages/ShortDataPackage";
import {SystemService} from "../../../services/system.service";
import {SystemTradeLevel} from "../../../models/system/TradeLevel";

@Component({
  selector: 'systemTradeLevel'
  ,templateUrl: './tradeLevel.component.html'
})
export class SystemTradeLevelComponent implements OnInit{
  @ViewChild('modal') modal: ElementRef;

  tradeLevelForm: FormGroup;
  tradeLevels : ShortDataPackage[];

  newTradeLevel: SystemTradeLevel = new SystemTradeLevel();
  added: boolean = false;
  edited: boolean = false;
  deleted: boolean = false;
  deletedError: boolean = false;
  user: SecurityUser;

  constructor (private fb: FormBuilder, private systemService: SystemService, private SecurityService:SecurityService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getTradeLevels();
    this.createForm();
  }

  /*
  onBlur($event: Event) {
    this.editing = false;
  }
  */

  onDelete(id: number) {
    if (this.tradeLevels.find(data => data.id === id)) {
      this.newTradeLevel.description = this.tradeLevels.find(data => data.id === id).value;
      this.newTradeLevel.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.deleteTradeLevel(this.newTradeLevel).subscribe(
          data => {
            this.added = false;
            this.edited = false;
            this.deleted = true;
            this.deletedError = false;
            this.newTradeLevel = new SystemTradeLevel();
            this.clearForm();
            this.getTradeLevels();
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
    if(this.tradeLevels.find(data => data.value == value))
      return;
    this.tradeLevels.find(data => data.id === id).value = value;
    this.update(id);
    console.log(this.tradeLevels)
  }

  clearForm() {
    this.tradeLevelForm.patchValue({
      description: ""
    });
  }

  getTradeLevels() {
    this.systemService.getTradeLevelShort().subscribe(
      data => {
        this.tradeLevels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.tradeLevels);
      },
      error => console.log("1 " + error)
    )
  }

  update(id: number): boolean {
    if (this.tradeLevels.find(data => data.id === id)) {
      this.newTradeLevel.description = this.tradeLevels.find(data => data.id === id).value;
      this.newTradeLevel.id = id;
    }
    else return false;

    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.systemService.updateTradeLevel(this.newTradeLevel).subscribe(
          data => {
            this.added = false;
            this.edited = true;
            this.deleted = false;
            this.deletedError = false;
            this.newTradeLevel = new SystemTradeLevel();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )
  }

  createForm() {
    this.tradeLevelForm = this.fb.group({
      description: [
        this.newTradeLevel.description
        ,[
          Validators.required
          ,Validators.minLength(4)
          ,Validators.pattern("^[A-Za-z ]+$")
        ]
      ]
    });

    this.tradeLevelForm.valueChanges.subscribe(
      data => {
        this.onValueChanged(data);
      }
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.tradeLevelForm) {return; }

    const form = this.tradeLevelForm;

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
    if (this.tradeLevels?this.tradeLevels.length>0:false) {
      if ((this.tradeLevelForm.get('description').value) &&
        (this.tradeLevels.find(cred => cred.value.toLowerCase() == this.tradeLevelForm.get('description').value.toLowerCase()))) {
        this.formErrors['description'] += this.validationMessages['description'].duplicate;
        this.tradeLevelForm.get('description').setErrors({'incorrect': true})
      }
      else {
        if(this.tradeLevelForm.get('description').validator?this.tradeLevelForm.get('description').validator(new FormControl()).required:false){
          //so if its a required field and the field is empty, then don't clear all errors
        }
        else
          this.tradeLevelForm.get('description').setErrors(null)
      }
    }
  }

  formErrors = {
    'description': ''
  };

  validationMessages = {
    'description': {
      'required':   'TradeLevel name is required.'
      ,'minlength': 'TradeLevel name must be at least 4 characters long.'
      ,'duplicate': 'TradeLevel name must be unique.'
    }
  }


  onSubmit() {
    this.newTradeLevel = this.tradeLevelForm.value;
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        //this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //this.newTradeLevel.createUser = this.user
        this.systemService.sendTradeLevel(this.newTradeLevel).subscribe(
          data => {
            this.added = true;
            this.edited = false;
            this.deleted = false;
            this.deletedError = false;
            this.newTradeLevel = new SystemTradeLevel();
            this.getTradeLevels();
            this.clearForm();
          },

          error => console.log("2 " + error)
        );
      },
      error => console.log("3 " + error)
    )

  }

}
