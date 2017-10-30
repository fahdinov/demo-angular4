import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent} from './about-us.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AboutUsComponent],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
