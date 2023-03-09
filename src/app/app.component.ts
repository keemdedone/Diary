import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openValue: boolean = false;

  title = 'my-diary';

  constructor(public themeService: ThemeService) {}

  openSideChange(value: boolean) {
    this.openValue = value;
  }
}
