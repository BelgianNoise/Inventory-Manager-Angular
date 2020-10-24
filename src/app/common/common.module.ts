import { NgModule } from '@angular/core';
import { LoggerService } from './logger/service/logger.service';
import { AuthService } from './firebase/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    LoggerService,
    AuthService,
  ],
  bootstrap: [MyCommonModule],
})
export class MyCommonModule { }
