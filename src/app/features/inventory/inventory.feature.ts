import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryRootComponent } from './root/inventory-root/inventory-root.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InventoryEffects } from './inventory.effects';
import { reducer } from './inventory.reducer';

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
    // store
    EffectsModule.forFeature([InventoryEffects]),
    StoreModule.forFeature('inventory', reducer),
  ],
  exports: [
  ],
})
export class InventoryModule { }
