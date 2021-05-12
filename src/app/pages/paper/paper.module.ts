import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperPageRoutingModule } from './paper-routing.module';

import { PaperPage } from './paper.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PaperPage]
})
export class PaperPageModule {}
