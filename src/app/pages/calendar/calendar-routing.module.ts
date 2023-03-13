import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainComponent } from './calendar-main/calendar-main.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
