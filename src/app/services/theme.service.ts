import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light-theme';
  private themeCache = localStorage.getItem('default_theme') || null;

  setTheme(theme: string): void {
    this.currentTheme = theme;
    localStorage.setItem('default_theme', theme);
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
