import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/Customer.model";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "src/app/shared/service/customer.service";
import { all } from "q";
import { Observable } from "rxjs";


@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  //variables start
  _customerDetails: Customer;
  _customerMasterForm: any

  //variables end
  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService
  ) {
    this._customerDetails = new Customer;
    this._customerMasterForm = this._formBuilder.group({
      customer_id: ["", Validators.required],
      customer_name: ["", Validators.required],
      address: ["", Validators.required]
    });
  }

  ngOnInit() {}

  _addCustomerClickHandler() {
    //adding address in main model
    console.log(JSON.stringify(this._customerDetails));
    this._customerService
      ._customerActions(this._customerDetails, "ADD")
      .subscribe(apiResponse => {
        console.log("response after adding a customer: ", apiResponse);
        alert(
          `Customer with ID: ${apiResponse.data[0].customers_id} & NAME:${apiResponse.data[0].customers_name} successfully added.`
        );
      });
    alert(" ");
  }
}
