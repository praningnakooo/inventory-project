import { AuthService } from './../../../../shared/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  //variables start
  user_id: Pick<User, "user_id">;

  _categoryMasterForm = this.fb.group({
    category_name: ["", Validators.required]
  });

  response: any;

  //variables end
  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user_id = this.authService.user_id
  }

  onSubmit() {
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

  resetFormClickHandler() {
    this._categoryMasterForm.reset();
  }
}
