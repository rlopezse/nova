import { Routes } from '@angular/router';
import { ContactComponent } from '../../pages/contact/contact';
import { FavsComponent } from '../../pages/favs/favs';
import { ShoppingComponent } from '../../pages/shopping/shopping';
import { LoginComponent } from '../../pages/login/login';
import { RegisterComponent } from '../../pages/register/register';
import { ProductsComponent } from '../../pages/products/products';
import { authGuard } from '../../core/guards/auth.guard';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'favs', component: FavsComponent, canActivate: [authGuard] },
  { path: 'shopping', component: ShoppingComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/products' },
];
