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
      '/product-detail/*',
    ];

    for (const route of allowedRoutes) {
      if (this.isRouteMatch(url, route)) {
        return true;
      }
    }

    return false;
  }

  private isRouteMatch(url: string, route: string): boolean {
    // Replace the wildcard (*) with a regular expression pattern
    const pattern = new RegExp('^' + route.replace('*', '.+') + '$');
    return pattern.test(url);
  }
}
