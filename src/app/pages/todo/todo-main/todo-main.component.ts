import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/services/data.service';

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
  todo = [''];
  done = [''];
  lang: number;

  constructor(private dataService: DataService) {
    this.lang = this.dataService.getLanguage();
  }

  ngOnInit(): void {
    const todoData = this.dataService.getTodo();
  }

  drop(event: CdkDragDrop<string[]>) {
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
  }
}
