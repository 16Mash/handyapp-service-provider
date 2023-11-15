import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddservicesPageRoutingModule } from './addservices-routing.module';

import { AddservicesPage } from './addservices.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddservicesPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [AddservicesPage]
})
export class AddservicesPageModule {}
