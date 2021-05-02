import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  //variables start
  _categoryDetails: Category;

  _categoryMasterForm = this.fb.group({
      category_id: ["", Validators.required],
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
      .subscribe(apiResponse => {
        console.log("response after adding an order: ", apiResponse);
        alert(
          `Order with ID: ${apiResponse.data[0].order_id} & NAME:${apiResponse.data[0].customers_name} successfully added.`
        );
      });
    alert(" ");
  }

  resetFormClickHandler() {
    this._categoryMasterForm.reset();
  }
}
