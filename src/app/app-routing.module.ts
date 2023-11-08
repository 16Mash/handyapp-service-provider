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
    loadChildren: () => import('./screens/user/provider-details/provider-details.module').then( m => m.ProviderDetailsPageModule)
  },
  {
    path: 'cv-page',
    loadChildren: () => import('./screens/user/cv-page/cv-page.module').then( m => m.CvPagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./screens/user/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
    ]
  },
{
  path:'provider',
  component:UsernavbarComponent,
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',

    },
  {
    path: 'home',
    loadChildren: () => import('./screens/provider/home/home.module').then( m => m.HomePageModule)
  },
  ]
 
},
  {
    path: 'sign-up',
    loadChildren: () => import('./Auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./Auth/sign-in/sign-in.module').then( m => m.SignInPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
