import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  errorMsg : string = "";

  constructor() { }

  ngOnInit(): void {
    // this.errorMsg = "this is a test";
  }

}
