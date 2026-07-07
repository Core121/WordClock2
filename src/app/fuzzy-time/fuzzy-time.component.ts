import { Component, inject, signal } from '@angular/core';
import { WordTime } from '../models/word-time.model';
import { SettingsService } from '../services/settings.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-fuzzy-time',
  templateUrl: './fuzzy-time.component.html',
  styleUrls: ['./fuzzy-time.component.scss'],
  imports: [NgStyle],
})
export class FuzzyTimeComponent {
  wordTime = signal<WordTime | null>(new WordTime());
  settingsService = inject(SettingsService);

  constructor() {
    setInterval(async () => {
      const now = new Date();
      if (now.getMinutes() !== this.wordTime()?.currentTime.getMinutes()) {
        //  Triggers animate.leave
        this.wordTime.set(null);

        //  Wait 1s for the exit animation to visually finish
        await new Promise(resolve => setTimeout(resolve, 100));

        // Create new WordTime object, invoking all properties with new time
        this.wordTime.set(new WordTime());
      }
    }, 1000);
  }
}
