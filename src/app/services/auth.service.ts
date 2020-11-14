import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../domain/user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
    ) { 
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }

    googleSignin() {
      let provider = new auth.GoogleAuthProvider();
      //let credential = await this.afAuth.signInWithPopup(provider);
      //console.log(credential)
      //return this.updateUserData(credential.user);
      this.afAuth.signInWithPopup(provider)
        .then(data=>{
          this.updateUserData(data.user);
          window.location.href=environment.redirectSiteLogin;
        }).catch(err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: `<a href>${err.message}</a>`
            })
        })
    }

    async emailRegister(email: string, password:string){
      let result=await this.afAuth.createUserWithEmailAndPassword(email, password)
      console.log(result)
      return this.updateUserData(result.user);
    }

    emailPasswordSingin(email: string, password:string){
      this.afAuth.signInWithEmailAndPassword(email,password)
        .then(data=>{
          this.updateUserData(data.user);
          window.location.href=environment.redirectSiteLogin;
        }).catch(err=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: `<a href>${err.message}</a>`
            })
        })
    }

    private updateUserData(user) {
      // Sets user data to firestore on login
      let userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  
      let data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL
      } 
  
      return userRef.set(data, { merge: true })
  
    }
  
    async signOut() {
      await this.afAuth.signOut();
      this.router.navigate(['/']);
    }
  

}
