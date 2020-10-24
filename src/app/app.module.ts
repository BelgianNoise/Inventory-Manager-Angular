import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.feature';
import { InventoryModule } from './features/inventory/inventory.feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginEffects } from './features/login/login.effects';
import { InventoryEffects } from './features/inventory/inventory.effects';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MyCommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // store
    EffectsModule.forRoot([LoginEffects, InventoryEffects]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({}),
    // Features / Modules
    LoginModule,
    InventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
