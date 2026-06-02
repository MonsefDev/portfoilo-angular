import { Injectable, signal, computed } from '@angular/core';
import fr from '../../assets/i18n/fr.json';
import en from '../../assets/i18n/en.json';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly translations: Record<Lang, Record<string, unknown>> = { fr, en };
  readonly currentLang = signal<Lang>('fr');

  readonly isEN = computed(() => this.currentLang() === 'en');

  t(key: string): string {
    const keys = key.split('.');
    let result: unknown = this.translations[this.currentLang()];
    for (const k of keys) {
      result = (result as Record<string, unknown>)?.[k];
    }
    return typeof result === 'string' ? result : key;
  }

  toggle(): void {
    this.currentLang.set(this.currentLang() === 'fr' ? 'en' : 'fr');
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }
}
