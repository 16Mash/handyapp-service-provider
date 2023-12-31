import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  provider:any;
  ref:any
  user:any;
  uid:any;
  bookForm!:FormGroup;
  date!:Date;
  CurrentDate:any = new Date();
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay !== 0 && utcDay !== 6;
  };
  constructor(    private _utils: UtilsService,
    private Database: DatabaseService,
    private _auth: AuthService,
    private _Router:Router,
    private _Builder :FormBuilder,
    private _rout: ActivatedRoute,) {
    
     }

  ngOnInit() {
    this.uid =localStorage.getItem("userid")
    this.user = this._utils.getArray('serviceUser');
    this._utils.startspinner()
    this.ref = this._rout.snapshot.paramMap.get('id');
    this.Database.readWithId('Users', this.ref).valueChanges().subscribe((res) => {
      console.log(res);
      this.provider = res;
      this._utils.dismiss();
    });

    this.bookForm = this._Builder.group({
      user:[this.uid],
      usernames:[this.user.names],
      provider:[this.ref],
      providername:[localStorage.getItem('provider')],
      service:[localStorage.getItem('service')],
      duration:['weekly',Validators.required],
      status:['Requested'],
      address:['',Validators.required],
      jobDate:['']

    })
  }

  book(){

    if(this.bookForm.valid&& this.date!=null)
    {   this.bookForm.value['jobDate']=this.date
        this.Database.saveData("Services",this.bookForm.value).then(()=>{
          this._Router.navigateByUrl("/user")
        })
       
    }else {
      this.bookForm.markAllAsTouched()
      if(this.date==null){
        this._utils.presentToast('top',"Select the Date")
      }
    }
  }

}
