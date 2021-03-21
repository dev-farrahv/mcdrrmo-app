import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<AddInventoryComponent>,
  ) { }

  ngOnInit(): void {
  }
  
  dismiss() {
    this.ref.close();
  }

}
