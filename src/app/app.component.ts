import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'wordclock2';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundColor',
      this.settingsService.backgroundColor
    );
    window.wallpaperPropertyListener = {
      applyUserProperties: properties => {
        console.log(properties);
        if (properties.fontcolor) {
          let customColor = properties.fontcolor.value.split(' ');
          customColor = customColor.map(function (c) {
            return Math.ceil(c * 255);
          });
          const customColorAsCSS = 'rgb(' + customColor + ')';
          this.settingsService.fontColor = customColorAsCSS;
        }

        if (properties.textalignment) {
          this.settingsService.textAlignment = properties.textalignment.value;
        }

        if (properties.backgroundcolor) {
          let customColor = properties.backgroundcolor.value.split(' ');
          customColor = customColor.map(function (c) {
            return Math.ceil(c * 255);
          });
          const customColorAsCSS = 'rgb(' + customColor + ')';
          this.settingsService.backgroundColor = customColorAsCSS;
          this.renderer.setStyle(
            this.el.nativeElement.ownerDocument.body,
            'backgroundColor',
            this.settingsService.backgroundColor
          );
        }

        if (properties.timeperiod) {
          this.settingsService.timePeriodEnabled = properties.timeperiod.value;
        }

        if (properties.fontsize) {
          this.settingsService.fontSize =
            Number(properties.fontsize.value) ?? 96;
        }

        if (properties.weekday) {
          this.settingsService.weekDayEnabled = properties.weekday.value;
        }
      },
    };
  }
}
