import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class Fire{
    constructor()
    {
      var config = {
        apiKey: "AIzaSyAwm_YtXiImOWhHgSqmVwAvughb5LLE6sg",
        authDomain: "fastpay-dac87.firebaseapp.com",
        databaseURL: "https://fastpay-dac87.firebaseio.com",
        storageBucket: "fastpay-dac87.appspot.com",
        messagingSenderId: "532753852799"
      };

        firebase.initializeApp(config);
    }

    login(token: string, sucessCallBack, errorCallBack)
    {
      let credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase.auth().signInWithCredential(credential).then(response =>{
        sucessCallBack();
      }, error => {
        errorCallBack(error);
      });

    }


}
