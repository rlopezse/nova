import { Component, signal, inject } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter';
import { ProductCardComponent } from '../../components/product-card/product-card';
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

type ApiResponse = {
  data: Product[];
};

@Component({
  selector: 'app-products',
  imports: [FilterComponent, ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent {
  protected readonly title = signal('nova');

  private api = inject(ApiService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.api.getProducts().subscribe((res: ApiResponse) => {
      console.log(res.data);
      this.products.set(res.data);
    });
  }
}
