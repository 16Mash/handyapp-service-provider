import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  providers:any;
  constructor(
    private _utils: UtilsService,
    private database: DatabaseService,
    private _auth: AuthService,
    private _Router:Router
  ) {}
  ngOnInit() {
    this.user = this._utils.getArray('serviceUser');
    if (this.user.type != 'User') {
      this._auth.logout();
    }

    this.database.readbase("Users",'type','==','provider').snapshotChanges().subscribe(res=>{
        console.log("provider",res)
        this.providers=res
    })
  }

  listCat(cat:any){
    this._Router.navigate(['/user/category-list/'+cat])
  }
}
