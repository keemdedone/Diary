import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/model/type';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-diary-post',
  templateUrl: './diary-post.component.html',
  styleUrls: ['./diary-post.component.scss'],
})
export class DiaryPostComponent implements OnInit {
  @ViewChild('PostEdit') openPostEdit!: TemplateRef<HTMLElement>;
  @ViewChild('RemoveAlert') openreomveAlert!: TemplateRef<HTMLElement>;

  allPost!: Post[];
  editForm: FormGroup;
  dialogIndex!: number;
  lang: number;
  Text = {
    date: ['Date', 'วันที่'],
    noPost: ['No Post...', 'ไม่มีโพส...'],
    changing: ['What are you changing ?', 'คุณต้องการเปลี่ยนแปลงอะไร'],
    updatetitle: ['Update post', 'แก้ไขโพส'],
    updatetopic: ['Topic', 'หัวข้อ'],
    textarea: ['Write your idea', 'เขียนโน้ตของคุณ'],
    cancel: ['CANCEL', 'ยกเลิก'],
    updateBtn: ['UPDATE', 'อัปเดต'],
    removeTitle: [
      'Are you sure to delete this post ?',
      'คุณแน่ใจที่จะทำการลบโพสนี้หรือไม่ ?',
    ],
  };

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      date: this.dataService.formatDate(new Date()),
    });
    this.lang = this.dataService.getLanguage();
  }

  ngOnInit(): void {
    this.ongetData();
  }

  ongetData() {
    this.dataService.getPostData().subscribe((data) => {
      this.allPost = data;
    });
  }

  onRemove(index: number) {
    this.dialog
      .open(this.openreomveAlert, {
        panelClass: 'custom-dialog',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((result: boolean) => {
        if (result === true) {
          this.dataService.deletePost(index);
        }
      });
  }

  onEdit(index: number) {
    this.dialogIndex = index;
    this.dialog.open(this.openPostEdit, {
      panelClass: 'custom-dialog',
      autoFocus: false,
    });
    const editData = this.dataService.getSinglePostData(index);
    this.editForm.patchValue({
      title: editData.title,
      text: editData.text,
    });
  }

  editPost() {
    if (!this.editForm.invalid) {
      const forms = this.editForm.value;
      this.dataService.updateSinglePost(this.dialogIndex, forms);
      this.dialog.closeAll();
    }
  }
}
