import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaManagementRecordComponent } from './visa-management-record.component';

describe('VisaManagementRecordComponent', () => {
  let component: VisaManagementRecordComponent;
  let fixture: ComponentFixture<VisaManagementRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaManagementRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaManagementRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
