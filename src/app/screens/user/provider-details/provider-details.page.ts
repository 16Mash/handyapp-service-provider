import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.page.html',
  styleUrls: ['./provider-details.page.scss'],
})
export class ProviderDetailsPage implements OnInit {
  provider:any;
  ref:any
  service:any
  constructor(    private _utils: UtilsService,
    private Database: DatabaseService,
    private _auth: AuthService,
    private _rout: ActivatedRoute,) { }

  ngOnInit() {
    this._utils.startspinner()
    this.ref = this._rout.snapshot.paramMap.get('id');
    this.Database.readWithId('Users', this.ref).valueChanges().subscribe((res) => {
      console.log(res);
      this.provider = res;
      localStorage.setItem("provider",this.provider.names)
      localStorage.setItem("service",this.provider.category)
      this._utils.dismiss();
    });

    this.Database.readSub("Users",this.ref,"Services").subscribe(res=>{
      this.service = res;
      console.log(res)
    })
  }

}
