import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoMainComponent } from './todo-main/todo-main.component';

@NgModule({
  declarations: [TodoMainComponent],
  imports: [CommonModule, TodoRoutingModule],
})
export class TodoModule {}
