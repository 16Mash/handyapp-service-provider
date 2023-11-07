import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryListPageRoutingModule } from './category-list-routing.module';

import { CategoryListPage } from './category-list.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    CategoryListPageRoutingModule
  ],
  declarations: [CategoryListPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryListPageModule {}
