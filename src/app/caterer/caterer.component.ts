import {Component, inject} from '@angular/core';
import {from, map} from 'rxjs';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-caterer',
  imports: [
    RouterOutlet,
    RouterLink,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer
  ],
  templateUrl: './caterer.component.html',
  styleUrl: './caterer.component.scss'
})
export class CatererComponent {
  protected command$;

  private api = inject(ApiService);

  constructor() {
    this.command$ = from(this.api.command.getCommand()).pipe(map(response => response.data));
  }
}
