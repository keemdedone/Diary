import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { routerLinkMenu } from 'src/app/model/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-app-side',
  templateUrl: './app-side.component.html',
  styleUrls: ['./app-side.component.scss'],
})
export class AppSideComponent {
  @Input() isOpen = false;
  menu = routerLinkMenu;
  lang: number;

  constructor(
    private dataService: DataService,
    private iconRegistry: MatIconRegistry
  ) {
    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.lang = this.dataService.getLanguage();
  }

  toLowerCase(link: string) {
    return link.toLowerCase();
  }
}
