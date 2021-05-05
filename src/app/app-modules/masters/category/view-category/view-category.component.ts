import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { Category } from './../../../../model/Category';
import { CategoryService } from './../../../../shared/service/category.service';
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent, ModalModule} from "ngb-modal";
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
  closeResult: string;
  user_id: Pick<User, "user_id">;

  constructor(
    private categoryListService: CategoryService,
    private modalService: ModalModule, private authService: AuthService) { }

  ngOnInit(): void {
    this.user_id = this.authService.user_id;
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


