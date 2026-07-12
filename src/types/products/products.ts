export interface Product {
  id: number;
  sku: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currencyFormat: string;
  currencyId: string;
  isFreeShipping: boolean;
}

export interface ApiProductResponse {
  data: Product[];
}
