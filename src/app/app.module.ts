import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MatInputModule, MatCardModule, MatButtonModule, MatSliderModule, } from '@angular/material'
=======
import { MatInputModule, MatCardModule, MatButtonModule, MatGridListModule} from '@angular/material'
>>>>>>> 6615abba7a1f0ae0fb4242ada228b8efa9570c33
import { MatSelectModule } from '@angular/material/select'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

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
    FooterComponent
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
<<<<<<< HEAD
    MatSliderModule,
=======
    MatGridListModule
>>>>>>> 6615abba7a1f0ae0fb4242ada228b8efa9570c33
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
