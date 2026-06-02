import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly tr = inject(TranslationService);

  name = '';
  email = '';
  subject = '';
  message = '';

  readonly sent = signal(false);

  submit(): void {
    const body = encodeURIComponent(
      `Nom: ${this.name}\n\n${this.message}`
    );
    const mailto = `mailto:laarajmoncif@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${body}`;
    window.location.href = mailto;
    this.sent.set(true);
    setTimeout(() => this.sent.set(false), 4000);
  }
}
