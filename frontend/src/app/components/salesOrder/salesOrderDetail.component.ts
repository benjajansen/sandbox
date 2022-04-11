/**
 * Created by Benja on 5/4/2017.
 */

import {Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteTrigger} from "@angular/material";
import {SalesOrderDetail} from "../../models/salesOrder/SalesOrderDetail";
import {ItemMasterAutoPackage} from "../../models/dataPackages/ItemMasterAutoPackage";


@Component({
  selector: 'salesOrderDetail',
  templateUrl: './salesOrderDetail.component.html'
})
export class SalesOrderDetailComponent implements OnInit{
  @ViewChild(MatAutocompleteTrigger)
  private trigger: MatAutocompleteTrigger;

  salesOrderDetailForm: FormGroup;

  newSalesOrderDetail: SalesOrderDetail = new SalesOrderDetail();

  filteredItems: ItemMasterAutoPackage[];
  selectedItemDescription: string = '';

  sent: boolean = false;

  @Input() salesOrderDetail: SalesOrderDetail;
  @Input() itemMasterAuto: ItemMasterAutoPackage[];

  @Output() valid = new EventEmitter();
  @Output() edit = new EventEmitter<SalesOrderDetail>();
  @Output() add = new EventEmitter<SalesOrderDetail>();
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

    if(this.salesOrderDetail)
      this.populateForm(this.salesOrderDetail);
  }

  populateForm(soDetail:SalesOrderDetail) {
    console.log("inside of detail")
    console.log(soDetail);

    if (soDetail.id) {
      this.salesOrderDetailForm.get('item').setValue(soDetail.itemLink.item?soDetail.itemLink.item.code?soDetail.itemLink.item.code:'':'');
      this.salesOrderDetailForm.get('pickingOrder').setValue(soDetail.pickMethod?soDetail.pickMethod:'');
      this.salesOrderDetailForm.get('quantity').setValue(soDetail.orderQty);
    }
  }

  createForm() {
    this.salesOrderDetailForm = this.fb.group({
      item: [
        this.newSalesOrderDetail.itemLink.item,
        Validators.required
      ]
      ,pickingOrder: [
        this.newSalesOrderDetail.pickMethod,
        Validators.required
      ]
      ,quantity: [
        this.newSalesOrderDetail.orderQty,
        Validators.required
      ]
    })

    this.salesOrderDetailForm.valueChanges.subscribe(
      data => this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onBlur() {
    if (this.salesOrderDetailForm.valid) {
      this.valid.emit();
      this.newSalesOrderDetail = this.salesOrderDetailForm.value;
      if (this.salesOrderDetail.id || this.sent) {
        this.edit.emit(this.newSalesOrderDetail);
      } else {
        this.add.emit(this.newSalesOrderDetail);
        this.sent = true;
      }
    }
  }

  onDelete() {
    this.delete.emit();
  }

  onValueChanged(data?: any) {
    if (!this.salesOrderDetailForm) {return; }

    const form = this.salesOrderDetailForm;

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

    if (this.salesOrderDetailForm.get('item').valid && this.filteredItems){
      if (this.filteredItems.find(item => item.code == this.salesOrderDetailForm.get('item').value)) {
        this.selectedItemDescription = this.filteredItems.find(item => item.code == this.salesOrderDetailForm.get('item').value).description;
      }
    }

  }



  onSubmit() {
    this.newSalesOrderDetail = this.salesOrderDetailForm.value;

    /*
    this.salesOrderService.sendSalesOrderDetail(this.newSalesOrderDetail).subscribe(
      data => {
        this.salesOrderAdded = true;
        this.newSalesOrderDetail = new SalesOrderDetail();
      },
      error => console.log(error)
    );
    */
  }

  onUpdate() {
    this.newSalesOrderDetail = this.salesOrderDetailForm.value;

    /*
    this.salesOrderService.updateSalesOrderDetail(this.newSalesOrderDetail).subscribe(
      data => {
        this.salesOrderAdded = true;
        this.newSalesOrderDetail = new SalesOrderDetail();
      },
      error => console.log(error)
    );
    */
  }
}
