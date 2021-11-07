import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InventoryComponent } from './inventory/inventory.component';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  NbMenuModule,
  NbTimepickerModule,
  NB_TIME_PICKER_CONFIG,
  NbTabsetModule,



  NbProgressBarModule,
  NbListModule,
} from '@nebular/theme';

import { ReportComponent } from './report/report.component';
import { AddReportComponent } from './report/add-report/add-report.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { LocatorComponent } from './locator/locator.component';
import { PinLocationComponent } from './locator/pin-location/pin-location.component';
import { AddUsersComponent } from './manageusers/add-users/add-users.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProfitCardComponent } from './e-commerce/profit-card/profit-card.component';
import { EarningCardComponent } from './e-commerce/earning-card/earning-card.component';
import { EarningCardBackComponent } from './e-commerce/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './e-commerce/earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './e-commerce/earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './e-commerce/earning-card/front-side/earning-live-update-chart.component';
import { TrafficRevealCardComponent } from './e-commerce/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './e-commerce/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './e-commerce/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './e-commerce/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './e-commerce/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './e-commerce/traffic-reveal-card/back-side/traffic-bar-chart.component';
import { ECommerceChartsPanelComponent } from './e-commerce/charts-panel/charts-panel.component';
import { CountryOrdersComponent } from './e-commerce/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './e-commerce/country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './e-commerce/country-orders/map/country-orders-map.service';
import { CountryOrdersChartComponent } from './e-commerce/country-orders/chart/country-orders-chart.component';
import { ECommerceProgressSectionComponent } from './e-commerce/progress-section/progress-section.component';
import { ECommerceLegendChartComponent } from './e-commerce/legend-chart/legend-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './e-commerce/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './e-commerce/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './e-commerce/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceUserActivityComponent } from './e-commerce/user-activity/user-activity.component';
import { StatsCardBackComponent } from './e-commerce/profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './e-commerce/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './e-commerce/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './e-commerce/profit-card/front-side/stats-card-front.component';
import { ChartPanelHeaderComponent } from './e-commerce/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './e-commerce/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { SlideOutComponent } from './e-commerce/slide-out/slide-out.component';
import { ProfitChartComponent } from './e-commerce/charts-panel/charts/profit-chart.component';
import { OrdersChartComponent } from './e-commerce/charts-panel/charts/orders-chart.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

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
    NbTabsetModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    GooglePlaceModule,
    ngFormsModule
  ],
  declarations: [
    PagesComponent,
    InventoryComponent,
    ReportComponent,
    AddReportComponent,
    AddInventoryComponent,
    ManageusersComponent,
    LocatorComponent,
    PinLocationComponent,
    AddUsersComponent,
    ECommerceComponent,
    ProfitCardComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    ECommerceChartsPanelComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceProgressSectionComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceUserActivityComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    StatsCardBackComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent,
    ProfitChartComponent,
    OrdersChartComponent
  ],
  providers: [
    CountryOrdersMapService,
    {
      provide: NB_TIME_PICKER_CONFIG,
      useValue:{}
    }
  ]
})

export class PagesModule {
}
