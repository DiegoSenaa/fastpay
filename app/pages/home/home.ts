import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';
import { PagamentoPage } from '../pagamento/pagamento';
import { EventosPage } from '../eventos/eventos';
import { BebidasPage } from '../bebidas/bebidas';
import {BemVindoPage} from '../bem-vindo/bem-vindo';




/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
bemvindo: any = BemVindoPage;
homePage: any = HomePage;
cardapio: any = CardapioPage;
evento:any = EventosPage;
pagamento: any = PagamentoPage;
bebidas: any = BebidasPage;


  constructor(private navCtrl: NavController) {

  }

}
