import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const productName = route.paramMap.get('name'); // Assuming the parameter name is 'name' instead of 'id'

    if (this.productService.isValidProduct(productName)) {
      return true; // Allow access to the product detail page
    } else {
      this.router.navigate(['/invalid-product']); // Redirect to invalid-product page
      return false;
    }
  }
}
