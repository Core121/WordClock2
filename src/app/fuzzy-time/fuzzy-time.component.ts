import { Component, OnInit } from '@angular/core';
import { WordTime } from '../models/word-time.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOutTimeout = 1200;
export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', [style({ opacity: '0'}), animate(fadeInOutTimeout)]),
  transition('* => void', [animate(fadeInOutTimeout, style({ opacity: '0' }))]),
  transition('* => *', [
    style({ opacity: '0'}),
    animate(fadeInOutTimeout, style({ opacity: '1'})),
  ]),
]);

@Component({
  selector: 'app-fuzzy-time',
  templateUrl: './fuzzy-time.component.html',
  styleUrls: ['./fuzzy-time.component.scss'],
  animations: [fadeInOut]
})

export class FuzzyTimeComponent implements OnInit {
  public wordTime: WordTime = new WordTime();

  constructor() {
    setInterval(() => {
      this.wordTime = new WordTime();
    }, 60000 - this.wordTime.currentTime.getMilliseconds());
  }

  ngOnInit(): void {
  }

  getFuzzyTime() {
    return this.wordTime.getTime();
  }



}
