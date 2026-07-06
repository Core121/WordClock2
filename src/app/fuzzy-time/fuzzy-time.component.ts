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
  wordTime = signal<WordTime>(new WordTime());
  settingsService = inject(SettingsService);

  constructor() {
    // Run every minute
    setInterval(() => {
      const now = new Date();
      // Check if since the last check if time has progressed by at least a minute
      if (now.getMinutes() != this.wordTime().currentTime.getMinutes()) {
        this.wordTime.set(new WordTime()); // Create new WordTime object, invoking all properties with new time
      }
    }, 1000);
  }

  triggerFade(element: HTMLElement) {
    element.classList.remove('fade-in-active');
    element.classList.add('fade-in-active');
  }
}
