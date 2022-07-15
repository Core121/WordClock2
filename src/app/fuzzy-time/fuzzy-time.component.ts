import { Component, OnInit } from '@angular/core';
import { WordTime } from '../models/word-time.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SettingsService } from '../services/settings.service';

export const fadeInOutTimeout = 2000;
export const fadeInOut = trigger('fadeInOut', [
  transition('* => *', [style({ opacity: '0' }), animate(fadeInOutTimeout)])
]);

@Component({
  selector: 'app-fuzzy-time',
  templateUrl: './fuzzy-time.component.html',
  styleUrls: ['./fuzzy-time.component.scss'],
  animations: [fadeInOut]
})

export class FuzzyTimeComponent implements OnInit {
  public wordTime: WordTime = new WordTime();

  constructor(public settingsService: SettingsService) {
    setInterval(() => {
      var now = new Date();
      if (now.getMinutes() != this.wordTime.currentTime.getMinutes()) {
        this.wordTime = new WordTime();
      }
    }, 1000);
  }

  ngOnInit(): void {

  }

}
