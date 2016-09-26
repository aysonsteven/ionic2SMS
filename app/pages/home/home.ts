import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { SMS } from 'ionic-native';
 
 
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  msgBody:string;

  constructor(public navCtrl: NavController) {
 
  }
 
  sndSMS(){
    var options={
          replaceLineBreaks: false,
          android: {
               intent: ''  // intent: 'INTENT'-- will open default sms app while '' will send without default sms app
            
            }
    }
    SMS.send('09214531866', this.msgBody ,options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }
  
}