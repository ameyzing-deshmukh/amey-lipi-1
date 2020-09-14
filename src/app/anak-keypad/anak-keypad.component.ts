import { Component, OnInit } from '@angular/core';
import { PadComponent } from '../pad/pad.component';

@Component({
  selector: 'app-anak-keypad',
  templateUrl: './anak-keypad.component.html',
  styleUrls: ['./anak-keypad.component.css']
})
export class AnakKeypadComponent implements OnInit {

  constructor(private padComponent: PadComponent) { }

  ngOnInit(): void {
  }
  captureIt(it) {
    this.padComponent.captureIt(it);
  }
}
