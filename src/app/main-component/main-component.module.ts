import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppSideComponent } from './app-side/app-side.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NotFoundMainComponent } from '../pages/not-found/not-found-main/not-found-main.component';
import { AppRoutingModule } from '../app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppBarComponent,
    AppSideComponent,
    AppFooterComponent,
    NotFoundMainComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [AppBarComponent, AppSideComponent, AppFooterComponent],
})
export class MainComponentModule {}
