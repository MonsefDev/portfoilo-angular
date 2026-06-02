import { PortfolioContent } from './portfolio.model';

export const portfolioDataFR: PortfolioContent = {
  careerSteps: [
    { year: '2016', title: 'Développeur Web', company: 'CapOffshore · ORIKA', levelKey: 'junior', logo: 'capoffshore' },
    { year: '2019', title: 'Lead Software Engineer', company: 'Capgemini', levelKey: 'lead', logo: 'psa' },
    { year: '2022', title: 'Référent Technique Frontend', company: 'SNCF Voyageur', levelKey: 'senior', logo: 'sncf' },
    { year: '2025', title: 'Expert & Référent Technique', company: 'BPI France', levelKey: 'expert', logo: 'bpi' },
  ],

  experiences: [
    {
      id: 'bpi', company: 'BPI France', esn: 'ACENSI', logo: 'acensi',
      role: 'Ingénieur Senior Frontend — Référent Technique',
      start: 'Juillet 2025', end: null, level: 'expert',
      domain: 'Banque · Core Banking', location: 'Paris',
      projects: [
        {
          name: 'Console NCBS', client: 'BPI France', type: 'From-scratch · Référent',
          description: 'Interface d\'administration stratégique pour le monitoring des comptes de la plateforme Vault Core (SaaS bancaire de Thought Machine), pour l\'ensemble des métiers BPI France : Financement Court Terme, Garantie, Innovation et Assurance Export.',
          missions: [
            'Référent technique Frontend : architecture Nx, standards de code et conventions',
            'Conception des maquettes Figma et coordination UX/UI inter-équipes',
            'Développement de fonctionnalités critiques : recherche multicritères, monitoring des balances et postings, gestion des erreurs DLQ',
            'Ségrégation des accès par domaine métier avec SSO (NgRx Signals Store)',
            'Stratégie de tests : unitaires Jasmine/Karma + E2E Playwright (> 80%)',
            'Pilotage des sprints, planification des releases, mentorat de 2 développeurs',
          ],
          results: [
            'Couverture de tests maintenue > 80% via SonarQube',
            '19+ composants réutilisables dans une architecture Nx',
            'Chargement initial réduit à 1.2s · Design System Propulsion (-30% temps de dev)',
            'Performance globale améliorée de +40%',
          ],
          stack: ['Angular 21', 'NgRx', 'Signals Store', 'RxJS', 'Nx', 'TypeScript', 'SASS', 'Spring Boot', 'Playwright', 'GitLab CI/CD', 'Docker', 'SonarQube'],
        },
      ],
    },
    {
      id: 'sncf', company: 'SNCF Voyageur', esn: 'KALISOFT', logo: 'kalisoft',
      role: 'Ingénieur Senior Frontend — Référent Technique',
      start: 'Septembre 2022', end: 'Juin 2025', level: 'senior',
      domain: 'Transport · Supervision ferroviaire', location: 'Paris',
      projects: [
        {
          name: 'Application SIS', client: 'SNCF Voyageur', type: 'Migration · Référent',
          description: 'Migration complète de l\'application SIS (Système d\'Information de la Supervision) de AngularJS vers Angular 17. Application critique de supervision ferroviaire utilisée 24h/24 par les équipes opérationnelles pour la gestion du réseau en temps réel.',
          missions: [
            'Responsable et référent technique de la migration AngularJS → Angular 17',
            'Architecture frontend modulaire et définition des patterns de migration',
            'Supervision des revues de code, couverture maintenue à 85%',
            'Recrutement et intégration de nouveaux développeurs',
            'Collaboration inter-équipes pour la réutilisation des composants',
            'Animation des rétrospectives Agile, déploiement des releases, mentorat de 4 devs',
          ],
          results: [
            'Migration AngularJS → Angular 17 menée à bien sur tout le codebase',
            'Performance améliorée de +40% post-migration',
            '15+ composants réutilisables · Design System interne (-30% temps de dev)',
            'Couverture de tests maintenue à 85%',
          ],
          stack: ['Angular 17', 'RxJS', 'Ngx', 'JsonForms', 'TypeScript', 'SASS', 'Bootstrap', 'Spring Boot', 'REST API', 'Docker', 'Jenkins', 'GitLab CI/CD'],
        },
      ],
    },
    {
      id: 'capgemini', company: 'Capgemini', logo: 'capgemini',
      role: 'Lead Software Engineer Angular',
      start: 'Mars 2019', end: 'Septembre 2022', level: 'lead',
      domain: 'Automobile · Fret · ERP', location: 'Casablanca',
      projects: [
        {
          name: 'DigiDrive', client: 'PSA Groupe', type: 'From-scratch',
          description: 'Application web from-scratch pour le groupe PSA. Architecture modulaire SOLID, documentation Storybook complète et tests à 90% de couverture.',
          missions: [
            'Lead technique : analyse, conception, rédaction des spécifications',
            'Développement from-scratch Angular 8',
            'Supervision des revues de code et documentation Storybook',
            'Tests unitaires et fonctionnels (90%)',
          ],
          results: ['Livré en production dans les délais', '90% de couverture de tests', 'Architecture SOLID reconnue par le client', 'Documentation Storybook exhaustive'],
          stack: ['Angular 8', 'RxJS', 'Material UI', 'TypeScript', 'Spring Boot', 'MongoDB', 'Docker', 'Figma', 'Storybook'],
        },
        {
          name: 'MyMarqueWeb', client: 'PSA Groupe', type: 'From-scratch',
          description: 'Application web from-scratch pour le groupe PSA : intégration des maquettes, développement des fonctionnalités et collecte des besoins en workshop client.',
          missions: [
            'Participation aux workshops client et collecte des besoins',
            'Analyse, conception technique et spécifications détaillées',
            'Intégration des maquettes et développement Angular',
            'Rédaction des tests unitaires et fonctionnels',
          ],
          results: ['Application livrée en production', 'Specs techniques détaillées', 'Intégration fidèle des maquettes', 'Tests fonctionnels couvrants'],
          stack: ['Angular 8', 'RxJS', 'NgBootstrap', 'TypeScript', 'Symfony 4', 'REST API', 'PostgreSQL', 'Docker'],
        },
        {
          name: 'Site Presse', client: 'PSA Groupe', type: 'TMA',
          description: 'Maintenance et évolution du site presse PSA (Drupal). Développement de modules, gestion des accès, optimisation des performances et application des correctifs de sécurité.',
          missions: [
            'Développement et personnalisation de modules Drupal',
            'Mise en place de différents niveaux d\'accès',
            'Amélioration des temps de chargement et mise en cache',
            'Application des correctifs de sécurité et mises à jour',
          ],
          results: ['Temps de chargement améliorés', 'Sécurité renforcée (correctifs)', 'Niveaux d\'accès maîtrisés', 'Maintenance Drupal continue'],
          stack: ['PHP', 'Drupal 7', 'JavaScript', 'REST API', 'MySQL', 'Docker', 'AWS'],
        },
        {
          name: 'Rex@fret', client: 'SNCF', type: 'From-scratch',
          description: 'Application de gestion fret from-scratch pour SNCF. Conception et développement de la partie Frontend, architecture modulaire, chiffrage et encadrement technique.',
          missions: [
            'Analyse et conception technique, spécifications',
            'Développement from-scratch de la partie Frontend Angular 8',
            'Chiffrage, revue de code et tests unitaires',
            'Encadrement technique des équipiers Frontend',
          ],
          results: ['Application livrée en production', 'Architecture modulaire réutilisée', '90% de couverture de tests', 'Lead technique reconnu'],
          stack: ['Angular 8', 'RxJS', 'Material UI', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'Storybook'],
        },
        {
          name: 'OSI GL ERP', client: 'SNCF', type: 'From-scratch',
          description: 'ERP from-scratch pour la gestion des opérations internes SNCF. Frontend Angular 8 avec PrimeNG, intégration des services REST Spring Boot et architecture scalable.',
          missions: [
            'Analyse et conception de l\'architecture ERP',
            'Développement from-scratch du frontend Angular 8 (PrimeNG)',
            'Intégration des services REST Spring Boot',
            'Tests unitaires et encadrement technique',
          ],
          results: ['ERP livré et adopté par les équipes', 'Architecture modulaire scalable', '90% de couverture de tests'],
          stack: ['Angular 8', 'PrimeNG', 'RxJS', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
        },
      ],
    },
    {
      id: 'capoffshore', company: 'CapOffshore', logo: 'capoffshore',
      role: 'Développeur Web Full Stack',
      start: 'Juin 2018', end: 'Mars 2019', level: 'junior',
      domain: 'E-commerce', location: 'Casablanca',
      projects: [
        {
          name: 'Plateforme E-commerce', client: 'CapOffshore', type: 'From-scratch',
          description: 'Conception et développement d\'une plateforme e-commerce complète : frontend, backend, paiement sécurisé, gestion des stocks en temps réel et personnalisation utilisateur.',
          missions: [
            'Développement frontend et backend de la plateforme',
            'Intégration d\'un système de paiement sécurisé',
            'Gestion des stocks en temps réel',
            'Tests, débogage et optimisation des performances',
          ],
          results: ['Plateforme e-commerce livrée', 'Paiement sécurisé intégré', 'Gestion des stocks temps réel'],
          stack: ['PHP', 'Laravel 5', 'JavaScript', 'Bootstrap', 'REST API', 'MySQL'],
        },
      ],
    },
    {
      id: 'imperial', company: 'Imperial Pneu', logo: 'imperial',
      role: 'Développeur Web Full Stack',
      start: 'Octobre 2017', end: 'Mai 2018', level: 'junior',
      domain: 'Retail · RH', location: 'Casablanca',
      projects: [
        {
          name: 'Application de pointage', client: 'Imperial Pneu', type: 'From-scratch',
          description: 'Application de pointage temps réel : suivi des heures, gestion des absences, génération de rapports et notifications, avec gestion des accès employés/gestionnaires.',
          missions: [
            'Développement de l\'interface de pointage temps réel',
            'Système de suivi des heures et gestion des absences',
            'Génération de rapports et notifications',
            'Optimisation de la performance et de la sécurité',
          ],
          results: ['Pointage temps réel opérationnel', 'Rapports automatisés', 'Gestion des accès multi-rôles'],
          stack: ['C#', 'ASP.NET', 'JavaScript', 'Bootstrap', 'REST API', 'SQL Server'],
        },
      ],
    },
    {
      id: 'nawarit', company: 'NawarIT', logo: 'nawarit',
      role: 'Développeur Web',
      start: 'Mars 2017', end: 'Août 2017', level: 'junior',
      domain: 'CMS · Web', location: 'Casablanca',
      projects: [
        {
          name: 'Sites CMS', client: 'NawarIT', type: 'CMS',
          description: 'Création et gestion de sites web sous CMS (Drupal, WordPress) : thèmes personnalisés, SEO, formulaires, formation client et maintenance.',
          missions: [
            'Installation et configuration Drupal / WordPress',
            'Développement de thèmes personnalisés',
            'Optimisation SEO et intégration de formulaires',
            'Formation des clients à l\'utilisation du CMS',
          ],
          results: ['Plusieurs sites CMS livrés', 'Référencement SEO optimisé', 'Clients autonomes (formation)'],
          stack: ['PHP', 'Drupal', 'WordPress', 'jQuery', 'MySQL', 'Google Analytics'],
        },
      ],
    },
    {
      id: 'orika', company: 'ORIKA', logo: 'orika',
      role: 'Développeur Full Stack',
      start: 'Juillet 2016', end: 'Octobre 2016', level: 'junior',
      domain: 'Retail · Grande distribution', location: 'Casablanca',
      projects: [
        {
          name: 'Solution de caisse', client: 'ORIKA', type: 'From-scratch',
          description: 'Solution de caisse pour grandes surfaces : architecture backend Python/Tornado, interfaces Semantic UI, gestion des transactions et communication temps réel.',
          missions: [
            'Architecture backend avec Python et Tornado',
            'Création d\'interfaces utilisateur (Semantic UI)',
            'Logique de gestion des transactions et temps réel',
            'Développement d\'API RESTful et documentation',
          ],
          results: ['Solution de caisse livrée', 'Communication temps réel', 'API RESTful documentée'],
          stack: ['Python', 'Tornado', 'Semantic UI', 'JavaScript', 'RESTful API', 'PostgreSQL'],
        },
      ],
    },
  ],

  skillGroups: [
    {
      id: 'expert',
      skills: ['Angular 8→21', 'TypeScript', 'RxJS', 'NgRx / Signals Store', 'HTML5 / SCSS', 'Tailwind CSS', 'Angular Material', 'PrimeNG'],
    },
    {
      id: 'advanced',
      skills: ['Figma / Adobe XD', 'GitLab CI/CD', 'Docker', 'Spring Boot', 'REST API / Swagger', 'Playwright (E2E)', 'SonarQube', 'Nx Workspace'],
    },
    {
      id: 'solid',
      skills: ['Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Storybook', 'Jasmine / Karma', 'Jest', 'PHP / Laravel'],
    },
  ],

  techDomains: [
    {
      id: 'frontend', icon: '🎨', title: 'Frontend', subtitle: 'Cœur de métier',
      skills: [
        { n: 'Angular 8→21', s: true }, { n: 'TypeScript', s: true }, { n: 'RxJS', s: true },
        { n: 'NgRx / Signals', s: true }, { n: 'HTML5 / SCSS' }, { n: 'Tailwind CSS' },
        { n: 'Angular Material' }, { n: 'PrimeNG' },
      ],
    },
    {
      id: 'backend', icon: '⚙️', title: 'Backend · API', subtitle: 'Services & données',
      skills: [
        { n: 'Java' }, { n: 'Spring Boot' }, { n: 'REST API / Swagger' },
        { n: 'Node.js' }, { n: 'PostgreSQL' }, { n: 'MongoDB' },
      ],
    },
    {
      id: 'devops', icon: '🚀', title: 'DevOps · Outils', subtitle: 'Build & qualité',
      skills: [
        { n: 'Docker' }, { n: 'GitLab CI/CD' }, { n: 'Nx Workspace' },
        { n: 'SonarQube' }, { n: 'Figma / Adobe XD' },
      ],
    },
    {
      id: 'testing', icon: '🧪', title: 'Tests · Méthodes', subtitle: 'Qualité & pratiques',
      skills: [
        { n: 'Jasmine / Karma' }, { n: 'Playwright' }, { n: 'Jest' }, { n: 'Storybook' },
        { n: 'TDD · BDD' }, { n: 'SOLID' }, { n: 'Clean Code' }, { n: 'Agile SAFe' }, { n: 'Code Review' },
      ],
    },
  ],

  projects: [
    {
      id: 'ncbs', name: 'Console NCBS', company: 'BPI France', year: '2025 – Présent', type: 'fintech', featured: true,
      description: 'Interface d\'administration stratégique pour le monitoring des comptes Vault Core (Thought Machine) pour l\'ensemble des métiers BPI France.',
      context: 'BPI France modernise son cœur bancaire avec la solution SaaS Vault Core de Thought Machine. La Console NCBS est l\'interface critique permettant aux Business Analysts et Tech Leads de monitorer en temps réel les comptes de 4 domaines : Financement Court Terme, Garantie, Innovation et Assurance Export. Projet à fort enjeu : toute anomalie non détectée impacte directement la fiabilité du système bancaire de BPI France.',
      responsibilities: [
        'Référent technique Frontend : architecture Nx monorepo, standards et patterns',
        'Développement des fonctionnalités critiques : recherche multicritères, monitoring balances/postings, gestion erreurs DLQ',
        'Implémentation ségrégation des accès par domaine métier avec SSO (NgRx Signals Store)',
        'Conception des maquettes Figma et coordination UX/UI inter-équipes',
        'Stratégie de tests complète : Jasmine/Karma (unitaires) + Playwright (E2E)',
        'Pilotage technique des sprints et planification des releases',
        'Mentorat de 2 développeurs frontend',
      ],
      results: ['Couverture de tests > 80% maintenue via SonarQube', '19+ composants réutilisables livrés', 'Chargement initial réduit à 1.2s', 'Design System : -30% temps de dev', '+40% performance vs. ancienne app'],
      metrics: ['> 80% tests', '1.2s chargement', '19+ composants', '+40% perf'],
      stack: ['Angular 21', 'NgRx', 'Signals Store', 'RxJS', 'Nx', 'TypeScript', 'Playwright', 'GitLab CI/CD', 'Docker', 'SonarQube'],
    },
    {
      id: 'sis', name: 'Application SIS', company: 'SNCF Voyageur', year: '2022 – 2025', type: 'transport', featured: true,
      description: 'Migration complète AngularJS → Angular 17 du Système d\'Information de la Supervision ferroviaire. Référent technique, architecture et recrutement.',
      context: 'SNCF Voyageur utilise le SIS pour la supervision ferroviaire en temps réel. L\'application AngularJS nécessitait une migration complète vers Angular 17 pour maintenir la maintenabilité et moderniser l\'expérience des équipes opérationnelles. Projet critique : la supervision est une activité 24h/24.',
      responsibilities: [
        'Responsable et référent technique de la migration AngularJS → Angular 17',
        'Définition de l\'architecture modulaire et des patterns de migration',
        'Supervision des revues de code, couverture maintenue à 85%',
        'Recrutement et intégration de nouveaux développeurs',
        'Collaboration inter-équipes pour la réutilisation des composants',
        'Animation des rétrospectives Agile et déploiement des releases',
      ],
      results: ['Migration AngularJS → Angular 17 complète', '+40% performance post-migration', '15+ composants réutilisables', 'Design System : -30% temps de dev', '85% couverture maintenue'],
      metrics: ['Migration AngularJS→17', '+40% perf', '15+ composants', '85% couverture'],
      stack: ['Angular 17', 'RxJS', 'Ngx', 'JsonForms', 'TypeScript', 'SASS', 'Bootstrap', 'Spring Boot', 'Docker', 'Jenkins', 'GitLab CI/CD'],
    },
    {
      id: 'mypeugeot', name: 'My Peugeot', company: 'PSA Groupe · Capgemini', year: '2019 – 2021', type: 'automotive', featured: true,
      image: '/projects/mypeugeot.jpg',
      description: 'Espace personnel My Peugeot : gestion du véhicule, services connectés et prise de rendez-vous atelier pour les clients PSA.',
      context: 'My Peugeot est l\'espace client personnel de la marque Peugeot (groupe PSA), permettant aux conducteurs de gérer leur véhicule, accéder aux services connectés, planifier l\'entretien et profiter des offres. Développement Frontend Angular intégré au SI PSA.',
      responsibilities: ['Développement des interfaces Angular (espace véhicule, atelier, services)', 'Intégration des maquettes et respect de la charte PSA', 'Connexion aux APIs REST du SI PSA', 'Tests unitaires et fonctionnels'],
      results: ['Espace client livré en production', 'Expérience utilisateur fluide multi-services', 'Intégration fidèle de la charte Peugeot'],
      metrics: ['Espace client', 'Services connectés', 'Charte PSA', 'Responsive'],
      stack: ['Angular 7', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap', 'Symfony 4', 'REST API'],
    },
    {
      id: 'mycitroen', name: 'My Citroën', company: 'PSA Groupe · Capgemini', year: '2019 – 2021', type: 'automotive', featured: true,
      image: '/projects/mycitroen.jpg',
      description: 'Tableau de bord véhicule My Citroën : interface intuitive centrée utilisateur pour le suivi et les services du véhicule.',
      context: 'My Citroën est l\'espace personnel de la marque Citroën (groupe PSA). Application Angular orientée expérience utilisateur, offrant un tableau de bord clair pour le suivi du véhicule, l\'entretien et les services connectés.',
      responsibilities: ['Développement du tableau de bord et des modules Angular', 'Conception d\'une UX intuitive centrée utilisateur', 'Intégration des APIs REST et de la charte Citroën', 'Tests et optimisation des performances'],
      results: ['Tableau de bord livré en production', 'UX intuitive saluée', 'Cohérence avec l\'identité Citroën'],
      metrics: ['Dashboard véhicule', 'UX centrée user', 'Charte Citroën', 'Responsive'],
      stack: ['Angular 7', 'TypeScript', 'RxJS', 'SCSS', 'Symfony 4', 'REST API'],
    },
    {
      id: 'groupebadr', name: 'Groupe BADR', company: 'NawarIT', year: '2017', type: 'web', featured: true,
      image: '/projects/groupebadr.jpg',
      description: 'Site web corporate du Groupe BADR : identité de marque, présentation des valeurs et services, optimisé pour la visibilité.',
      context: 'Site vitrine corporate développé pour le Groupe BADR. Mise en valeur de l\'identité de l\'entreprise, de ses valeurs et de ses missions, avec un soin particulier porté à l\'expérience utilisateur et au référencement.',
      responsibilities: ['Développement du thème WordPress sur-mesure', 'Intégration responsive de la charte graphique', 'Optimisation SEO et performances', 'Formation du client à la gestion de contenu'],
      results: ['Site corporate livré et en ligne', 'Référencement SEO optimisé', 'Client autonome sur le contenu'],
      metrics: ['Site corporate', 'Thème sur-mesure', 'SEO optimisé', 'Responsive'],
      stack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      id: 'rcomaroc', name: 'RCOMAROC · Risk Control', company: 'NawarIT', year: '2017', type: 'web', featured: false,
      image: '/projects/rcomaroc.jpg',
      description: 'Plateforme web pour Risk Control (bureau de contrôle) : identité de marque et publications, optimisée pour la visibilité.',
      context: 'Site web développé pour RCOMAROC / Risk Control, bureau de contrôle technique. Présentation des prestations, publications et portfolio, reflétant l\'identité professionnelle de la marque.',
      responsibilities: ['Développement du thème WordPress', 'Intégration de la charte et des contenus', 'Optimisation SEO', 'Maintenance et formation'],
      results: ['Plateforme livrée et en ligne', 'Visibilité améliorée', 'Gestion de contenu autonome'],
      metrics: ['Site vitrine', 'SEO', 'CMS', 'Responsive'],
      stack: ['WordPress', 'PHP', 'HTML', 'CSS', 'jQuery', 'MySQL'],
    },
    {
      id: 'codepost', name: 'Code Post', company: 'Projet personnel', year: '2018', type: 'web', featured: false,
      image: '/projects/codepost.jpg',
      description: 'Application personnelle de gestion de contenu et de publications, développée avec Laravel 5.',
      context: 'Projet personnel de gestion de posts et de contenu : back-office, authentification, gestion des publications et des catégories. Développé pour explorer Laravel et les bonnes pratiques MVC.',
      responsibilities: ['Développement full-stack Laravel (MVC)', 'Authentification et gestion des rôles', 'CRUD des publications et catégories', 'Intégration front responsive'],
      results: ['Application fonctionnelle livrée', 'Architecture MVC propre', 'Back-office complet'],
      metrics: ['Full-stack', 'Laravel MVC', 'Auth & rôles', 'CRUD complet'],
      stack: ['PHP', 'Laravel 5', 'Blade', 'Bootstrap', 'JavaScript', 'MySQL'],
    },
  ],

  education: [
    {
      year: '2020 – 2021',
      degree: 'Master Génie Logiciel et Web Applications',
      institution: 'Faculté des Sciences Techniques',
      location: 'Settat, Maroc',
      note: 'Cours suivis les week-ends',
    },
    {
      year: '2015 – 2016',
      degree: 'Licence Réseaux Informatiques',
      institution: 'Faculté des Sciences Ibn Tofail',
      location: 'Kénitra, Maroc',
    },
    {
      year: '2013 – 2015',
      degree: 'Brevet Technicien – Développement Informatique',
      institution: 'Institut Spécialisé de Technologie Appliquée',
      location: 'Taza, Maroc',
    },
  ],

  certifications: [
    { name: 'Querying Microsoft SQL Server', code: '70-461', issuer: 'Microsoft', status: 'obtained', badge: '/certs/cert-sql.png' },
    { name: 'Programming in HTML5 with JavaScript & CSS3', code: '70-480', issuer: 'Microsoft', status: 'obtained', badge: '/certs/cert-web.png' },
  ],
};

export const portfolioDataEN: PortfolioContent = {
  careerSteps: [
    { year: '2016', title: 'Web Developer', company: 'CapOffshore · ORIKA', levelKey: 'junior', logo: 'capoffshore' },
    { year: '2019', title: 'Lead Software Engineer', company: 'Capgemini', levelKey: 'lead', logo: 'psa' },
    { year: '2022', title: 'Frontend Tech Lead', company: 'SNCF Voyageur', levelKey: 'senior', logo: 'sncf' },
    { year: '2025', title: 'Expert & Tech Lead', company: 'BPI France', levelKey: 'expert', logo: 'bpi' },
  ],

  experiences: [
    {
      id: 'bpi', company: 'BPI France', esn: 'ACENSI', logo: 'acensi',
      role: 'Senior Frontend Engineer — Technical Lead',
      start: 'July 2025', end: null, level: 'expert',
      domain: 'Banque · Core Banking', location: 'Paris',
      projects: [
        {
          name: 'NCBS Console', client: 'BPI France', type: 'From-scratch · Lead',
          description: 'Strategic administration interface for monitoring accounts on the Vault Core platform (Thought Machine SaaS) across all BPI France business lines: Short-Term Financing, Guarantee, Innovation and Export Insurance.',
          missions: [
            'Frontend technical lead: Nx architecture, code standards and conventions',
            'Figma mockup design and cross-team UX/UI coordination',
            'Critical features: multi-criteria search, balance & postings monitoring, DLQ error management',
            'Business domain access segregation with SSO (NgRx Signals Store)',
            'Testing strategy: Jasmine/Karma + Playwright E2E (> 80%)',
            'Sprint leadership, release planning, mentoring 2 developers',
          ],
          results: [
            'Test coverage maintained > 80% via SonarQube',
            '19+ reusable components in an Nx architecture',
            'Load time reduced to 1.2s · Propulsion Design System (-30% dev time)',
            'Overall performance improved by +40%',
          ],
          stack: ['Angular 21', 'NgRx', 'Signals Store', 'RxJS', 'Nx', 'TypeScript', 'SASS', 'Spring Boot', 'Playwright', 'GitLab CI/CD', 'Docker', 'SonarQube'],
        },
      ],
    },
    {
      id: 'sncf', company: 'SNCF Voyageur', esn: 'KALISOFT', logo: 'kalisoft',
      role: 'Senior Frontend Engineer — Technical Lead',
      start: 'September 2022', end: 'June 2025', level: 'senior',
      domain: 'Transport · Railway Supervision', location: 'Paris',
      projects: [
        {
          name: 'SIS Application', client: 'SNCF Voyageur', type: 'Migration · Lead',
          description: 'Full migration of the SIS application (Railway Supervision Information System) from AngularJS to Angular 17. Critical 24/7 railway supervision application used by operational teams for real-time network management.',
          missions: [
            'Technical lead and owner of the AngularJS → Angular 17 migration',
            'Modular frontend architecture and migration pattern definition',
            'Code review supervision, coverage maintained at 85%',
            'Recruitment and onboarding of new developers',
            'Cross-team collaboration for component reuse',
            'Agile retrospectives, release deployment, mentoring 4 devs',
          ],
          results: [
            'AngularJS → Angular 17 migration completed across the codebase',
            'Performance improved by +40% post-migration',
            '15+ reusable components · Internal Design System (-30% dev time)',
            'Test coverage maintained at 85%',
          ],
          stack: ['Angular 17', 'RxJS', 'Ngx', 'JsonForms', 'TypeScript', 'SASS', 'Bootstrap', 'Spring Boot', 'REST API', 'Docker', 'Jenkins', 'GitLab CI/CD'],
        },
      ],
    },
    {
      id: 'capgemini', company: 'Capgemini', logo: 'capgemini',
      role: 'Lead Software Engineer Angular',
      start: 'March 2019', end: 'September 2022', level: 'lead',
      domain: 'Automotive · Freight · ERP', location: 'Casablanca',
      projects: [
        {
          name: 'DigiDrive', client: 'PSA Group', type: 'From-scratch',
          description: 'From-scratch web application for PSA Group. SOLID modular architecture, complete Storybook documentation and 90% test coverage.',
          missions: ['Technical lead: analysis, design, specifications', 'From-scratch Angular 8 development', 'Code review supervision and Storybook documentation', 'Unit and functional tests (90%)'],
          results: ['Delivered to production on time', '90% test coverage', 'SOLID architecture recognized by the client', 'Exhaustive Storybook documentation'],
          stack: ['Angular 8', 'RxJS', 'Material UI', 'TypeScript', 'Spring Boot', 'MongoDB', 'Docker', 'Figma', 'Storybook'],
        },
        {
          name: 'MyMarqueWeb', client: 'PSA Group', type: 'From-scratch',
          description: 'From-scratch web application for PSA Group: mockup integration, feature development and needs gathering in client workshops.',
          missions: ['Client workshops and needs gathering', 'Technical design and detailed specifications', 'Mockup integration and Angular development', 'Unit and functional test writing'],
          results: ['Application delivered to production', 'Detailed technical specs', 'Faithful mockup integration', 'Comprehensive functional tests'],
          stack: ['Angular 8', 'RxJS', 'NgBootstrap', 'TypeScript', 'Symfony 4', 'REST API', 'PostgreSQL', 'Docker'],
        },
        {
          name: 'Press Site', client: 'PSA Group', type: 'TMA',
          description: 'Maintenance and evolution of the PSA press site (Drupal). Module development, access management, performance optimization and security patches.',
          missions: ['Drupal module development and customization', 'Multiple access levels setup', 'Load time improvement and caching', 'Security patches and updates'],
          results: ['Improved load times', 'Strengthened security (patches)', 'Mastered access levels', 'Continuous Drupal maintenance'],
          stack: ['PHP', 'Drupal 7', 'JavaScript', 'REST API', 'MySQL', 'Docker', 'AWS'],
        },
        {
          name: 'Rex@fret', client: 'SNCF', type: 'From-scratch',
          description: 'From-scratch freight management application for SNCF. Frontend design and development, modular architecture, estimation and technical supervision.',
          missions: ['Technical analysis and design, specifications', 'From-scratch Angular 8 frontend development', 'Estimation, code review and unit tests', 'Technical supervision of frontend team'],
          results: ['Application delivered to production', 'Reused modular architecture', '90% test coverage', 'Recognized technical lead'],
          stack: ['Angular 8', 'RxJS', 'Material UI', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'Storybook'],
        },
        {
          name: 'OSI GL ERP', client: 'SNCF', type: 'From-scratch',
          description: 'From-scratch ERP for SNCF internal operations management. Angular 8 frontend with PrimeNG, REST Spring Boot integration and scalable architecture.',
          missions: ['ERP architecture analysis and design', 'From-scratch Angular 8 frontend (PrimeNG)', 'REST Spring Boot services integration', 'Unit tests and technical supervision'],
          results: ['ERP delivered and adopted by teams', 'Scalable modular architecture', '90% test coverage'],
          stack: ['Angular 8', 'PrimeNG', 'RxJS', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
        },
      ],
    },
    {
      id: 'capoffshore', company: 'CapOffshore', logo: 'capoffshore',
      role: 'Full Stack Web Developer',
      start: 'June 2018', end: 'March 2019', level: 'junior',
      domain: 'E-commerce', location: 'Casablanca',
      projects: [
        {
          name: 'E-commerce Platform', client: 'CapOffshore', type: 'From-scratch',
          description: 'Design and development of a complete e-commerce platform: frontend, backend, secure payment, real-time stock management and user personalization.',
          missions: ['Frontend and backend platform development', 'Secure payment system integration', 'Real-time stock management', 'Testing, debugging and performance optimization'],
          results: ['E-commerce platform delivered', 'Secure payment integrated', 'Real-time stock management'],
          stack: ['PHP', 'Laravel 5', 'JavaScript', 'Bootstrap', 'REST API', 'MySQL'],
        },
      ],
    },
    {
      id: 'imperial', company: 'Imperial Pneu', logo: 'imperial',
      role: 'Full Stack Web Developer',
      start: 'October 2017', end: 'May 2018', level: 'junior',
      domain: 'Retail · HR', location: 'Casablanca',
      projects: [
        {
          name: 'Time-tracking App', client: 'Imperial Pneu', type: 'From-scratch',
          description: 'Real-time time-tracking application: hour tracking, absence management, report and notification generation, with employee/manager access control.',
          missions: ['Real-time time-tracking interface development', 'Hour tracking and absence management system', 'Report and notification generation', 'Performance and security optimization'],
          results: ['Real-time tracking operational', 'Automated reports', 'Multi-role access management'],
          stack: ['C#', 'ASP.NET', 'JavaScript', 'Bootstrap', 'REST API', 'SQL Server'],
        },
      ],
    },
    {
      id: 'nawarit', company: 'NawarIT', logo: 'nawarit',
      role: 'Web Developer',
      start: 'March 2017', end: 'August 2017', level: 'junior',
      domain: 'CMS · Web', location: 'Casablanca',
      projects: [
        {
          name: 'CMS Websites', client: 'NawarIT', type: 'CMS',
          description: 'Creation and management of CMS websites (Drupal, WordPress): custom themes, SEO, forms, client training and maintenance.',
          missions: ['Drupal / WordPress install and configuration', 'Custom theme development', 'SEO optimization and form integration', 'Client CMS training'],
          results: ['Several CMS sites delivered', 'SEO-optimized', 'Autonomous clients (training)'],
          stack: ['PHP', 'Drupal', 'WordPress', 'jQuery', 'MySQL', 'Google Analytics'],
        },
      ],
    },
    {
      id: 'orika', company: 'ORIKA', logo: 'orika',
      role: 'Full Stack Developer',
      start: 'July 2016', end: 'October 2016', level: 'junior',
      domain: 'Retail · Large distribution', location: 'Casablanca',
      projects: [
        {
          name: 'POS Solution', client: 'ORIKA', type: 'From-scratch',
          description: 'POS solution for large retail stores: Python/Tornado backend architecture, Semantic UI interfaces, transaction management and real-time communication.',
          missions: ['Backend architecture with Python and Tornado', 'UI creation (Semantic UI)', 'Transaction logic and real-time communication', 'RESTful API development and documentation'],
          results: ['POS solution delivered', 'Real-time communication', 'Documented RESTful API'],
          stack: ['Python', 'Tornado', 'Semantic UI', 'JavaScript', 'RESTful API', 'PostgreSQL'],
        },
      ],
    },
  ],

  skillGroups: [
    {
      id: 'expert',
      skills: ['Angular 8→21', 'TypeScript', 'RxJS', 'NgRx / Signals Store', 'HTML5 / SCSS', 'Tailwind CSS', 'Angular Material', 'PrimeNG'],
    },
    {
      id: 'advanced',
      skills: ['Figma / Adobe XD', 'GitLab CI/CD', 'Docker', 'Spring Boot', 'REST API / Swagger', 'Playwright (E2E)', 'SonarQube', 'Nx Workspace'],
    },
    {
      id: 'solid',
      skills: ['Java', 'Node.js', 'PostgreSQL', 'MongoDB', 'Storybook', 'Jasmine / Karma', 'Jest', 'PHP / Laravel'],
    },
  ],

  techDomains: [
    {
      id: 'frontend', icon: '🎨', title: 'Frontend', subtitle: 'Core expertise',
      skills: [
        { n: 'Angular 8→21', s: true }, { n: 'TypeScript', s: true }, { n: 'RxJS', s: true },
        { n: 'NgRx / Signals', s: true }, { n: 'HTML5 / SCSS' }, { n: 'Tailwind CSS' },
        { n: 'Angular Material' }, { n: 'PrimeNG' },
      ],
    },
    {
      id: 'backend', icon: '⚙️', title: 'Backend · API', subtitle: 'Services & data',
      skills: [
        { n: 'Java' }, { n: 'Spring Boot' }, { n: 'REST API / Swagger' },
        { n: 'Node.js' }, { n: 'PostgreSQL' }, { n: 'MongoDB' },
      ],
    },
    {
      id: 'devops', icon: '🚀', title: 'DevOps · Tools', subtitle: 'Build & quality',
      skills: [
        { n: 'Docker' }, { n: 'GitLab CI/CD' }, { n: 'Nx Workspace' },
        { n: 'SonarQube' }, { n: 'Figma / Adobe XD' },
      ],
    },
    {
      id: 'testing', icon: '🧪', title: 'Testing · Methods', subtitle: 'Quality & practices',
      skills: [
        { n: 'Jasmine / Karma' }, { n: 'Playwright' }, { n: 'Jest' }, { n: 'Storybook' },
        { n: 'TDD · BDD' }, { n: 'SOLID' }, { n: 'Clean Code' }, { n: 'Agile SAFe' }, { n: 'Code Review' },
      ],
    },
  ],

  projects: [
    {
      id: 'ncbs', name: 'NCBS Console', company: 'BPI France', year: '2025 – Present', type: 'fintech', featured: true,
      description: 'Strategic administration interface for monitoring Vault Core accounts (Thought Machine) across all BPI France business lines.',
      context: 'BPI France is modernizing its banking core with Thought Machine\'s Vault Core SaaS. The NCBS Console is the critical interface enabling Business Analysts and Tech Leads to monitor in real time accounts from 4 business domains: Short-Term Financing, Guarantee, Innovation and Export Insurance.',
      responsibilities: ['Frontend technical lead: Nx monorepo architecture, standards and patterns', 'Development of critical features: multi-criteria search, balance/postings monitoring, DLQ error management', 'Business domain access segregation with SSO (NgRx Signals Store)', 'Figma mockups and cross-team UX/UI coordination', 'Complete testing strategy: Jasmine/Karma + Playwright E2E', 'Sprint technical leadership and release planning', 'Mentoring 2 frontend developers'],
      results: ['Test coverage > 80% maintained via SonarQube', '19+ reusable components delivered', 'Initial load time reduced to 1.2s', 'Design System: -30% dev time', '+40% performance vs. old app'],
      metrics: ['> 80% tests', '1.2s load', '19+ components', '+40% perf'],
      stack: ['Angular 21', 'NgRx', 'Signals Store', 'RxJS', 'Nx', 'TypeScript', 'Playwright', 'GitLab CI/CD', 'Docker', 'SonarQube'],
    },
    {
      id: 'sis', name: 'SIS Application', company: 'SNCF Voyageur', year: '2022 – 2025', type: 'transport', featured: true,
      description: 'Full AngularJS → Angular 17 migration of the Railway Supervision Information System. Technical lead, architecture and recruitment.',
      context: 'SNCF Voyageur uses SIS for real-time railway supervision. The AngularJS application required a complete migration to Angular 17 to maintain maintainability and modernize the operational teams\' experience. Critical project: supervision runs 24/7.',
      responsibilities: ['Technical owner of the AngularJS → Angular 17 migration', 'Modular architecture definition and migration patterns', 'Code review supervision, 85% coverage maintained', 'Recruitment and onboarding of new developers', 'Cross-team collaboration for component reuse', 'Agile retrospectives and release deployment'],
      results: ['Full AngularJS → Angular 17 migration completed', '+40% performance post-migration', '15+ reusable components', 'Design System: -30% dev time', '85% test coverage maintained'],
      metrics: ['AngularJS→17 migration', '+40% perf', '15+ components', '85% coverage'],
      stack: ['Angular 17', 'RxJS', 'Ngx', 'JsonForms', 'TypeScript', 'SASS', 'Bootstrap', 'Spring Boot', 'Docker', 'Jenkins', 'GitLab CI/CD'],
    },
    {
      id: 'mypeugeot', name: 'My Peugeot', company: 'PSA Group · Capgemini', year: '2019 – 2021', type: 'automotive', featured: true,
      image: '/projects/mypeugeot.jpg',
      description: 'My Peugeot personal space: vehicle management, connected services and workshop booking for PSA customers.',
      context: 'My Peugeot is the Peugeot brand (PSA Group) customer space, letting drivers manage their vehicle, access connected services, schedule maintenance and enjoy offers. Angular frontend integrated into the PSA information system.',
      responsibilities: ['Angular interface development (vehicle space, workshop, services)', 'Mockup integration following the PSA brand guidelines', 'Connection to PSA REST APIs', 'Unit and functional tests'],
      results: ['Customer space delivered to production', 'Smooth multi-service user experience', 'Faithful Peugeot brand integration'],
      metrics: ['Customer space', 'Connected services', 'PSA guidelines', 'Responsive'],
      stack: ['Angular 7', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap', 'Symfony 4', 'REST API'],
    },
    {
      id: 'mycitroen', name: 'My Citroën', company: 'PSA Group · Capgemini', year: '2019 – 2021', type: 'automotive', featured: true,
      image: '/projects/mycitroen.jpg',
      description: 'My Citroën vehicle dashboard: intuitive, user-centered interface for vehicle tracking and services.',
      context: 'My Citroën is the Citroën brand (PSA Group) personal space. A UX-focused Angular application offering a clear dashboard for vehicle tracking, maintenance and connected services.',
      responsibilities: ['Dashboard and Angular modules development', 'Intuitive, user-centered UX design', 'REST API integration and Citroën branding', 'Testing and performance optimization'],
      results: ['Dashboard delivered to production', 'Praised intuitive UX', 'Consistency with Citroën identity'],
      metrics: ['Vehicle dashboard', 'User-centered UX', 'Citroën branding', 'Responsive'],
      stack: ['Angular 7', 'TypeScript', 'RxJS', 'SCSS', 'Symfony 4', 'REST API'],
    },
    {
      id: 'groupebadr', name: 'Groupe BADR', company: 'NawarIT', year: '2017', type: 'web', featured: true,
      image: '/projects/groupebadr.jpg',
      description: 'Groupe BADR corporate website: brand identity, values and services showcase, optimized for visibility.',
      context: 'Corporate showcase website developed for Groupe BADR. Highlighting the company identity, values and missions, with special care for user experience and SEO.',
      responsibilities: ['Custom WordPress theme development', 'Responsive brand integration', 'SEO and performance optimization', 'Client content-management training'],
      results: ['Corporate site delivered and live', 'SEO-optimized', 'Client autonomous on content'],
      metrics: ['Corporate site', 'Custom theme', 'SEO-optimized', 'Responsive'],
      stack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      id: 'rcomaroc', name: 'RCOMAROC · Risk Control', company: 'NawarIT', year: '2017', type: 'web', featured: false,
      image: '/projects/rcomaroc.jpg',
      description: 'Web platform for Risk Control (inspection office): brand identity and publications, optimized for visibility.',
      context: 'Website developed for RCOMAROC / Risk Control, a technical inspection office. Showcase of services, publications and portfolio, reflecting the brand\'s professional identity.',
      responsibilities: ['WordPress theme development', 'Branding and content integration', 'SEO optimization', 'Maintenance and training'],
      results: ['Platform delivered and live', 'Improved visibility', 'Autonomous content management'],
      metrics: ['Showcase site', 'SEO', 'CMS', 'Responsive'],
      stack: ['WordPress', 'PHP', 'HTML', 'CSS', 'jQuery', 'MySQL'],
    },
    {
      id: 'codepost', name: 'Code Post', company: 'Personal project', year: '2018', type: 'web', featured: false,
      image: '/projects/codepost.jpg',
      description: 'Personal content and post management application, built with Laravel 5.',
      context: 'Personal post and content management project: back-office, authentication, post and category management. Built to explore Laravel and MVC best practices.',
      responsibilities: ['Full-stack Laravel development (MVC)', 'Authentication and role management', 'Posts and categories CRUD', 'Responsive frontend integration'],
      results: ['Functional application delivered', 'Clean MVC architecture', 'Complete back-office'],
      metrics: ['Full-stack', 'Laravel MVC', 'Auth & roles', 'Full CRUD'],
      stack: ['PHP', 'Laravel 5', 'Blade', 'Bootstrap', 'JavaScript', 'MySQL'],
    },
  ],

  education: [
    {
      year: '2020 – 2021',
      degree: "Master's in Software Engineering & Web Applications",
      institution: 'Faculty of Technical Sciences',
      location: 'Settat, Morocco',
      note: 'Weekend courses',
    },
    {
      year: '2015 – 2016',
      degree: 'Bachelor in Computer Networks',
      institution: 'Ibn Tofail Faculty of Sciences',
      location: 'Kénitra, Morocco',
    },
    {
      year: '2013 – 2015',
      degree: 'Technical Diploma – Computer Development',
      institution: 'Applied Technology Institute',
      location: 'Taza, Morocco',
    },
  ],

  certifications: [
    { name: 'Querying Microsoft SQL Server', code: '70-461', issuer: 'Microsoft', status: 'obtained', badge: '/certs/cert-sql.png' },
    { name: 'Programming in HTML5 with JavaScript & CSS3', code: '70-480', issuer: 'Microsoft', status: 'obtained', badge: '/certs/cert-web.png' },
  ],
};
