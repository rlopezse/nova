import { Component, inject, signal } from '@angular/core';
import { FilterComponent } from '../filter/filter';
import { CartComponent } from '../cart/cart';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api/api.service';

type Product = {
  id: number,
  sku: string,
  title: string,
  description: string,
  category: string,
  price: number,
  currencyFormat: string,
  currencyId: string,
  isFreeShipping: boolean
};

@Component({
  selector: 'app-root',
  imports: [FilterComponent, CartComponent, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nova');

  private api = inject(ApiService);
  productos = signal<Product[]>([]);

  ngOnInit() {
    this.api.getProducts().subscribe((data: Product[]) => {
      console.log(data);
    });
  }
}
