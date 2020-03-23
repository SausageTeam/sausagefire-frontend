import { Component, OnInit } from '@angular/core';
import { ProfileContact } from 'src/app/domain/profile/profile-contact.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../personal-profile.module.css']
})
export class ContactComponent implements OnInit {

  profileContact : ProfileContact = new ProfileContact();

  displayalternatePhone : string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileContact.personalEmail = "cara@sausage.com";
    this.profileContact.cellPhone = "5031231234";
    this.profileContact.alternatePhone = "";

    this.displayalternatePhone = !this.profileContact.alternatePhone || this.profileContact.alternatePhone == "" ? "-" : this.profileContact.alternatePhone;
  }

}
