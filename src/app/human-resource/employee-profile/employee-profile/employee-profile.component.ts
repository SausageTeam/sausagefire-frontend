import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  displayColumn: string[] = ['Name', 'Social Security Number', 'Starting Date', 'Visa Status'];

  // employees

  constructor() { }

  ngOnInit(): void {
  }

}