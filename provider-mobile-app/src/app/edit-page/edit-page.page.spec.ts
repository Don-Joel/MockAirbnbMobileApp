import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPagePage } from './edit-page.page';

describe('EditPagePage', () => {
  let component: EditPagePage;
  let fixture: ComponentFixture<EditPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
