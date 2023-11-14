import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private _AngularFirestore: AngularFirestore, private _Spinner: UtilsService) { }
  gerateUid() {
    const currentDate = new Date()
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');


    const dateTimeNumeric = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    return dateTimeNumeric.toString();
  }
    //save new data
     saveData(collection: string, data: any) {
      this._Spinner.startspinner()
  return    this._AngularFirestore.collection(collection).add(data)
        .then(result => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('top', "Saved Successfully")
        })
        .catch(err => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('top', err.message)
        })
    }
  
    // save subcollection
    saveDataSup(collection: any, doc: any, subcollection: any, data: any) {
      this._Spinner.startspinner()
      this._AngularFirestore.collection(collection).doc(doc).collection(subcollection)
        .add(data)
        .then(result => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('top', "Saved Successfully")
        })
        .catch(err => {
  
        }
        )
    }
  
    //update data
    updateData(collection: string, data: any, doc: any) {
      this._Spinner.startspinner()
    return  this._AngularFirestore.collection(collection).doc(doc).update(data)
        .then(() => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('top', "Updated Successfully")
        })
        .catch(err => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('bottom', err.message)
        })
    }
  
    //set data
    setData(collection: string, data: any, doc: any) {
      this._Spinner.startspinner()
   this._AngularFirestore.collection(collection).doc(doc).set(data)
        .then(() => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('top', "Saved Successfully")
        })
        .catch(err => {
          this._Spinner.dismiss()
          this._Spinner.presentToast('bottom', err.message)
        })
    }
  
    readData(collection: any) {
     return this._AngularFirestore.collection(collection).valueChanges()
  
    }
    readWithId(collection :any,id:any){
      return this._AngularFirestore.collection(collection).doc(id)
    }
  
     readbase(collection:any,where:any,con:any,value:any,){
      return this._AngularFirestore.collection(collection, ref=> ref.where(where,con,value))
     }
}