import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesGridComponent } from './series-grid/series-grid.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BodyComponent,
    SeriesGridComponent,
    ProductsComponent,
    CartComponent,
    UserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
