import { NgModule } from '@angular/core';
import { LoggerService } from './logger/service/logger.service';
import { AuthService } from './firebase/services/auth.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    LoggerService,
    AuthService,
  ],
  bootstrap: [MyCommonModule],
})
export class MyCommonModule { }
