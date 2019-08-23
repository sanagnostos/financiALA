import { NgModule, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarsComponent } from './cars/cars.component';
import { FinanceComponent } from './finance/finance.component';
import { DealershipComponent } from './dealership/dealership.component';
import { AboutComponent } from './about/about.component';
import { LoggedFinanceComponent } from './logged-finance/logged-finance.component';
import { CrudInventoryComponent } from './crud-inventory/crud-inventory.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { EditCarComponent } from './edit-car/edit-car.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'user',
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
},
{
  path: 'loggedF',
  component: LoggedFinanceComponent
  
},
{
  path:"crudi",
  component: CrudInventoryComponent
},
{
  path: 'edit/:id',
  component: EditCarComponent
},
{
  path:"home",
  component: CustomerHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
