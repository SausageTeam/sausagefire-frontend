import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imageSrc : any = "assets/default-avatar.jpg";

  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAvatarService().subscribe(
      (res) => {
        this.imageSrc = res.appDomain.avatarUri ? res.appDomain.avatarUri : "assets/default-avatar.jpg";
      }
    );
  }

}
