import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css', '../onboarding.module.css']
})
export class AvatarComponent implements OnInit {

  ifUnclockNext : boolean = false;

  imageSrc : any = "assets/default-avatar.jpg";
  avatar : any = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
    

  onSaveClick() : void {
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
