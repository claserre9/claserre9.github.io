export function getFrenchResume() {

    return `
    <header class="bg-primary text-white text-center py-4">
        <div class="container">
            <h1>Clifford Laserre</h1>
            <p class="lead">Développeur Full Stack</p>
            <p>Email : <a href="mailto:claserre9@gmail.com" class="text-white">claserre9@gmail.com</a> | 
               GitHub : <a href="https://github.com/claserre9" target="_blank" class="text-white">claserre9</a> | 
               LinkedIn : <a href="https://linkedin.com/in/cliffordlaserre" target="_blank" class="text-white">Clifford Laserre</a></p>
               
            <div class="mt-3">
                <a href="/" class="btn btn-light">Français</a>
                <a href="/en" class="btn btn-light">English</a>
            </div>
        </div>
    </header>

    <main class="container my-5">
        <section class="mb-4">
            <h2 class="text-primary">Résumé</h2>
            <p>Développeur backend avec plus de trois ans d'expérience dans la conception et le
développement d'applications web performantes et évolutives. Solides compétences en
PHP, Symfony, Node.js, et Django, avec une maîtrise des outils de gestion de contenu (CMS),
de l'optimisation des performances, et de la correction des bugs. Contributeur actif à des
projets open-source, je suis passionné par la résolution de problèmes complexes grâce à des
solutions élégantes et évolutives.</p>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Expérience professionnelle</h2>

            <div class="mb-3">
                <h4>Développeur Backend - Valnet Inc, Montréal</h4>
                <p><em>mai 2021 – jusqu’à date</em></p>
                <ul>
                    <li>
                    Conception et développement de nouvelles fonctionnalités pour le CMS interne en
                    utilisant les framework Slim, Doctrine, et Knockout.js. Ces fonctionnalités
                    permettent de faciliter la gestion de contenu pour des sites à fort trafic et
                    d'améliorer la productivité des équipes.
                    </li>
                    <li>
                    Optimisation des performances des sites web en implémentant des stratégies de
                    mise en cache avec Redis. Cette optimisation a permis de réduire les temps de
                    chargement des pages de manière significative, améliorant ainsi l'expérience
                    utilisateur sous forte charge de trafic.
                    </li>
                    <li>
                    Maintenance et optimisation des bases de données MySQL et Redis. Refactorisation
                    des schémas de base de données et amélioration des requêtes complexes pour
                    assurer une performance maximale.
                    </li>
                    <li>
                    Correction des bugs critiques dans les systèmes backend et frontend, en utilisant
                    des tests unitaires rigoureux pour garantir des déploiements sans erreurs et une
                    stabilité continue.
                    </li>
                    <li>
                    Contribution à la publication de contenu via des sites web utilisant le framework
                    Symfony, en assurant une gestion fluide des versions et en respectant les exigences
                    de haute qualité des plateformes de contenu de Valnet.
                    </li>
                </ul>
            </div>

            <div class="mb-3">
                <h4>Technicien en administration (Intelligence d’affaires) - CIUSSS, Montréal</h4>
                <p><em>Décembre 2019 - mai 2021</em></p>
                <ul>
                    <li>
                    Développement de rapports analytiques complexes pour divers départements en
                    utilisant SQL Server et Power BI, facilitant la prise de décisions importantes grâce à
                    des tableaux de bord interactifs et des rapports automatisés.
                    </li>
                    <li>
                    Conception et automatisation de processus de gestion de données (ETL) pour
                    extraire, transformer, et charger des données depuis des entrepôts de données. Ces
                    automatisations ont permis de réduire considérablement le temps consacré aux
                    tâches manuelles et d’améliorer l'efficacité des équipes de gestion de données.
                    </li>
                    <li>
                    Amélioration des performances des bases de données en optimisant les requêtes
                    SQL, ce qui a entraîné une accélération notable des temps de génération des
                    rapports et une amélioration de l’accès aux données.
                    </li>
                </ul>
            </div>

            <div>
                <h4>Développeur Indépendant - Appanoo Labs, Montréal</h4>
                <p><em>Octobre 2018 - Décembre 2020</em></p>
                <ul>
                    <li>
                    Accompagnement des startups et PME dans la définition de leurs besoins techniques
                    et la mise en place d'applications web personnalisées, en utilisant Django et Node.js.
                    </li>
                    <li>
                    Développement et intégration d'APIs RESTful pour des applications web et mobiles,
                    facilitant la communication entre divers systèmes internes et services externes.
                    </li>
                    <li>
                    Mise en œuvre de pipelines CI/CD avec Docker et Heroku, réduisant ainsi les temps
                    de déploiement et améliorant l'efficacité des mises à jour continues des applications.
                    </li>
                </ul>
            </div>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Projets Open-Source</h2>
            <ul>
                <li><strong>Wakatime Stats (2023)</strong> : 
                Développement d'un outil en PHP qui met à jour les
                statistiques Wakatime dans les fichiers README de GitHub, démontrant une bonne
                maîtrise des APIs et de l’automatisation.
                </li>
                <li><strong>Knockout JS Scanner (2024)</strong> : 
                Création d'une extension Chrome en TypeScript
                permettant d’afficher les données Knockout.js associées aux éléments DOM
                sélectionnés, facilitant ainsi le développement frontend.
                </li>
            </ul>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Compétences techniques</h2>
            <ul class="row">
                <li class="col-md-6">Langages : PHP, JavaScript, TypeScript, Python, SQL, C/C++, Rust</li>
                <li class="col-md-6">Frameworks : Symfony, Laravel, Slim PHP, Knockout.js, Django, Node.js</li>
                <li class="col-md-6">Bases de données : MySQL, MongoDB, Redis, PostgreSQL</li>
                <li class="col-md-6">Outils : Git, Docker, Jenkins, GitHub, Jira</li>
                <li class="col-md-6">Méthodologies : Agile, Scrum</li>
            </ul>
        </section>

        <section>
            <h2 class="text-primary">Formation</h2>
            <p><strong>Diplôme d'études collégiales (DEC) en Informatique</strong> - Collège de Rosemont, Montréal (2017 - 2020)</p>
        </section>
    </main>

    <footer class="bg-light text-center py-3">
        <p>©<span data-bind="text: year"></span>  Clifford Laserre. Références disponibles sur demande.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`;
}

