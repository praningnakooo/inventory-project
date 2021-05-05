import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  //variables start

  _categoryMasterForm = this.fb.group({
    category_name: ["", Validators.required]
  });

  btnText = "ADD"
  response: any;

  //variables end
  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {}

  onSubmit() {
    if (this.btnText === "ADD") {
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
            alert("Category Successfully added.");
            this.resetFormClickHandler();
        });
    }
  }

  resetFormClickHandler() {
    this._categoryMasterForm.reset();
  }
}
