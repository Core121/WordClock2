import { AfterViewInit, Component, ElementRef, HostListener, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { SettingsService } from './services/settings.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  title = 'wordclock2';


  constructor(private el: ElementRef, private renderer: Renderer2, private settingsService: SettingsService) {
    window.wallpaperPropertyListener = {
      applyUserProperties(properties) {
        this.settingsService.setTimePeriodEnabled(false);
      }
    };
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', this.settingsService.getBackgroundColor());
    window.wallpaperPropertyListener = {
      applyUserProperties(properties) {
        this.settingsService.setTimePeriodEnabled(false);
      }
    };
  }


}
