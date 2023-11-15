import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  ref: any;
  user: any;
  request: any;
  status:string='Accepted'
  constructor(
    private _database: DatabaseService,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.ref = localStorage.getItem('userid');
    console.log(this.status)

  this.ReadClient()
  
  }

  Status(data: any, doc: any) {
    this._database.updateData('Services', { status: data ,invoiceed:true,paid:false}, doc);
  }

  ReadClient()
  {
    this._database
    .readService(this.ref,this.status)
    .snapshotChanges()
    .subscribe((res) => {
      this.request = res;
      console.log(res)
    });
  }
}

