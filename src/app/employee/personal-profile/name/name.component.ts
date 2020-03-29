import { Component, OnInit } from '@angular/core';
import { ProfileName } from 'src/app/domain/employee/profile/profile-name.module';
import { PersonalProfileService } from 'src/app/service/personal-profile.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css', '../personal-profile.module.css']
})
export class NameComponent implements OnInit {

  profileName : ProfileName = new ProfileName();

  imageSrc : any = "assets/default-avatar.jpg";
  fullName : string  = "";
  displaySSN : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {
    this.personalProfileService.getNameService().subscribe(
      (res) => {
        // console.log(res.profileName);
        this.profileName = res.profileName;

        this.profileName.preferredName = "Superman";

        this.fullName = this.profileName.firstName + ' ' + this.profileName.lastName;
        this.displaySSN = this.convertSSN(this.profileName.ssn);
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
