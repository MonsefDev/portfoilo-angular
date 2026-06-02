import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
})
export class HeroComponent implements OnInit {
  readonly tr = inject(TranslationService);
  private readonly scroll = inject(ScrollService);

  readonly displayedTitle = signal('');
  private readonly fullTitle = 'Lead Frontend Engineer';

  ngOnInit(): void {
    this.typeTitle();
  }

  private typeTitle(): void {
    let i = 0;
    const interval = setInterval(() => {
      this.displayedTitle.set(this.fullTitle.slice(0, ++i));
      if (i >= this.fullTitle.length) clearInterval(interval);
    }, 60);
  }

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }

  readonly stats = [
    { valueKey: 'hero.years',   labelKey: 'hero.years_label' },
    { valueKey: 'hero.clients', labelKey: 'hero.clients_label' },
    { valueKey: 'hero.devs',    labelKey: 'hero.devs_label' },
    { valueKey: 'hero.angular', labelKey: 'hero.angular_label' },
  ];
}
