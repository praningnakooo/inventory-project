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
  //variables end
  constructor(private fb: FormBuilder, private _categoryService: CategoryService) {
    this._categoryDetails = new Category();
  }

  ngOnInit() {}

  onSubmit() {
    //adding address in main model
    console.log(JSON.stringify(this._categoryMasterForm.value));
    this._categoryService
      ._categoryActions(this._categoryDetails, "ADD")
      .subscribe(CategoryAPI => {
        console.log("response after adding a category: ", CategoryAPI);
        alert(
          `NAME:${CategoryAPI} successfully added.`
        );
      });
    alert(" ");
  }

  resetFormClickHandler() {
    this._categoryMasterForm.reset();
  }
}
