import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { Category } from './../../../../model/Category';
import { CategoryService } from './../../../../shared/service/category.service';
import { User } from "src/app/model/User";
import { AuthService } from "src/app/shared/service/auth.service";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  displayedColumns = [
    "itCategoryCode",
    "itCategoryName",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  _dataSource$!: Observable<Category[]>;

  //change any to something realistiic
  _categoryMasterFormUpdate: {
    category_id: "",
    category_name: ""
  };

  closeResult: string;
  user_id: Pick<User, "user_id">;

  constructor(
    public categoryListService: CategoryService, private authService: AuthService) {

     }

  ngOnInit(): void {
    this.user_id = this.authService.user_id;
    this._dataSource$ = this.categoryListService._fetchAll();
  }


  delete(category_id: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this._dataSource$ = this.categoryListService
      ._delete(category_id)
      .pipe(tap(() => (this._dataSource$ = this.categoryListService._fetchAll())));
  }

  edit(category){
    this._categoryMasterFormUpdate = category;
    console.log(category);
  }

  updateCategory(){
    this.categoryListService.updateCategory(this._categoryMasterFormUpdate).subscribe(
      (resp) =>{
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  resetFormClickHandler() {}
}








