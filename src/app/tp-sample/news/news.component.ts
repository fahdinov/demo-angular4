import { Component, OnInit } from '@angular/core';
import { New } from './news.model';

import {NewsServices} from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewsServices]
  
})
export class NewsComponent implements OnInit {

  fiveLastNews : New[];
  constructor(private newsService : NewsServices) { }

  ngOnInit() {
    this.newsService.getNewsByLoop(5).then(news => this.fiveLastNews = news);
  }

}
