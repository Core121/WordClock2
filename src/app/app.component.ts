import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators'
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'wordclock2';

  constructor(private el: ElementRef, private renderer: Renderer2, private settingsService: SettingsService) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', this.settingsService.getBackgroundColor());
  }

  @HostListener('window:wallpaperPropertyListener', ['$event'])
  applyUserProperties(properties: any) {
    // TO DO: Create service to get and set these values on each component
    if (properties.backgroundColor) {
      // Convert the custom color to 0 - 255 range for CSS usage
      var customColor = properties.backgroundColor.value.split(' ');
      customColor = customColor.map(c => { return Math.ceil(c * 255); });
      this.settingsService.setBackgroundColor('rgb(' + customColor + ')');
    }
    if (properties.fontColor) {
      // Convert the custom color to 0 - 255 range for CSS usage
      var customColor = properties.fontColor.value.split(' ');
      customColor = customColor.map(c => { return Math.ceil(c * 255); });
      this.settingsService.setFontColor('rgb(' + customColor + ')');
    }
  }
}
