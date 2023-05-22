import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  showSideNav = false;
  private routerEventsSubscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set showSideNav accordingly
        this.showSideNav = this.shouldShowSideNav(event.url);
      }
    });
  }
  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  private shouldShowSideNav(url: string): boolean {
    // Define the routes where the side navigation should be displayed
    const allowedRoutes = [
      '/dashboard',
      '/profile',
      '/change-pass',
      '/products',
      '/invalid-product',
      '/change-pass',
      'product-detail/:id',
    ];

    // Check if the current route is in the allowed routes list
    return allowedRoutes.includes(url);
  }
}
