import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderActivatePage } from './provider-activate.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderActivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderActivatePageRoutingModule {}
