import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SigninPage } from './sign-in.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SignInPageRoutingModule,
    ReactiveFormsModule
 
  ],
  declarations: [SigninPage]
})
export class SignInPageModule {}
