import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/type';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-diary-post',
  templateUrl: './diary-post.component.html',
  styleUrls: ['./diary-post.component.scss'],
})
export class DiaryPostComponent implements OnInit {
  allPost!: Post[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.ongetData();
  }

  ongetData() {
    this.dataService.getPostData().subscribe((data) => {
      this.allPost = data;
    });
  }

  onRemove(index: number) {
    this.dataService.deletePost(index);
  }

  onEdit(index: number) {
    this.dataService.updateSingglePost(index);
  }
}
