import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';
import { DiaryMainComponent } from './diary-main/diary-main.component';


@NgModule({
  declarations: [
    DiaryComponent,
    DiaryMainComponent
  ],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
