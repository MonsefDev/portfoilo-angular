# 📘 Documentation — Portfolio Moncif LAARAJ

> Portfolio personnel moderne d'un **Lead Frontend Engineer / Expert Angular**.
> Single-page Angular 20, bilingue (FR/EN), dark/light mode, avec un **assistant IA conversationnel**.

Dernière mise à jour : Juin 2026.

---

## 1. Présentation

Portfolio interactif pour relancer une recherche d'emploi (CDI / Freelance — Lead Frontend / Senior Angular).
Objectif : présenter le parcours de façon moderne, crédible et différenciante, optimisé pour les recruteurs tech.

**Profil mis en avant :** 9+ ans d'expérience, 3 grands comptes (BPI France · SNCF · PSA Groupe), Expert Angular 8→21.

---

## 2. Stack technique

| Catégorie | Technologies |
|---|---|
| Framework | **Angular 20** (standalone components, signals, control flow `@if/@for`) |
| Styles | **Tailwind CSS 3** + SCSS (`src/styles.scss`) |
| Polices | **Syne** (display/titres), **Inter** (texte), **JetBrains Mono** (mono) |
| i18n | Service maison (`TranslationService`) + fichiers JSON FR/EN |
| Backend chatbot | **Cloudflare Worker** + **Workers AI** (Llama 3.3) — gratuit |
| Build | Angular CLI (`@angular/build`) |

> ⚠️ **Node 22 requis** (`nvm use 22`). Angular 20 exige Node ≥ 20.19. Le `npm start` / `npm run build` échoue sous Node 20.17.

---

## 3. Structure des fichiers

```
portfolio-angular/
├── public/
│   ├── profile.jpg              ← photo de profil (hero)
│   ├── logos/                   ← logos entreprises (timeline expériences + escalier)
│   │   ├── acensi.png  kalisoft.png  capgemini.png  psa.png
│   │   ├── capoffshore.png  imperial.png  nawarit.png  orika.png
│   │   ├── bpi.png  sncf.png   (utilisés dans l'escalier "Mon parcours")
│   ├── projects/                ← captures d'écran des projets (JPEG optimisés)
│   │   ├── mypeugeot.jpg  mycitroen.jpg  groupebadr.jpg  rcomaroc.jpg  codepost.jpg
│   └── certs/                   ← badges Microsoft officiels
│       ├── cert-sql.png (70-461)  cert-web.png (70-480)
├── src/
│   ├── app/
│   │   ├── app.ts / app.html    ← racine, assemble les sections
│   │   ├── components/
│   │   │   ├── navbar/          ← nav + toggle langue + toggle thème
│   │   │   ├── hero/            ← accroche, photo glass card, stats, typewriter
│   │   │   ├── about/          ← paragraphes + stats + ESCALIER de carrière + courbe
│   │   │   ├── stack/          ← compétences par DOMAINE (Frontend/Backend/DevOps/Tests)
│   │   │   ├── experience/     ← TIMELINE horizontale + explorateur clients/projets
│   │   │   ├── projects/       ← galerie captures + filtres + modal détail
│   │   │   ├── education/      ← diplômes + certifications (badges) + langues
│   │   │   └── contact/        ← CHATBOT IA (remplace l'ancien formulaire)
│   │   ├── services/
│   │   │   ├── translation.service.ts  ← langue courante (signal) + t(key)
│   │   │   ├── theme.service.ts         ← dark/light
│   │   │   ├── scroll.service.ts        ← scroll + section active + reveal
│   │   │   ├── portfolio.service.ts     ← expose les données selon la langue
│   │   │   └── chat.service.ts          ← logique chatbot (worker + fallback local)
│   │   └── data/
│   │       ├── portfolio.model.ts       ← interfaces TypeScript
│   │       └── portfolio.data.ts        ← TOUTES les données (FR + EN)
│   ├── assets/i18n/{fr,en}.json         ← libellés d'interface
│   └── styles.scss                      ← design system global
├── worker/                              ← backend chatbot (Cloudflare)
│   ├── src/index.ts                     ← proxy + base de connaissances + Workers AI
│   ├── wrangler.toml  package.json  README.md
└── DOCUMENTATION.md                     ← ce fichier
```

---

## 4. Les sections (de haut en bas)

