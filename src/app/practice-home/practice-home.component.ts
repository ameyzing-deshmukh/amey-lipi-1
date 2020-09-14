import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.component.html',
  styleUrls: ['./practice-home.component.css']
})
export class PracticeHomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public getRachanaPage(rachanaName){
    this.router.navigate(['vanshiPracticeHome', rachanaName]);
  }

  public getShankhaRachanaPage(rachanaName){
    this.router.navigate(['shankhaPracticeHome', rachanaName]);
  }

  public getAnakRachanaPage(rachanaName){
    this.router.navigate(['anakPracticeHome', rachanaName]);
  }
}
