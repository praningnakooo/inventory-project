import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

import { HttpClient } from "@angular/common/http";
import { CustomerAddress } from "../../../../model/CustomerAddress.model";
import { Customer } from "src/app/model/Customer.model";
import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../../../shared/service/item.service";

@Component({
  selector: "app-modify-customer",
  templateUrl: "./modify-item.component.html",
  styleUrls: ["./modify-item.component.css"]
})
export class ModifyItemComponent implements OnInit {
  /* GLOBAL VARIABLES START */
  // displayedColumns: string[] = ["csCustSupplrCode", "csName", "csCustOf"];
  _dataSource: any;
  _customerData: Customer[];
  _customerDetails: Customer;
  _billingAddress: CustomerAddress;
  _shippingAddress: CustomerAddress;
  _customerMasterForm: any;
  _addressArray: CustomerAddress[] = [];
  _allStates: any;
  _billCities: any;
  _shipCities: any;
  _allCustomers: Customer[];
  _selectedCustomerId: any = "0";
  /* GLOBAL VARIABLES END */
  constructor(
    private http: HttpClient,
    private _customerService: ItemService,
    private _formBuilder: FormBuilder
  ) {
    this._customerDetails = new Customer();
    this._billingAddress = new CustomerAddress();
    this._billingAddress.csadAddrCode = 1;
    this._shippingAddress = new CustomerAddress();
    this._shippingAddress.csadAddrCode = 2;
    this._customerMasterForm = this._formBuilder.group({
      csName: ["", Validators.required],
      csPanNo: ["", Validators.required],
      csRemark: ["", Validators.required],
    });
    this._customerService._getSingleItem(68).subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._customerDetails = response.data[0];
      console.log("this._customerDetails:: ", this._customerDetails);
    });
    this._customerService.getAllItem().subscribe(apiResponse => {
      let response: any;
      response = apiResponse;
      this._allCustomers = response.data;
      console.log("this._customerData:: ", this._allCustomers);
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {}
  _searchCustomerClickHandler() {
    if (this._selectedCustomerId === "0") {
      alert("Please select customer to proceed.");
      return false;
    } else {
      this._customerService
        ._getSingleItem(this._selectedCustomerId)
        .subscribe(apiResponse => {
          let response: any;
          response = apiResponse;
          this._customerDetails = response.data[0];
          console.log("this._customerDetails:: ", this._customerDetails);
        });
    }
  }
  _modifyCustomerClickHandler() {
    this._customerMasterForm.enable();
  }


  _custChangeClickHandler(selectedCustomer) {
    console.log("selectedCustomer :: ", selectedCustomer);
    this._selectedCustomerId = selectedCustomer;
  }
  _deleteCustomerClickHandler() {}
}
