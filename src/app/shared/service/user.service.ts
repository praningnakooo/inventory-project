import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './../../model/User';
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";
import { ItemAPI, Masters } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private url = "http://localhost:3000/users";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
  ) {}

  fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("fetched Users")),
        catchError(
          this.errorHandlerService.handleError<User[]>("fetchAll", [])
        )
      );
  }

  _itemActions(model, actionType) {
    return this.http.post<any>(`${Masters.item}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  getAllItem() {
    return this.http.get<User[]>(ItemAPI.getAll);
  }

  _getSingleItem(itemId) {
    return this.http.get<User[]>(
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
