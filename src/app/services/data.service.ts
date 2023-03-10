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
    this.postSubject.next(this.postInformation); // Emit new value to subscribers
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

  updateSingglePost(index: number) {}
}
