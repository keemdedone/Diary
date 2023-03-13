import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarMainComponent } from './calendar-main/calendar-main.component';


@NgModule({
  declarations: [
    CalendarMainComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
