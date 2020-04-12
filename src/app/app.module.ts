import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RoutingModule} from '../app/routing/routing.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowReposComponent } from './show-repos/show-repos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CodersComponent } from './coders/coders.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    ShowReposComponent,
    NavbarComponent,
    SearchFormComponent,
    CodersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
