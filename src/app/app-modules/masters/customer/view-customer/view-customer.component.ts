import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { CustomerList } from "src/app/model/Customer";
import { CustomerService } from "src/app/shared/service/customer.service";

@Component({
  selector: "app-viewcustomer",
  templateUrl: "./view-customer.component.html",
  styleUrls: ["./view-customer.component.css"]
})
export class ViewCustomerComponent implements OnInit {
  displayedColumns = [
    "itCustomerCode",
    "itCustomerFirstName",
    "itAddress",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  _dataSource$!: Observable<CustomerList[]>;


  constructor(
    private customerListService: CustomerService) {}

  ngOnInit():  void {
    this._dataSource$ = this.customerListService._fetchAll();
  }
  }


