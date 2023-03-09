import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-diary';
  isDarkTheme: boolean = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme =
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
  }
}
