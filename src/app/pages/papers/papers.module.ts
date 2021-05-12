import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapersPageRoutingModule } from './papers-routing.module';

import { PapersPage } from './papers.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapersPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PapersPage]
})
export class PapersPageModule {}
