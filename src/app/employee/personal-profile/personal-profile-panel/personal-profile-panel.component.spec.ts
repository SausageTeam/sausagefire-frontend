import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProfilePanelComponent } from './personal-profile-panel.component';

describe('PersonalProfilePanelComponent', () => {
  let component: PersonalProfilePanelComponent;
  let fixture: ComponentFixture<PersonalProfilePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProfilePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProfilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
