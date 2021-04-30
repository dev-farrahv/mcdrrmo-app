import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportComponent } from './report/report.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { LocatorComponent } from './locator/locator.component';
import {
  NbLoginComponent
} from '@nebular/auth';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'report',
      component: ReportComponent,
    },
    {
      path: 'manageusers',
      component: ManageusersComponent,
    },
    {
      path: 'inventory',
      component: InventoryComponent,
    },
    {
      path: 'locator',
      component: LocatorComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '/auth/login',
      component: NbLoginComponent,
    },
    {
      path: '**',
      component: DashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
