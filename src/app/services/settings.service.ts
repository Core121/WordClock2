import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private backgroundColor = '#000';
  private fontColor = '#fff';
  private timePeriodEnabled = true;

  constructor() { }

  setFontColor(fontColor: string) {
    this.fontColor = fontColor;
  }

  getFontColor() {
    return this.fontColor;
  }

  setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }

  setTimePeriodEnabled(timePeriodEnabled: boolean) {
    this.timePeriodEnabled = timePeriodEnabled;
  }

  getTimePeriodEnabled() {
    return this.timePeriodEnabled;
  }

}
