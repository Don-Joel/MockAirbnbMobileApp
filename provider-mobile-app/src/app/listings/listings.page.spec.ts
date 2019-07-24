import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPage } from './listings.page';

describe('ListingsPage', () => {
  let component: ListingsPage;
  let fixture: ComponentFixture<ListingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
