import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";

//angular material table
import { MatPaginator } from "@angular/material/paginator";
import { User } from './../../../../model/User';
import { UserService } from './../../../../shared/service/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  displayedColumns = [
    "itUserCode",
    "itUserName",
    "itUserEmail",
    "itUserPassword",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  _dataSource$!: Observable<User[]>;


  constructor(
    private userListService: UserService) { }

  ngOnInit(): void {
    this._dataSource$ = this.userListService.fetchAll();
  }
}