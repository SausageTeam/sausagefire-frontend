import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log("on submit is called");
  }

}
