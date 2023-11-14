import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsernavbarComponent } from './navigations/usernavbar/usernavbar.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UsernavbarComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./screens/user/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'cv-page',
        loadChildren: () => import('./screens/user/cv-page/cv-page.module').then(m => m.CvPagePageModule)
      },
      {
        path: 'provider-details',
        loadChildren: () => import('./screens/user/provider-details/provider-details.module').then(m => m.ProviderDetailsPageModule)
      },

      {
        path: 'profile',
        loadChildren: () => import('./screens/user/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'category-list',
        loadChildren: () => import('./screens/user/category-list/category-list.module').then(m => m.CategoryListPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./screens/user/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'Orders',
        loadChildren: () => import('./screens/user/orders/orders.module').then( m => m.OrdersPageModule)
      },
       {
        path: 'book',
        loadChildren: () => import('./screens/user/book/book.module').then( m => m.BookPageModule)
      },
   
    ],
  },
  {
    path: 'provider',
    component: UsernavbarComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',

      },
      {
        path: 'home',
        loadChildren: () => import('./screens/provider/home/home.module').then(m => m.HomePageModule)
      },
    ]

  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./Auth/sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./screens/provider/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/provider/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./screens/provider/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'provider-activate',
    loadChildren: () => import('./screens/user/provider-activate/provider-activate.module').then( m => m.ProviderActivatePageModule)
  },

  {
    path: 'provider-details/:id',
    loadChildren: () => import('./screens/user/provider-details/provider-details.module').then(m => m.ProviderDetailsPageModule)
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./screens/user/book/book.module').then( m => m.BookPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
