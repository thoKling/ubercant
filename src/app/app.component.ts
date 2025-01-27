import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {AuthService} from '@auth0/auth0-angular';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarRow, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = 'ubercant';
  private authService = inject(AuthService);
  protected username$ = this.authService.user$.pipe(map(user => {
    console.log('user', user);
    return user?.name
  }));

  logout() {
    this.authService.logout();
  }
}
