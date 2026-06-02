import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.html',
})
export class StackComponent {
  readonly tr = inject(TranslationService);
  readonly portfolio = inject(PortfolioService);

  getIconClass(id: string): string {
    return `domain-ico-${id}`;
  }
}
