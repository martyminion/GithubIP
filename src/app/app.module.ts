import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RoutingModule} from '../app/routing/routing.module';



import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { ShowReposComponent } from './show-repos/show-repos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CodersComponent } from './coders/coders.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { DayscreatedPipe } from './dayscreated.pipe';
import { UserrepoComponent } from './userrepo/userrepo.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUserComponent,
    ShowReposComponent,
    NavbarComponent,
    SearchFormComponent,
    CodersComponent,
    HoverHighlightDirective,
    DayscreatedPipe,
    UserrepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
