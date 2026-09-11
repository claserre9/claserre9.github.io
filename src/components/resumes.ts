const getStyles = () => `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
            --primary: #0d6efd;
            --primary-dark: #0a4fcf;
            --primary-light: #dbeafe;
            --text: #1e293b;
            --text-muted: #64748b;
            --bg: #f0f4f8;
            --card-bg: #ffffff;
            --border: #e2e8f0;
            --accent-php: #6366f1;
            --accent-js: #f59e0b;
            --accent-py: #10b981;
            --accent-db: #ef4444;
            --accent-tools: #8b5cf6;
            --accent-methods: #0ea5e9;
        }

        * { box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 0;
            font-size: 0.95rem;
            line-height: 1.6;
        }

        /* ── Header ── */
        header {
            background: linear-gradient(135deg, #0d6efd 0%, #1d4ed8 60%, #1e40af 100%);
            color: white;
            padding: 3rem 1rem 2.5rem;
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: '';
            position: absolute;
            top: -60px; right: -60px;
            width: 260px; height: 260px;
            background: rgba(255,255,255,0.06);
            border-radius: 50%;
        }

        header::after {
            content: '';
            position: absolute;
            bottom: -80px; left: -40px;
            width: 200px; height: 200px;
            background: rgba(255,255,255,0.04);
            border-radius: 50%;
        }

        .avatar {
            width: 80px; height: 80px;
            background: rgba(255,255,255,0.2);
            border: 3px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.8rem; font-weight: 700;
            margin: 0 auto 1rem;
            letter-spacing: 1px;
        }

        header h1 {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            letter-spacing: -0.5px;
        }

        header .subtitle {
            font-size: 1.1rem;
            font-weight: 500;
            opacity: 0.9;
            margin-bottom: 1.25rem;
        }

        .contact-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem 1.25rem;
            margin-bottom: 1.5rem;
            font-size: 0.9rem;
        }

        .contact-links a {
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            display: flex; align-items: center; gap: 0.35rem;
            transition: color 0.2s;
        }

        .contact-links a:hover { color: #ffffff; text-decoration: underline; }

        .lang-switcher { display: flex; justify-content: center; gap: 0.5rem; }

        .lang-switcher .btn-light {
            border-radius: 20px;
            padding: 0.35rem 1.1rem;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s;
            border: none;
        }

        .lang-switcher .btn-light:hover {
            background: var(--primary-light);
            color: var(--primary-dark);
        }

        /* ── Main layout ── */
        main { max-width: 860px; margin: 0 auto; padding: 2.5rem 1rem 3rem; }

        main { animation: fadeIn 0.5s ease-out both; }

        /* ── Section cards ── */
        section {
            background: var(--card-bg);
            border-radius: 14px;
            padding: 1.75rem 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            border: 1px solid var(--border);
            transition: box-shadow 0.2s, transform 0.2s;
        }

        section:hover {
            box-shadow: 0 6px 24px rgba(13,110,253,0.10);
            transform: translateY(-2px);
        }

        .section-title {
            display: flex; align-items: center; gap: 0.6rem;
            font-size: 1.2rem; font-weight: 700;
            color: var(--primary);
            border-bottom: 2px solid var(--primary-light);
            padding-bottom: 0.6rem;
            margin-bottom: 1.5rem;
        }

        .section-title i { font-size: 1.1rem; }

        /* ── Summary ── */
        .summary-text {
            color: var(--text);
            font-size: 0.97rem;
            line-height: 1.75;
        }

        /* ── Timeline experience ── */
        .timeline { position: relative; padding-left: 1.5rem; }

        .timeline::before {
            content: '';
            position: absolute; left: 6px; top: 6px; bottom: 6px;
            width: 2px; background: var(--primary-light);
            border-radius: 2px;
        }

        .timeline-item { position: relative; margin-bottom: 2rem; }
        .timeline-item:last-child { margin-bottom: 0; }

        .timeline-dot {
            position: absolute; left: -1.5rem; top: 6px;
            width: 14px; height: 14px;
            background: var(--primary);
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 2px var(--primary-light);
        }

        .job-header {
            display: flex; flex-wrap: wrap;
            justify-content: space-between; align-items: flex-start;
            gap: 0.25rem; margin-bottom: 0.25rem;
        }

        .job-title { font-weight: 700; font-size: 1rem; color: var(--text); }
        .job-company { font-weight: 600; color: var(--primary); font-size: 0.93rem; }

        .job-period {
            font-size: 0.82rem; color: var(--text-muted);
            background: #f1f5f9; border-radius: 20px;
            padding: 0.2rem 0.75rem; white-space: nowrap;
        }

        .timeline-item ul {
            margin: 0.75rem 0 0; padding-left: 1.25rem;
            list-style: none;
        }

        .timeline-item ul li {
            position: relative;
            margin-bottom: 0.6rem;
            font-size: 0.93rem;
            color: #374151;
            line-height: 1.6;
        }

        .timeline-item ul li::before {
            content: '▸';
            position: absolute; left: -1.1rem;
            color: var(--primary); font-size: 0.75rem; top: 3px;
        }

        /* ── Projects ── */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
        }

        .project-card {
            background: #f8faff;
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1.1rem 1.25rem;
            transition: box-shadow 0.2s, border-color 0.2s;
        }

        .project-card:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(13,110,253,0.1);
        }

        .project-title {
            font-weight: 700; font-size: 0.95rem; color: var(--text);
            margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;
        }

        .project-year {
            font-size: 0.75rem; color: var(--text-muted);
            background: var(--border); border-radius: 10px;
            padding: 0.1rem 0.5rem;
        }

        .project-desc { font-size: 0.88rem; color: #4b5563; line-height: 1.55; }

        .project-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.6rem; }

        .project-tag {
            font-size: 0.75rem; font-weight: 600;
            background: var(--primary-light); color: var(--primary-dark);
            border-radius: 20px; padding: 0.15rem 0.55rem;
        }

        /* ── Skills ── */
        .skills-group { margin-bottom: 1.1rem; }
        .skills-group:last-child { margin-bottom: 0; }

        .skills-label {
            font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.08em; color: var(--text-muted);
            margin-bottom: 0.5rem;
        }

        .skills-badges { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        .badge-skill {
            display: inline-flex; align-items: center;
            font-size: 0.82rem; font-weight: 600;
            border-radius: 20px; padding: 0.3rem 0.75rem;
            border: 1.5px solid transparent;
        }

        .badge-lang  { background: #ede9fe; color: #5b21b6; border-color: #c4b5fd; }
        .badge-fw    { background: #fef3c7; color: #92400e; border-color: #fcd34d; }
        .badge-front { background: #fce7f3; color: #9d174d; border-color: #f9a8d4; }
        .badge-db    { background: #fee2e2; color: #991b1b; border-color: #fca5a5; }
        .badge-tools { background: #f3e8ff; color: #6b21a8; border-color: #d8b4fe; }
        .badge-meth  { background: #e0f2fe; color: #0c4a6e; border-color: #7dd3fc; }
        .badge-ai    { background: #d1fae5; color: #065f46; border-color: #6ee7b7; }

        /* ── Education ── */
        .edu-card {
            display: flex; align-items: flex-start; gap: 1rem;
        }

        .edu-icon {
            font-size: 1.75rem; color: var(--primary);
            flex-shrink: 0; margin-top: 2px;
        }

        .edu-degree { font-weight: 700; font-size: 0.97rem; }
        .edu-school { color: var(--text-muted); font-size: 0.88rem; margin-top: 0.15rem; }

        /* ── Footer ── */
        footer {
            text-align: center;
            background: #f8fafc;
            padding: 1.25rem;
            font-size: 0.85rem;
            color: var(--text-muted);
            border-top: 1px solid var(--border);
        }

        /* ── Languages ── */
        .lang-grid { display: flex; gap: 2rem; flex-wrap: wrap; }
        .lang-item { flex: 1; min-width: 160px; }
        .lang-name { font-weight: 700; font-size: 0.97rem; margin-bottom: 0.15rem; }
        .lang-level { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem; }
        .lang-bar { height: 6px; background: var(--border); border-radius: 3px; overflow: hidden; }
        .lang-fill { height: 100%; background: linear-gradient(to right, var(--primary), #60a5fa); border-radius: 3px; }

        /* ── PDF button ── */
        .btn-print {
            position: fixed;
            bottom: 2rem; right: 2rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 0.75rem 1.4rem;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            display: flex; align-items: center; gap: 0.45rem;
            box-shadow: 0 4px 16px rgba(13,110,253,0.35);
            transition: all 0.2s;
            z-index: 1000;
            font-family: 'Inter', sans-serif;
        }

        .btn-print:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(13,110,253,0.45);
        }

        /* ── Project GitHub link ── */
        .project-github {
            font-size: 1rem;
            color: var(--text-muted);
            margin-left: auto;
            transition: color 0.2s;
            text-decoration: none;
        }
        .project-github:hover { color: var(--primary); }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
            header h1 { font-size: 1.8rem; }
            section { padding: 1.25rem 1.1rem; }
            .job-header { flex-direction: column; }
            .btn-print { bottom: 1rem; right: 1rem; padding: 0.6rem 1rem; font-size: 0.82rem; }
        }

        /* ── Print / PDF ── */
        @page { size: A4; margin: 12mm; }

        @media print {
            body { background: white; font-size: 10pt; line-height: 1.35; }
            header { background: white !important; color: var(--text); padding: 0 0 3mm; }
            header::before, header::after, .avatar,
            .btn-print, .lang-switcher { display: none !important; }
            header h1 { font-size: 22pt; margin: 0 0 1mm; }
            header .subtitle { font-size: 11pt; margin-bottom: 2mm; }
            .contact-links { gap: 1mm 4mm; font-size: 8pt; margin-bottom: 0; }
            .contact-links a { color: var(--text); }
            main { max-width: none; padding: 0; animation: none; }
            section {
                box-shadow: none !important;
                border: none !important;
                border-radius: 0;
                padding: 0;
                margin-bottom: 4mm;
                break-inside: auto;
            }
            section:hover { transform: none !important; }
            .section-title {
                font-size: 11pt; padding-bottom: 1mm; margin-bottom: 2mm;
                break-after: avoid;
            }
            p, li { orphans: 2; widows: 2; }
            .summary-text { font-size: 9pt; line-height: 1.4; margin-bottom: 2mm; }
            .timeline { padding-left: 0; }
            .timeline::before, .timeline-dot { display: none; }
            .timeline-item { break-inside: avoid; margin-bottom: 3mm; }
            .job-header { flex-direction: row; break-after: avoid; }
            .job-title { font-size: 10pt; }
            .job-company { font-size: 9pt; }
            .job-period { font-size: 8pt; padding: 0; background: none; }
            .timeline-item ul { margin-top: 1mm; padding-left: 3mm; }
            .timeline-item ul li { font-size: 9pt; line-height: 1.35; margin-bottom: 1mm; }
            .timeline-item ul li::before { left: -3mm; top: 0; }
            .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2mm; }
            .project-card { break-inside: avoid; padding: 2mm; box-shadow: none; }
            .project-title { font-size: 9pt; }
            .project-desc { font-size: 8.5pt; line-height: 1.35; margin-bottom: 1mm; }
            .project-tags { margin-top: 1mm; gap: 1mm; }
            .project-tag, .project-year { font-size: 7pt; }
            .skills-group { break-inside: avoid; margin-bottom: 2mm; }
            .skills-label { font-size: 8pt; margin-bottom: 1mm; }
            .skills-badges { gap: 1mm 2mm; }
            .badge-skill { font-size: 8pt; padding: 0; border: none; background: none; color: var(--text); }
            .edu-card, .lang-grid { break-inside: avoid; }
            .edu-degree, .lang-name { font-size: 9pt; }
            .edu-school, .lang-level { font-size: 8pt; }
            footer { padding: 2mm 0 0; font-size: 8pt; background: white; }
            footer p { margin: 0; }
        }
    </style>
`

