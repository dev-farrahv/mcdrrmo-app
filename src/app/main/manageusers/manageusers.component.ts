import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { AddUsersComponent } from './add-users/add-users.component';
import { User, UserService } from '../../shared/services/user.service';

@Component({
  selector: 'ngx-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent {
  user: User = {
    id: '',
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

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      brgy: {
        title: 'Baranggay',
        type: 'string',
      },
      position: {
        title: 'Position',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
    actions: {
      add: false,
      edit: true,
      delete: true,
      position: 'right',
    },

  };

  data = [
    {
      name: 'Juan Dela Cruz',
      brgy: 'Main',
      position: 'CEO',
      status: 'ACTIVE',
    },
    {
      name: 'Carla De Jesus',
      brgy: 'Cupang',
      position: 'Help Desk',
      status: 'INACTIVE',
    },
    {
      name: 'Manuel Cruz',
      brgy: 'Poblacion',
      position: 'Driver',
      status: 'ACTIVE',
    },
  ];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private userService: UserService
  ) {
    this.source.load(this.data);
  }

  AddUser() {
    this.dialogService.open(AddUsersComponent, {
      dialogClass: 'add-users',
      closeOnBackdropClick: false,
    });
  }

  ngOnInit() {
    this.userService.getuser().subscribe((res) => {
      console.log(res);
    });
  }



}
