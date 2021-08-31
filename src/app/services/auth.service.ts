import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {Auth} from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { User } from '../models/user.model';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>; 
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router : Router
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user =>{
        if(user){
          return this.afs.doc<User>(`Users/${user.uid}`).valueChanges()
        }
        else{
          return of(null);
        }
      })
    );
  }
  async googleSignin(){
    const provider = new firebase.default.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  updateUserData({uid, photoURL, email, displayName}:User) {
    const userRef : AngularFirestoreDocument<User> = this.afs.doc(`Users/${uid}`);

    const data = {
      displayName: displayName,
      email: email,
      photoURL:photoURL,
      uid: uid
    }
    return userRef.set(data, {merge: true});
  }
  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }
}
