import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  articles;  
  constructor(private http: HttpClient){
  }
  ngOnInit() {
    this.http.get('http://localhost/drupal-angular/all/aboutus').subscribe(data => {
      this.articles = data;
    });
  }

}
