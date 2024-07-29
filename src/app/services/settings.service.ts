import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _backgroundColor = '#000';
  private _fontColor = '#fff';
  private _timePeriodEnabled = false;
  private _textalignment = 'left';
  private _fontSize = 96;
  private _weekDayEnabled = false;

  constructor() {}

  // Background color
  get backgroundColor(): string {
    return this._backgroundColor;
  }
  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  // Font color
  get fontColor(): string {
    return this._fontColor;
  }
  set fontColor(value: string) {
    this._fontColor = value;
  }

  // Font size
  get fontSize(): number {
    return this._fontSize;
  }
  set fontSize(value: number) {
    this._fontSize = value;
  }

  // Time period enabled
  get timePeriodEnabled(): boolean {
    return this._timePeriodEnabled;
  }
  set timePeriodEnabled(value: boolean) {
    this._timePeriodEnabled = value;
  }

  // Text alignment
  get textAlignment(): string {
    return this._textalignment;
  }
  set textAlignment(value: string) {
    this._textalignment = value;
  }

  // Weekday enabled
  get weekDayEnabled(): boolean {
    return this._weekDayEnabled;
  }
  set weekDayEnabled(value: boolean) {
    this._weekDayEnabled = value;
  }
}
