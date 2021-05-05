import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { ItemService } from "../../../../shared/service/item.service";
import { Products } from "src/app/model/Product";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-view-item",
  templateUrl: "./view-item.component.html",
  styleUrls: ["./view-item.component.css"],
})
export class ViewItemComponent implements OnInit {
  displayedColumns = [
    "itItemCode",
    "itItemName",
    "itCategory",
    "itQuantity",
    "itPrice"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource$: Observable<Products[]>;

  constructor(private productListService: ItemService) {}

  ngOnInit(): void {
    this._dataSource$ = this.productListService._fetchAll();
  }

  delete(product_id: number): void {
    this._dataSource$ = this.productListService
      ._delete(product_id)
      .pipe(tap(() => (this._dataSource$ = this.productListService._fetchAll())));
  }
}

