import { environment } from "../../../environments/environment";
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

import { ItemmasterService } from "./itemmaster.service";

interface ApiResponse {
  item;
  response;
}
@Component({
  selector: "app-itemmaster",
  templateUrl: "./itemmaster.component.html",
  styleUrls: ["./itemmaster.component.css"]
})
export class ItemmasterComponent implements OnInit {
  displayedColumns = [
    "itItemCode",
    "itItemName",
    "itDescription",
    "itQuantity",
    "itUOM",
    "itPrice"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  _dataSource: any;
  msg = ["123"];
  list = [];

  selectCtrl: FormControl = new FormControl();

  GroupCode: any = ["1", "2", "3", "4"];
  SubGroupCode: any = ["1", "2", "3", "4"];
  TariffCode: any = ["555", "666", "777", "888"];

  today = new Date();
  dd = String(this.today.getDate()).padStart(2, "0");
  mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
  yyyy = this.today.getFullYear();
  //console.log(mm + "/" + dd + "/" + yyyy);

  public response: any;
  public singleItemDetails: any;
  itemMasterForm = this.fb.group({
    itItemCode: ["", Validators.required],
    itItemName: ["", Validators.required],
    itDescription: ["", Validators.required],
    itQuantity: ["", Validators.required],
    itGroupCode: ["", Validators.required],
    itPrice: ["", Validators.required],
    itSubGroupCode: ["", Validators.required],
    itCreatedBy: ["0000"],
    itTsCreated: [`${this.yyyy}-${this.mm}-${this.dd}`],
    itTsEdited: [`${this.yyyy}-${this.mm}-${this.dd}`],
    itTsEditedBy: ["0000"],
    itTechCode: [1],
    itUOM: [""]
  });

  private _gap = 10;
  gap = `${this._gap}px`;
  col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
  col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;

  inputType = "password";
  visible = false;
  btnText = "ADD";

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private service: ItemmasterService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.http
      .get<ApiResponse>("http://localhost:8084/items")
      .subscribe(apiResponse => {
        if (apiResponse.response.respCode == "0000") {
          this.list = apiResponse.item;
          console.log(this.list);

          console.log("apiResponse.data : ", JSON.stringify(apiResponse.item));
          this._dataSource = new MatTableDataSource<Element>(apiResponse.item);
          this._dataSource.paginator = this.paginator;
          console.log(this._dataSource);
        }
        // console.log(data);
      });
  }

  onSubmit() {
    console.log(this.btnText);
    console.log(this.itemMasterForm.value);
    if (this.btnText === "ADD") {
      alert("Adding item");
      //creating new single item
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      return this.http
        .post(
          "http://localhost:8084/item",
          this.itemMasterForm.value,
          httpOptions
        )
        .subscribe(data => {
          this.response = data;
          if (this.response.response.respCode === "0000") {
            //this.getAllItems();
            alert("Item Successfully added.");
            this._reloadTableData();
          }
        });
    } else if (this.btnText === "UPDATE") {
      alert("updating single item");
      //updating single item
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      return this.http
        .post(
          "http://localhost:8084/items",
          this.itemMasterForm.value,
          httpOptions
        )
        .subscribe(data => {
          this.response = data;
          if (this.response.response.respCode === "0000") {
            this.getAllItems();
          }
        });
    }
  }

  deleteSingleItem(item) {
    console.log(item);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    this.http
      .post(
        `${environment.ITEMS_DELETE_SINGLE}${item.itItemCode}`,
        item,
        httpOptions
      )
      .subscribe(data => {
        this.response = data;
        console.log(this.response);
        if (this.response.response.respCode === "0000") {
          this.getAllItems();
        }
      });
  }

  updateSingleItem(item) {
    this.btnText = "UPDATE";
    this.http
      .get(`${environment.ITEMS_GET_SINGLE}${item.itItemCode}`)
      .subscribe(data => {
        this.response = data;
        this.singleItemDetails = this.response.item[0];
        console.log(this.singleItemDetails);
        this.itemMasterForm.controls["itItemCode"].setValue(
          this.singleItemDetails.itItemCode
        );
        
        this.itemMasterForm.controls["itItemName"].setValue(
          this.singleItemDetails.itItemName
        );
        this.itemMasterForm.controls["itDescription"].setValue(
          this.singleItemDetails.itDescription
        );
        this.itemMasterForm.controls["itQuantity"].setValue(
          this.singleItemDetails.itQuantity
        );
        this.itemMasterForm.controls["itGroupCode"].setValue(
          this.singleItemDetails.itGroupCode.toString()
        );
        this.itemMasterForm.controls["itSubGroupCode"].setValue(
          this.singleItemDetails.itSubGroupCode.toString()
        );
        this.itemMasterForm.controls["itPrice"].setValue(
          this.singleItemDetails.itPrice
        );
        this.itemMasterForm.controls["itUOM"].setValue(
          this.singleItemDetails.itUOM
        );
        this.itemMasterForm.controls["itCreatedBy"].setValue(
          this.singleItemDetails.itCreatedBy
        );
      });
  }

  resetFormClickHandler() {
    this.btnText = "ADD";
    this.itemMasterForm.reset();
  }
  _reloadTableData() {
    this.http
      .get<ApiResponse>("http://localhost:8084/items")
      .subscribe(apiResponse => {
        console.log("apiResponse.data : ", JSON.stringify(apiResponse.item));
        this._dataSource = new MatTableDataSource<Element>(apiResponse.item);
        this._dataSource.paginator = this.paginator;
        console.log(this._dataSource);
      });
  }
}
