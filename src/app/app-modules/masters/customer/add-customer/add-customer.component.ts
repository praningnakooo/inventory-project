import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/Customer.model";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {

  //variables start
  _customerDetails: Customer;
  btnText = "ADD";
  response: any;

  _customerMasterForm = this.fb.group({
      customers_name: ["", Validators.required],
      address: ["", Validators.required]
    });

  //variables end
  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {}

  onSubmit() {
    if (this.btnText === "ADD") {
      //creating new single customer
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      return this.http
        .post(
          "http://localhost:3000/customers",
          this._customerMasterForm.value,
          httpOptions
        )
        .subscribe(data => {
          this.response = data;
            //this.getAllItems();
            alert("Customer Successfully added.");
            this.resetFormClickHandler();
        });
    }
  }

  resetFormClickHandler() {
    this._customerMasterForm.reset();
  }
}
