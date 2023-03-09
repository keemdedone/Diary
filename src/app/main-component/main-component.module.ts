import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppSideComponent } from './app-side/app-side.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppBarComponent, AppSideComponent, AppFooterComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [AppBarComponent, AppSideComponent, AppFooterComponent],
})
export class MainComponentModule {}
