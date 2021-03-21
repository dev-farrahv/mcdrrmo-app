import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InventoryComponent } from './inventory/inventory.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  NbMenuModule,
  NbTimepickerModule,
  NB_TIME_PICKER_CONFIG,
  NbTabsetModule
} from '@nebular/theme';

import { ReportComponent } from './report/report.component';
import { AddReportComponent } from './report/add-report/add-report.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { AddUsersComponent } from './manageusers/add-users/add-users.component';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbUserModule,
    NbRadioModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule,
    NbTimepickerModule,
    NbTabsetModule
  ],
  declarations: [
    PagesComponent,
    InventoryComponent,
    ReportComponent,
    AddReportComponent,
    AddInventoryComponent,
    ManageusersComponent,
    AddUsersComponent,
  ],
  providers: [
    {
      provide: NB_TIME_PICKER_CONFIG,
      useValue:{}
    }
  ]
})

export class PagesModule {
}
