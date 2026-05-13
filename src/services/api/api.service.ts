import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://proyect-horizon.com';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`);
  }

}
