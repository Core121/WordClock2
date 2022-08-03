import { Component, OnInit } from '@angular/core';
import { WordTime } from '../models/word-time.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-fuzzy-time',
  templateUrl: './fuzzy-time.component.html',
  styleUrls: ['./fuzzy-time.component.scss'],
  animations: [  trigger("fadeAnimation", [
    transition("false=>true", [
      style({ opacity: 0 }), //At begin animation, opacity=0
      animate("1000ms", style({ opacity: 1 }))  //the animation makes opacity=0 to opacity=1
    ])
  ])]
})

export class FuzzyTimeComponent implements OnInit {
  public wordTime: WordTime = new WordTime();
  toggle:boolean=false;

  constructor(public settingsService: SettingsService) {
    setInterval(() => {
      var now = new Date();
      if (now.getMinutes() != this.wordTime.currentTime.getMinutes()) {
        this.wordTime = new WordTime();
        this.toggle= true;
      }
    }, 1000);
  }

  ngOnInit(): void {
  }

}
