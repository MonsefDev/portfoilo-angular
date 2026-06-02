import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  readonly tr = inject(TranslationService);
  readonly theme = inject(ThemeService);
  readonly scroll = inject(ScrollService);

  menuOpen = false;

  readonly navLinks = ['about', 'stack', 'experience', 'projects', 'education', 'contact'];

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
