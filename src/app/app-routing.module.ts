import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';

import { AuthGuard } from './guard/auth-guard/auth.guard';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductDetailGuard } from './guard/product-detail-guard/product-detail-guard.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { InvalidProductComponent } from './pages/invalid-product/invalid-product.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'login',
    data: { breadcrumb: 'Login' },
    component: LoginComponent,
  },

  {
    path: 'forgot-password',
    data: { breadcrumb: 'Forgot Password' },
    component: ForgetPassComponent,
  },
  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    component: DasboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    data: { breadcrumb: 'My Profile' },
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'change-pass',
    data: { breadcrumb: 'Change Password' },
    component: ChangePassComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    data: { breadcrumb: 'Products' },
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    data: { breadcrumb: 'Register' },
    component: RegisterComponent,
  },
  {
    path: 'product-detail/:id',
    data: { breadcrumb: ' ' },
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
  },
  {
    path: 'unauthorized',
    data: { breadcrumb: 'Unauthorized' },
    component: UnauthorizedComponent,
  },
  {
    path: 'invalid-product',
    data: { breadcrumb: 'Invalid Product' },
    component: InvalidProductComponent,
  },
  {
    path: 'reset-pass',
    data: { breadcrumb: 'Reset Password' },
    component: ResetPassComponent,
  },
  {
    path: 'not-found',
    data: { breadcrumb: 'Page Not Found' },
    component: PageNotFoundComponent,
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
