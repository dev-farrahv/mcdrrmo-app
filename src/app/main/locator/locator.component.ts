import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { PinLocationComponent } from './pin-location/pin-location.component';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'ngx-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.scss'],
})
export class LocatorComponent implements OnInit {
  title = 'google-maps';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyDJuGI2GbrLsV3WTU5FxXAMW5VLYGuHdh0'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map"),{
        center: {lat: 14.314604, lng: 121.113747 },
        zoom: 15
      })
    })
  }
  
  constructor(
    private dialogService: NbDialogService,
  ) {
    
  }

  addReport() {
    this.dialogService.open(PinLocationComponent, {
      dialogClass: 'add-report',
      closeOnBackdropClick: false,
    });
  }


}
