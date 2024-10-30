import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class HeaderComponent {
  mobileMenuOpen: boolean = false;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen; 
  }
}

