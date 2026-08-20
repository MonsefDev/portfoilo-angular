# 🤖 Assistant IA — Cloudflare Worker

Backend gratuit du chatbot du portfolio, propulsé par **Cloudflare Workers AI** (modèle Llama 3.3, gratuit).

> Tant que le worker n'est pas déployé, le chatbot fonctionne déjà en **mode local** (réponses depuis les données). Le déploiement ci-dessous active la **vraie IA conversationnelle**.

## Prérequis
- Un compte **Cloudflare gratuit** → https://dash.cloudflare.com/sign-up
- Node.js installé

## Déploiement (≈ 5 minutes)

```bash
# 1. Aller dans le dossier worker
cd worker

# 2. Installer les dépendances
npm install

# 3. Se connecter à Cloudflare (ouvre le navigateur)
npx wrangler login

# 4. Déployer 🚀
npx wrangler deploy
```

À la fin, Wrangler affiche l'URL publique du worker, par exemple :

```
https://moncif-chat.<ton-sous-domaine>.workers.dev
```

## Brancher le chatbot sur l'IA

Ouvre `src/app/services/chat.service.ts` et colle l'URL **+ `/`** (ou l'URL telle quelle) dans :

```ts
const WORKER_URL = 'https://moncif-chat.<ton-sous-domaine>.workers.dev';
```

Rebuild le portfolio (`npm run build`) → le chatbot utilise désormais la vraie IA.
S'il y a la moindre erreur réseau, il bascule automatiquement sur le mode local. ✅

## Tester en local (optionnel)
```bash
npx wrangler dev
# puis WORKER_URL = 'http://localhost:8787'
```

## Coût & limites
- **Gratuit** : Workers AI offre ~10 000 requêtes/jour gratuites, Workers ~100 000 requêtes/jour.
- Largement suffisant pour un portfolio. Au-delà, le worker renvoie une erreur et le chatbot bascule en local.

## Modèle utilisé
`@cf/meta/llama-3.3-70b-instruct-fp8-fast` — bon compromis qualité/vitesse.
Tu peux en changer dans `src/index.ts` (constante `MODEL`). Liste : https://developers.cloudflare.com/workers-ai/models/

## 🔔 Agent d'alerte lead (email via Resend) — optionnel

Le worker peut envoyer une **notification par email en temps réel** quand un visiteur montre un signal fort d'intérêt (téléchargement du CV, question sur la disponibilité, ou 3+ questions au chatbot). Aucune donnée personnelle n'est stockée. **Sans les 2 secrets ci-dessous, la fonctionnalité est simplement inactive** (le reste marche identiquement).

**Créer la clé API Resend :**
1. Crée un compte gratuit sur **https://resend.com** — inscris-toi avec **l'adresse où tu veux recevoir les alertes** (ex. `laarajmoncif@gmail.com`).
2. **API Keys** → **Create API Key** → copie la clé (`re_...`).
3. Sans domaine vérifié, Resend n'autorise l'envoi **que vers l'email de ton compte** — ce qui suffit ici (tu te notifies toi-même, expéditeur `onboarding@resend.dev`).
   *(Optionnel : vérifie `laarajmoncif.fr` dans Resend pour envoyer depuis `alerts@laarajmoncif.fr`.)*

**Configurer les 2 secrets** (jamais en dur dans le code) :
```bash
cd worker
npx wrangler secret put RESEND_API_KEY   # colle la clé re_...
npx wrangler secret put ALERT_EMAIL      # l'email qui reçoit les alertes
```
Puis `npx wrangler deploy`. Tu recevras un email **« 🔔 Nouveau lead — laarajmoncif.fr »** avec un résumé en 1 ligne + l'heure de Paris.
