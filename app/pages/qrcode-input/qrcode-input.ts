import { Component } from '@angular/core';
import { NavController, ToastController,ModalController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import {HomePage} from '../home/home';

/*
  Generated class for the QrcodeInputPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/qrcode-input/qrcode-input.html',
})
export class QrcodeInputPage {

  constructor(private navCtrl: NavController,public toastCtrl: ToastController, public modalCtrl: ModalController) {

  }

  leitor()
  {

  BarcodeScanner.scan().then((barcodeData) => {

    if (barcodeData.format != 'QR_CODE')
    {
      let toast = this.toastCtrl.create({
        message: 'Código não reconhecido!',
        duration: 2000
      });
        toast.present();

        barcodeData = null;
    }
    else
    {
        this.navCtrl.push(HomePage);
    }



  }, (err) => {

    });

  }

}
