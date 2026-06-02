import { Injectable, computed, inject } from '@angular/core';
import { TranslationService } from './translation.service';
import { portfolioDataFR, portfolioDataEN } from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly tr = inject(TranslationService);

  readonly data = computed(() =>
    this.tr.currentLang() === 'fr' ? portfolioDataFR : portfolioDataEN
  );

  readonly experiences = computed(() => this.data().experiences);
  readonly projects = computed(() => this.data().projects);
  readonly skillGroups = computed(() => this.data().skillGroups);
  readonly techDomains = computed(() => this.data().techDomains);
  readonly education = computed(() => this.data().education);
  readonly certifications = computed(() => this.data().certifications);
  readonly careerSteps = computed(() => this.data().careerSteps);
}
