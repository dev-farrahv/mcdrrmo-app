import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { User, UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'ngx-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUsersComponent implements OnInit {
  user: User = {
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Address: '',
    BirthDate: '',
    MobileNumber: '',
    EmailAddress: '',
    DateHired: '',
    Station: 0,
    Position: '',
    Role: '',
    MobileOnly: false,
    WebAdmin: false,
    LocatorAccess: false,
  };
  
  constructor(
    private userService: UserService,
    protected ref: NbDialogRef<AddUsersComponent>
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  async submitUser() {
    this.userService.addUser(this.user).then(() => {
      this.user = {
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Address: '',
        BirthDate: '',
        MobileNumber: '',
        EmailAddress: '',
        DateHired: '',
        Station: 0,
        Position: '',
        Role: '',
        MobileOnly: false,
        WebAdmin: false,
        LocatorAccess: false
      };
    });
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
