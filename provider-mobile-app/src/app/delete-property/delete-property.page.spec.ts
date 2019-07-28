import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePropertyPage } from './delete-property.page';

describe('DeletePropertyPage', () => {
  let component: DeletePropertyPage;
  let fixture: ComponentFixture<DeletePropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
