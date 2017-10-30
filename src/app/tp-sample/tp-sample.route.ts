import { RouterModule, Routes }   from '@angular/router';
import { NewsComponent } from './news/news.component';

const routes : Routes = [
  {
    path: 'heroes',
    component: NewsComponent
  }
];


RouterModule.forRoot(routes)