export function getFrenchResume() {

    return `
    ${getStyles()}
    <header>
        <div class="container text-center">
            <div class="avatar">CL</div>
            <h1>Clifford Laserre</h1>
            <p class="subtitle">Développeur Full Stack</p>
            <div class="contact-links">
                <a href="tel:+15149675802"><i class="bi bi-telephone-fill"></i> 514-967-5802</a>
                <a href="mailto:claserre9@gmail.com"><i class="bi bi-envelope-fill"></i> claserre9@gmail.com</a>
                <a href="https://github.com/claserre9" target="_blank"><i class="bi bi-github"></i> claserre9</a>
                <a href="https://linkedin.com/in/cliffordlaserre" target="_blank"><i class="bi bi-linkedin"></i> Clifford Laserre</a>
                <a href="https://claserre9.github.io" target="_blank"><i class="bi bi-globe2"></i> claserre9.github.io</a>
            </div>
            <div class="lang-switcher">
                <a href="/" class="btn btn-light">🇫🇷 Français</a>
                <a href="/en" class="btn btn-light">🇬🇧 English</a>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div class="section-title"><i class="bi bi-person-lines-fill"></i> Profil</div>
            <p class="summary-text">
                Développeur full stack avec <strong>7 ans d’expérience</strong>, spécialisé en <strong>PHP et Symfony</strong>.
                Je contribue à la conception, à l’optimisation et à la maintenance d’applications web à fort trafic,
                accueillant plus de <strong>10 millions de visiteurs par mois</strong>. Ma maîtrise de l’écosystème Symfony
                (Doctrine ORM, architecture MVC, API REST) est complétée par une solide expérience en
                <strong>Django/Python</strong> et <strong>Node.js</strong>. Je privilégie une collaboration étroite avec l’équipe,
                des revues de code rigoureuses, des tests automatisés et une documentation claire pour développer
                des applications performantes, fiables et faciles à maintenir.
            </p>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-briefcase-fill"></i> Expérience professionnelle</div>
            <div class="timeline">

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Développeur Full Stack</div>
                            <div class="job-company"><i class="bi bi-building"></i> Valnet Inc — Montréal, QC</div>
                        </div>
                        <span class="job-period">Mai 2021 – Août 2026</span>
                    </div>
                    <p class="summary-text">Développement full stack en <strong>PHP (Symfony, Slim), Doctrine ORM et TypeScript/Knockout.js</strong>, autour d’un CMS interne utilisé par les équipes éditoriales de sites accueillant plus de <strong>10 millions de visiteurs par mois</strong>.</p>
                    <ul>
                        <li>Implémentation de la <strong>gestion des pages statiques</strong> : création dans le CMS et synchronisation vers les sites web.</li>
                        <li>Développement d’une <strong>interface de gestion des vidéos</strong> permettant aux rédacteurs d’insérer une ou plusieurs vidéos dans leurs articles ; contribution à l’intégration de contenus embarqués (embeds).</li>
                        <li>Implémentation des mécanismes de <strong>génération des sitemaps</strong> au fil de l’ajout de contenus sur les sites web.</li>
                        <li>Développement d’une <strong>bibliothèque JavaScript de suivi des clics</strong>, avec transmission des événements à un serveur dédié, dans le cadre d’une solution interne destinée à remplacer Google Analytics.</li>
                        <li>Création d’<strong>utilitaires internes en Knockout.js</strong>, notamment des fonctionnalités de glisser-déposer pour les interfaces du CMS.</li>
                        <li>Maintenance et refactorisation du code pour améliorer les performances et les pratiques de développement ; optimisation du cache <strong>Redis</strong> et des requêtes <strong>MySQL</strong>.</li>
                        <li>Intégration de tests unitaires et d’intégration <strong>PHPUnit</strong> aux pipelines de déploiement pour fiabiliser les mises en production.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Technicien en intelligence d’affaires</div>
                            <div class="job-company"><i class="bi bi-building"></i> CIUSSS du Centre-Sud-de-l'Île-de-Montréal — Montréal, QC</div>
                        </div>
                        <span class="job-period">Déc. 2019 – Mai 2021</span>
                    </div>
                    <ul>
                        <li>Automatisation de l’<strong>extraction et de la transmission quotidiennes de données clés au ministère de la Santé</strong>, selon les exigences de soumission établies.</li>
                        <li>Automatisation de la production de <strong>tableaux de bord sur la présence du personnel soignant dans les milieux de vie</strong>, notamment les préposés aux bénéficiaires et le personnel infirmier.</li>
                        <li>Développement de <strong>formulaires web avec Django</strong> pour la collecte de données liées à la <strong>COVID-19</strong>.</li>
                        <li>Contribution à la <strong>conception d’une base de données dédiée à la gestion des plaintes en ressources humaines</strong> ; conception de bases de données internes sous <strong>Microsoft Access</strong>.</li>
                        <li>Développement de <strong>scripts Python</strong> pour l’importation et la transformation des données, et de <strong>macros Excel</strong> pour simplifier les tâches quotidiennes des utilisateurs.</li>
                        <li>Conception de <strong>tableaux de bord Power BI</strong> pour <strong>plusieurs départements</strong>, en collaboration avec les équipes métier pour définir des indicateurs utiles à la prise de décision.</li>
                        <li>Optimisation de requêtes <strong>SQL Server</strong> complexes pour accélérer la génération des rapports sur des volumes de données importants.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Développeur Full Stack Indépendant</div>
                            <div class="job-company"><i class="bi bi-building"></i> Appanoo Labs — Montréal, QC</div>
                        </div>
                        <span class="job-period">Oct. 2018 – Déc. 2020</span>
                    </div>
                    <p class="summary-text" style="font-size:0.85rem; color: var(--text-muted); margin: 0.15rem 0 0;">Mandats indépendants réalisés en parallèle des études, puis du poste au CIUSSS</p>
                    <ul>
                        <li>Participation aux échanges avec les clients pour recueillir leurs besoins, préciser les fonctionnalités attendues et définir les spécifications des applications.</li>
                        <li>Intégration de maquettes en <strong>interfaces web avec React</strong>, en respectant le design et les interactions prévus.</li>
                        <li>Contribution au développement d’<strong>API REST</strong> avec <strong>Django et Django REST Framework</strong> ou <strong>Express (Node.js)</strong>, selon les projets.</li>
                        <li>Participation au <strong>déploiement des applications sur Heroku</strong>.</li>
                    </ul>
                </div>

            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-code-slash"></i> Projets Open-Source</div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-title">
                        Vite Quiz Game
                        <span class="project-year">2025</span>
                        <a href="https://github.com/claserre9/vite-quiz-game" target="_blank" class="project-github" title="Voir sur GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Jeu éducatif de mathématiques pour enfants, avec exercices variés, profils locaux et
                        entraînement adaptatif ciblant les difficultés. Développé en TypeScript avec Knockout.js et Vite,
                        avec tests unitaires et de bout en bout.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Knockout.js</span>
                        <span class="project-tag">Vite</span>
                        <span class="project-tag">Vitest</span>
                        <span class="project-tag">Playwright</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        Wakatime Stats
                        <span class="project-year">2023</span>
                        <a href="https://github.com/claserre9/wakatime-stats" target="_blank" class="project-github" title="Voir sur GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Outil CLI en PHP qui interroge l’API Wakatime et met à jour automatiquement les statistiques de
                        programmation dans les fichiers README GitHub via GitHub Actions.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PHP</span>
                        <span class="project-tag">GitHub Actions</span>
                        <span class="project-tag">REST API</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        Knockout JS Scanner
                        <span class="project-year">2024</span>
                        <a href="https://github.com/claserre9/knockout-js-scanner" target="_blank" class="project-github" title="Voir sur GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Extension Chrome en TypeScript affichant en temps réel les données Knockout.js liées aux éléments
                        DOM sélectionnés dans les outils de développement, accélérant le débogage frontend.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Chrome Extension</span>
                        <span class="project-tag">Knockout.js</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        CV Personnel
                        <span class="project-year">2024</span>
                        <a href="https://github.com/claserre9/claserre9.github.io" target="_blank" class="project-github" title="Voir sur GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Site web CV en Single Page Application développé avec TypeScript, Knockout.js et Webpack,
                        déployé sur GitHub Pages avec routage côté client.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Knockout.js</span>
                        <span class="project-tag">Webpack</span>
                        <span class="project-tag">GitHub Pages</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-tools"></i> Compétences techniques</div>
            <div class="skills-group">
                <div class="skills-label">Langages</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-lang">PHP</span>
                    <span class="badge-skill badge-lang">TypeScript</span>
                    <span class="badge-skill badge-lang">JavaScript</span>
                    <span class="badge-skill badge-lang">Python</span>
                    <span class="badge-skill badge-lang">SQL</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Backend</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-fw">Symfony</span>
                    <span class="badge-skill badge-fw">Doctrine ORM</span>
                    <span class="badge-skill badge-fw">Slim</span>
                    <span class="badge-skill badge-fw">Django</span>
                    <span class="badge-skill badge-fw">Node.js</span>
                    <span class="badge-skill badge-fw">REST / OpenAPI</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Frontend</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-front">React</span>
                    <span class="badge-skill badge-front">Knockout.js (MVVM, data-binding)</span>
                    <span class="badge-skill badge-front">Vite</span>
                    <span class="badge-skill badge-front">Webpack</span>
                    <span class="badge-skill badge-front">SPA & routage côté client</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Bases de données</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-db">SQL Server</span>
                    <span class="badge-skill badge-db">MySQL</span>
                    <span class="badge-skill badge-db">PostgreSQL</span>
                    <span class="badge-skill badge-db">Redis</span>
                    <span class="badge-skill badge-db">MongoDB</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">DevOps & CI/CD</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-tools">Docker</span>
                    <span class="badge-skill badge-tools">GitHub Actions</span>
                    <span class="badge-skill badge-tools">Jenkins</span>
                    <span class="badge-skill badge-tools">Git</span>
                    <span class="badge-skill badge-tools">PHPUnit</span>
                    <span class="badge-skill badge-tools">AWS (S3, EC2 — connaissances personnelles)</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Pratiques</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-meth">Architecture logicielle</span>
                    <span class="badge-skill badge-meth">Code review</span>
                    <span class="badge-skill badge-meth">TDD</span>
                    <span class="badge-skill badge-meth">Sécurité applicative (JWT, contrôle d’accès)</span>
                    <span class="badge-skill badge-meth">Agile/Scrum</span>
                    <span class="badge-skill badge-meth">Jira</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">IA appliquée au développement</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-ai">Claude Code</span>
                    <span class="badge-skill badge-ai">Codex</span>
                    <span class="badge-skill badge-ai">Cursor</span>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-mortarboard-fill"></i> Formation</div>
            <div class="edu-card">
                <div class="edu-icon"><i class="bi bi-mortarboard-fill"></i></div>
                <div>
                    <div class="edu-degree">DEC en Techniques de l’informatique</div>
                    <div class="edu-school">Collège de Rosemont, Montréal &nbsp;·&nbsp; 2017 – 2020</div>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-translate"></i> Langues</div>
            <div class="lang-grid">
                <div class="lang-item">
                    <div class="lang-name">Français</div>
                    <div class="lang-level">Langue maternelle</div>
                </div>
                <div class="lang-item">
                    <div class="lang-name">Anglais</div>
                    <div class="lang-level">Professionnel courant</div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>© <span data-bind="text: year"></span> Clifford Laserre &nbsp;·&nbsp; Références disponibles sur demande.</p>
    </footer>

    <button class="btn-print" onclick="window.print()">
        <i class="bi bi-file-earmark-pdf-fill"></i> Télécharger PDF
    </button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`;
}

