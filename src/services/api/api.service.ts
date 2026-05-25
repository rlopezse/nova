import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { api } from '../../environments/environment';
import { ApiProductResponse } from '../../types/products/products';
import { ApiLoginResponse, ApiLoginPayload } from '../../types/login/login';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  login(credentials: ApiLoginPayload) {
    return this.http.post<ApiLoginResponse>(`${api.url}/user/login`, credentials).pipe(
      tap((res: ApiLoginResponse) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }),
    );
  }

  getProducts() {
    return this.http.get<ApiProductResponse>(`${api.url}/api/products`);
  }
}
