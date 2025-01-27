import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAuth0} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';
import {ImagekitioAngularModule} from 'imagekitio-angular';

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
        redirect_uri: window.location.origin + environment.clientContextPath
      }
    }),
    importProvidersFrom(
      ImagekitioAngularModule.forRoot({
        urlEndpoint: "https://ik.imagekit.io/4w3h1m1ulv",
        publicKey: "public_ieZ9IOwccViITXr0m44St8GpIhg=",
      })
    )
  ]
};