export function getEnglishResume() {

    return `
    ${getStyles()}
    <header>
        <div class="container text-center">
            <div class="avatar">CL</div>
            <h1>Clifford Laserre</h1>
            <p class="subtitle">Full Stack Developer</p>
            <div class="contact-links">
                <a href="tel:+15149675802"><i class="bi bi-telephone-fill"></i> 514-967-5802</a>
                <a href="mailto:claserre9@gmail.com"><i class="bi bi-envelope-fill"></i> claserre9@gmail.com</a>
                <a href="https://github.com/claserre9" target="_blank"><i class="bi bi-github"></i> claserre9</a>
                <a href="https://linkedin.com/in/cliffordlaserre" target="_blank"><i class="bi bi-linkedin"></i> Clifford Laserre</a>
                <a href="https://claserre9.github.io" target="_blank"><i class="bi bi-globe2"></i> claserre9.github.io</a>
            </div>
            <div class="lang-switcher">
                <a href="/" class="btn btn-light">🇫🇷 French</a>
                <a href="/en" class="btn btn-light">🇬🇧 English</a>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div class="section-title"><i class="bi bi-person-lines-fill"></i> Profile</div>
            <p class="summary-text">
                Full stack developer with <strong>7 years of experience</strong>, specializing in <strong>PHP and Symfony</strong>.
                I help design, optimize, and maintain high-traffic web applications serving more than
                <strong>10 million visitors per month</strong>. My strong command of the Symfony ecosystem
                (Doctrine ORM, MVC architecture, REST APIs) is complemented by solid experience with
                <strong>Django/Python</strong> and <strong>Node.js</strong>. I combine close team collaboration,
                thorough code reviews, automated testing, and clear documentation to build reliable,
                maintainable applications that perform at scale.
            </p>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-briefcase-fill"></i> Work Experience</div>
            <div class="timeline">

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Full Stack Developer</div>
                            <div class="job-company"><i class="bi bi-building"></i> Valnet Inc — Montreal, QC</div>
                        </div>
                        <span class="job-period">May 2021 – Aug. 2026</span>
                    </div>
                    <p class="summary-text">Full stack development with <strong>PHP (Symfony, Slim), Doctrine ORM, and TypeScript/Knockout.js</strong>, supporting an internal CMS used by editorial teams across websites serving more than <strong>10 million visitors per month</strong>.</p>
                    <ul>
                        <li>Implemented <strong>static page management</strong>, from page creation in the CMS to synchronization with the websites.</li>
                        <li>Built a <strong>video management interface</strong> enabling writers to insert one or more videos into their articles; contributed to support for embedded content.</li>
                        <li>Implemented <strong>sitemap generation</strong> mechanisms to incorporate newly added website content.</li>
                        <li>Developed a <strong>JavaScript click-tracking library</strong> that sends events to a dedicated server, as part of an internal solution intended to replace Google Analytics.</li>
                        <li>Created <strong>internal Knockout.js utilities</strong>, including drag-and-drop functionality for CMS interfaces.</li>
                        <li>Maintained and refactored code to improve performance and development practices; optimized <strong>Redis</strong> caching and <strong>MySQL</strong> queries.</li>
                        <li>Integrated <strong>PHPUnit</strong> unit and integration tests into deployment pipelines to improve release reliability.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Business Intelligence Technician</div>
                            <div class="job-company"><i class="bi bi-building"></i> CIUSSS du Centre-Sud-de-l'Île-de-Montréal — Montreal, QC</div>
                        </div>
                        <span class="job-period">Dec. 2019 – May 2021</span>
                    </div>
                    <ul>
                        <li>Automated the <strong>daily extraction and submission of key data to the Ministry of Health</strong>, following established reporting requirements.</li>
                        <li>Automated the production of <strong>dashboards tracking healthcare staff presence in residential care settings</strong>, including personal care attendants and nursing staff.</li>
                        <li>Developed <strong>web forms with Django</strong> to collect <strong>COVID-19 data</strong>.</li>
                        <li>Contributed to the <strong>design of a database for managing human resources complaints</strong>; designed internal databases with <strong>Microsoft Access</strong>.</li>
                        <li>Developed <strong>Python scripts</strong> for data import and transformation, and <strong>Excel macros</strong> to simplify users’ daily tasks.</li>
                        <li>Designed <strong>Power BI dashboards</strong> for <strong>multiple departments</strong>, working with business teams to define metrics that support decision-making.</li>
                        <li>Optimized complex <strong>SQL Server</strong> queries to speed up report generation on large data volumes.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Independent Full Stack Developer</div>
                            <div class="job-company"><i class="bi bi-building"></i> Appanoo Labs — Montreal, QC</div>
                        </div>
                        <span class="job-period">Oct. 2018 – Dec. 2020</span>
                    </div>
                    <p class="summary-text" style="font-size:0.85rem; color: var(--text-muted); margin: 0.15rem 0 0;">Freelance projects completed alongside studies and later the CIUSSS role</p>
                    <ul>
                        <li>Participated in client discussions to gather requirements, clarify expected features, and define application specifications.</li>
                        <li>Translated mockups into <strong>React web interfaces</strong>, following the intended design and interactions.</li>
                        <li>Contributed to <strong>REST API</strong> development using <strong>Django and Django REST Framework</strong> or <strong>Express (Node.js)</strong>, depending on the project.</li>
                        <li>Participated in <strong>application deployment on Heroku</strong>.</li>
                    </ul>
                </div>

            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-code-slash"></i> Open-Source Projects</div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-title">
                        Vite Quiz Game
                        <span class="project-year">2025</span>
                        <a href="https://github.com/claserre9/vite-quiz-game" target="_blank" class="project-github" title="View on GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        A math practice game for children featuring varied exercises, local profiles, and
                        adaptive practice targeting areas of difficulty. Built with TypeScript, Knockout.js, and Vite,
                        with unit and end-to-end tests.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Knockout.js</span>
                        <span class="project-tag">Vite</span>
                        <span class="project-tag">Vitest</span>
                        <span class="project-tag">Playwright</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        Wakatime Stats
                        <span class="project-year">2023</span>
                        <a href="https://github.com/claserre9/wakatime-stats" target="_blank" class="project-github" title="View on GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        A PHP CLI tool that queries the Wakatime API and automatically updates coding stats
                        in GitHub README files via GitHub Actions.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">PHP</span>
                        <span class="project-tag">GitHub Actions</span>
                        <span class="project-tag">REST API</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        Knockout JS Scanner
                        <span class="project-year">2024</span>
                        <a href="https://github.com/claserre9/knockout-js-scanner" target="_blank" class="project-github" title="View on GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        A TypeScript Chrome extension that surfaces Knockout.js bound data for any selected
                        DOM element in DevTools, speeding up frontend debugging.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Chrome Extension</span>
                        <span class="project-tag">Knockout.js</span>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-title">
                        Personal CV Website
                        <span class="project-year">2024</span>
                        <a href="https://github.com/claserre9/claserre9.github.io" target="_blank" class="project-github" title="View on GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Single Page Application CV website built with TypeScript, Knockout.js, and Webpack,
                        deployed on GitHub Pages with client-side routing.
                    </p>
                    <div class="project-tags">
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Knockout.js</span>
                        <span class="project-tag">Webpack</span>
                        <span class="project-tag">GitHub Pages</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-tools"></i> Technical Skills</div>
            <div class="skills-group">
                <div class="skills-label">Languages</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-lang">PHP</span>
                    <span class="badge-skill badge-lang">TypeScript</span>
                    <span class="badge-skill badge-lang">JavaScript</span>
                    <span class="badge-skill badge-lang">Python</span>
                    <span class="badge-skill badge-lang">SQL</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Backend</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-fw">Symfony</span>
                    <span class="badge-skill badge-fw">Doctrine ORM</span>
                    <span class="badge-skill badge-fw">Slim</span>
                    <span class="badge-skill badge-fw">Django</span>
                    <span class="badge-skill badge-fw">Node.js</span>
                    <span class="badge-skill badge-fw">REST / OpenAPI</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Frontend</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-front">React</span>
                    <span class="badge-skill badge-front">Knockout.js (MVVM, data-binding)</span>
                    <span class="badge-skill badge-front">Vite</span>
                    <span class="badge-skill badge-front">Webpack</span>
                    <span class="badge-skill badge-front">SPAs & client-side routing</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Databases</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-db">SQL Server</span>
                    <span class="badge-skill badge-db">MySQL</span>
                    <span class="badge-skill badge-db">PostgreSQL</span>
                    <span class="badge-skill badge-db">Redis</span>
                    <span class="badge-skill badge-db">MongoDB</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">DevOps & CI/CD</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-tools">Docker</span>
                    <span class="badge-skill badge-tools">GitHub Actions</span>
                    <span class="badge-skill badge-tools">Jenkins</span>
                    <span class="badge-skill badge-tools">Git</span>
                    <span class="badge-skill badge-tools">PHPUnit</span>
                    <span class="badge-skill badge-tools">AWS (personal knowledge — S3, EC2)</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Practices</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-meth">Software architecture</span>
                    <span class="badge-skill badge-meth">Code review</span>
                    <span class="badge-skill badge-meth">TDD</span>
                    <span class="badge-skill badge-meth">Application security (JWT, access control)</span>
                    <span class="badge-skill badge-meth">Agile/Scrum</span>
                    <span class="badge-skill badge-meth">Jira</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">AI-Assisted Development</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-ai">Claude Code</span>
                    <span class="badge-skill badge-ai">Codex</span>
                    <span class="badge-skill badge-ai">Cursor</span>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-mortarboard-fill"></i> Education</div>
            <div class="edu-card">
                <div class="edu-icon"><i class="bi bi-mortarboard-fill"></i></div>
                <div>
                    <div class="edu-degree">DEC, Computer Science Technology</div>
                    <div class="edu-school">Collège de Rosemont, Montreal &nbsp;·&nbsp; 2017 – 2020</div>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-translate"></i> Languages</div>
            <div class="lang-grid">
                <div class="lang-item">
                    <div class="lang-name">French</div>
                    <div class="lang-level">Native speaker</div>
                </div>
                <div class="lang-item">
                    <div class="lang-name">English</div>
                    <div class="lang-level">Professional working proficiency</div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>© <span data-bind="text: year"></span> Clifford Laserre &nbsp;·&nbsp; References available upon request.</p>
    </footer>

    <button class="btn-print" onclick="window.print()">
        <i class="bi bi-file-earmark-pdf-fill"></i> Download PDF
    </button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`;
}
