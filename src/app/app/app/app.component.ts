import { Component, OnInit } from '@angular/core';
import { AppService } from '../../_common/_service/app/app.service';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/_common/_service/app/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private appService : AppService,
    private authGuardService : AuthGuardService,
    private router: Router
  ) {}

  ifOnboarding : boolean = false;
  ifEmployee : boolean = false;
  ifNeedVisa : boolean = false;
  ifHr : boolean = false;

  ngOnInit() : void {

    this.appService.getAuthService().subscribe(
      (res) => {
        console.log(res.headers);
        const roleId = res.headers.get('roleid');
        const onboardingStatus = res.headers.get('onboardingstatus');
        const ifNeedVisa = res.headers.get('ifneedvisa');

        if(onboardingStatus !== '2') {

          this.ifOnboarding = true;

        } else {

          if(roleId === '1') {

            this.ifHr = true;
            this.router.navigate(['/hr/dashboard']);

          } else {

            this.ifEmployee = true;
            if(ifNeedVisa) {
            
              this.ifNeedVisa = true;

            } else {

              this.router.navigate(['/employee/dashboard']);

            }

          }
        }
      }
    );
  }
}
