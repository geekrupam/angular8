import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { ClickEntriesComponent } from './click-entries/click-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ClickEntriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
