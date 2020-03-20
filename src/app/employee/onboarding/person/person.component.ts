import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  middleName: string = '';
  email: string = '';
  cellPhone: string = '';
  alternatePhone: string = '';
  gender: string = '';
  ssn: string = '';
  dob: string = '';

  ifFirstNameEnter : boolean = true;
  ifLastNameEnter : boolean = true;
  ifPhoneEnter: boolean = true;
  ifGenderSelect : boolean = true;
  ifDobSelect: boolean = true;
  ifSSNEnter : boolean = true;

  genderOptions = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "I don't want to answer", value: "na"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onFirstNameEdit(event: any) : void {
    this.ifFirstNameEnter = this.firstName === '' ? false : true;
  }

  onLastNameEdit(event: any) : void {
    this.ifLastNameEnter = this.lastName === '' ? false : true;
  }

  onCellPhoneEdit(event: any) : void {
    this.ifPhoneEnter = this.cellPhone === '' ? false : true;
  }

  onGenderSelect(event: any) : void {
    this.ifGenderSelect = this.gender === '' ? false : true;
  }

  onDOBSelect(event: any) : void {
    this.ifDobSelect = this.dob === '' ? false : true;
  }

  onSSNEdit(event: any) : void {
    this.ifSSNEnter = this.ssn === '' ? false : true;
  }

  onSubmit() { 
    console.log("on submit is called");

    if(this.firstName === '') this.ifFirstNameEnter = false;
    if(this.lastName === '') this.ifLastNameEnter = false;
    if(this.cellPhone === '') this.ifPhoneEnter = false;
    if(this.gender === '') this.ifGenderSelect = false;
    if(this.dob === '') this.ifDobSelect = false;
    if(this.ssn === '') this.ifSSNEnter = false;

  }

}
