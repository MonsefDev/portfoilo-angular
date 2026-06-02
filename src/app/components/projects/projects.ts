import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../data/portfolio.model';

type Filter = 'all' | 'fintech' | 'transport' | 'automotive' | 'erp';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly tr = inject(TranslationService);
  readonly portfolio = inject(PortfolioService);

  readonly activeFilter = signal<Filter>('all');
  readonly selectedProject = signal<Project | null>(null);

  readonly filters: { key: Filter; labelFR: string; labelEN: string }[] = [
    { key: 'all',        labelFR: 'Tous',       labelEN: 'All' },
    { key: 'fintech',    labelFR: 'Fintech',     labelEN: 'Fintech' },
    { key: 'transport',  labelFR: 'Transport',   labelEN: 'Transport' },
    { key: 'automotive', labelFR: 'Automobile',  labelEN: 'Automotive' },
    { key: 'erp',        labelFR: 'ERP',         labelEN: 'ERP' },
  ];

  readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    const all = this.portfolio.projects();
    return f === 'all' ? all : all.filter(p => p.type === f);
  });

  setFilter(f: Filter): void {
    this.activeFilter.set(f);
  }

  openProject(p: Project): void {
    this.selectedProject.set(p);
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  getFilterLabel(f: { labelFR: string; labelEN: string }): string {
    return this.tr.currentLang() === 'fr' ? f.labelFR : f.labelEN;
  }

  getTypeGradient(type: string): string {
    const map: Record<string, string> = {
      fintech:    'from-primary-600 via-primary-500 to-accent-500',
      transport:  'from-slate-600 via-accent-600 to-accent-400',
      automotive: 'from-amber-700 via-amber-500 to-orange-400',
      erp:        'from-violet-700 via-violet-500 to-primary-400',
      web:        'from-emerald-700 via-emerald-500 to-teal-400',
    };
    return map[type] ?? 'from-slate-600 to-slate-400';
  }

  getTypeIcon(type: string): string {
    return { fintech: '🏦', transport: '🚄', automotive: '🚗', erp: '🏢', web: '🌐' }[type] ?? '💼';
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      fintech:    'bg-primary-500/15 text-primary-300 border-primary-500/25',
      transport:  'bg-accent-500/15 text-accent-300 border-accent-500/25',
      automotive: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
      erp:        'bg-violet-500/15 text-violet-300 border-violet-500/25',
      web:        'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    };
    return map[type] ?? 'bg-slate-500/15 text-slate-300 border-slate-500/25';
  }

  readonly selectedIndex = computed(() => {
    const cur = this.selectedProject();
    if (!cur) return 0;
    return this.filteredProjects().findIndex(p => p.id === cur.id);
  });

  navigateProject(dir: 1 | -1): void {
    const all = this.filteredProjects();
    const idx = this.selectedIndex();
    const next = all[(idx + dir + all.length) % all.length];
    this.selectedProject.set(next);
  }
}
