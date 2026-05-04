import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './components/App/app.config';
import { App } from './components/App/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
