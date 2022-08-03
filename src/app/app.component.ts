import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'wordclock2';

  constructor(private el: ElementRef, private renderer: Renderer2, private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', this.settingsService.getBackgroundColor());
    window.wallpaperPropertyListener = {
      applyUserProperties: (properties) => {
        console.log(properties);
        if (properties.fontcolor) {
          var customColor = properties.fontcolor.value.split(' ');
          customColor = customColor.map(function (c) {
            return Math.ceil(c * 255);
          });
          var customColorAsCSS = 'rgb(' + customColor + ')'
          this.settingsService.setFontColor(customColorAsCSS);
        }

        if(properties.textalignment){
          this.settingsService.setTextAlignment(properties.textalignment.value);
        }

        if(properties.backgroundcolor){
          var customColor = properties.backgroundcolor.value.split(' ');
          customColor = customColor.map(function (c) {
            return Math.ceil(c * 255);
          });
          var customColorAsCSS = 'rgb(' + customColor + ')'
          this.settingsService.setBackgroundColor(customColorAsCSS);
          this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', this.settingsService.getBackgroundColor());
        }

        if(properties.timeperiod){
          this.settingsService.setTimePeriodEnabled(properties.timeperiod.value);
        }
      },
    };
  }
}
