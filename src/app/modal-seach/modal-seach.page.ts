import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-modal-seach',
  templateUrl: './modal-seach.page.html',
  styleUrls: ['./modal-seach.page.scss'],
})
export class ModalSeachPage implements OnInit{
  @Input() IDProvincia: any;
  public filteredString: string='';
  public listProvince: any [] = [];
  public provinciaChecked: boolean = false;
  constructor(private modalCtrl: ModalController, public _mySrvHome: HomeService) { 
    this.loadProvince()

  }

  ngOnInit() {
  }
  
  public loadProvince(){
    this._mySrvHome.getProvince().subscribe((data:any)=>{
      this.listProvince = data['provincie']
    })
  }

  public selectedProvince($event){
    this.IDProvincia = $event.detail.value;
  }

  public onSelectProvince(){
    this.modalCtrl.dismiss(this.IDProvincia)
  }

  public modalDismiss(){
    this.modalCtrl.dismiss();
  }


}
