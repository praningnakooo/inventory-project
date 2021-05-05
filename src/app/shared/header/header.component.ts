import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl("/masters/item-master");
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["login"])
  }
  
}
