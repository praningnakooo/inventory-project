import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { Category } from './../../../../model/Category';
import { CategoryService } from './../../../../shared/service/category.service';

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


  constructor(
    private categoryListService: CategoryService) { }

  ngOnInit(): void {
    this._dataSource$ = this.categoryListService._fetchAll();
  }



  // delete(category_id: number): void {
  //   this._dataSource$ = this.categoryListService
  //     ._delete(category_id)
  //     .pipe(tap(() => (this._dataSource$ = this.categoryListService._fetchAll())));
  // }
}

