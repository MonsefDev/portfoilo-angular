import { Injectable, inject, signal } from '@angular/core';
import { TranslationService } from './translation.service';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * ─── Configuration ───
 * Après avoir déployé le Cloudflare Worker (voir worker/README.md),
 * colle ici l'URL du worker (ex: https://moncif-chat.xxx.workers.dev/chat).
 * Tant que c'est vide, le chatbot fonctionne en mode local (réponses depuis les données).
 */
const WORKER_URL = 'https://moncif-chat.monsefdev.workers.dev';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly tr = inject(TranslationService);

  readonly messages = signal<ChatMessage[]>([]);
  readonly loading = signal(false);

  get usesAI(): boolean {
    return WORKER_URL.trim().length > 0;
  }

  readonly suggestionsFR = [
    'Quelle est ton expérience Angular ?',
    'Parle-moi de ta mission chez BPI France',
    'Quels projets as-tu réalisés pour PSA ?',
    'Es-tu disponible et comment te contacter ?',
  ];
  readonly suggestionsEN = [
    'What is your Angular experience?',
    'Tell me about your BPI France mission',
    'Which projects did you build for PSA?',
    'Are you available and how to reach you?',
  ];

  get suggestions(): string[] {
    return this.tr.isEN() ? this.suggestionsEN : this.suggestionsFR;
  }

  reset(): void {
    this.messages.set([]);
  }

  async send(text: string): Promise<void> {
    const content = text.trim();
    if (!content || this.loading()) return;

    this.messages.update(m => [...m, { role: 'user', content }]);
    this.loading.set(true);

    try {
      const answer = this.usesAI
        ? await this.askWorker()
        : this.localAnswer(content);
      this.messages.update(m => [...m, { role: 'assistant', content: answer }]);
    } catch {
      this.messages.update(m => [...m, { role: 'assistant', content: this.localAnswer(content) }]);
    } finally {
      this.loading.set(false);
    }
  }

  /** Appel au Cloudflare Worker (vraie IA). */
  private async askWorker(): Promise<string> {
    const lang = this.tr.isEN() ? 'en' : 'fr';
    const res = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, messages: this.messages() }),
    });
    if (!res.ok) throw new Error('worker error');
    const data = await res.json();
    return (data.reply as string) ?? this.fallbackText();
  }

  // ─────────────────────────────────────────────
  // Fallback local : réponses depuis la base de connaissances (sans backend)
  // ─────────────────────────────────────────────
  private localAnswer(qRaw: string): string {
    const q = qRaw.toLowerCase();
    const en = this.tr.isEN();
    const has = (...k: string[]) => k.some(w => q.includes(w));

    if (has('bonjour', 'salut', 'hello', 'hi ', 'hey', 'coucou')) {
      return en
        ? "Hi! I'm Moncif's virtual assistant 🤖. Ask me about his Angular experience, his missions (BPI France, SNCF, Capgemini), his projects or his skills."
        : "Bonjour ! Je suis l'assistant virtuel de Moncif 🤖. Pose-moi des questions sur son expérience Angular, ses missions (BPI France, SNCF, Capgemini), ses projets ou ses compétences.";
    }

    if (has('react', 'vuejs', 'vue.js', 'vue js', ' vue', 'node', 'express', 'svelte', 'nuxt', 'next.js', 'framework')) {
      return en
        ? "Moncif's **core expertise is Angular** (8→21). He also explores **React, Vue.js, Node.js and Express.js** through **personal/side projects** (tech watch) — giving him a solid working knowledge of the modern JS/TS ecosystem and the ability to adapt quickly to another frontend framework. His senior-level expertise remains Angular."
        : "Le **cœur d'expertise de Moncif est Angular** (8→21). Il explore aussi **React, Vue.js, Node.js et Express.js** à travers des **projets personnels** (veille techno) — ce qui lui donne une bonne connaissance opérationnelle de l'écosystème JS/TS moderne et la capacité de s'adapter vite à un autre framework front. Son expertise senior reste Angular.";
    }

    if (has('bpi', 'banque', 'vault', 'ncbs', 'thought machine')) {
      return en
        ? "At **BPI France** (via ACENSI, since July 2025), Moncif is Senior Frontend Engineer & Technical Lead on the **NCBS Console** — monitoring accounts on the Vault Core platform (Thought Machine). Stack: Angular 21, NgRx/Signals, Nx, Playwright. Results: >80% test coverage, +40% performance, mentoring 2 developers."
        : "Chez **BPI France** (via ACENSI, depuis juillet 2025), Moncif est Ingénieur Senior Frontend & Référent Technique sur la **Console NCBS** — monitoring des comptes de la plateforme Vault Core (Thought Machine). Stack : Angular 21, NgRx/Signals, Nx, Playwright. Résultats : >80% de couverture de tests, +40% de performance, mentorat de 2 développeurs.";
    }

    if (has('sncf', 'ferroviaire', 'sis', 'kalisoft', 'migration')) {
      return en
        ? "At **SNCF Voyageur** (via KALISOFT, 2022–2025), Moncif was Technical Lead on the **SIS** railway supervision app: full **AngularJS → Angular 17 migration**. Results: +40% performance, 85% test coverage, mentored 4 developers and handled recruitment."
        : "Chez **SNCF Voyageur** (via KALISOFT, 2022–2025), Moncif était Référent Technique sur l'application **SIS** de supervision ferroviaire : **migration complète AngularJS → Angular 17**. Résultats : +40% de performance, 85% de couverture de tests, mentorat de 4 développeurs et recrutement.";
    }

    if (has('capgemini', 'psa', 'peugeot', 'citro', 'digidrive', 'fret', 'rex')) {
      return en
        ? "At **Capgemini** (2019–2022, Lead Software Engineer), Moncif led **5 projects across 2 clients**: PSA Group (DigiDrive, MyMarqueWeb, Site Presse — incl. My Peugeot & My Citroën apps) and SNCF (Rex@fret, OSI GL ERP). Angular 8, Spring Boot, SOLID architecture, 90% test coverage."
        : "Chez **Capgemini** (2019–2022, Lead Software Engineer), Moncif a piloté **5 projets sur 2 clients** : PSA Groupe (DigiDrive, MyMarqueWeb, Site Presse — dont les apps My Peugeot & My Citroën) et SNCF (Rex@fret, OSI GL ERP). Angular 8, Spring Boot, architecture SOLID, 90% de couverture de tests.";
    }

    if (has('projet', 'project', 'réalisation', 'realisation', 'portfolio')) {
      return en
        ? "Featured projects: **My Peugeot** & **My Citroën** (PSA, Angular), **Groupe BADR** & **RCOMAROC** (corporate sites), **Code Post** (Laravel), plus the enterprise apps **NCBS** (BPI) and **SIS** (SNCF). Check the Projects section for screenshots & details!"
        : "Projets phares : **My Peugeot** & **My Citroën** (PSA, Angular), **Groupe BADR** & **RCOMAROC** (sites corporate), **Code Post** (Laravel), plus les applications d'entreprise **NCBS** (BPI) et **SIS** (SNCF). Regarde la section Projets pour les captures & détails !";
    }

    if (has('compétence', 'competence', 'skill', 'stack', 'techno', 'angular', 'typescript', 'rxjs', 'ngrx')) {
      return en
        ? "Moncif is **Expert** in Angular (8→21), TypeScript, RxJS, NgRx/Signals, HTML5/SCSS, Tailwind, Angular Material, PrimeNG. **Advanced**: Spring Boot, REST, Docker, GitLab CI/CD, Nx, Playwright, SonarQube. Practices: TDD, BDD, SOLID, Clean Code, DDD, Agile SAFe."
        : "Moncif est **Expert** Angular (8→21), TypeScript, RxJS, NgRx/Signals, HTML5/SCSS, Tailwind, Angular Material, PrimeNG. **Avancé** : Spring Boot, REST, Docker, GitLab CI/CD, Nx, Playwright, SonarQube. Pratiques : TDD, BDD, SOLID, Clean Code, DDD, Agile SAFe.";
    }

    if (has('disponib', 'available', 'contact', 'email', 'mail', 'joindre', 'reach', 'embauche', 'recrut', 'cdi', 'freelance')) {
      return en
        ? "Moncif is **available within 3 months** for a **Lead Frontend / Senior Angular** role in Paris (hybrid), open to **permanent or freelance**. 📧 **laarajmoncif@gmail.com** · GitHub: github.com/monsefdev"
        : "Moncif est **disponible sous 3 mois** pour un poste **Lead Frontend / Senior Angular** à Paris (hybride), ouvert au **CDI ou Freelance**. 📧 **laarajmoncif@gmail.com** · GitHub : github.com/monsefdev";
    }

    if (has('formation', 'diplome', 'diplôme', 'étude', 'etude', 'master', 'certif', 'education', 'study')) {
      return en
        ? "Education: **Master in Software Engineering & Web Apps** (FST Settat, 2020-2021), Bachelor in Computer Networks, Technical Diploma. Microsoft certifications: **70-461** (SQL Server) and **70-480** (HTML5/JS/CSS3)."
        : "Formation : **Master Génie Logiciel & Web Applications** (FST Settat, 2020-2021), Licence Réseaux Informatiques, Brevet Technicien. Certifications Microsoft : **70-461** (SQL Server) et **70-480** (HTML5/JS/CSS3).";
    }

    if (has('expérience', 'experience', 'parcours', 'carrière', 'carriere', 'ans', 'years', 'qui', 'who')) {
      return en
        ? "Moncif LAARAJ is a **Lead Frontend Engineer / Expert Angular** with **9+ years** of experience (5 as Technical Lead). Career: ORIKA/CapOffshore (2016) → Capgemini Lead (2019) → SNCF Referent (2022) → BPI France Expert (2025). 3 major accounts: BPI France, SNCF, PSA."
        : "Moncif LAARAJ est **Lead Frontend Engineer / Expert Angular** avec **9+ ans** d'expérience (5 ans comme Référent Technique). Parcours : ORIKA/CapOffshore (2016) → Lead Capgemini (2019) → Référent SNCF (2022) → Expert BPI France (2025). 3 grands comptes : BPI France, SNCF, PSA.";
    }

    return this.fallbackText();
  }

  private fallbackText(): string {
    return this.tr.isEN()
      ? "I can tell you about Moncif's **experience** (BPI France, SNCF, Capgemini), his **projects**, his **skills** or his **availability**. What would you like to know? For anything else: 📧 laarajmoncif@gmail.com"
      : "Je peux te parler de l'**expérience** de Moncif (BPI France, SNCF, Capgemini), de ses **projets**, de ses **compétences** ou de sa **disponibilité**. Que veux-tu savoir ? Pour le reste : 📧 laarajmoncif@gmail.com";
  }
}