1. **Hero** — nom en gradient (Syne), titre typewriter, badge dispo, sous-titre, 4 stats (9+ ans, 3 grands comptes, 6+ devs, 8→21), photo en glass card avec chips flottants (Angular 21, NgRx, BPI, SNCF).
2. **À propos** — 3 paragraphes + 4 stats + **« Mon parcours en 4 étapes »** : escalier ascendant (Junior→Lead→Senior→Expert) + courbe de croissance animée + étape actuelle héroïsée. Repère d'axe + version mobile (escalier vertical).
3. **Stack Technique** — grille par **domaine** : Frontend (techs cœur surlignées), Backend·API, DevOps·Outils, Tests·Méthodes.
4. **Expériences** — **timeline horizontale** avec les logos des **sociétés de service** (ORIKA → NawarIT → Imperial Pneu → CapOffshore → Capgemini → Kalisoft → ACENSI). Clic sur un logo → panneau détail en dessous (clients/projets, missions, résultats, stack). Capgemini = 5 projets / 2 clients.
5. **Projets** — galerie avec **captures d'écran** + filtres (Tous/Banque/Transport/Automobile/Web) + **modal** détail. Projets : NCBS, SIS (dégradé), My Peugeot, My Citroën, Groupe BADR, RCOMAROC, Code Post (captures).
6. **Formation** — diplômes + **certifications avec badges Microsoft officiels** (70-461, 70-480) + langues (barres).
7. **Contact** — **Chatbot IA** + infos directes (email, GitHub).

---

## 5. Système de design

- **Palette :** Primary = Indigo (`#4f46e5` / `#6366f1`), Accent = Cyan (`#06b6d4` / `#22d3ee`). Amber réservé au niveau "Lead". *(Choix masculin et cohérent — le violet/rose initial a été abandonné.)*
- **Niveaux de carrière (couleurs partout) :** Junior=gris, Lead=amber, Senior=cyan, Expert=indigo.
- **Dark / Light :** via la classe `.dark` sur `<html>`. Light = `bg-slate-50`, Dark = `bg-dark-900`. Les composants utilisent `text-slate-900 dark:text-white`, glass cards adaptées via `:where(.dark)`.
- **Animations :** scroll reveal, escalier + courbe, timeline, modals, typing chatbot. Respect de `prefers-reduced-motion`.
- **Glass cards** (`.glass-card`), gradient text, orbes ambiants animés.

---

## 6. Les données (`src/app/data/portfolio.data.ts`)

Deux objets : `portfolioDataFR` et `portfolioDataEN`. Structure (`PortfolioContent`) :
- `careerSteps[]` — 4 étapes de l'escalier (À propos)
- `experiences[]` — sociétés de service, chacune avec `projects[]` (name, client, type, description, missions, results, stack)
- `skillGroups[]` — expert/advanced/solid
- `techDomains[]` — Frontend/Backend/DevOps/Tests (section Stack)
- `projects[]` — galerie projets (avec `image?`)
- `education[]`, `certifications[]` (avec `badge`, `code`)

> Pour modifier un texte de profil → éditer ici (FR **et** EN).

---

## 7. Assets (logos, captures, badges)

- Récupérés de l'ancien portfolio (`monsefdev.github.io/portfolio`) + fournis par Moncif.
- **Traitement images via Pillow** (Python) : suppression du damier/fond (flood-fill + retrait des pixels gris-clair), recadrage, redimensionnement, conversion JPEG (captures → 26-63 Ko).
- **Logos à fond foncé** (ex. ACENSI blanc-sur-navy) : classe `.logo-fill` → remplit la pastille au lieu d'un cadre blanc. Géré par `isDarkLogo()` dans le composant Experience.

---

## 8. Chatbot IA 🤖

### Architecture
```
Navigateur (Angular) ──POST──> Cloudflare Worker ──> Workers AI (Llama 3.3)
   chat.service.ts              worker/src/index.ts     (base de connaissances)
```

- **Frontend :** `chat.service.ts` + `contact.ts/html` (UI bulles, typing, suggestions).
- **Backend :** `worker/` — proxy sécurisé. La clé/accès reste côté serveur (un site statique ne peut pas cacher de secret).
- **Base de connaissances :** embarquée dans le worker (`KNOWLEDGE` dans `worker/src/index.ts`).
- **Fallback local :** si le worker échoue, `chat.service.ts` répond via du keyword-matching sur les données → jamais de coupure.

