/**
 * Created by Benja on 5/4/2017.
 */

import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteTrigger} from "@angular/material";

import {ItemMasterAutoPackage} from "../../../models/dataPackages/ItemMasterAutoPackage";
import {SecurityGroupDetail} from "../../../models/security/GroupDetail";
import {SecurityGroupHeader} from "../../../models/security/GroupHeader";


@Component({
  selector: 'userGroup',
  templateUrl: './userGroup.component.html'
})
export class SecurityGroupComponent implements OnInit{
  @ViewChild(MatAutocompleteTrigger)
  private trigger: MatAutocompleteTrigger;

  groupHeaderForm: FormGroup;
  groupDetailForm: FormGroup;

  newGroupHeader: SecurityGroupHeader = new SecurityGroupHeader();
  newGroupDetail: SecurityGroupDetail = new SecurityGroupDetail();

  filteredItems: ItemMasterAutoPackage[];
  selectedItemDescription: string = '';

  sent: boolean = false;

  @Input() userGroup: SecurityGroupDetail;
  @Input() itemMasterAuto: ItemMasterAutoPackage[];

  @Output() valid = new EventEmitter();
  @Output() edit = new EventEmitter<SecurityGroupDetail>();
  @Output() add = new EventEmitter<SecurityGroupDetail>();
  @Output() delete = new EventEmitter();

  formErrors = {
    'type':''
    ,'item':''
    ,'pickingOrder':''
    ,'quantity':''
  };

  validationMessages = {
    'type':''
    ,'item':''
    ,'pickingOrder':''
    ,'quantity':''
  }

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    if(this.userGroup)
      this.populateForm(this.userGroup);
  }

  populateForm(soDetail:SecurityGroupDetail) {

    /*
    if (soDetail.id) {
      this.groupDetailForm.get('type').setValue(soDetail.type?soDetail.type:'');
      this.groupDetailForm.get('item').setValue(soDetail.item?soDetail.item.code?soDetail.item.code:'':'');
      this.groupDetailForm.get('pickingOrder').setValue(soDetail.pickingOrder?soDetail.pickingOrder:'');
      this.groupDetailForm.get('quantity').setValue(soDetail.quantity);
    }
    */
  }

  createForm() {
    this.groupHeaderForm = this.fb.group({
      id: [
        this.newGroupHeader.id
      ]
      ,name: [
        this.newGroupHeader.name,
        Validators.required
      ]
    })

    this.groupDetailForm = this.fb.group({
      header: [
        this.newGroupDetail.header,
        Validators.required
      ],
      menu1: [
        this.newGroupDetail.menu1,
        Validators.required
      ],
      menu2: [
        this.newGroupDetail.menu2
      ],
      menu3: [
        this.newGroupDetail.menu3
      ]
    })

    this.groupHeaderForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.groupDetailForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onBlur() {
    if (this.groupHeaderForm.valid) {
      this.valid.emit();
      this.newGroupDetail = this.groupHeaderForm.value;
      if (this.userGroup.id || this.sent) {
        this.edit.emit(this.newGroupDetail);
      } else {
        this.add.emit(this.newGroupDetail);
        this.sent = true;
      }
    }
  }

  onDelete() {
    this.delete.emit();
  }

  onValueChanged(data?: any) {
    if (!this.groupDetailForm) {return; }

    const form = this.groupDetailForm;

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

    if(this.itemMasterAuto)
      this.filteredItems = this.itemMasterAuto;

    if (this.groupDetailForm.get('item').valid && this.filteredItems){
      if (this.filteredItems.find(item => item.code == this.groupDetailForm.get('item').value)) {
        this.selectedItemDescription = this.filteredItems.find(item => item.code == this.groupDetailForm.get('item').value).description;
      }
    }

  }



  onSubmit() {
    /*
    this.newSecurityGroupDetail = this.groupDetailForm.value;

    this.salesOrderService.sendSecurityGroupDetail(this.newSecurityGroupDetail).subscribe(
      data => {
        this.salesOrderAdded = true;
        this.newSecurityGroupDetail = new SecurityGroupDetail();
      },
      error => console.log(error)
    );
    */
  }

  onUpdate() {
    /*
    this.newSecurityGroupDetail = this.groupDetailForm.value;

    this.salesOrderService.updateSecurityGroupDetail(this.newSecurityGroupDetail).subscribe(
      data => {
        this.salesOrderAdded = true;
        this.newSecurityGroupDetail = new SecurityGroupDetail();
      },
      error => console.log(error)
    );
    */
  }
}
