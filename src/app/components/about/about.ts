import { Component, inject, OnInit, ElementRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { PortfolioService } from '../../services/portfolio.service';
import { CareerStep } from '../../data/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
})
export class AboutComponent implements OnInit {
  readonly tr = inject(TranslationService);
  readonly portfolio = inject(PortfolioService);
  private readonly el = inject(ElementRef);

  readonly journeyVisible = signal(false);

  /** Étapes en ordre inverse (Expert → Junior) pour l'escalier vertical mobile. */
  readonly careerStepsDesc = computed(() => [...this.portfolio.careerSteps()].reverse());

  isCurrent(step: CareerStep): boolean {
    return step.levelKey === 'expert';
  }

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) this.journeyVisible.set(true); },
      { threshold: 0.3 }
    );
    const track = this.el.nativeElement.querySelector('.journey-section');
    if (track) observer.observe(track);
  }

  readonly stats = [
    { valueKey: 'about.stat1_value', labelKey: 'about.stat1_label', icon: '🗓️' },
    { valueKey: 'about.stat2_value', labelKey: 'about.stat2_label', icon: '🏢' },
    { valueKey: 'about.stat3_value', labelKey: 'about.stat3_label', icon: '👥' },
    { valueKey: 'about.stat4_value', labelKey: 'about.stat4_label', icon: '🚀' },
  ];

  getNodeDelay(i: number): number {
    return i * 280;
  }

  getLevelClass(step: CareerStep): string {
    return `level-${step.levelKey}`;
  }

  getDotClass(step: CareerStep): string {
    return `dot-${step.levelKey}`;
  }
}
