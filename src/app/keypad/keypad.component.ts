import { Component, OnInit } from '@angular/core';
import { PadComponent } from '../pad/pad.component';

//ToDO:
//Give Rachana List and on selection change the charan display
//Highlight the cell being changed


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private padComponent: PadComponent) { }

  ngOnInit(): void {
  }
  captureIt(it) {
    this.padComponent.captureIt(it);
  }


}
