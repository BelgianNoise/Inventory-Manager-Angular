import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryRootComponent } from './root/inventory-root/inventory-root.component';

export const inventoryRoutes: Routes = [
  {
    path: 'inventory',
    component: InventoryRootComponent,
  }
];

@NgModule({
  declarations: [
    InventoryRootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryRoutes),
  ],
  exports: [
  ],
})
export class InventoryModule { }
