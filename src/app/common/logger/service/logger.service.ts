import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor( ) { }

  public log( message: string, params?: {}): void {
    console.log( message, params );
  }
}
