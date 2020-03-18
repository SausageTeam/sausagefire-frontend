import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaManagementComponent } from './visa-management.component';

describe('VisaManagementComponent', () => {
  let component: VisaManagementComponent;
  let fixture: ComponentFixture<VisaManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
