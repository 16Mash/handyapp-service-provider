import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.page.html',
  styleUrls: ['./addservices.page.scss'],
})
export class AddservicesPage implements OnInit {

  serviceForm!:FormGroup;
  ref:any;
  constructor(private _builder:FormBuilder, private _database:DatabaseService,) { 
    this.serviceForm = this._builder.group({
      service:['',Validators.required]
    })
  }

  ngOnInit() {
    this.ref=localStorage.getItem("userid")
  }

  Save()
  {
    if(this.serviceForm.valid)
    {
      console.log(this.serviceForm.value)

      this._database.saveDataSup("Users",this.ref,"Services",this.serviceForm.value)

      
    }
    else{
      this.serviceForm.markAllAsTouched()
    }
  }

}
