import { Component, OnInit } from "@angular/core";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { ItemService } from "../item.service";
import { Products } from "src/app/model/Product";
import { Observable } from "rxjs";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit {
  //variables start
  _itemDetails: Products;
  _itemMasterForm: any;

  //variables end
  constructor(
    private _formBuilder: FormBuilder,
    private _itemService: ItemService
  ) {
    // this._itemDetails = new ItemService;
    this._itemMasterForm = this._formBuilder.group({
      item_id: ["", Validators.required],
      item_name: ["", Validators.required],
      category_id: ["", Validators.required],
      quantity: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  ngOnInit() {}

  _addCustomerClickHandler() {
    //adding address in main model
    console.log(JSON.stringify(this._itemDetails));
    // this._itemDetails.csCreatedBy = "0001";
  }
}
