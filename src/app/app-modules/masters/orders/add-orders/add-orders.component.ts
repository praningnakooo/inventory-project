import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Order } from "src/app/model/Order";

@Component({
  selector: "app-add-orders",
  templateUrl: "./add-orders.component.html",
  styleUrls: ["./add-orders.component.css"],
})
export class AddOrdersComponent implements OnInit {
  //variables start
  _orderDetails: Order;
  btnText = "ADD";
  response: any;

  _orderMasterForm = this.fb.group({
    orders_id: ["", Validators.required],
    customers_name: ["", Validators.required],
    address: ["", Validators.required],
  });
  //variables end
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this._orderDetails = new Order;
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this._orderMasterForm);
    if (this.btnText === "ADD") {
      //creating new single customer
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      };
      return this.http
        .post(
          "http://localhost:3000/orders",
          this._orderMasterForm.value,
          httpOptions
        )
        .subscribe((data) => {
          this.response = data;
          //this.getAllItems();
          alert("Order Successfully added.");
          this.resetFormClickHandler();
        });
    }
  }

  resetFormClickHandler() {
    this._orderMasterForm.reset();
  }
}
