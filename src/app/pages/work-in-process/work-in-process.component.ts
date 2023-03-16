import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-work-in-process',
  templateUrl: './work-in-process.component.html',
  styleUrls: ['./work-in-process.component.scss'],
})
export class WorkInProcessComponent {
  lang: number;
  Text = {
    topic: ['WIP!!!', 'กำลังพัฒนา!!!'],
    subTopic: [
      'This page is work in porcess !!!',
      'หน้านี้กำลังอยู่ในขั้นตอนการพัฒนา !!!',
    ],
  };

  constructor(private router: Router, private dataService: DataService) {
    this.lang = this.dataService.getLanguage();
  }

  goBack(route: string) {
    this.router.navigate([route]);
  }
}
