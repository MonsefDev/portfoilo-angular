import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDark = signal<boolean>(true);

  constructor() {
    const saved = localStorage.getItem('theme');
    this.isDark.set(saved !== 'light');
    effect(() => {
      const dark = this.isDark();
      document.documentElement.classList.toggle('dark', dark);
      document.body.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.isDark.set(!this.isDark());
  }
}
