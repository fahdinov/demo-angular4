import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleNewsComponent} from './sample-news.component';


@NgModule({
  imports: [
    CommonModule,
    SampleNewsComponent
  ],
  declarations: [SampleNewsComponent]
})
export class SampleNewsModule { }
