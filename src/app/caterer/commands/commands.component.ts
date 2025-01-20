import {Component, inject} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import {from, map} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatDivider} from '@angular/material/divider';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-commands',
  imports: [
    MatList,
    MatListItem,
    MatButton,
    AsyncPipe,
    MatDivider,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
  ],
  templateUrl: './commands.component.html',
  styleUrl: './commands.component.scss'
})
export class CommandsComponent {
  protected command$;

  private api = inject(ApiService);

  constructor() {
    this.command$ = from(this.api.command.getCommand()).pipe(map(response => response.data));
  }
}
