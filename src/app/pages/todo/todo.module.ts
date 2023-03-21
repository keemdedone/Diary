import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoMainComponent } from './todo-main/todo-main.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { icons } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [TodoMainComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    LucideAngularModule.pick(icons),
  ],
})
export class TodoModule {}
