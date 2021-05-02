import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
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
}

