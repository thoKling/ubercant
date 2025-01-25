import {Routes} from '@angular/router';
import {authGuard} from './authentication/guard/auth.guard';


export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'caterer',
        loadChildren: () => import('./caterer/caterer.module').then(m => m.CatererModule)
      },
      {
        path: 'commercant',
        loadComponent: () => import('./commercant/commercant.component').then(m => m.CommercantComponent)
      }
    ]
  }
];
