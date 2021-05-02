import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/Customer.model";
import { FormBuilder, Form, FormGroup, Validators } from "@angular/forms";
import { CustomerService } from "src/app/shared/service/customer.service";
import { MatPaginator } from "@angular/material/paginator";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"]
})
export class AddCustomerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //variables start
  btnText = "ADD";
  _customerDetails: Customer;

  _customerMasterForm = this.fb.group({
      customer_id: ["", Validators.required],
      customer_name: ["", Validators.required],
      address: ["", Validators.required]
    });
  //variables end
  constructor(private fb: FormBuilder, private _customerService: CustomerService) {
    this._customerDetails = new Customer();
  }

  ngOnInit() {}

  onSubmit() {
    //adding address in main model
    console.log(JSON.stringify(this._customerMasterForm.value));
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

  resetFormClickHandler() {
    this.btnText = "ADD";
    this._customerMasterForm.reset();
  }
}
