import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatSliderModule, MatGridListModule,} from '@angular/material' ;
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { EditCarComponent } from './edit-car/edit-car.component';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudInventoryComponent } from './crud-inventory/crud-inventory.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { FindDealComponent } from './find-deal/find-deal.component';
import { SalesmanPromoComponent } from './salesman-promo/salesman-promo.component';
import { DealershipInfoComponent } from './dealership-info/dealership-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FileSelectDirective } from 'ng2-file-upload';



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
    CustomerHomeComponent,
    EditCarComponent,
    FindDealComponent,
    SalesmanPromoComponent,
    DealershipInfoComponent,
    UserInfoComponent,
    SalesmanPromoComponent,
    FileSelectDirective
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
    HttpClientModule
  ],
  providers: [ LoginService, UserService, CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
