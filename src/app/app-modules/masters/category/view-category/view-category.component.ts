import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { Category } from './../../../../model/Category';
import { CategoryService } from './../../../../shared/service/category.service';
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent, ModalModule} from "ngb-modal";

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

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  _dataSource$!: Observable<Category[]>;
  closeResult: string;


  constructor(
    private categoryListService: CategoryService,
    private modalService: ModalModule) { }

  ngOnInit(): void {
    this._dataSource$ = this.categoryListService._fetchAll();
  }


  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }



  // delete(category_id: number): void {
  //   this._dataSource$ = this.categoryListService
  //     ._delete(category_id)
  //     .pipe(tap(() => (this._dataSource$ = this.categoryListService._fetchAll())));
  // }




}


