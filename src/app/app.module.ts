import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { PopupComponent } from './components/popup/popup.component';
import { TimeclockComponent } from './components/timeclock/timeclock.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { InvalidProductComponent } from './pages/invalid-product/invalid-product.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetPassComponent,
    ProfileComponent,
    ChangePassComponent,
    ProductsComponent,
    ProductDetailComponent,
    SideNavComponent,
    HeaderComponent,
    IframeComponent,
    PopupComponent,
    TimeclockComponent,
    DasboardComponent,
    UnauthorizedComponent,
    InvalidProductComponent,
    RegisterComponent,
    LoadingSpinnerComponent,
    ResetPassComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
