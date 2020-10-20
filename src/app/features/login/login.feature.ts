import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootPageComponent } from './pages/login-root-page/login-root-page.component';
import { LoginAreaComponent } from './components/login-area/login-area.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from './login.effects';
import { reducer } from './login.reducer';
export const loginRoutes: Routes = [
  {
    path: 'login',
    canActivate: [],
    component: LoginRootPageComponent,
    children: [
      {
        path: '**',
        redirectTo: '/login',
      }
    ]
  }
];

@NgModule({
  declarations: [
    LoginRootPageComponent,
    LoginAreaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    // store
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature('login', reducer),
    // Material design Modules
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    LoginRootPageComponent,
    LoginAreaComponent,
  ],
})
export class LoginModule { }
