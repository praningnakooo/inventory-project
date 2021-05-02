// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //ITEM MASTER MAPPING

  ITEMS_GET_ALL: "http://localhost:4200/items",
  ITEMS_GET_SINGLE: "http://localhost:4200/items/",
  ITEMS_UPDATE_SINGLE_ITEM: "http://localhost:4200/items",
  ITEMS_DELETE_SINGLE: "http://localhost:4200/items/",
  ITEMS_CREATE_SINGLE: "http://localhost:4200/item",
  ITEMS_SINGLE_ITEM_PAGINATION: "http://localhost:4200/items/pagination"
};

const URL = "http://localhost:4200";

export const CustomerAPI = {
  getAll: `${URL}/customers`,
  GET_SINGLE_CUSTOMER: `${URL}/customer`
};
export const ItemAPI = {
  getAll: `${URL}/items`,
  GET_SINGLE_ITEM: `${URL}/items`
};

export const Masters = {
  source: `${URL}/source`,
  customer: `${URL}/customers`,
  item: `${URL}/items`
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
