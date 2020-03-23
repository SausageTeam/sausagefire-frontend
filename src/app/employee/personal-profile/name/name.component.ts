import { Component, OnInit } from '@angular/core';
import { ProfileName } from 'src/app/domain/employee/profile/profile-name.module';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css', '../personal-profile.module.css']
})
export class NameComponent implements OnInit {

  profileName : ProfileName = new ProfileName();

  fullName : string  = "";
  displaySSN : string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileName.firstName = "Cara";
    this.profileName.lastName = "jiang";
    this.profileName.preferredName = "kiki";

    this.profileName.dob = "1999-12-31";
    this.profileName.age = 11;
    this.profileName.gender = "female";
    this.profileName.ssn = "00000001234"

    this.fullName = this.profileName.firstName + ' ' + this.profileName.lastName;
    this.displaySSN = this.convertSSN(this.profileName.ssn);
  }

  convertSSN(ssn : string) : string {
    const prefix = [...ssn.substring(0, ssn.length-4)];
    var prod = "";
    prefix.forEach((c, i) => prod += "*");
    return prod + ssn.substring(ssn.length-4);
  }
}
