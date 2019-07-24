import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { FinanceComponent } from './finance/finance.component';
import { DealershipComponent } from './dealership/dealership.component';


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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
