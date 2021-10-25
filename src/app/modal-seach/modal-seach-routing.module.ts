import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSeachPage } from './modal-seach.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSeachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSeachPageRoutingModule {}
