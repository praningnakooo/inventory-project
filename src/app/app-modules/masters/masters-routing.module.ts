
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { ModifyCustomerComponent } from "./customer/modify-customer/modify-customer.component";
import { ViewCustomerComponent } from "./customer/view-customer/view-customer.component";

import { AddItemComponent } from "./item/add-item/add-item.component";
import { ModifyItemComponent } from "./item/modify-item/modify-item.component";
import { ViewItemComponent } from "./item/view-item/view-item.component";
import { LoginComponent } from "./login/login.component";
import { QuotationComponent } from "./quotation/quotation.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "customer/add",
    component: AddCustomerComponent
  },
  {
    path: "customer/view",
    component: ViewCustomerComponent
  },
  {
    path: "customer/modify",
    component: ModifyCustomerComponent
  },
  {
    path: "item/add",
    component: AddItemComponent
  },
  {
    path: "item/view",
    component: ViewItemComponent
  },
  {
    path: "item/modify",
    component: ModifyItemComponent
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
