import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatSliderModule, MatGridListModule,} from '@angular/material' ;
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DealershipComponent } from './dealership/dealership.component';
import { CarsComponent } from './cars/cars.component';
import { FinanceComponent } from './finance/finance.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoggedFinanceComponent } from './logged-finance/logged-finance.component';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudInventoryComponent } from './crud-inventory/crud-inventory.component';
import { DealershipInfoComponent } from './dealership-info/dealership-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    DealershipComponent,
    CarsComponent,
    FinanceComponent,
    AboutComponent,
    FooterComponent,
    LoggedFinanceComponent,
    CrudInventoryComponent,
    DealershipInfoComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    NgbModule,
    MatSliderModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ LoginService, UserService, CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
