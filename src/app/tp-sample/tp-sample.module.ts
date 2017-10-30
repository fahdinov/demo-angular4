import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutUsModule } from './about-us/about-us.module';
import { NewsModule } from './news/news.module';
import { RouterModule }   from '@angular/router';

import { ROUTES } from './tp-sample.route';

@NgModule({
  imports: [
    BrowserModule,
    ROUTES,
    AboutUsModule,
    NewsModule
  ],
  exports: [AboutUsModule, NewsModule],
  declarations: []
})
export class TpSampleModule { }
