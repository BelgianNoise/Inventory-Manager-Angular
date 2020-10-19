import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { inventoryRoutes } from './features/inventory/inventory.feature';
import { loginRoutes } from './features/login/login.feature';


const routes: Routes = [
  ...loginRoutes,
  ...inventoryRoutes,
  {
    path: '**',
    redirectTo: '/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
