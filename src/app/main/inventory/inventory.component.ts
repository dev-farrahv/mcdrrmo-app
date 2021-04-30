

import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbComponentStatus, NbDialogService } from '@nebular/theme';
import { SmartTableData } from '../../@core/data/smart-table';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
@Component({
  selector: 'ngx-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent  {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
      id: {
        title: 'Type',
        type: 'String',
      },
      firstName: {
        title: 'Baranggay',
        type: 'string',
      },
      lastName: {
        title: 'Date',
        type: 'Status',
      },
      username: {
        title: 'Assigned to',
        type: 'string',
      },
      email: {
        title: 'Qty',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  addReport() {
    this.dialogService.open(AddInventoryComponent, {
      dialogClass: 'add-inventory',
      closeOnBackdropClick: false,
    });
  }
}
