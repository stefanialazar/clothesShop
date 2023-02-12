import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './products/products.module';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BodyComponent,
    CartComponent,
    UserPanelComponent,
    WelcomeComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    ProductModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
