import { Component, HostBinding, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.scss'],
})
export class DiaryMainComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.postForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      date: this.dataService.formatDate(new Date()),
    });
  }

  createPost() {
    if (!this.postForm.invalid) {
      const forms = this.postForm.value;
      this.dataService.updatePost(forms);
    }
  }
}
