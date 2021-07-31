import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-pin-location',
  templateUrl: './pin-location.component.html',
  styleUrls: ['./pin-location.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PinLocationComponent implements OnInit {
  formattedAddress = '';
  options = {
    componentRestrictions : {
      country: ['AU']
    }
  }
  constructor(
    protected ref: NbDialogRef<PinLocationComponent>,
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  public handleAddressChange(address: any) {
      this.formattedAddress = address.formatted_address;
  }


}
