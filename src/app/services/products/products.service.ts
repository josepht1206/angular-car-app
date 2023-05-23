import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from './product.mock';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://car-app-c49d8-default-rtdb.asia-southeast1.firebasedatabase.app';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<Product>(`${this.apiUrl}/products.json`);
  }

  private products: Product[] = [];

  getProduct(productId: string): Observable<any> {
    const url = `${this.apiUrl}/products/p${productId}.json`;
    return this.http.get<Product>(url);
  }
}
