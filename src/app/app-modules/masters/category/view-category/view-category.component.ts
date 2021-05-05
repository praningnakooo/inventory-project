import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { Category } from './../../../../model/Category';
import { CategoryService } from './../../../../shared/service/category.service';
import { User } from "src/app/model/User";
import { AuthService } from "src/app/shared/service/auth.service";

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
  _categoryMasterFormUpdate: any;

  closeResult: string;
  user_id: Pick<User, "user_id">;

  constructor(
    private categoryListService: CategoryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user_id = this.authService.user_id;
    this._dataSource$ = this.categoryListService._fetchAll();
  }

  openModal() {
  document.getElementById('modal-1').style.display = 'block';
  document.body.classList.add('jw-modal-open');
}
  closeModal() {
  document.getElementById('modal-1').style.display = 'none';
  document.body.classList.remove('jw-modal-open');
}

update(){}


  // delete(category_id: number): void {
  //   this._dataSource$ = this.categoryListService
  //     ._delete(category_id)
  //     .pipe(tap(() => (this._dataSource$ = this.categoryListService._fetchAll())));
  // }
}








