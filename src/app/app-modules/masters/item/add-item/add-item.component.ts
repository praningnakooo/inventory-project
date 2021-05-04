import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Item } from "src/app/model/Item.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"],
})
export class AddItemComponent implements OnInit {
  //variables start
  _itemDetails: Item;
  btnText = "ADD";
  response: any;

  _itemMasterForm = this.fb.group({
    item_name: ["", Validators.required],
    category_name: ["", Validators.required],
    quantity: ["", Validators.required],
    price: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._itemDetails = new Item();
  }

  ngOnInit() {}

  onSubmit() {
    if (this.btnText === "ADD") {
      //creating new single item
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      return this.http
        .post(
          "http://localhost:3000/products",
          this._itemMasterForm.value,
          httpOptions
        )
        .subscribe(data => {
          this.response = data;
            //this.getAllItems();
            alert("Item Successfully added.");
            this.resetFormClickHandler();
        });
    }
  }

  resetFormClickHandler() {
    this._itemMasterForm.reset();
  }
}
