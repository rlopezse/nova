import { Component, signal, inject } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter';
import { CartComponent } from '../../components/cart/cart';
import { ApiService } from '../../services/api/api.service';

type Product = {
  id: number;
  sku: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currencyFormat: string;
  currencyId: string;
  isFreeShipping: boolean;
};

@Component({
  selector: 'app-products',
  imports: [FilterComponent, CartComponent],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent {
  protected readonly title = signal('nova');

  private api = inject(ApiService);
  productos = signal<Product[]>([]);

  ngOnInit() {
    this.api.getProducts().subscribe((data: Product[]) => {
      console.log(data);
    });
  }
}
