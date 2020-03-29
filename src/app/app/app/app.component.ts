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
        if(!res.serviceStatus.success && res.serviceStatus.statusCode === "401") {
          window.location.href = res.redirectUrl + "?redirect=" + window.location.href;
        } else {

          // check header
          
          
          // console.log(res);
          

          if(res.auth.onboardingStatus !== 2) {
            
            this.ifOnboarding = true;
            this.router.navigate(['/onboarding/person']);

          } else {
            if(res.auth.roleId === 1) {

              this.ifHr = true;
              this.router.navigate(['/hr/dashboard']);

            } else {
              this.ifEmployee = true;
              if(res.auth.ifNeedVisa) {
                this.ifNeedVisa = true;
              }
              this.router.navigate(['/employee/dashboard']);
            }
          }
        }
      }
    );
  }
}
