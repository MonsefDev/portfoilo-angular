import { Injectable, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { TranslationService } from './translation.service';

declare global {
  interface Window { Cal?: any; }
}

/**
 * ─── Configuration Cal.com ───
 * Après avoir créé ton compte Cal.com + ton type d'événement,
 * colle ici ton lien au format "username/event-slug".
 * Exemple : 'moncif-laaraj/echange'
 * Tant que c'est vide, le bouton "Réserver" est masqué.
 */
export const CAL_LINK = 'moncif-laaraj-x2hxfc/echange';
export const CAL_NAMESPACE = 'echange';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly theme = inject(ThemeService);
  private readonly tr = inject(TranslationService);
  private inited = false;

  readonly enabled = CAL_LINK.trim().length > 0;
  readonly link = CAL_LINK;
  readonly namespace = CAL_NAMESPACE;

  /** Charge le script Cal.com et initialise (appelé une fois depuis Contact). */
  init(): void {
    if (this.inited || !this.enabled || typeof window === 'undefined') return;

    // Loader officiel Cal.com
    (function (C: any, A: string, key: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal; const ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
        if (ar[0] === key) {
          const api: any = function () { p(api, arguments); };
          const ns = ar[1]; api.q = api.q || [];
          if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['initNamespace', ns]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal('init', CAL_NAMESPACE, { origin: 'https://cal.com' });
    window.Cal.ns[CAL_NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'month_view',
      cssVarsPerTheme: {
        light: { 'cal-brand': '#4f46e5' },
        dark: { 'cal-brand': '#818cf8' },
      },
    });
    this.inited = true;
  }

  /** Config (thème + layout + langue) passée au bouton, suit le site. */
  get config(): string {
    const locale = this.tr.isEN() ? 'en' : 'fr';
    return JSON.stringify({
      layout: 'month_view',
      theme: this.theme.isDark() ? 'dark' : 'light',
      locale,
    });
  }
}
