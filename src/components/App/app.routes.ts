import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home';
import { AboutComponent } from '../../pages/about/about';
import { ContactComponent } from '../../pages/contact/contact';
import { RegisterComponent } from '../../pages/register/register';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: '**', redirectTo: ''},
];
