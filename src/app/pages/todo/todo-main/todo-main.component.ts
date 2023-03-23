import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/services/data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DropDrag, Todo } from 'src/app/model/type';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss'],
})
export class TodoMainComponent implements OnInit {
  Text = {
    todoTitle: ['To do', 'สิ่งที่ต้องทำ'],
    doneTitle: ['Done', 'สิ่งที่ทำเสร็จแล้ว'],
  };
  TodoData: Todo;
  todo: DropDrag[] = [{ value: '', role: '', canMove: false }];
  done: DropDrag[] = [{ value: '', role: '', canMove: false }];
  lang: number;

  constructor(
    private dataService: DataService,
    private iconRegistry: MatIconRegistry
  ) {
    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.lang = this.dataService.getLanguage();
    this.TodoData = this.dataService.getTodo();
  }

  ngOnInit(): void {
    this.todo = this.TodoData.todo;
    this.done = this.TodoData.done;
  }

  drop(event: CdkDragDrop<DropDrag[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.updateStorage();
  }

  setEmtryTodo() {
    if (this.lang === 0) {
      this.todo[0] = { value: 'Drag here!', role: 'guide', canMove: true };
      this.done[0] = { value: 'Drop here!', role: 'guide', canMove: true };
    } else {
      this.todo[0] = { value: 'ลากตรงนี้!', role: 'guide', canMove: true };
      this.done[0] = { value: 'วางตรงนี้!', role: 'guide', canMove: true };
    }
    this.TodoData.todo = this.todo;
    this.TodoData.done = this.done;
  }

  addTodoList() {
    const list = {
      value:
        this.lang === 0
          ? 'Click save button if finish!'
          : 'กดปุ่มเชฟหลังแก้ไขเสร็จ!',
      role: 'list',
      canMove: false,
    };
    this.todo.push(list);
  }

  editTodoList(index: number, action: boolean, newValue: string) {
    if (newValue !== '') {
      this.todo[index].value = newValue;
      this.todo[index].canMove = !action;
      this.updateStorage();
    }
  }

  removeTodoList(index: number) {
    this.todo.splice(index, 1);
    this.updateStorage();
  }

  setDoneFavorite(index: number, action: boolean) {
    this.done[index].canMove = !action;
    this.updateStorage();
  }

  quickDoneMove(index: number) {
    const data = this.done[index];
    this.done.splice(index, 1);
    this.todo.push(data);
    this.updateStorage();
  }

  updateStorage() {
    this.dataService.setTodo(this.todo, this.done);
  }
}
