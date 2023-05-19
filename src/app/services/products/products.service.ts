import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Car 1', brand: 'Brand 1', price: 10000 },
    { id: 2, name: 'Car 2', brand: 'Brand 2', price: 20000 },
  ];

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
