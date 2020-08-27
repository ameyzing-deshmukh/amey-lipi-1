import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
export interface Rachana {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
  ten: string;
  eleven: string;
  twelve: string;
  thirteen: string;
}
const ELEMENT_DATA: Rachana[] = [
  { one: '॥ॐ॥', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '।' },
  { one: '।', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: ':॥' },
  { one: '॥', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '।' },
  { one: '।', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: ':॥' },
  { one: '॥', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '।' },
  { one: '।', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: ':॥' }
  // { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  // { one: '।', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  // { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' },
  // { one: '', two: '', three: '', four: '।', five: '', six: '', seven: '।', eight: '', nine: '', ten: '।', eleven: '', twelve: '', thirteen: '' }
];
@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class PadComponent implements OnInit {

  displayedColumns: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  public swarank = 0;//number of swaras in one matra; default is two;
  public taal = 'केरवा-१२०';//either kerva or khemta
  public ifKerva = true;
  public i = 0;
  public j = 1;
  public errMessage = '';

  //Write logic to dynamically capture the matra count and show metadata selections;
  captureTaal(it) {//Based on Taal
    console.log("In captureMeta " + it);
    if (it === 'khemta') {
      this.taal = 'खेमटा-३६०';
      this.swarank = 3;
      this.ifKerva = false;
      //logic to disable Kerva numbers
    } else if (it === 'kerva') {
      this.taal = 'केरवा-१२०';
      this.ifKerva = true;
      // this.swarank = 3;
      //logic to disable Khemta numbers
    }
  }



  captureIt(it) {
    // console.log("before: " + "i: " + this.i + " j: " + this.j + " swarank: " + this.swarank);

    if (it === '+') {
      // console.log("in if: " + "i: " + this.i + " j: " + this.j + " swarank: " + this.swarank);
      this.j++;
      if (this.j === 12) {
        this.i++;
        this.j = 1;
      }
      this.swarank = 0;
    } else {
      if (this.swarank < 4) {
        // console.log("in else if: " + "i: " + this.i + " j: " + this.j + " swarank: " + this.swarank);

        switch (this.j) {
          case (0):
            this.j = 1;
            break;
          case (1):
            this.dataSource[this.i].two += it;
            break;
          case (2):
            this.dataSource[this.i].three += it;
            break;
          case (3):
            this.j = 4;
          case (4):
            this.dataSource[this.i].five += it;
            break;
          case (5):
            this.dataSource[this.i].six += it;
            break;
          case (6):
            this.j = 7;
          case (7):
            this.dataSource[this.i].eight += it;
            break;
          case (8):
            this.dataSource[this.i].nine += it;
            break;
          case (9):
            this.j = 10
          case (10):
            this.dataSource[this.i].eleven += it;
            break;
          case (11):
            this.dataSource[this.i].twelve += it;
            break;
          case (12):
            this.j = 1;
            this.i++;
        }
        // console.log("in if if: " + "i: " + this.i + " j: " + this.j + " swarank: " + this.swarank);
        this.swarank++;
        if (this.swarank === 4) {
          this.j++;
          if (this.j === 12) {
            this.i++;
            this.j = 1;
          }
          this.swarank = 0;
        }
      }
    }
    console.log("after: " + "i: " + this.i + " j: " + this.j + " swarank: " + this.swarank);
  }
  correct() {
    this.swarank = 0;
  }
  clickCapture(it) {
    console.log(it.target);
    console.log(it.target.cellIndex);
    var rowIndex = it.target.parentElement.rowIndex;
    var cellIndex = it.target.cellIndex;
    console.log('Row = ' + rowIndex + ', Column = ' + cellIndex);
  }
}
