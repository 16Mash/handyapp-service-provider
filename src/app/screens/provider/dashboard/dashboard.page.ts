import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(private _database:DatabaseService,private utils:UtilsService,private _auth :AuthService) { }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
    this.utils.startspinner()
    this._database.readWithId("Users",this.ref).valueChanges().subscribe(result=>{
      this.user=result
      console.log(this.user)
      if (this.user.type != 'provider') {
        this._auth.logout();
      }
      this.utils.dismiss()
    })

  }

}
