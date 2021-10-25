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
  public listProvince: any;
  public provincia = {
    IDProvincia: '',
    Capoluogo: ''
  };
  
  constructor(private modalCtrl: ModalController, private _mySrvHome: HomeService) {}

  ngOnInit(){
   this.loadProvince()
  }

  public loadProvince(){
    this._mySrvHome.getProvince().subscribe((data:any)=>{
      this.listProvince = data['provincie']
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
