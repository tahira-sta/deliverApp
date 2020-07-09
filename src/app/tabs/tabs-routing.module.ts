import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      }, 
      {
        path: 'chat',
        loadChildren: () => import('../pages/chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'camera',
        loadChildren: () => import('../pages/camera/camera.module').then( m => m.CameraPageModule)
      },     
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
