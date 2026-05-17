import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://proyect-horizon.com';

  getProducts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/api/products`);
  }
}
