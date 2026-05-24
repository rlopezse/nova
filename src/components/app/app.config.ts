import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { recaptcha } from '../../environments/environment';
import { routes } from './app.routes';
import { authInterceptor } from '../../core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  //esto registra modulos para usarlos en la App
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: recaptcha.key,
      } as RecaptchaSettings,
    },
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
  ],
};
