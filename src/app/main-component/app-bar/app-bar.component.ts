import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  @Output() openSide = new EventEmitter<boolean>();

  isDarkTheme: boolean = false;
  openSideBar: boolean = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme =
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
    this.isDarkTheme = newTheme === 'dark-theme' ? true : false;
  }

  toggleSide(): void {
    this.openSideBar = !this.openSideBar;
    this.openSide.emit(this.openSideBar);
  }
}
