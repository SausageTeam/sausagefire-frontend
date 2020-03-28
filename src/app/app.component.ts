import { Component, OnInit } from '@angular/core';
import { AppService } from './_common/_service/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private appService : AppService,
  ) {}

  ngOnInit() : void {
    this.appService.getAuthService().subscribe(
      (res) => {
        if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
          window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
        } else {
          console.log(res);
        }
      }
    );
  }
}
