import { Component, OnInit } from '@angular/core';
import { PadComponent } from '../pad/pad.component';

@Component({
  selector: 'app-shankha-keypad',
  templateUrl: './shankha-keypad.component.html',
  styleUrls: ['./shankha-keypad.component.css']
})
export class ShankhaKeypadComponent implements OnInit {

  constructor(private padComponent: PadComponent) { }

  ngOnInit(): void {
  }

  captureIt(it) {
    this.padComponent.captureIt(it);
  }

}
