/**
 * Cloudflare Worker — Assistant IA du portfolio de Moncif LAARAJ
 * Proxy sécurisé vers Workers AI (Llama 3.3). Gratuit.
 *
 * Déploiement : voir worker/README.md
 */

export interface Env {
  AI: Ai;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';

const KNOWLEDGE = `
PROFIL
- Nom : Moncif LAARAJ
- Titre : Lead Frontend Engineer · Expert Angular (versions 8 à 21)
- Expérience : 9+ ans, dont 5 ans comme Référent Technique
- Localisation : Paris, Hybride
- Disponibilité : sous 3 mois
- Recherche : CDI ou Freelance — Lead Frontend / Senior Angular / Tech Lead Fullstack Java-Angular
- Email : laarajmoncif@gmail.com — GitHub : github.com/monsefdev
- 3 grands comptes : BPI France, SNCF, PSA Groupe

EXPÉRIENCES
1) BPI France (via l'ESN ACENSI) — Ingénieur Senior Frontend / Référent Technique — depuis juillet 2025 — secteur Banque / Core Banking.
   Projet "Console NCBS" : interface de monitoring des comptes de la plateforme Vault Core (Thought Machine SaaS) pour les métiers BPI France (Financement Court Terme, Garantie, Innovation, Assurance Export).
   Stack : Angular 21, NgRx, Signals Store, RxJS, Nx, TypeScript, Playwright, GitLab CI/CD, Docker, SonarQube.
   Réalisations : >80% de couverture de tests, 19+ composants réutilisables, chargement 1.2s, +40% de performance, mentorat de 2 développeurs.
2) SNCF Voyageur (via l'ESN KALISOFT) — Référent Technique Frontend — sept 2022 à juin 2025 — Transport / Supervision ferroviaire.
   Projet "SIS" : migration complète AngularJS → Angular 17 d'une application critique de supervision ferroviaire 24h/24.
   Stack : Angular 17, RxJS, JsonForms, TypeScript, Spring Boot, Docker, Jenkins, GitLab CI/CD.
   Réalisations : migration réussie, +40% performance, 85% de couverture, mentorat de 4 développeurs, recrutement.
3) Capgemini — Lead Software Engineer Angular — mars 2019 à sept 2022 — Casablanca.
   5 projets sur 2 clients : PSA Groupe (DigiDrive, MyMarqueWeb, Site Presse — incluant les espaces My Peugeot & My Citroën) et SNCF (Rex@fret, OSI GL ERP).
   Stack : Angular 8, RxJS, Material UI, Spring Boot, MongoDB/PostgreSQL, Docker, Storybook. Architecture SOLID, 90% de couverture de tests.
4) Premières expériences (2015-2019, Casablanca) : CapOffshore (plateforme e-commerce, Laravel), Imperial Pneu (app de pointage, C#/ASP.NET), NawarIT (sites CMS Drupal/WordPress), ORIKA (solution de caisse, Python/Tornado).

PROJETS VITRINE : My Peugeot & My Citroën (PSA, Angular 7), Groupe BADR & RCOMAROC (sites WordPress), Code Post (Laravel).

COMPÉTENCES
- Expert : Angular 8→21, TypeScript, RxJS, NgRx/Signals, HTML5/SCSS, Tailwind CSS, Angular Material, PrimeNG.
- Avancé : Spring Boot, REST API, Docker, GitLab CI/CD, Nx, Playwright, SonarQube, Figma.
- Solide : Java, Node.js, PostgreSQL, MongoDB, Jest, Storybook, PHP/Laravel.
- Méthodes : TDD, BDD, SOLID, Clean Code, Design Patterns, DDD, Agile SAFe, Scrum, Code Review, Pair Programming.

AUTRES FRAMEWORKS FRONTEND / BACKEND JS (hors expertise principale) :
Le cœur d'expertise de Moncif est Angular. En parallèle, il explore et pratique React, Vue.js, Node.js et Express.js à travers des PROJETS PERSONNELS (side-projects et veille technologique).
Il a donc une bonne connaissance opérationnelle de l'écosystème JavaScript/TypeScript moderne et s'adapte rapidement à un autre framework frontend. Niveau : intermédiaire/opérationnel sur React et Vue.js, capable de monter une API Node.js/Express. Son expertise senior reste Angular.

FORMATION : Master Génie Logiciel & Web Applications (FST Settat, 2020-2021), Licence Réseaux Informatiques (2015-2016), Brevet Technicien Développement (2013-2015).
CERTIFICATIONS Microsoft : 70-461 (Querying SQL Server), 70-480 (Programming in HTML5 with JavaScript & CSS3).
LANGUES : Français (langue de travail), Arabe (langue maternelle), Anglais (opérationnel).
`.trim();

function systemPrompt(lang: string): string {
  const langLine = lang === 'en'
    ? 'Always answer in English.'
    : 'Réponds toujours en français.';
  return `Tu es l'assistant virtuel du portfolio de Moncif LAARAJ. Tu réponds aux recruteurs et visiteurs de manière professionnelle, chaleureuse et CONCISE (2-4 phrases max, en gras les éléments clés avec **). ${langLine}

Règles :
- Réponds UNIQUEMENT à partir des informations ci-dessous sur Moncif.
- Si la question sort de ce cadre (sujet sans rapport, question personnelle hors-profil), invite poliment à contacter Moncif par email (laarajmoncif@gmail.com).
- Ne JAMAIS inventer d'informations qui ne sont pas dans la base.
- Parle de Moncif à la 3e personne.

BASE DE CONNAISSANCES :
${KNOWLEDGE}`;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS });
    }

    try {
      const body = (await request.json()) as { lang?: string; messages?: ChatMessage[] };
      const lang = body.lang === 'en' ? 'en' : 'fr';
      const history = (body.messages ?? []).slice(-8); // garde les 8 derniers tours

      if (!history.length) {
        return Response.json({ reply: '' }, { headers: CORS });
      }

      const messages = [
        { role: 'system', content: systemPrompt(lang) },
        ...history.map(m => ({ role: m.role, content: m.content })),
      ];

      const result = (await env.AI.run(MODEL, {
        messages,
        max_tokens: 400,
        temperature: 0.3,
      })) as { response?: string };

      const reply = (result.response ?? '').trim() ||
        (lang === 'en'
          ? 'Sorry, I could not generate an answer. Contact Moncif at laarajmoncif@gmail.com.'
          : 'Désolé, je n\'ai pas pu générer de réponse. Contacte Moncif à laarajmoncif@gmail.com.');

      return Response.json({ reply }, { headers: CORS });
    } catch (err) {
      return Response.json(
        { reply: 'Erreur serveur. Contacte Moncif à laarajmoncif@gmail.com.' },
        { status: 500, headers: CORS }
      );
    }
  },
};
