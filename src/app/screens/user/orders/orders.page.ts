import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  ref:any;
  user:any;
  request:any;
  constructor(private _database:DatabaseService,private utils:UtilsService) { }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
    this.utils.startspinner()
    this._database.readbase("Services",'user','==',this.ref).snapshotChanges().subscribe(res=>{
      console.log("provider",res)
      this.request=res;
      this.utils.dismiss()
  })
   
  }
}
