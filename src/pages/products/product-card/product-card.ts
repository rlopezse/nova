import { Component, input } from '@angular/core';

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
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input<Product>();
}

