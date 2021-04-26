import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Products } from "src/app/model/Product";
import { ErrorHandlerService } from "../../../../shared/service/error-handler.service";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ViewItemService {
  private url = "http://localhost:3000/products";
  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Products[]> {
    return this.http
      .get<Products[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched products")),
        catchError(
          this.errorHandlerService.handleError<Products[]>("fetchAll", [])
        )
      );
  }
}
