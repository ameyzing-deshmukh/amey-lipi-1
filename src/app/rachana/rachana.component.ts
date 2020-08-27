import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }
  //Write a service to get the array of Rachana based on instrument;

  public arohan;
  public avarohan;
  public taalName;
  public rachanaName;
  public instrumentName;
  ngOnInit(): void {
    this.rachanaName = this.route.snapshot.params['rachanaName'];
    switch (this.rachanaName) {
      case 'bhoop':
        this.arohan = 'स री ग प ध सं';
        this.avarohan = 'सं ध प ग री स';
        this.rachanaName = 'भूप';
        this.taalName = 'केरवा-१२०';
        this.instrumentName = 'वंशी';
  
        break;
      case 'tilang':
        this.arohan = 'स ग म प नि सं';
        this.avarohan = 'सं नि॒ प म ग स';
        this.rachanaName = 'तिलंग';
        this.taalName = 'केरवा-१२०';
        this.instrumentName = 'वंशी';
        break;
        case 'tilakkamod':
          this.arohan = 'स री ग म प ध म प सं';
          this.avarohan = 'सं प ध म ग स री ग स ऩि स';
          this.rachanaName = 'तिलककामोद';
          this.taalName = 'केरवा-१२०';
          this.instrumentName = 'वंशी';
          break;
          case 'valachi':
          this.arohan = 'स ग प ध नि॒ सं';
          this.avarohan = 'सं नि॒ ध प ग स';
          this.rachanaName = 'वलचि';
          this.taalName = 'केरवा-१२०';
          this.instrumentName = 'वंशी';
          break;
          case 'shivaranjani':
          this.arohan = 'स री ॻ प ध सं';
          this.avarohan = 'सं ध प ॻ री स';
          this.rachanaName = 'शिवरंजनी';
          this.taalName = 'केरवा-१२०';
          this.instrumentName = 'वंशी';
          break;
          case 'kairali':
          this.arohan = 'स री॒ म प नि॒ सं';
          this.avarohan = 'सं नि॒ प म री॒ स';
          this.rachanaName = 'कैरलि';
          this.taalName = 'केरवा-१२०';
          this.instrumentName = 'वंशी';
          break;
  }

  // public getRachanaMetadata(rachana) {
    // }

  }

}
