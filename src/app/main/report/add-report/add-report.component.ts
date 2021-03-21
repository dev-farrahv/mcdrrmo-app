import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddReportComponent implements OnInit {
  imageUrl: any[] = [];
  filesImage: File[] = [];

  constructor(
    protected ref: NbDialogRef<AddReportComponent>,
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  handleClick() {
    document.getElementById('upload-file').click();
  }

  addAttachment(fileInput: any) {
    const fileReaded = fileInput.target.files[0];
    this.setImages(fileReaded)
    console.log(fileInput.target.files[0])
  }

  setImages(file): void {
    if (file.length === 0) {
      return;
    }
    const mimeType = file.type;
    let fileType = '';
    if (mimeType.match(/image\/*/)) {
      fileType = 'image';
    } else if (mimeType.match(/pdf\/*/)) {
      fileType =
        'assets/icons/document/pdf.png';
    } else if (mimeType.match(/word\/*/)) {
      fileType =
        'assets/icons/document/docs.png';
    } else if (mimeType.match(/excel\/*/)) {
      fileType =
        'assets/icons/document/excel.png';
    } else {
      return null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (_event) => {
      this.filesImage = file.addedFiles;
      this.imageUrl.push({
        file: file,
        type: fileType,
        name: file.name,
        mime: file.type,
      });
      this.imageUrl.forEach((item, index) => (item.index = index));
      console.log(this.imageUrl, 'images')
    };

  }

}
