import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CvPagePageRoutingModule } from './cv-page-routing.module';

import { CvPagePage } from './cv-page.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    CvPagePageRoutingModule
  ],
  declarations: [CvPagePage]
})
export class CvPagePageModule {}
