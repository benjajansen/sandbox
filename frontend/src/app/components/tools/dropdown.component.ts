/**
 * Created by Benja on 5/6/2017.
 */

import {ElementRef, Component, OnInit, EventEmitter} from '@angular/core';

declare var jQuery: any;

export class DropdownValue {
  value: any;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'my-dropdown',
  inputs: ['selectedItem', 'items', 'label'],
  outputs: ['selectedItemChange'],
  template: `
    <div class="field">
      <label>{{label}}</label>
      <select class="ui selection dropdown" [ngModel]="selectedItem.value" (ngModelChange)="onChange($event)">
        <!--<option value="" selected>Please Select</option>-->
        <option *ngFor="#item of items" [value]="item.value">{{item.label}}</option>
      </select>
    </div>`
})

export class MyDropdownComponent implements OnInit {

  items: DropdownValue[];
  selectedItem: DropdownValue;
  selectedItemChange: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): any {

    this.items.unshift(new DropdownValue('', 'Please Select'));
    this.selectedItem = this.selectedItem || this.items[0];


  }
  ngAfterViewInit(){
    jQuery(this.elementRef.nativeElement).find('select').dropdown({allowTab:false});
    jQuery(this.elementRef.nativeElement).find('select').dropdown("set selected",this.selectedItem.value);
  }

  onChange(newValue) {

    let selectedItem = this.items.find(item => item.value == newValue);

    console.log(selectedItem);

    this.selectedItemChange.emit(selectedItem);
  }

}
