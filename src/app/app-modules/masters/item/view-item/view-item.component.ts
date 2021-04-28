import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { ViewItemService } from "../../../../shared/service/view-item.service";
import { Products } from "src/app/model/Product";

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
    "itPrice",
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource$: Observable<Products[]>;

  constructor(private productListService: ViewItemService) {}

  ngOnInit(): void {
    this._dataSource$ = this.productListService.fetchAll();
  }
}
