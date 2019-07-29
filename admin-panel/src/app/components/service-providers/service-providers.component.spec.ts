import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvidersComponent } from './service-providers.component';

describe('ServiceProvidersComponent', () => {
  let component: ServiceProvidersComponent;
  let fixture: ComponentFixture<ServiceProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
