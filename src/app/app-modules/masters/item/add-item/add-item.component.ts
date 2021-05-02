import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ItemService } from "src/app/shared/service/item.service";
import { Item } from "src/app/model/Item.model";
import { HttpClient } from "@angular/common/http";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"],
})
export class AddItemComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //variables start
  btnText = "ADD";
  _itemDetails : Item;

  _itemMasterForm = this.fb.group({
    item_id: ["", Validators.required],
    item_name: ["", Validators.required],
    category_name: ["", Validators.required],
    quantity: ["", Validators.required],
    price: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private _itemService: ItemService) {
    this._itemDetails = new Item();
  }

  ngOnInit() {}

  onSubmit() {
    //adding address in main model
    console.log(JSON.stringify(this._itemMasterForm.value));
    this._itemService
      ._itemActions(this._itemDetails, "ADD")
      .subscribe(apiResponse => {
        console.log("response after adding an item: ", apiResponse);
        alert(
          `Item with ID: ${apiResponse.data[0].item_id} & NAME:${apiResponse.data[0].item_name} successfully added.`
        );
      });
    alert(" ");
  }

  resetFormClickHandler() {
    this.btnText = "ADD";
    this._itemMasterForm.reset();
  }
}
