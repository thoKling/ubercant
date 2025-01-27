import {Component, inject} from '@angular/core';
import {from, map} from 'rxjs';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ApiService} from '../shared/api.service';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-caterer',
  imports: [
    RouterOutlet,
    RouterLink,
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatIcon,
    MatIconButton,
    NgIf
  ],
  templateUrl: './caterer.component.html',
  styleUrl: './caterer.component.scss'
})
export class CatererComponent {
  protected command$;
  protected sideMenuOpened: boolean = window.innerWidth >= 600;
  private api = inject(ApiService);

  constructor() {
    this.command$ = from(this.api.command.getCommand()).pipe(map(response => response.data));
  }
}
