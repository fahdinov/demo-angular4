import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutUsModule } from './about-us/about-us.module';
import { NewsModule } from './news/news.module';


@NgModule({
  imports: [
    BrowserModule,
    AboutUsModule,
    NewsModule
  ],
  exports: [AboutUsModule, NewsModule],
  declarations: []
})
export class TpSampleModule { }
