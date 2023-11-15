import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  serviceForm!: FormGroup;
  ref: any;
  constructor(
    private _builder: FormBuilder,
    private _database: DatabaseService,
    private _rout: ActivatedRoute,
    private router: Router
  ) {
    this.serviceForm = this._builder.group({
      cvv: ['', Validators.required],
      cardNo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.ref = this._rout.snapshot.paramMap.get('id');
  }

  Status() {

    if(this.serviceForm.valid)
    {
     console.log("clicked") 
      this._database.updateData('Services', { paid:true}, this.ref).then(()=>{
        this.router.navigateByUrl('/user/Orders')
      });
    }else{
      this.serviceForm.markAllAsTouched()
    }
  }
  
}
