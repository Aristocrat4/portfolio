import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  onLogo() {
    this.navigate(0);
  }
  onNavigation(position: number) {
    this.navigate(position);
  }
  navigate(scroll: number) {
    window.scroll({
      top: scroll,
      left: 0,
      behavior: 'smooth',
    });
  }
}
