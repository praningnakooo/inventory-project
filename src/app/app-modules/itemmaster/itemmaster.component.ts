import { environment } from "../../../environments/environment";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { ItemmasterService } from "./itemmaster.service";
import { Products } from "src/app/model/Product";

// import inventoryData from './inventory.json';

interface ApiResponse {
  item;
  response;
}
@Component({
  selector: "app-itemmaster",
  templateUrl: "./itemmaster.component.html",
  styleUrls: ["./itemmaster.component.css"]
})
export class ItemmasterComponent implements OnInit {
  displayedColumns = [
    "itItemCode",
    "itItemName",
    "itCategory",
    "itQuantity",
    "itPrice"
  ];




  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource$!: Observable<Products[]>;
  // msg = ["123"];
  // list: [];


  constructor(
    private productListService: ItemmasterService) {}

  ngOnInit():  void {
    this._dataSource$ = this.productListService.fetchAll();
  }

  // getAllItems() {
  //   this.http
  //     .get<ApiResponse>("http://localhost:3000")
  //     .subscribe(apiResponse => {
  //       if (apiResponse.response.respCode == "0000") {
  //         this.list = apiResponse.item;
  //         console.log(this.list);

  //         console.log("apiResponse.data : ", JSON.stringify(apiResponse.item));
  //         this._dataSource = new MatTableDataSource<Element>(apiResponse.item);
  //         this._dataSource.paginator = this.paginator;
  //         console.log(this._dataSource);
  //       }
  //       // console.log(data);
  //     });
  }


