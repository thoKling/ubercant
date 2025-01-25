import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAuth0} from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-sponge.eu.auth0.com',
      clientId: 'gntW11hcV1SHrtIvLrLtCILQPAhEU9gA',
      authorizationParams: {
        redirect_uri: window.location.origin + '/ubercant/' // TODO: this needs to be changed to accept prod and dev env
      }
    }),
  ]
};
