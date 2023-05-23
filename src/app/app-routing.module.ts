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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgetPassComponent },
  { path: 'dashboard', component: DasboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'change-pass',
    component: ChangePassComponent,
    canActivate: [AuthGuard],
  },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'product-detail/:name',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'invalid-product', component: InvalidProductComponent },
  { path: 'reset-pass', component: ResetPassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
