import { Component, inject, signal } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { ApiService } from '../../services/api/api.service';
import { Product } from '../../types/products/products';

@Component({
  selector: 'app-products',
  imports: [FilterComponent, ProductCardComponent ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent {
  private api = inject(ApiService);
  products = signal<Product[]>([]);

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (response) => {
        this.products.set(response.data);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }
}
