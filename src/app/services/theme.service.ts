import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'dark-theme';
  private overlayElement = this.overlayContainer.getContainerElement(); // dialog overlay element
  // private themeCache = localStorage.getItem('default_theme') || null;

  constructor(private overlayContainer: OverlayContainer) {}

  setTheme(theme: string): void {
    this.currentTheme = theme;
    localStorage.setItem('default_theme', theme);
  }

  getTheme(): string {
    this.overlayElement.classList.add(this.currentTheme);
    return this.currentTheme;
  }
}
