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
        .badge-db    { background: #fee2e2; color: #991b1b; border-color: #fca5a5; }
        .badge-tools { background: #f3e8ff; color: #6b21a8; border-color: #d8b4fe; }
        .badge-meth  { background: #e0f2fe; color: #0c4a6e; border-color: #7dd3fc; }

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
        @media print {
            header {
                background: #0d6efd !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .btn-print, .lang-switcher { display: none !important; }
            body { background: white; }
            main { padding: 0.5rem; }
            section {
                box-shadow: none !important;
                border: 1px solid #e2e8f0 !important;
                break-inside: avoid;
                margin-bottom: 1rem;
            }
            section:hover { transform: none !important; }
            .project-card { break-inside: avoid; }
            .timeline-item { break-inside: avoid; }
            .badge-skill {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
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
            <p class="subtitle">Développeur Full Stack · PHP · Node.js · Python</p>
            <div class="contact-links">
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
                Développeur Full Stack avec plus de <strong>5 ans d’expérience</strong> dans la conception et le développement
                d’applications web performantes et évolutives. Expert en <strong>PHP, Symfony, Node.js et Django</strong>,
                avec une solide maîtrise des systèmes de gestion de contenu (CMS), de l’optimisation des performances
                et de l’intégration de bases de données relationnelles et NoSQL. Contributeur actif à des projets
                open-source, passionné par la résolution de problèmes complexes au moyen de solutions
                architecturées avec soin.
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
                        <span class="job-period">Mai 2021 – Présent</span>
                    </div>
                    <ul>
                        <li>Conception et développement de nouvelles fonctionnalités pour le CMS interne avec <strong>Slim Framework, Doctrine ORM et Knockout.js</strong>, supportant des plateformes à plus de <strong>10 millions de visiteurs mensuels</strong>.</li>
                        <li>Réduction des temps de chargement de <strong>40 %</strong> grâce à l’implémentation de stratégies de mise en cache avancées avec <strong>Redis</strong> (cache de requêtes, sessions, données applicatives).</li>
                        <li>Optimisation des bases de données <strong>MySQL et Redis</strong> : refactorisation de schémas, réécriture de requêtes critiques et ajout d’index ciblés pour améliorer les performances sous forte charge.</li>
                        <li>Mise en place de tests unitaires et d’intégration (PHPUnit) permettant de réduire le taux d’incidents en production de façon significative et de fiabiliser les déploiements continus.</li>
                        <li>Participation active aux cycles de publication de contenu via <strong>Symfony</strong>, en assurant la qualité du code, la revue de merge requests et le respect des standards de l’équipe.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Technicien en intelligence d’affaires</div>
                            <div class="job-company"><i class="bi bi-building"></i> CIUSSS — Montréal, QC</div>
                        </div>
                        <span class="job-period">Déc. 2019 – Mai 2021</span>
                    </div>
                    <ul>
                        <li>Développement de <strong>tableaux de bord Power BI</strong> et de rapports analytiques pour plus de <strong>8 départements</strong>, permettant d’accélérer la prise de décision clinique et administrative.</li>
                        <li>Conception et automatisation de pipelines <strong>ETL</strong> (SQL Server Integration Services) réduisant le temps de traitement manuel de données de <strong>60 %</strong>.</li>
                        <li>Optimisation de requêtes <strong>SQL Server</strong> complexes (plans d’exécution, indexation, vues matérialisées) améliorant la vitesse de génération des rapports de plus de <strong>50 %</strong>.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Développeur Indépendant</div>
                            <div class="job-company"><i class="bi bi-building"></i> Appanoo Labs — Montréal, QC</div>
                        </div>
                        <span class="job-period">Oct. 2018 – Déc. 2020</span>
                    </div>
                    <ul>
                        <li>Accompagnement de startups et PME dans la définition de leurs besoins techniques et la livraison d’applications web sur mesure avec <strong>Django et Node.js</strong>.</li>
                        <li>Conception et intégration d’<strong>APIs RESTful</strong> robustes (authentification JWT, documentation OpenAPI) reliant des systèmes internes à des services tiers.</li>
                        <li>Mise en place de pipelines <strong>CI/CD</strong> avec Docker et Heroku, réduisant les cycles de déploiement de plusieurs heures à moins de <strong>15 minutes</strong>.</li>
                    </ul>
                </div>

            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-code-slash"></i> Projets Open-Source</div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-title">
                        Wakatime Stats
                        <span class="project-year">2023</span>
                        <a href="https://github.com/claserre9/wakatime-stats" target="_blank" class="project-github" title="Voir sur GitHub"><i class="bi bi-github"></i></a>
                    </div>
                    <p class="project-desc">
                        Outil CLI en PHP qui interroge l’API Wakatime et met à jour automatiquement les statistiques de
                        coding dans les fichiers README GitHub via GitHub Actions.
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
                        DOM sélectionnés dans le DevTools, accélérant le débogage frontend.
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
                        déployé sur GitHub Pages avec routing côté client.
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
                    <span class="badge-skill badge-lang">JavaScript</span>
                    <span class="badge-skill badge-lang">TypeScript</span>
                    <span class="badge-skill badge-lang">Python</span>
                    <span class="badge-skill badge-lang">SQL</span>
                    <span class="badge-skill badge-lang">Rust</span>
                    <span class="badge-skill badge-lang">C/C++</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Frameworks & Librairies</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-fw">Symfony</span>
                    <span class="badge-skill badge-fw">Laravel</span>
                    <span class="badge-skill badge-fw">Slim PHP</span>
                    <span class="badge-skill badge-fw">Django</span>
                    <span class="badge-skill badge-fw">Node.js</span>
                    <span class="badge-skill badge-fw">Knockout.js</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Bases de données</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-db">MySQL</span>
                    <span class="badge-skill badge-db">PostgreSQL</span>
                    <span class="badge-skill badge-db">MongoDB</span>
                    <span class="badge-skill badge-db">Redis</span>
                    <span class="badge-skill badge-db">SQL Server</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Outils & DevOps</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-tools">Git</span>
                    <span class="badge-skill badge-tools">Docker</span>
                    <span class="badge-skill badge-tools">Jenkins</span>
                    <span class="badge-skill badge-tools">GitHub Actions</span>
                    <span class="badge-skill badge-tools">Jira</span>
                    <span class="badge-skill badge-tools">Power BI</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Méthodologies</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-meth">Agile</span>
                    <span class="badge-skill badge-meth">Scrum</span>
                    <span class="badge-skill badge-meth">CI/CD</span>
                    <span class="badge-skill badge-meth">TDD</span>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-mortarboard-fill"></i> Formation</div>
            <div class="edu-card">
                <div class="edu-icon"><i class="bi bi-mortarboard-fill"></i></div>
                <div>
                    <div class="edu-degree">Diplôme d’études collégiales (DEC) — Informatique</div>
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
                    <div class="lang-bar"><div class="lang-fill" style="width:100%"></div></div>
                </div>
                <div class="lang-item">
                    <div class="lang-name">Anglais</div>
                    <div class="lang-level">Professionnel courant</div>
                    <div class="lang-bar"><div class="lang-fill" style="width:85%"></div></div>
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
            <p class="subtitle">Full Stack Developer · PHP · Node.js · Python</p>
            <div class="contact-links">
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
                Full Stack Developer with over <strong>5 years of experience</strong> designing and building
                high-performance, scalable web applications. Expert in <strong>PHP, Symfony, Node.js, and Django</strong>,
                with deep knowledge of CMS architecture, performance optimization, and relational/NoSQL database
                integration. Active open-source contributor passionate about solving complex engineering challenges
                through clean, maintainable, and well-tested code.
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
                        <span class="job-period">May 2021 – Present</span>
                    </div>
                    <ul>
                        <li>Designed and delivered new features for the internal CMS using <strong>Slim Framework, Doctrine ORM, and Knockout.js</strong>, supporting platforms with over <strong>10 million monthly visitors</strong>.</li>
                        <li>Reduced page load times by <strong>40%</strong> through advanced <strong>Redis</strong> caching strategies (query caching, session caching, application-level cache), significantly improving user experience under peak traffic.</li>
                        <li>Optimized <strong>MySQL and Redis</strong> databases by refactoring schemas, rewriting critical queries, and adding targeted indexes to sustain performance at scale.</li>
                        <li>Established a comprehensive unit and integration testing suite (PHPUnit), reducing production incident rates and enabling confident continuous deployments.</li>
                        <li>Actively contributed to content publishing workflows via <strong>Symfony</strong>, including code reviews, merge request management, and adherence to team engineering standards.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Business Intelligence Technician</div>
                            <div class="job-company"><i class="bi bi-building"></i> CIUSSS — Montreal, QC</div>
                        </div>
                        <span class="job-period">Dec. 2019 – May 2021</span>
                    </div>
                    <ul>
                        <li>Built <strong>Power BI dashboards</strong> and analytical reports for <strong>8+ departments</strong>, enabling faster clinical and administrative decision-making.</li>
                        <li>Designed and automated <strong>ETL pipelines</strong> (SQL Server Integration Services), cutting manual data processing time by <strong>60%</strong>.</li>
                        <li>Optimized complex <strong>SQL Server</strong> queries (execution plans, indexing, materialized views), improving report generation speed by over <strong>50%</strong>.</li>
                    </ul>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="job-header">
                        <div>
                            <div class="job-title">Freelance Developer</div>
                            <div class="job-company"><i class="bi bi-building"></i> Appanoo Labs — Montreal, QC</div>
                        </div>
                        <span class="job-period">Oct. 2018 – Dec. 2020</span>
                    </div>
                    <ul>
                        <li>Partnered with startups and SMEs to define technical requirements and deliver custom web applications using <strong>Django and Node.js</strong>.</li>
                        <li>Built and integrated robust <strong>RESTful APIs</strong> (JWT auth, OpenAPI documentation) connecting internal systems with third-party services.</li>
                        <li>Implemented <strong>CI/CD pipelines</strong> with Docker and Heroku, cutting deployment cycles from hours to under <strong>15 minutes</strong>.</li>
                    </ul>
                </div>

            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-code-slash"></i> Open-Source Projects</div>
            <div class="projects-grid">
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
                    <span class="badge-skill badge-lang">JavaScript</span>
                    <span class="badge-skill badge-lang">TypeScript</span>
                    <span class="badge-skill badge-lang">Python</span>
                    <span class="badge-skill badge-lang">SQL</span>
                    <span class="badge-skill badge-lang">Rust</span>
                    <span class="badge-skill badge-lang">C/C++</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Frameworks & Libraries</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-fw">Symfony</span>
                    <span class="badge-skill badge-fw">Laravel</span>
                    <span class="badge-skill badge-fw">Slim PHP</span>
                    <span class="badge-skill badge-fw">Django</span>
                    <span class="badge-skill badge-fw">Node.js</span>
                    <span class="badge-skill badge-fw">Knockout.js</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Databases</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-db">MySQL</span>
                    <span class="badge-skill badge-db">PostgreSQL</span>
                    <span class="badge-skill badge-db">MongoDB</span>
                    <span class="badge-skill badge-db">Redis</span>
                    <span class="badge-skill badge-db">SQL Server</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Tools & DevOps</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-tools">Git</span>
                    <span class="badge-skill badge-tools">Docker</span>
                    <span class="badge-skill badge-tools">Jenkins</span>
                    <span class="badge-skill badge-tools">GitHub Actions</span>
                    <span class="badge-skill badge-tools">Jira</span>
                    <span class="badge-skill badge-tools">Power BI</span>
                </div>
            </div>
            <div class="skills-group">
                <div class="skills-label">Methodologies</div>
                <div class="skills-badges">
                    <span class="badge-skill badge-meth">Agile</span>
                    <span class="badge-skill badge-meth">Scrum</span>
                    <span class="badge-skill badge-meth">CI/CD</span>
                    <span class="badge-skill badge-meth">TDD</span>
                </div>
            </div>
        </section>

        <section>
            <div class="section-title"><i class="bi bi-mortarboard-fill"></i> Education</div>
            <div class="edu-card">
                <div class="edu-icon"><i class="bi bi-mortarboard-fill"></i></div>
                <div>
                    <div class="edu-degree">Diploma of College Studies (DEC) — Computer Science</div>
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
                    <div class="lang-bar"><div class="lang-fill" style="width:100%"></div></div>
                </div>
                <div class="lang-item">
                    <div class="lang-name">English</div>
                    <div class="lang-level">Professional working proficiency</div>
                    <div class="lang-bar"><div class="lang-fill" style="width:85%"></div></div>
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
