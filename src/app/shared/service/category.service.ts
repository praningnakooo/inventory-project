import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "./../../model/Category";
import { ErrorHandlerService } from "./error-handler.service";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private url = "http://localhost:3000/categories";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
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
}
