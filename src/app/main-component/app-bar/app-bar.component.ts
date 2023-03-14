import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
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
  lang: number;
  Text = {
    translate: ['Thai language', 'เปลี่ยนเป็นภาษาอังกฤษ'],
    darkmode: ['Dark mode', 'ธีมเข้ม'],
  };

  constructor(
    public themeService: ThemeService,
    private dataService: DataService,
    private overlayContainer: OverlayContainer
  ) {
    this.lang = this.dataService.getLanguage();
  }

  switchLanguage() {
    const switchLang = this.lang === 0 ? 1 : 0;
    this.dataService.setLanguege(switchLang);
  }

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
