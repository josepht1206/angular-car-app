import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  productName: string | undefined;
  productNameSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.getProduct();

    const productId = this.route.snapshot.paramMap.get('id');
    this.productNameSubscription = this.productsService
      .getProduct(productId!)
      .pipe(map((product: Product) => product.name))
      .subscribe((name: string) => {
        this.productName = name;
        this.setBreadcrumbLabel();
      });
  }

  ngOnDestroy() {
    this.productNameSubscription.unsubscribe();
  }

  private setBreadcrumbLabel() {
    if (this.productName) {
      this.breadcrumbService.set('product-detail/:id', this.productName);
    }
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
        console.log('Retrieved Product Detail', this.product);
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}
