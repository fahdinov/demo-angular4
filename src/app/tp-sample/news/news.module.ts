import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { BrowserModule } from '@angular/platform-browser';

import { NEWS_ROUTES } from './news.routing';


@NgModule({
  imports: [
    BrowserModule,
    NEWS_ROUTES
  ],
  exports : [NewsComponent],
  declarations: [NewsComponent]
})
export class NewsModule { }
