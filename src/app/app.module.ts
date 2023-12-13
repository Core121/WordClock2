import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { FuzzyTimeComponent } from './fuzzy-time/fuzzy-time.component';

@NgModule({
  declarations: [
    AppComponent,
    FuzzyTimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
