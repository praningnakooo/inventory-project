import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { ItemService } from "src/app/shared/service/item.service";
import { Item } from "src/app/model/Item.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Products } from "src/app/model/Product";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"],
})
export class AddItemComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  btnText = "ADD";
  public response: any;

  _itemMasterForm = this.fb.group({
    item_id: ["", Validators.required],
    item_name: ["", Validators.required],
    category_name: ["", Validators.required],
    quantity: ["", Validators.required],
    price: ["", Validators.required],
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.btnText);
    console.log(this._itemMasterForm.value);
    alert("Adding item");
    //creating new single item
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post(
        "http://localhost:3000/product",
        this._itemMasterForm.value,
        httpOptions
      )
      .subscribe((data) => {
        this.response = data;
        alert("Item Successfully added.");
      });
  }

  resetFormClickHandler() {
    this.btnText = "ADD";
    this._itemMasterForm.reset();
  }
}
