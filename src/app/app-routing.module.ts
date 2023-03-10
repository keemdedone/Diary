import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundMainComponent } from './pages/not-found/not-found-main/not-found-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'diary',
    pathMatch: 'full',
  },
  {
    path: 'diary',
    loadChildren: () =>
      import('./pages/diary/diary.module').then((d) => d.DiaryModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/calendar/calendar.module').then((c) => c.CalendarModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
