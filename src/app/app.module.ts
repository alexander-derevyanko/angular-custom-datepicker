import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateRangePickerDirective } from './date-range-picker.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateRangePickerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
