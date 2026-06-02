import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal<string>('hero');
  readonly scrolled = signal<boolean>(false);

  init(): void {
    window.addEventListener('scroll', () => {
      this.scrolled.set(window.scrollY > 50);
      this.updateActiveSection();
      this.revealElements();
    });
    this.revealElements();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private updateActiveSection(): void {
    const sections = ['hero', 'about', 'stack', 'experience', 'projects', 'education', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  private revealElements(): void {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }
}
