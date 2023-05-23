import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getVariances(): any[] {
    if (this.product && this.product.variances) {
      return Object.values(this.product.variances);
    }
    return [];
  }

  getProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(productId!).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
