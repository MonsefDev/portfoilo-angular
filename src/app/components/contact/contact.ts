import { Component, inject, signal, ElementRef, viewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly tr = inject(TranslationService);
  readonly chat = inject(ChatService);

  draft = '';
  readonly scrollBox = viewChild<ElementRef<HTMLDivElement>>('scrollBox');

  constructor() {
    // Auto-scroll INTERNE au chat (jamais la page) — uniquement après une interaction
    effect(() => {
      const count = this.chat.messages().length;
      const loading = this.chat.loading();
      if (count === 0 && !loading) return; // pas de scroll au chargement initial
      queueMicrotask(() => {
        const el = this.scrollBox()?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      });
    });
  }

  send(): void {
    const text = this.draft;
    this.draft = '';
    this.chat.send(text);
  }

  ask(q: string): void {
    this.chat.send(q);
  }

  onEnter(event: Event): void {
    event.preventDefault();
    this.send();
  }

  /** Convertit le markdown léger (**gras**, retours ligne) en HTML. */
  format(content: string): string {
    return content
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }
}