export function getEnglishResume() {

    return `
    <header class="bg-primary text-white text-center py-4">
        <div class="container">
            <h1>Clifford Laserre</h1>
            <p class="lead">Full Stack Developer</p>
            <p>Email: <a href="mailto:claserre9@gmail.com" class="text-white">claserre9@gmail.com</a> | 
               GitHub: <a href="https://github.com/claserre9" target="_blank" class="text-white">claserre9</a> | 
               LinkedIn: <a href="https://linkedin.com/in/cliffordlaserre" target="_blank" class="text-white">Clifford Laserre</a></p>
               
            <div class="mt-3">
                <a href="/" class="btn btn-light">French</a>
                <a href="/en" class="btn btn-light">English</a>
            </div>
        </div>
    </header>

    <main class="container my-5">
        <section class="mb-4">
            <h2 class="text-primary">Summary</h2>
            <p>Backend developer with over three years of experience in designing and developing 
high-performance and scalable web applications. Strong skills in PHP, Symfony, Node.js, and Django, 
with expertise in content management systems (CMS), performance optimization, and bug fixing. 
An active contributor to open-source projects, I am passionate about solving complex problems 
with elegant and scalable solutions.</p>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Work Experience</h2>

            <div class="mb-3">
                <h4>Backend Developer - Valnet Inc, Montreal</h4>
                <p><em>May 2021 – Present</em></p>
                <ul>
                    <li>
                    Designed and developed new features for the internal CMS using Slim, Doctrine, 
                    and Knockout.js frameworks. These features improved content management for 
                    high-traffic websites and enhanced team productivity.
                    </li>
                    <li>
                    Optimized website performance by implementing caching strategies with Redis. 
                    This significantly reduced page load times, enhancing user experience under 
                    heavy traffic loads.
                    </li>
                    <li>
                    Maintained and optimized MySQL and Redis databases. Refactored database schemas 
                    and improved complex queries to ensure maximum performance.
                    </li>
                    <li>
                    Fixed critical bugs in backend and frontend systems using rigorous unit testing 
                    to guarantee error-free deployments and continuous stability.
                    </li>
                    <li>
                    Contributed to content publishing on websites using the Symfony framework, 
                    ensuring smooth version management and meeting Valnet’s high-quality content 
                    platform requirements.
                    </li>
                </ul>
            </div>

            <div class="mb-3">
                <h4>Business Intelligence Administrator - CIUSSS, Montreal</h4>
                <p><em>December 2019 - May 2021</em></p>
                <ul>
                    <li>
                    Developed complex analytical reports for various departments using SQL Server and 
                    Power BI, facilitating key decision-making through interactive dashboards and 
                    automated reports.
                    </li>
                    <li>
                    Designed and automated data management (ETL) processes to extract, transform, 
                    and load data from data warehouses. These automations significantly reduced 
                    manual work and improved data management team efficiency.
                    </li>
                    <li>
                    Improved database performance by optimizing SQL queries, leading to faster 
                    report generation and better data accessibility.
                    </li>
                </ul>
            </div>

            <div>
                <h4>Freelance Developer - Appanoo Labs, Montreal</h4>
                <p><em>October 2018 - December 2020</em></p>
                <ul>
                    <li>
                    Assisted startups and SMEs in defining their technical needs and implementing 
                    custom web applications using Django and Node.js.
                    </li>
                    <li>
                    Developed and integrated RESTful APIs for web and mobile applications, enabling 
                    seamless communication between internal systems and external services.
                    </li>
                    <li>
                    Implemented CI/CD pipelines using Docker and Heroku, reducing deployment times 
                    and improving application update efficiency.
                    </li>
                </ul>
            </div>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Open-Source Projects</h2>
            <ul>
                <li><strong>Wakatime Stats (2023)</strong>: 
                Developed a PHP tool that updates Wakatime statistics in GitHub README files, 
                demonstrating strong API and automation skills.
                </li>
                <li><strong>Knockout JS Scanner (2024)</strong>: 
                Created a Chrome extension in TypeScript that displays Knockout.js data associated 
                with selected DOM elements, facilitating frontend development.
                </li>
            </ul>
        </section>

        <section class="mb-4">
            <h2 class="text-primary">Technical Skills</h2>
            <ul class="row">
                <li class="col-md-6">Languages: PHP, JavaScript, TypeScript, Python, SQL, C/C++, Rust</li>
                <li class="col-md-6">Frameworks: Symfony, Laravel, Slim PHP, Knockout.js, Django, Node.js</li>
                <li class="col-md-6">Databases: MySQL, MongoDB, Redis, PostgreSQL</li>
                <li class="col-md-6">Tools: Git, Docker, Jenkins, GitHub, Jira</li>
                <li class="col-md-6">Methodologies: Agile, Scrum</li>
            </ul>
        </section>

        <section>
            <h2 class="text-primary">Education</h2>
            <p><strong>Diploma of College Studies (DEC) in Computer Science</strong> - Collège de Rosemont, Montreal (2017 - 2020)</p>
        </section>
    </main>

    <footer class="bg-light text-center py-3">
        <p>©<span data-bind="text: year"></span>  Clifford Laserre. References available upon request.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
`;
}
