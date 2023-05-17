import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Car 1', brand: 'Brand 1', price: 10000 },
    { id: 2, name: 'Car 2', brand: 'Brand 2', price: 20000 },
    // Add more cars
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((car) => car.id === id);
  }
}
