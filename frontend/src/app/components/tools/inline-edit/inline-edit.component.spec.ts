/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InlineEdit } from './inline-edit.component';

describe('InlineTestComponent', () => {
  let component: InlineEdit;
  let fixture: ComponentFixture<InlineEdit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEdit ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
