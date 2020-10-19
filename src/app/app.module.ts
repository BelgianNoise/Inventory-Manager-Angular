import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.feature';
import { InventoryModule } from './features/inventory/inventory.feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Features / Modules
    LoginModule,
    InventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
