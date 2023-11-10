import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UtilsService } from './utils.service';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _auth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _spinnner: UtilsService,
    private _router: Router) { }


  async CreateAccount(user: User, password: any) {
    this._spinnner.startspinner()
    await this._auth.createUserWithEmailAndPassword(user.email, password)
      .then(async result => {
        const uid  = result.user?.uid
       const id= uid?.toString()
        this._firestore.collection("Users").doc(result.user?.uid).set(user)
          .then((res) => {
            if(id){
              localStorage.setItem("userid",id )
              localStorage.setItem("type","User")
            }
          
            this._spinnner.dismiss()
            
            this._router.navigate(['user'])
          })
          .catch(error => {
            this._spinnner.dismiss()
            this._spinnner.presentToast('bottom', error.message)
          }

          )
      })
      .catch(async e => {

        console.log(e.message['Firebase'])
        console.log(e.message.FirebaseError)
        this._spinnner.dismiss()
        this._spinnner.presentToast("bottom", e.message)
      })
  }
  signIn(login: any) {
    this._spinnner.startspinner()
    this._auth.signInWithEmailAndPassword(login['email'], login['password'])
      .then(result => {
        this._firestore.collection("Users").doc(result.user?.uid).get().subscribe((res) => {
          this._spinnner.dismiss()
          if (res.exists) {
            const data = res.data() as User;
            localStorage.setItem("userid", res.id)
            localStorage.setItem("serviceUser", JSON.stringify(data))
            if (data.type == login.type && data.type == "Admin") {
              this._router.navigateByUrl('/Admin')
            } else if (data.type == login.type && data.type == "user") {
              this._router.navigateByUrl('/user')
            } 
            else {
              this._spinnner.dismiss()
              this._spinnner.presentToast('middle', "Cant not find your profile ")
              this.logout()
            }
          } else {
            this._spinnner.dismiss()
            this._spinnner.presentToast('middle', "Cant not find your profile ")
            this.logout()
          }
        })
      }).catch(e => {
        this._spinnner.dismiss()
        this._spinnner.presentToast("bottom", e.message)
      })
  }
  logout() {
    this._auth.signOut().then(() => {
      localStorage.clear();
      this._router.navigateByUrl('/sign-in')
    }
    )
  }
}
