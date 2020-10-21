import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../../logger/service/logger.service';

@Injectable()
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private logger: LoggerService,
  ) { }

  public login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    this.logger.log('Logging in...', { email, password });
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      tap( user => this.logger.log('Succesfully logged in', { user } )),
    );
  }

  public logout(): Observable<firebase.auth.UserCredential> {
    return of(null);
  }
}
