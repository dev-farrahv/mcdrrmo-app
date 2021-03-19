import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddReportComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<AddReportComponent>
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

}
