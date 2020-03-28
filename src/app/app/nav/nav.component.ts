import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_common/_service/app/app.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  imageSrc : any = "assets/default-avatar.jpg";

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAvatarService().subscribe(
      (res) => {
        this.imageSrc = res.nav.avatarUri ? res.nav.avatarUri : "assets/default-avatar.jpg";
      }
    );
  }

}
