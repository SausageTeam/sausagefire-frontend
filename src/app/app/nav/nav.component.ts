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
        if(res && res.body && res.body.nav) {
          this.imageSrc = res.body.nav.avatarUri ? res.body.nav.avatarUri : "assets/default-avatar.jpg";
          this.firstName = res.body.nav.firstName ? res.body.nav.firstName : "Unknown";
        }
      }
    );
  }

}