### Déploiement (déjà fait)
- Compte Cloudflare : `laarajmoncif@gmail.com` (account ID `bafcc08b17401471f67a184b91368757`)
- Sous-domaine : **monsefdev.workers.dev**
- URL worker : **https://moncif-chat.monsefdev.workers.dev** (branché dans `chat.service.ts` → `WORKER_URL`)
- Modèle : `@cf/meta/llama-3.3-70b-instruct-fp8-fast`
- **Coût : gratuit** (~10 000 req/jour Workers AI, ~100 000 req/jour Workers)
- CORS ouvert (`*`) → marche depuis n'importe quel hébergeur (GitHub Pages inclus).

### Re-déployer après modification du worker
```bash
cd worker
npx wrangler deploy
```

> ⚠️ **Important :** si tu modifies `portfolio.data.ts`, pense à mettre à jour AUSSI la constante `KNOWLEDGE` dans `worker/src/index.ts` puis redéployer, sinon l'IA répond avec d'anciennes infos.

---

## 9. Commandes utiles

```bash
nvm use 22                 # toujours (Node ≥ 20.19 requis)

# Portfolio
npm start                  # serveur dev → http://localhost:4200
npm run build              # build de production → dist/

# Worker (chatbot)
cd worker
npm install
npx wrangler login         # connexion Cloudflare (une fois)
npx wrangler deploy        # déployer / mettre à jour le worker
npx wrangler dev           # tester le worker en local
```

---

## 10. Points de maintenance importants

1. **Node 22 obligatoire** (`nvm use 22`).
2. **Données bilingues** : modifier FR **et** EN dans `portfolio.data.ts`.
3. **Tailwind opacités** : seules les valeurs standard existent (`/5 /10 /15 /20 /25…`). `/8`, `/12` cassent le build.
4. **Sync base de connaissances** chatbot après modif des données (voir §8).
5. **Light mode** : ne pas utiliser `text-white` seul → toujours `text-slate-900 dark:text-white`.
6. **curl système macOS** échoue en TLS sur `*.workers.dev` (LibreSSL) → tester le worker via Node ou navigateur.

---

## 11bis. Déploiement (FAIT — Cloudflare Pages)

Le site est **en ligne sur Cloudflare Pages** (gratuit, racine, CDN mondial) :
- **URL de production : https://laarajmoncif.fr** (domaine perso OVH, SSL Cloudflare) + `www.laarajmoncif.fr`
- URL technique Cloudflare (toujours active) : `https://portfolio-moncif.pages.dev`
- Projet Cloudflare Pages : `portfolio-moncif` (branche prod : `main`)
- DNS géré par Cloudflare (nameservers `doug/mira.ns.cloudflare.com`), email pro via OVH (MX `mx1/2/3.mail.ovh.net`).
- Même compte que le worker chatbot → tout au même endroit.
- ⚠️ Ne PAS utiliser les URLs à hash (`<hash>.portfolio-moncif.pages.dev`) = previews par déploiement.
- (Ancien projet `portfolio` / `portfolio-h6e.pages.dev` peut être supprimé dans le dashboard.)

**Re-déployer après une modification du portfolio :**
```bash
nvm use 22
npm run build
npx wrangler pages deploy dist/portfolio-angular/browser --project-name=portfolio-moncif --branch=main --commit-dirty=true
```

Chaque déploiement crée aussi une URL de preview unique (ex. `42dbf4cb.portfolio-h6e.pages.dev`).
Domaine perso possible plus tard via le dashboard Cloudflare Pages → Custom domains.

---

## 11. (Alternative) Déploiement GitHub Pages

- **Racine** (`monsefdev.github.io`) → tout marche tel quel (chemins d'images absolus `/logos/...` OK).
- **Sous-dossier** (`/portfolio/`) → régler `ng build --base-href /portfolio/` + adapter les chemins d'images absolus (sinon images cassées). Le **chatbot fonctionne dans les deux cas** (Worker indépendant + CORS ouvert).

---

## 12. Historique des décisions clés

- Palette **indigo/cyan** retenue (abandon du violet/rose jugé peu masculin).
- **Escalier + courbe** pour raconter la progression de carrière (section À propos).
- Stack en **grille par domaine** (option simple retenue après orbital/bento/marquee).
- Expériences en **timeline + explorateur** par société de service ; logos **ESN** (ACENSI, Kalisoft) plutôt que clients sur la timeline.
- Projets en **galerie avec captures** comme l'ancien portfolio + ajout **Groupe BADR**.
- **« Banque »** au lieu de « Fintech » (BPI France est une vraie banque).
- **3 grands comptes** (ajout PSA).
- Angular affiché **8 → 21**.
- Formulaire de contact remplacé par un **chatbot IA** (Cloudflare, gratuit).
