import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsernavbarComponent } from './navigations/usernavbar/usernavbar.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path:'user',
    component:UsernavbarComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',

      },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'provider-details',
    loadChildren: () => import('./screens/provider-details/provider-details.module').then( m => m.ProviderDetailsPageModule)
  },
    ]
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
