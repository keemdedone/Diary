import { Component, Input } from '@angular/core';
import { routerLinkMenu } from 'src/app/model/data';

@Component({
  selector: 'app-app-side',
  templateUrl: './app-side.component.html',
  styleUrls: ['./app-side.component.scss'],
})
export class AppSideComponent {
  @Input() isOpen = false;
  menu = routerLinkMenu;

  toLowerCase(link: string) {
    return link.toLowerCase();
  }
}
