import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from './../../model/Category';
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { ItemAPI, Masters } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private url = "http://localhost:3000/categories";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,

  ) {}

  fetchAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched categories")),
        catchError(
          this.errorHandlerService.handleError<Category[]>("fetchAll", [])
        )
      );
  }

  _itemActions(model, actionType) {
    return this.http.post<any>(`${Masters.item}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  getAllItem() {
    return this.http.get<Category[]>(ItemAPI.getAll);
  }

  _getSingleItem(itemId) {
    return this.http.get<Category[]>(
      `${ItemAPI.GET_SINGLE_ITEM}/${itemId}`
    );
  }
  // _getSources(actionType) {
  //   return this.http.get<any>(`${Masters.source}/${actionType}`);
  // }
  // _getAreaLocation() {
  //   return this.http.get<any>(`${Masters.areaLocation}`);
  // }
  // _getAllItems() {
  //   return this.http.get<any>(ItemMaster.GET_ALL_ITEMS);
  // }
}
