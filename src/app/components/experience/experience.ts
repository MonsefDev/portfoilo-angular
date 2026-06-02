import { Component, inject, signal, computed, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience, ExperienceProject } from '../../data/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
})
export class ExperienceComponent implements OnInit {
  readonly tr = inject(TranslationService);
  readonly portfolio = inject(PortfolioService);
  private readonly el = inject(ElementRef);

  readonly trackVisible = signal(false);
  readonly activeIndex = signal<number>(0);
  readonly selectedProjectIdx = signal(0);

  /** Entreprises en ordre chronologique (ancien → récent) pour la timeline. */
  readonly chronological = computed(() => [...this.portfolio.experiences()].reverse());

  readonly activeExp = computed<Experience | null>(() =>
    this.chronological()[this.activeIndex()] ?? null
  );

  readonly currentProject = computed<ExperienceProject | null>(() => {
    const exp = this.activeExp();
    if (!exp) return null;
    return exp.projects[this.selectedProjectIdx()] ?? exp.projects[0];
  });

  ngOnInit(): void {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) this.trackVisible.set(true); },
      { threshold: 0.2 }
    );
    const track = this.el.nativeElement.querySelector('.career-track');
    if (track) obs.observe(track);

    // Sélectionne l'entreprise actuelle (la plus récente) par défaut
    this.activeIndex.set(this.chronological().length - 1);
  }

  selectNode(i: number): void {
    this.activeIndex.set(i);
    this.selectedProjectIdx.set(0);
  }

  selectProject(i: number): void {
    this.selectedProjectIdx.set(i);
  }

  isActiveNode(i: number): boolean {
    return this.activeIndex() === i;
  }

  clientCount(exp: Experience): number {
    return new Set(exp.projects.map(p => p.client)).size;
  }

  getLogo(exp: Experience): string {
    const map: Record<string, string> = {
      bpi: 'bpi', sncf: 'sncf', capgemini: 'capgemini', capoffshore: 'capoffshore', web: 'capoffshore',
    };
    return `/logos/${map[exp.logo] ?? exp.logo}.png`;
  }

  getRingClass(level: string): string {
    return `dot-${level}`;
  }

  /** Logos à fond foncé (texte blanc) : remplissent la pastille au lieu d'un cadre blanc. */
  isDarkLogo(exp: Experience): boolean {
    return exp.logo === 'acensi';
  }

  getLevelClass(level: string): string {
    return `level-${level}`;
  }

  getLevelLabel(exp: Experience): string {
    return this.tr.t(`about.level_${exp.level}`);
  }

  getPeriod(exp: Experience): string {
    const end = exp.end ?? this.tr.t('experience.present');
    return `${exp.start} → ${end}`;
  }

  getYear(exp: Experience): string {
    return exp.start.split(' ').slice(-1)[0];
  }

  getNodeDelay(i: number): string {
    return `${300 + i * 200}ms`;
  }
}
