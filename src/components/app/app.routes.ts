import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home';
import { AboutComponent } from '../../pages/about/about';
import { ContactComponent } from '../../pages/contact/contact';
import { LoginComponent } from '../../pages/login/login';
import { RegisterComponent } from '../../pages/register/register';
import { ProductsComponent } from '../../pages/products/products';
import { authGuard } from '../../core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard]},
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
