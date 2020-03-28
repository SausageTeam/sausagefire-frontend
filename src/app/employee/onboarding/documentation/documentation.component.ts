import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css', '../onboarding.module.css']
})
export class DocumentationComponent implements OnInit {

  ifUnclockNext: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  nextCheck() : boolean {
    return true;
  }

  inputCheck() : void {

  }

  onSaveClick(): void { 

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;
    }
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/emergency']);
  }

  onNextClick(): void {
    this.router.navigate(['/employee/onboarding/final']);
  }
}
