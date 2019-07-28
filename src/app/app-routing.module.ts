import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { FinanceComponent } from './finance/finance.component';
import { DealershipComponent } from './dealership/dealership.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'cars',
  component: CarsComponent
},
{
  path: 'finance',
  component: FinanceComponent
},
{
  path: 'dealership',
  component: DealershipComponent
},
{
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
