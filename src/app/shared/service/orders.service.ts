import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from './../../model/Order';
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { ItemAPI, Masters, OrderAPI } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private url = "http://localhost:3000/orders";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,

  ) {}

  _fetchAll(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched orders")),
        catchError(
          this.errorHandlerService.handleError<Order[]>("fetchAll", [])
        )
      );
  }

  _delete(orders_id: number): Observable<any> {
    const url = `http://localhost:3000/orders/${orders_id}`;

    return this.http
      .delete<Order>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));
  }
}
