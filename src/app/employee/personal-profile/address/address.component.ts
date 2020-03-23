import { Component, OnInit } from '@angular/core';
import { ProfileAddress } from 'src/app/domain/profile/profile-address.module';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css', '../personal-profile.module.css']
})
export class AddressComponent implements OnInit {

  profileAddrees : ProfileAddress = new ProfileAddress();

  displayAddressLineTwo : string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileAddrees.addressLineOne = "123 SW Broadway";
    this.profileAddrees.addressLineTwo = "";
    this.profileAddrees.city = "East windsor";
    this.profileAddrees.stateAbbr = "NJ";
    this.profileAddrees.zipcode = "08520";

    this.displayAddressLineTwo = !this.profileAddrees.addressLineTwo || this.profileAddrees.addressLineTwo == "" ? "-" : this.profileAddrees.addressLineTwo;
  }

}
