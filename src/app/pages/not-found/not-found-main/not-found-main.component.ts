import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-main',
  templateUrl: './not-found-main.component.html',
  styleUrls: ['./not-found-main.component.scss'],
})
export class NotFoundMainComponent {
  constructor(private router: Router) {}

  goBack(route: string) {
    this.router.navigate([route]);
  }
}
