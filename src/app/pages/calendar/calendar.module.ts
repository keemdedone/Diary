import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarMainComponent } from './calendar-main/calendar-main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CalendarMainComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CalendarModule {}
