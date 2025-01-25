import {CanActivateFn} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {inject} from '@angular/core';
import {tap} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  console.log("Auth guard");

  return authService.isAuthenticated$.pipe(
    tap((loggedIn) => {
      console.log("Isloggedin ? ", loggedIn);
      if (!loggedIn) {
        authService.loginWithRedirect({
          appState: {target: state.url},
        });
      }
    })
  );
};
