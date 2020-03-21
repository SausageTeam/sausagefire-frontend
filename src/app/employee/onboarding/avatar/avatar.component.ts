import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  ifUnclockNext : boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
