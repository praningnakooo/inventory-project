import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { Orders } from './../../../../model/Order';
import { OrderService } from './../../../../shared/service/orders.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  displayedColumns = [
    "itOrdersCode",
    "itOrdersCustomerName",
    "itOrdersCustomerAddress",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  _dataSource$!: Observable<Orders[]>;


  constructor(
    private customerListService: OrderService) { }

  ngOnInit(): void {
    this._dataSource$ = this.customerListService.fetchAll();
  }
}
