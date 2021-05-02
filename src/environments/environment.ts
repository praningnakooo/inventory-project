
export const environment = {
  production: false,
  //ITEM MASTER MAPPING

  ITEMS_GET_ALL: "http://localhost:4200/items",
  ITEMS_GET_SINGLE: "http://localhost:4200/items/",
  ITEMS_UPDATE_SINGLE_ITEM: "http://localhost:4200/items",
  ITEMS_DELETE_SINGLE: "http://localhost:4200/items/",
  ITEMS_CREATE_SINGLE: "http://localhost:4200/items",
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
export const CategoryAPI = {
  getAll: `${URL}/categories`,
  GET_SINGLE_CATEGORY: `${URL}/categories`
};
export const OrderAPI = {
  getAll: `${URL}/orders`,
  GET_SINGLE_ORDER: `${URL}/orders`
};

export const Masters = {
  source: `${URL}/source`,
  customer: `${URL}/customers`,
  item: `${URL}/items`,
  order: `${URL}/orders`,
  category: `${URL}/categories`
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
