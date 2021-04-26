import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { ViewCustomerService } from "./view-customer.service";
import { CustomerList } from "src/app/model/Customer";

@Component({
  selector: "app-viewcustomer",
  templateUrl: "./view-customer.component.html",
  styleUrls: ["./view-customer.component.css"]
})
export class ViewCustomerComponent implements OnInit {
  displayedColumns = [
    "itCustomerCode",
    "itCustomerFirstName",
    "itCustomerLastName",
    "itAddress",
    "itAge"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource$!: Observable<CustomerList[]>;


  constructor(
    private customerListService: ViewCustomerService) {}

  ngOnInit():  void {
    this._dataSource$ = this.customerListService.fetchAll();
  }
  }


