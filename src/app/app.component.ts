import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { SettingsService } from './services/settings.service';
import { FuzzyTimeComponent } from './fuzzy-time/fuzzy-time.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FuzzyTimeComponent],
})
export class AppComponent implements OnInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly settingsService = inject(SettingsService);

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      'backgroundColor',
      this.settingsService.backgroundColor
    );
    globalThis.wallpaperPropertyListener = {
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
          this.settingsService.fontSize = Number(
            properties.fontsize?.value ?? 96
          );
        }

        if (properties.weekday) {
          this.settingsService.weekDayEnabled = properties.weekday.value;
        }
      },
    };
  }
}
