import { Component, OnInit } from '@angular/core';
import { ProfileContact } from 'src/app/_common/_domain/employee/profile/profile-contact.module';
import { PersonalProfileService } from 'src/app/_common/_service/employee/personal-profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../personal-profile.module.css']
})
export class ContactComponent implements OnInit {

  profileContact : ProfileContact = new ProfileContact();

  displayalternatePhone : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {
    this.personalProfileService.getContactService().subscribe(
      (res) => {
        this.profileContact = res.profileContact;

        this.displayalternatePhone = !this.profileContact.alternatePhone || this.profileContact.alternatePhone == "" ? "-" : this.profileContact.alternatePhone;

      }
    );
  }

}
