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
}