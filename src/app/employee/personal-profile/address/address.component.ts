import { Component, OnInit } from '@angular/core';
import { ProfileAddress } from 'src/app/_common/_domain/employee/profile/profile-address.module';
import { PersonalProfileService } from 'src/app/_common/_service/employee/personal-profile.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css', '../personal-profile.module.css']
})
export class AddressComponent implements OnInit {

  profileAddrees : ProfileAddress = new ProfileAddress();

  displayAddressLineTwo : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {

    this.personalProfileService.getAddressService().subscribe(
      (res) => {

        console.log(res);

        this.profileAddrees = res.profileAddress;

        this.displayAddressLineTwo = !this.profileAddrees.addressLineTwo || this.profileAddrees.addressLineTwo == "" ? "-" : this.profileAddrees.addressLineTwo;

      }
    )

  }

}
