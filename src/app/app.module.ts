import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { Banner2Service } from './components/banner2/banner2.service';

@NgModule({
  declarations: [
    AppComponent,
	BannerComponent,
	Banner2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Banner2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
