import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.products = this.productsService.getProducts();
  }

  goToProductDetail(product: Product): void {
    this.router.navigate(['/product-detail', product.id]);
  }
}
