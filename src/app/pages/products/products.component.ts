import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.getProducts();
  }
  getProducts(): void {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = Object.values(response);
        console.log('Retrieved Product List', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  goToProductDetail(product: any): void {
    this.router.navigate(['/product-detail', product.id]);
  }
}
