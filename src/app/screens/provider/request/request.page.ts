import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  ref: any;
  user: any;
  request: any;
  constructor(
    private _database: DatabaseService,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.ref = localStorage.getItem('userid');

    this.utils.startspinner();
    this._database
      .readService(this.ref, 'Booked')
      .snapshotChanges()
      .subscribe((res) => {
        this.request = res;
        console.log(res)
        this.utils.dismiss();
      });
  }

  Status(data: any, doc: any) {
    this._database.updateData('Services', { status: data }, doc);
  }
}
