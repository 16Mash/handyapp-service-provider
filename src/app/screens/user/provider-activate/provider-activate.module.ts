import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderActivatePageRoutingModule } from './provider-activate-routing.module';

import { ProviderActivatePage } from './provider-activate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderActivatePageRoutingModule
  ],
  declarations: [ProviderActivatePage]
})
export class ProviderActivatePageModule {}
