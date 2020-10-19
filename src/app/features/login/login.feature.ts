import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootPageComponent } from './pages/login-root-page/login-root-page.component';
import { LoginAreaComponent } from './components/login-area/login-area.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
