import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-not-found-main',
  templateUrl: './not-found-main.component.html',
  styleUrls: ['./not-found-main.component.scss'],
})
export class NotFoundMainComponent {
  lang: number;
  Text = {
    topic: ['404', '๔o๔'],
    subTopic: ["Sorry, We can't find this page", 'ขออภัยเราหาหน้านี้ไม่เจอ'],
  };

  constructor(private router: Router, private dataService: DataService) {
    this.lang = this.dataService.getLanguage();
  }

  goBack(route: string) {
    this.router.navigate([route]);
  }
}
