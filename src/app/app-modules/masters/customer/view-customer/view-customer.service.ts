import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { CustomerList } from "src/app/model/Customer";

@Injectable({
  providedIn: "root",
})
export class ViewCustomerService {
  private url = "http://localhost:3000/customers";
  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

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
