import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})

  export class SigninPage implements OnInit {
    loginForm : FormGroup;
    constructor(private _formBuilder: FormBuilder,private _auth: AuthService,) {
      this.loginForm = this._formBuilder.group({
        email: ['',[Validators.required,Validators.email]],
        password: ['',Validators.required],
        type:['user',Validators.required]
      })
     }
  
    ngOnInit() {
    }
    signIn()
    {
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
        this._auth.signIn(this.loginForm.value);
        
      }else {
        this.loginForm.markAllAsTouched();
      }
    }
  }
