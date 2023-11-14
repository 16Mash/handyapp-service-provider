import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderActivatePageRoutingModule } from './provider-activate-routing.module';

import { ProviderActivatePage } from './provider-activate.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderActivatePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ProviderActivatePage]
})
export class ProviderActivatePageModule {}
