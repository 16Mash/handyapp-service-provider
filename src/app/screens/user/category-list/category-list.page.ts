import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  providers:any;
  ref:any
  constructor(
    private _utils: UtilsService,
    private database: DatabaseService,
    private _auth: AuthService,
    private _rout: ActivatedRoute,
   
  ) { }

  ngOnInit() {
    this.ref = this._rout.snapshot.paramMap.get('id');
  this.database.readProvide(this.ref).snapshotChanges().subscribe(res=>{
      console.log("provider",res)
      this.providers=res
  })

  }

}
