
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

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "customer/view",
    component: ViewCustomerComponent
  },
  {
    path: "customer/add",
    component: AddCustomerComponent
  },
  {
    path: "item/view",
    component: ViewItemComponent
  },
  {
    path: "item/add",
    component: AddItemComponent
  },
  {
    path: "orders/view",
    component: ViewOrdersComponent
  },
  {
    path: "orders/add",
    component: AddOrdersComponent
  },
  {
    path: "quote-master",
    component: QuotationComponent
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
