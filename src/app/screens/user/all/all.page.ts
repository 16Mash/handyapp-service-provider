import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  providers:any;
  user:any;
  constructor(  private database: DatabaseService) {
  
    
  }

  ngOnInit() {
    this.database.readbase("Users",'type','==','provider').snapshotChanges().subscribe(res=>{
      console.log("provider",res)
      this.providers=res
  })
  }

}
