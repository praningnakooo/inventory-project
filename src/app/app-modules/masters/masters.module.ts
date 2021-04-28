import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddCustomerComponent } from "./customer/add-customer/add-customer.component";
import { ViewCustomerComponent } from "./customer/view-customer/view-customer.component";
import { ModifyCustomerComponent } from "./customer/modify-customer/modify-customer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MastersRoutingModule } from "./masters-routing.module";
import { QuotationComponent } from './quotation/quotation.component';

import { ViewItemComponent } from "./item/view-item/view-item.component";
import { AddItemComponent } from "./item/add-item/add-item.component";
import { ModifyItemComponent } from "./item/modify-item/modify-item.component";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AddCustomerComponent,
    ViewCustomerComponent,
    ModifyCustomerComponent,
    ViewItemComponent,
    AddItemComponent,
    ModifyItemComponent,
    QuotationComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class MastersModule {}
