import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/shared/service/category.service';
import { CategoryAPI } from 'src/environments/environment';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  //variables start
  _categoryDetails: Category;

  _categoryMasterForm = this.fb.group({
    category_name: ["", Validators.required]
  });

  btnText = "ADD"
  response: any;

  //variables end
  constructor(private fb: FormBuilder, private _categoryService: CategoryService, private http: HttpClient) {
    this._categoryDetails = new Category;

  }

  ngOnInit() {}

  onSubmit() {
    console.log(this._categoryMasterForm.value);
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
          "http://localhost:3000/categories",
          this._categoryMasterForm.value,
          httpOptions
        )
        .subscribe(data => {
          this.response = data;
          if (this.response.response.respCode === "0000") {
            //this.getAllItems();
            alert("Item Successfully added.");
            // this._reloadTableData();
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
          "http://localhost:3000/categories",
          this._categoryMasterForm.value,
          httpOptions);
    }
  }

  resetFormClickHandler() {
    this._categoryMasterForm.reset();
  }
}
