import { Component, signal } from '@angular/core';
import { FilterComponent } from '../filter/filter';
import { CartComponent } from '../cart/cart';

@Component({
  selector: 'app-root',
  imports: [FilterComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nova');
}
