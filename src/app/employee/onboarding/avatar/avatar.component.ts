import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/service/onboarding.service';
import { OnboardingAvatar } from 'src/app/domain/employee/onboarding/onboarding-avator.module';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css', '../onboarding.module.css']
})
export class AvatarComponent implements OnInit {

  onboardingAvatar : OnboardingAvatar = new OnboardingAvatar();

  ifUnclockNext : boolean = false;

  imageSrc : any = "assets/default-avatar.jpg";
  avatar : any = null;

  constructor(
    private onboardingService : OnboardingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onboardingService.getOnboardingAvatarService(this.onboardingAvatar).subscribe(
      (res) => {

        this.imageSrc = res.onboardingAvatar.avatarUri ? res.onboardingAvatar.avatarUri : "assets/default-avatar.jpg";

        this.ifUnclockNext = true;
      }
    );
  }

  onFileSelected(event : any) : void {
    if (event.target.files && event.target.files[0]) {

      this.avatar = event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(this.avatar);

      reader.onload = (e) => {
        this.imageSrc = e.target.result;
      }

    }  
  }
   
  nextClick(): boolean {
    return this.avatar !== null;
  }

  onSaveClick() : void {


    this.onboardingService.postOnboardingAvatarService(this.avatar).subscribe(
      (res) => {
        // console.log(res);
      }
    )

    this.ifUnclockNext = true;
  }

  onSkipClick() : void {
    this.router.navigate(['/employee/onboarding/visa']);
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/person']);
  }

  onNextClick() : void {
    this.router.navigate(['/employee/onboarding/visa']);
  }

}
