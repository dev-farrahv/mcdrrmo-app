import { NgModule } from '@angular/core';
import { NbMenuModule, NbSelectModule } from '@nebular/theme';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportComponent } from './report/report.component';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbSelectModule,
  ],
  declarations: [
    PagesComponent,
    InventoryComponent,
    ReportComponent
  ],
})

export class PagesModule {
}
