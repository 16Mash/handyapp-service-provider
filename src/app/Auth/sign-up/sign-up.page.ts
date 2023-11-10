import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm!: FormGroup;
  user!: User;
  constructor(private _formBuilder: FormBuilder,
    private _auth: AuthService,) {
    this.registerForm = this._formBuilder.group({
      names: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      password: ['', Validators.required],
    })
  }


  ngOnInit() {
  }
  register(){
    if(this.registerForm.valid){
      this.user={
        names: this.registerForm.value['names'],
        phone: this.registerForm.value['phoneNo'],
        email: this.registerForm.value['email'],
        type: 'User',
        logo: '',
        address: ''
      }
        this._auth.CreateAccount(this.user,this.registerForm.value['password'])
      console.log(this.user)
    }else{
      this.registerForm.markAllAsTouched()
    }
  }
}
