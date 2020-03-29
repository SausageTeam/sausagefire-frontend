import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css', '../onboarding.module.css']
})
export class FinalComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmitClick(): void { 
    this.router.navigate(['/employee/dashboard']);
  }

  onPrevClick() : void {
    this.router.navigate(['/onboarding/documentation']);
  }
}
