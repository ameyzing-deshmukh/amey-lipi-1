import { Component, OnInit } from '@angular/core';

export class Rachana {
  constructor(public name: string, public taal: string, public speed: number, public instrument: string,
    public charan: [{
      "matra": number,
      "isRepeat": boolean
    }]) { };
}

@Component({
  selector: 'app-rachana',
  templateUrl: './rachana.component.html',
  styleUrls: ['./rachana.component.css']
})
export class RachanaComponent implements OnInit {

  constructor() { }
//Write a service to get the array of Rachana based on instrument;
  ngOnInit(): void {
  }

}
