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
      description:
        "The XYZ Model A is a sleek and stylish sports car that combines power and elegance in one package. With its aerodynamic design and powerful engine, this car delivers an exhilarating driving experience. The interior is crafted with premium materials and offers advanced features for comfort and convenience. Whether you're cruising on the open road or navigating city streets, the XYZ Model A is sure to turn heads and provide an unforgettable driving experience.",
      imagePath:
        'https://www.hdwallpaper.nu/wp-content/uploads/2015/02/url1.jpg',
      variances: [
        { info: 'Info 1', price: 10 },
        { info: 'Info 2', price: 15 },
      ],
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      description:
        'Introducing the ABC Luxury Sedan, a masterpiece of engineering and design. This car redefines luxury with its plush interiors, state-of-the-art technology, and refined performance. The spacious cabin offers unmatched comfort, while the cutting-edge infotainment system keeps you connected on the go. With its powerful engine and precise handling, the ABC Luxury Sedan delivers a smooth and exhilarating ride. Experience true luxury and sophistication with the ABC Luxury Sedan.',
      imagePath:
        'https://1.bp.blogspot.com/_ltoEMuaSQ-I/TDy6npUcP6I/AAAAAAAAAAs/UEaE8Yk9tt4/s1600/car6.jpg',
      variances: [
        { info: 'Info 1', price: 10 },
        { info: 'Info 2', price: 15 },
      ],
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
