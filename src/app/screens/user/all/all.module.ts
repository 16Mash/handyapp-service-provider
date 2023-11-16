import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPageRoutingModule } from './all-routing.module';

import { AllPage } from './all.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  declarations: [AllPage]
})
export class AllPageModule {}
