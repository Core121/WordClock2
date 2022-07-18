import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { FuzzyTimeComponent } from './fuzzy-time/fuzzy-time.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

declare global {
  interface Window {
    wallpaperPropertyListener : any;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    FuzzyTimeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
