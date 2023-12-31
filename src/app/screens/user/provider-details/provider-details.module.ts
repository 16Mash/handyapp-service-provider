import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderDetailsPageRoutingModule } from './provider-details-routing.module';

import { ProviderDetailsPage } from './provider-details.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProviderDetailsPage]
})
export class ProviderDetailsPageModule {}
