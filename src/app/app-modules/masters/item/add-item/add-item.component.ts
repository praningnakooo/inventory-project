import { Component, OnInit } from "@angular/core";
// import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
// import { ItemService } from "src/app/shared/service/item.service";
// import { Item } from "src/app/model/Item.model";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { MatTableDataSource } from "@angular/material/table";
// import {MatPaginator} from "@angular/material/paginator"

interface ApiResponse {
  item;
  response;
}

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit {
  

  ngOnInit() {}

  // onSubmit() {
  //   console.log(this.btnText);
  //   console.log(this._itemMasterForm.value);
  //   if (this.btnText === "ADD") {
  //     alert("Adding item");
  //     //creating new single item
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json"
  //       })
  //     };
  //     return this.http
  //       .post(
  //         "http://localhost:8084/item",
  //         this._itemMasterForm.value,
  //         httpOptions
  //       )
  //       .subscribe(data => {
  //         this.response = data;
  //         if (this.response.response.respCode === "0000") {
  //           //this.getAllItems();
  //           alert("Item Successfully added.");
  //           // this._reloadTableData();
  //         }
  //       });
  //   } else if (this.btnText === "UPDATE") {
  //     alert("updating single item");
  //     //updating single item
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json"
  //       })
  //     };
  //     return this.http
  //       .post(
  //         "http://localhost:8084/items",
  //         this._itemMasterForm.value,
  //         httpOptions
  //       )
  //       .subscribe(data => {
  //         this.response = data;
  //         if (this.response.response.respCode === "0000") {
  //           this.getAllItems();
  //         }
  //       });

  //   }
  // }
  // getAllItems() {
  //   console.log("data");
  //   this.http
  //     .get<ApiResponse>("http://localhost:8084/items")
  //     .subscribe(apiResponse => {
  //       if (apiResponse.response.respCode == "0000") {
  //         this.list = apiResponse.item;
  //         console.log(this.list);

  //         console.log("apiResponse.data : ", JSON.stringify(apiResponse.item));
  //         this._itemMasterForm = new MatTableDataSource<Element>(apiResponse.item);
  //         this._itemMasterForm.paginator = this.paginator;
  //         console.log(this._itemMasterForm);
  //       }

  //     });
  // }
  // resetFormClickHandler() {
  //   this.btnText = "ADD";
  //   this._itemMasterForm.reset();
  // }

  // _getAllSources() {
  //   this._itemService._getSources("GET").subscribe(apiResponse => {
  //     this._allSources = apiResponse["data"];
  //   });
  // }
}
