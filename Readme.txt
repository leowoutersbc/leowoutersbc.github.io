Portfolio BUT R&T (parcours ROM) - Leo Wouters

Structure :
- index.html                    : accueil, présentation, parcours, liste des compétences
- Portfolio/*-details.html      : une page par compétence (contenu généré par JS)
- assets/js/portfolio-data.js   : TOUT le contenu des compétences (AC, textes, traces) -> c'est ce fichier qu'on modifie
- assets/js/competence.js       : affichage d'une page compétence
- assets/css/style.css          : style du site
- assets/pdf/                   : comptes rendus PDF utilisés comme traces

Ajouter une trace PDF à un AC : déposer le fichier dans assets/pdf puis ajouter
{ "title": "Nom de la trace", "pdf": "assets/pdf/fichier.pdf" } dans "proofs" de l'AC.

Crédits : première version basée sur le template MyResume (BootstrapMade), réécrite depuis.
