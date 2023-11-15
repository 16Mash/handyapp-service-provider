import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  ref: any;
  user: any;
  request: any;
  constructor(
    private _database: DatabaseService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.ref = localStorage.getItem('userid');
    this._database
    .readService(this.ref,"Completed")
    .snapshotChanges()
    .subscribe((res) => {
      this.request = res;
      console.log(res)
    });
  }

}
