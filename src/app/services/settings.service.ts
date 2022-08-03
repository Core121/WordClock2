import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private backgroundColor = '#000';
  private fontColor = '#fff';
  private timePeriodEnabled = false;
  private alignment = 'left';

  constructor() { }

  public setFontColor(fontColor: string) {
    this.fontColor = fontColor;
  }

  public getFontColor() {
    return this.fontColor;
  }

  public setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  public getBackgroundColor() {
    return this.backgroundColor;
  }

  public setTimePeriodEnabled(timePeriodEnabled: boolean) {
    this.timePeriodEnabled = timePeriodEnabled;
  }

  public getTimePeriodEnabled() {
    return this.timePeriodEnabled;
  }

  public setTextAlignment(alignment: string){
    this.alignment = alignment;
  }

  public getTextAlignment(){
    return this.alignment;
  }

}
