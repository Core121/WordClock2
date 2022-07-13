import { Component, HostListener } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wordclock2';
  backgroundColor = '#000';
  fontColor = '#fff';

  constructor() { }

  @HostListener('window:wallpaperPropertyListener', ['$event'])
  applyUserProperties(properties: any) {
  if (properties.backgroundColor) {
    // Convert the custom color to 0 - 255 range for CSS usage
    var customColor = properties.backgroundColor.value.split(' ');
    customColor = customColor.map(c => {return Math.ceil(c * 255);});
    this.backgroundColor = 'rgb(' + customColor + ')';
  }
  if (properties.fontColor) {
    // Convert the custom color to 0 - 255 range for CSS usage
    var customColor = properties.fontColor.value.split(' ');
    customColor = customColor.map(c => {return Math.ceil(c * 255);});
    this.fontColor = 'rgb(' + customColor + ')';
  }
}
}
