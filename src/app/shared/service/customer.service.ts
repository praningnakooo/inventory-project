import { Customer } from "./../../model/Customer.model";
import {
  CustomerAPI,
  Masters
} from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "./error-handler.service";
import { CustomerList } from "src/app/model/Customer";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  /* global variables start */
  private url = "http://localhost:3000/customers";
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  /* global variables end */
  constructor(private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) {}

  customerOperation(action) {}
  _customerActions(model, actionType) {
    return this.http.post<any>(`${Masters.customer}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  getAllCustomer() {
    return this.http.get<Customer>(CustomerAPI.getAll);
  }

  _getSingleCustomer(customerId) {
    return this.http.get<Customer>(
      `${CustomerAPI.GET_SINGLE_CUSTOMER}/${customerId}`
    );
  }
  _getSources(actionType) {
    return this.http.get<any>(`${Masters.source}/${actionType}`);
  }
  _getAreaLocation() {
    return this.http.get<any>(`${Masters.areaLocation}`);
  }

  fetchAll(): Observable<CustomerList[]> {
    return this.http
      .get<CustomerList[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched customers")),
        catchError(
          this.errorHandlerService.handleError<CustomerList[]>("fetchAll", [])
        )
      );
  }
}
