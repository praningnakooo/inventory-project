import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "inventory-management";
  isLoginPage: boolean = false;


  constructor(private router: Router) {  }
}


