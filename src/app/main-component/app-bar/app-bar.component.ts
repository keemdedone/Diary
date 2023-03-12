import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  @Output() openSide = new EventEmitter<boolean>();

  isDarkTheme: boolean = true; /* SET true if darkmdoe Default */
  openSideBar: boolean = false;

  constructor(
    public themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) {}

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme =
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
    this.dialogOverlayChange(newTheme);
    this.isDarkTheme = newTheme === 'dark-theme' ? true : false;
  }

  toggleSide(): void {
    this.openSideBar = !this.openSideBar;
    this.openSide.emit(this.openSideBar);
  }

  dialogOverlayChange(className: string) {
    const container = this.overlayContainer.getContainerElement();
    container.classList.toggle('dark-theme', className === 'dark-theme');
  }
}
