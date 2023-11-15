import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  ref:any;
  user:any;
  service:any
  constructor(private _database:DatabaseService,private utils:UtilsService,private _Auth :AuthService) { }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
    this.utils.startspinner()
    this._database.readWithId("Users",this.ref).valueChanges().subscribe(result=>{
      this.user=result
      console.log(this.user)
      this.utils.dismiss()
    })

    this._database.readSub("Users",this.ref,"Services").subscribe(res=>{
      this.service = res;
      console.log(res)
    })
   
  }
  
  logout(){
    this._Auth.logout()
  }

}
