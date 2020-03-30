import { Component, OnInit } from '@angular/core';
import { AppService } from '../../_common/_service/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private appService : AppService,
    private router: Router
  ) {}

  ifOnboarding : boolean = false;
  ifEmployee : boolean = false;
  ifNeedVisa : boolean = false;
  ifHr : boolean = false;

  ngOnInit() : void {

    console.log("app on init");

    this.appService.getAuthService().subscribe(
      (res) => {

        const roleId = res.headers.get('roleid');
        const onboardingStatus = res.headers.get('onboardingstatus');
        const ifNeedVisa = res.headers.get('ifneedvisa');

        if(onboardingStatus !== '2') {

          this.ifOnboarding = true;
          if(this.router.url === '/') {
            this.router.navigate(['/onboarding/person']);
          }

        } else {

          if(roleId === '1') {

            this.ifHr = true;
          if(this.router.url === '/') {
              this.router.navigate(['/hr/dashboard']);
          }

          } else {

            this.ifEmployee = true;
            if(ifNeedVisa === 'true') {
              this.ifNeedVisa = true;
            }
            if(this.router.url === '/') {
              this.router.navigate(['/employee/dashboard']);
            }
          }
        }
      }
    );
  }
}
