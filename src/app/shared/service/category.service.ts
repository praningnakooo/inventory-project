import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from './../../model/Category';
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { CategoryAPI, ItemAPI, Masters, OrderAPI } from "src/environments/environment";

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

  _fetchAll(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched categories")),
        catchError(
          this.errorHandlerService.handleError<Category[]>("fetchAll", [])
        )
      );
  }

  _categoryActions(model, actionType) {
    return this.http.post<any>(`${Masters.category}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  _getAllCategory() {
    return this.http.get<Category[]>(CategoryAPI.getAll);
  }

  _getSingleCategory(category_id) {
    return this.http.get<Category[]>(
      `${CategoryAPI.GET_SINGLE_CATEGORY}/${category_id}`
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
