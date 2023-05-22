import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      imagePath:
        'https://www.hdwallpaper.nu/wp-content/uploads/2015/02/url1.jpg',
      variance: 'Info 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      imagePath:
        'https://1.bp.blogspot.com/_ltoEMuaSQ-I/TDy6npUcP6I/AAAAAAAAAAs/UEaE8Yk9tt4/s1600/car6.jpg',
      variance: 'Info 2',
      price: 20,
    },
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
