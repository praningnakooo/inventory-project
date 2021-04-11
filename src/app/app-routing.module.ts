import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./app-modules/auth/login/login.component";
import { AuthGuard } from "./app-modules/auth/auth.gaurd";

const routes: Routes = [
  {
    path: "masters",
    loadChildren: "./app-modules/masters/masters.module#MastersModule"
  },
  {
    path: "",
    loadChildren: "./app-modules/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
