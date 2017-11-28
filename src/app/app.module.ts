import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';


const routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: 'check-out', component: CheckOutComponent, CanActivate: AuthGuard
  },
  {
    path: 'my/orders', component: MyOrdersComponent
  },
  {
    path: 'order-success', component: OrderSuccessComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin/products', component: AdminProductsComponent, CanActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/products/new', component: ProductFormComponent, CanActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/orders', component: AdminOrdersComponent, CanActivate: [AuthGuard, AdminAuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    CustomFormsModule,
  ],
  providers: [AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
