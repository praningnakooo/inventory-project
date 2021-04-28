import { Item } from "../../model/Item.model";
import { CustomerAPI, Masters, ItemMaster, ItemAPI } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  /* global variables start */
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  /* global variables end */
  constructor(private http: HttpClient) {}

  itemOperation(action) {}

  _itemActions(model, actionType) {
    return this.http.post<any>(`${Masters.item}/${actionType}`, model, {
      headers: this.httpHeaders
    });
  }

  getAllItem() {
    return this.http.get<Item>(ItemAPI.getAll);
  }

  _getSingleItem(itemId) {
    return this.http.get<Item>(
      `${ItemAPI.GET_SINGLE_ITEM}/${itemId}`
    );
  }
  // _getSources(actionType) {
  //   return this.http.get<any>(`${Masters.source}/${actionType}`);
  // }
  // _getAreaLocation() {
  //   return this.http.get<any>(`${Masters.areaLocation}`);
  // }
  _getAllItems() {
    return this.http.get<any>(ItemMaster.GET_ALL_ITEMS);
  }
}
