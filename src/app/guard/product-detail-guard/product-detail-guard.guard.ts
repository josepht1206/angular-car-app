import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
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
  ): Observable<boolean> {
    const productId = route.paramMap.get('id');

    if (productId === null) {
      this.router.navigate(['/invalid-product']); // Redirect to the invalid product screen
      return of(false);
    }

    return this.productService.getProduct(productId).pipe(
      map((product) => {
        const productExists = !!product;
        if (!productExists) {
          this.router.navigate(['/invalid-product']); // Redirect to the invalid product screen
        }
        return productExists;
      })
    );
  }
}
