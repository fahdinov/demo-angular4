
import { RouterModule, Routes }   from '@angular/router';
import { NewsComponent } from './news.component';

export const NEWS_ROUTES = RouterModule.forRoot([
    {
      path: 'news',
      component: NewsComponent  
    }
]);