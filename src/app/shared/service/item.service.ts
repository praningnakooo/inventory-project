import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Products } from "src/app/model/Product";
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { ItemAPI, Masters } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  // Global Variables Start
  private url = "http://localhost:3000/products";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  // Global Variables End

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,

  ) {}

  _fetchAll(): Observable<Products[]> {
    return this.http
      .get<Products[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched products")),
        catchError(
          this.errorHandlerService.handleError<Products[]>("fetchAll", [])
        )
      );
  }

  _itemActions(model, actionType) {
    return this.http.post<any>(`${Masters.item}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  _getAllItem() {
    return this.http.get<Products[]>(ItemAPI.getAll);
  }

  _getSingleItem(item_id) {
    return this.http.get<Products[]>(
      `${ItemAPI.GET_SINGLE_ITEM}/${item_id}`
    );
  }
}
