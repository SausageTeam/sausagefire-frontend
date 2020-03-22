import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.css']
})
export class DrivingComponent implements OnInit {

  ifUnclockNext : boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inputCheck() : void {

  }

  nextCheck() : boolean {
    return true;
  }

  onSaveClick() : void {

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;

    }
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/visa']);
  }

  onNextClick() : void {
    this.router.navigate(['/employee/onboarding/reference']);
  }
}
