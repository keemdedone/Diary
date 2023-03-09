import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-side',
  templateUrl: './app-side.component.html',
  styleUrls: ['./app-side.component.scss'],
})
export class AppSideComponent {
  @Input() isOpen = false;
}
