import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { Order } from './../../../../model/Order';
import { OrderService } from './../../../../shared/service/orders.service';
import { tap } from "rxjs/operators";

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
  _dataSource$!: Observable<Order[]>;

  constructor(
    private orderListService: OrderService) { }

  ngOnInit(): void {
    this._dataSource$ = this.orderListService._fetchAll();
  }

  delete(orders_id: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this._dataSource$ = this.orderListService
      ._delete(orders_id)
      .pipe(tap(() => (this._dataSource$ = this.orderListService._fetchAll())));
  }
}
