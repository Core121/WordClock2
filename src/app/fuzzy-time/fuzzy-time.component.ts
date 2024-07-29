import { Component } from '@angular/core';
import { WordTime } from '../models/word-time.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-fuzzy-time',
  templateUrl: './fuzzy-time.component.html',
  styleUrls: ['./fuzzy-time.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('false=>true', [
        style({ opacity: 0 }), //At begin animation, opacity=0
        animate('1000ms', style({ opacity: 1 })), //the animation makes opacity=0 to opacity=1
      ]),
    ]),
  ],
})
export class FuzzyTimeComponent {
  public wordTime: WordTime = new WordTime();
  animationToggle: boolean = false;

  constructor(public settingsService: SettingsService) {
    // Run every minute
    setInterval(() => {
      const now = new Date();
      // Check if since the last check if time has progressed by at least a minute
      if (now.getMinutes() != this.wordTime.currentTime.getMinutes()) {
        this.wordTime = new WordTime(); // Create new WordTime object, invoking all properties with new time
        this.animationToggle = true; // Starts fade-in animation
      }
    }, 1000);
  }
}
