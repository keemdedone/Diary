import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  openValue: boolean = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('LANG');
    if (!lang) {
      localStorage.setItem('LANG', '0');
    }
    return;
  }

  openSideChange(value: boolean) {
    this.openValue = value;
  }
}
