import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSeachPage } from '../modal-seach/modal-seach.page';
import { HomeService } from '../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public listProvince: any[] = [];
  public user: any;
  public provincia = {
    IDProvincia: '',
    Capoluogo: ''
  };
  
  constructor(private modalCtrl: ModalController, private _mySrvHome: HomeService) {}

  ngOnInit(){
   this.loadProvince()
   this.loadUser();
  }

  public loadProvince(){
    this._mySrvHome.getProvince().subscribe((data:any)=>{
      this.listProvince = data['provincie']
      console.log(typeof(this.listProvince))
    })
  }


  public loadUser(){
    this._mySrvHome.getUsers().subscribe((data:any)=>{
      this.user = data['utenti'][1]
      this.provincia.IDProvincia = this.user.Provincia
      for (let x of this.listProvince){
        console.log(x)
        if(x['IDProvincia'] == this.provincia.IDProvincia){
          this.provincia.Capoluogo = x['Capoluogo']
          break;
        }
      }
    }, (error)=>{
      console.log('this is the error from home page -->',error)
    })
  }

  public async selectProvince(){
    let modalProvince = await this.modalCtrl.create({
      component: ModalSeachPage,
      componentProps: {
        'IDProvincia': this.provincia.IDProvincia,
      }
    });
     modalProvince.onDidDismiss().then((data)=>{
      this.provincia.IDProvincia = data.data;
      for(let x of this.listProvince){
      
        if(x['IDProvincia']==this.provincia.IDProvincia){
          this.provincia.Capoluogo = x['Capoluogo']
          break;
        }
        
      }
    })
    return await modalProvince.present();



  }


  public output(){
    console.log(this.provincia.IDProvincia)
  }
}
