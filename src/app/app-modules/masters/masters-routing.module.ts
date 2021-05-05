import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { ViewCustomerComponent } from "./customer/view-customer/view-customer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddItemComponent } from "./item/add-item/add-item.component";
import { ViewItemComponent } from "./item/view-item/view-item.component";
import { LoginComponent } from "./login/login.component";
import { QuotationComponent } from './quotation/quotation.component';
import { SignupComponent } from "./signup/signup.component";
import { AddOrdersComponent } from './orders/add-orders/add-orders.component';
import { ViewOrdersComponent } from './orders/view-orders/view-orders.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AuthGuard } from './../../shared/service/auth-guard.service';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: "customer/view",
    component: ViewCustomerComponent, canActivate: [AuthGuard]
  },
  {
    path: "customer/add",
    component: AddCustomerComponent, canActivate: [AuthGuard]
  },
  {
    path: "item/view",
    component: ViewItemComponent, canActivate: [AuthGuard]
  },
  {
    path: "item/add",
    component: AddItemComponent, canActivate: [AuthGuard]
  },
  {
    path: "orders/view",
    component: ViewOrdersComponent, canActivate: [AuthGuard]
  },
  {
    path: "orders/add",
    component: AddOrdersComponent, canActivate: [AuthGuard]
  },
  {
    path: "categories/view",
    component: ViewCategoryComponent, canActivate: [AuthGuard]
  },
  {
    path: "categories/add",
    component: AddCategoryComponent, canActivate: [AuthGuard]
  },
  {
    path: "users/view",
    component: ViewUserComponent, canActivate: [AuthGuard]
  },
  {
    path: "quote-master",
    component: QuotationComponent, canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule {}
