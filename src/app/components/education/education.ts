import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
})
export class EducationComponent {
  readonly tr = inject(TranslationService);
  readonly portfolio = inject(PortfolioService);
}
