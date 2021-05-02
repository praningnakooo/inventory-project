import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/model/Order';
import { OrderService } from 'src/app/shared/service/orders.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

   //variables start
   _orderDetails: Order;

   _orderMasterForm = this.fb.group({
       orders_id: ["", Validators.required],
       customers_name: ["", Validators.required],
       address: ["", Validators.required]
     });
   //variables end
   constructor(private fb: FormBuilder, private _orderService: OrderService) {
     this._orderDetails = new Order();
   }

   ngOnInit() {}

   onSubmit() {
     //adding address in main model
     console.log(JSON.stringify(this._orderMasterForm.value));
     this._orderService
       ._orderActions(this._orderDetails, "ADD")
       .subscribe(apiResponse => {
         console.log("response after adding an order: ", apiResponse);
         alert(
           `Order with ID: ${apiResponse.data[0].order_id} & NAME:${apiResponse.data[0].customers_name} successfully added.`
         );
       });
     alert(" ");
   }

   resetFormClickHandler() {
     this._orderMasterForm.reset();
   }

}
