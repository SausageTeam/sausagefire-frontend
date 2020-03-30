import { Component, OnInit } from '@angular/core';
import { ProfileName } from 'src/app/_common/_domain/employee/profile/profile-name.module';
import { PersonalProfileService } from 'src/app/_common/_service/employee/personal-profile.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css', '../personal-profile.module.css']
})
export class NameComponent implements OnInit {

  profileName : ProfileName = new ProfileName();

  imageSrc : any = "assets/default-avatar.jpg";
  fullName : string  = "";
  preferredName : string = "";
  displaySSN : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {
    this.personalProfileService.getNameService().subscribe(
      (res) => {
        // console.log(res);
        this.profileName = res.profileName;

        this.fullName = this.profileName.firstName + ' ' + this.profileName.lastName;
        this.preferredName = res.profileName.preferredName ? res.profileName.preferredName : "-";
        this.displaySSN = this.profileName.ssn ? this.convertSSN(this.profileName.ssn) : "-";
        this.imageSrc = res.profileName.avatarUri ? res.profileName.avatarUri : "assets/default-avatar.jpg";
      }
    );
    
  }

  convertSSN(ssn : string) : string {
    const prefix = [...ssn.substring(0, ssn.length-4)];
    var prod = "";
    prefix.forEach((c, i) => prod += "*");
    return prod + ssn.substring(ssn.length-4);
  }
}
