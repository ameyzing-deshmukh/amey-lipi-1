import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { };
  // public number currentYear;
  ngOnInit(): void {
  }
  printHello(){
    console.log("Hello");
  }
}
