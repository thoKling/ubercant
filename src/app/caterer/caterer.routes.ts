import {Routes} from '@angular/router';
import {CatererComponent} from './caterer.component';
import {CommandsComponent} from './commands/commands.component';

export const routes: Routes = [
  {
    path: '', component: CatererComponent, children: [
      {path: 'commands', component: CommandsComponent},
      {
        path: 'products',
        loadComponent: () => import('./products/caterer-product-list/caterer-product-list.component').then(m => m.CatererProductListComponent)
      }
    ]
  },
];
