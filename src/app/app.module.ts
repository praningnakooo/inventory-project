import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CommonButtonComponent } from "./shared/controls/common-button/common-button.component";
import { CommonInputComponent } from "./shared/controls/common-input/common-input.component";
import { CommonSelectComponent } from "./shared/controls/common-select/common-select.component";
import { CommonMultiSelectComponent } from "./shared/controls/common-multi-select/common-multi-select.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from './shared/service/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CommonButtonComponent,
    CommonInputComponent,
    CommonSelectComponent,
    CommonMultiSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
