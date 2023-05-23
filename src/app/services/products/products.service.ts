import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from './product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = PRODUCTS;

  getProducts(): Product[] {
    return this.products;
  }

  getProductByName(productName: any) {
    return this.products.find((car) => car.name === productName);
  }

  isValidProduct(productName: any): boolean {
    return this.products.some((product) => product.name === productName);
  }
}
