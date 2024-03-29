import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { AddReportComponent } from './add-report/add-report.component';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  settings = {
    columns: {

      category: {
        title: 'Category',
        type: 'string',
      },
      brgy: {
        title: 'Barangay',
        type: 'string',
      },
      subject: {
        title: 'Subject',
        type: 'string',
      },
      dateIncident: {
        title: 'Date of Incident',
        type: 'string',
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit" ></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

  };

  data = [
    {
      category: 'Mass Intoxication',
      brgy: 'Sucat',
      subject: 'Car',
      dateIncident: 'March, 2, 2021',
    },
    {
      category: 'Earhquake',
      brgy: 'Cupang',
      subject: 'People',
      dateIncident: 'March, 2, 2021',
    },
    {
      category: 'Fire Incident',
      brgy: 'Alabang',
      subject: 'Motor',
      dateIncident: 'March, 2, 2021',
    },
  ];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
  ) {
    this.source.load(this.data);
  }

  addReport() {
    this.dialogService.open(AddReportComponent, {
      dialogClass: 'add-report',
      closeOnBackdropClick: false,
    });
  }


}
