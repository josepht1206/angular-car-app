import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSideNav = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set showSideNav accordingly
        this.showSideNav = this.shouldShowSideNav(event.url);
      }
    });
  }

  private shouldShowSideNav(url: string): boolean {
    // Define the routes where the side navigation should be displayed
    const allowedRoutes = [
      '/dashboard',
      '/profile',
      '/change-pass',
      '/products',
      '/invalid-product',
    ];

    // Check if the current route is in the allowed routes list
    return allowedRoutes.includes(url);
  }
}
