import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  ref:any;
  user:any;
  constructor(private _database:DatabaseService,private utils:UtilsService) { }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
    this.utils.startspinner()
    this._database.readWithId("Users",this.ref).valueChanges().subscribe(result=>{
      this.user=result
      console.log(this.user)
      this.utils.dismiss()
    })
   
  }

}
