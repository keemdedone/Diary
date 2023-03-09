import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryMainComponent } from './diary-main/diary-main.component';

const routes: Routes = [
  {
    path: '',
    component: DiaryMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryRoutingModule {}
