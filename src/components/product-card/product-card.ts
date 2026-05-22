import { Component, input } from '@angular/core';
import { PricePipe } from '../../shared/pipes/price.pipe';

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
  selector: 'app-product-card',
  imports: [PricePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
}

