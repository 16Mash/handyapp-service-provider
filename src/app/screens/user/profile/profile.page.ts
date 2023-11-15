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
  constructor(private _database:DatabaseService,private utils:UtilsService,private _auth :AuthService) { }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
    this.utils.startspinner()
    this._database.readWithId("Users",this.ref).valueChanges().subscribe(result=>{
      this.user=result
      console.log(this.user)
      this.utils.dismiss()
    })
   
  } 
  logout(){
    this._auth.logout()
  }

}