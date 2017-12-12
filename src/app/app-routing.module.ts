import { Routes, RouterModule, Route } from '@angular/router';
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
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  },
  {
    path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]
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
    path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/product/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService]
  },
  {
    path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuardService]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
