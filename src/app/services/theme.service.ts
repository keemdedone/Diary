import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light-theme';

  setTheme(theme: string): void {
    this.currentTheme = theme;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
