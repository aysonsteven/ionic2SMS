import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from 'ionic-native';
 
 
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  recepientNumber:string;
  msgBody:string;

  constructor(public navCtrl: NavController) {
 
  }
 
  sndSMS(){
    let options={
          replaceLineBreaks: false,
          android: {
               intent: ''
            
            }
    }
    SMS.send(this.recepientNumber, this.msgBody ,options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }
  
}