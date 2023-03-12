import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../model/type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private postInformation: Post[] = [];
  private postSubject = new BehaviorSubject<Post[]>([]);

  constructor() {
    const storedData = localStorage.getItem('POST_DATA');
    if (storedData !== null) {
      this.postInformation = JSON.parse(storedData);
    }
    this.postSubject.next(this.postInformation);
  }

  updatePost(data: Post): void {
    if (
      this.postInformation.length > 0 &&
      Object.keys(this.postInformation[0]).length == 0
    ) {
      this.postInformation[0] = data;
    } else {
      this.postInformation.push(data);
    }
    this.updateStorage();
    this.postSubject.next(this.postInformation);
  }

  updateSinglePost(index: number, data: Post) {
    this.postInformation[index] = data;
    this.updateStorage();
    this.postSubject.next(this.postInformation);
  }

  getPostData(): BehaviorSubject<Post[]> {
    return this.postSubject;
  }

  private updateStorage(): void {
    localStorage.setItem('POST_DATA', JSON.stringify(this.postInformation));
  }

  deletePost(index: number) {
    this.postInformation.splice(index, 1);
    this.updateStorage();
    this.postSubject.next(this.postInformation);
  }

  getSinglePostData(index: number) {
    let selectEdit = this.postInformation[index];
    return selectEdit;
  }

  formatDate(date: Date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear().toString();
    return d + '/' + m + '/' + y;
  }
}
