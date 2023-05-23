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

  getProductById(id: number): Product | undefined {
    return this.products.find((car) => car.id === id);
  }

  isValidProduct(productId: any): boolean {
    const id = parseInt(productId, 10);
    return this.products.some((product) => product.id === id);
  }
}
