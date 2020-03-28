import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_common/_service/app/app.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  firstName : string = "Unknown";
  imageSrc : any = "assets/default-avatar.jpg";

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAvatarService().subscribe(
      (res) => {
        if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
          window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
        } else {
          this.imageSrc = res.nav.avatarUri ? res.nav.avatarUri : "assets/default-avatar.jpg";
          this.firstName = res.nav.firstName ? res.nav.firstName : "Unknown";
        }
      }
    );
  }

}
