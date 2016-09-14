import {Facebook} from 'ionic-native';

export class FacebookLogin{
  static login(sucessCallback, errorCallback)
  {
    Facebook.login(['public_profile']).then(response =>{
      sucessCallback(response.authResponse);
    },(error) =>{
      errorCallback(error);
    });
  }
}
