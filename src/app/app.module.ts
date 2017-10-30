import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroModule } from './tp-sample/hero/hero-module';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleNewsComponent } from './tp-sample/sample-news/sample-news.component';
import { NewsModule } from './tp-sample/news/news.module';


@NgModule({
  declarations: [
    AppComponent,
    SampleNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  	HeroModule,
    RouterModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
