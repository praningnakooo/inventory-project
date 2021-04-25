import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ItemmasterComponent } from "src/app/app-modules/itemmaster/itemmaster.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router) {
    // console.log("this.router.url: ", this.router.url);
    // if (this.router.url === "/" || this.router.url === "/login") {
    //   //alert("MATCHED");
    //   this.isLoginPage = true;
    // } else {
    //   this.isLoginPage = false;
    //}
  }

  ngOnInit() {
  }
}
