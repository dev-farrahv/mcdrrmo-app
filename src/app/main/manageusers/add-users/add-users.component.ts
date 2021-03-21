import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUsersComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<AddUsersComponent>
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/layout/tabs/tab1',
    },
    {
      title: 'Route tab #2',
      route: '/pages/layout/tabs/tab2',
    },
  ];
  
}
