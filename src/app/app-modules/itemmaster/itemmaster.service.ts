import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Products } from "src/app/model/Product";
import { ErrorHandlerService } from './error-handler.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
providedIn: "root"
})
export class ItemmasterService {

  private url = "http://localhost:3000/products"
constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {

}

// getAllItems() {
//   return this.http.get("http://localhost:8084/items");
// }
// getSingleItem() {}
// deleteSingleItem(item) {
//   return this.http.delete(environment.ITEMS_DELETE_SINGLE, item);
// }
// updateItem() {}
// getPaginationItem() {}


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
