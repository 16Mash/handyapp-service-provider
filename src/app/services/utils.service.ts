import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private spinner!: HTMLIonLoadingElement;
  private toater!: HTMLIonToastElement;
  constructor(private _spinner: LoadingController , private toastController: ToastController) { }


  async startspinner(){
    this.spinner = await this._spinner.create({
      spinner:"circles",
      message:"Please-wait...",
      mode:"ios"
      
    })
    await this.spinner.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom',msg:string) {
    this.toater = await this.toastController.create({
      message: msg,
      duration: 3000,
      layout: 'stacked',
      position: position,
    });

    await this.toater.present();
  }
  dismiss(){
    if(this.spinner)
    {
      this.spinner.dismiss();
    }
  }
  getArray(key: string): any[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

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
}