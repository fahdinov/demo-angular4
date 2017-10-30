import { RouterModule, Routes }   from '@angular/router';
import { NewsComponent } from './news/news.component';

export const ROUTES = RouterModule.forRoot([
  {
    path: 'heroes',
    component: NewsComponent
  },
  {
    path: 'news',
    component: NewsComponent  
  }
]);

