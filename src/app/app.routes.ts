import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: 'caterer',
    loadChildren: () => import('./caterer/caterer.module').then(m => m.CatererModule)
  },
  {
    path: 'commercant',
    loadComponent: () => import('./commercant/commercant.component').then(m => m.CommercantComponent)
  }
];
