import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSeachPageRoutingModule } from './modal-seach-routing.module';

import { ModalSeachPage } from './modal-seach.page';
import { FilterPipe } from '../pipes/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSeachPageRoutingModule, 
  ],
  declarations: [ModalSeachPage, FilterPipe]
})
export class ModalSeachPageModule {}
