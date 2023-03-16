import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoMainComponent } from './todo-main/todo-main.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TodoMainComponent],
  imports: [CommonModule, TodoRoutingModule, DragDropModule],
})
export class TodoModule {}
