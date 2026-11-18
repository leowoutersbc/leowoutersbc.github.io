/* Données du portfolio : modifier ce fichier pour mettre à jour les compétences.
   status : "ok" (trace complète), "wip" (en cours), "todo" (à venir).
   proofs : { title, pdf } pour un PDF dans assets/pdf, ou { title, code } pour un extrait. */
window.PORTFOLIO = {
 "admin": {
  "name": "Administrer",
  "title": "Administrer les réseaux et l'Internet",
  "icon": "bi-hdd-network",
  "page": "Administrer-details.html",
  "composantes": [
   "En choisissant les solutions et technologies réseaux adaptées",
   "En respectant les principes fondamentaux de la sécurité informatique",
   "En utilisant une approche rigoureuse pour la résolution des dysfonctionnements",
   "En respectant les règles métiers",
   "En assurant une veille technologique"
  ],
  "situations": [
   "Conception et administration de l'infrastructure du réseau informatique d'une entreprise",
   "Installation et administration des services réseau informatique d'une entreprise",
   "Déploiement et administration des solutions fixes pour les clients d'un opérateur de télécommunication"
  ],
  "alternance": "Je tiens à jour la documentation technique utilisée par les équipes terrain : schémas réseau et cartographies de déploiement (fichiers KMZ). Une documentation juste permet aux techniciens d'intervenir vite et sans erreur, et m'oblige à comprendre l'architecture réelle des installations.",
  "levels": [
   {
    "n": 1,
    "label": "Assister l'administrateur du réseau",
    "year": "BUT1",
    "acs": [
     {
      "code": "AC11.01",
      "title": "Maîtriser les lois fondamentales de l'électricité afin d'intervenir sur des équipements de réseaux et télécommunications",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En cours de physique, j'ai appliqué les lois fondamentales de l'électricité (loi d'Ohm, lois de Kirchhoff) pour comprendre le fonctionnement des équipements réseau et télécom. Ces bases permettent d'intervenir en sécurité sur du matériel et d'interpréter les caractéristiques électriques des câbles et interfaces."
       ],
       [
        "Comment je l'ai fait",
        "Résolution d'exercices de circuits (calcul de tensions, courants, résistances) en appliquant la loi des mailles et la loi des nœuds sur des circuits représentatifs d'équipements réseau."
       ],
       [
        "Difficultés & Apprentissages",
        "Appliquer les lois de Kirchhoff sur des circuits à plusieurs mailles simultanément. J'ai retenu l'importance de poser les équations de façon systématique avant de résoudre."
       ],
       [
        "Comment je ferais autrement",
        "Utiliser un simulateur de circuit (LTspice) dès le début pour visualiser les tensions et valider mes calculs théoriques avant de passer aux exercices complexes."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC11.02",
      "title": "Comprendre l'architecture et les fondements des systèmes numériques, les principes du codage de l'information, des communications et de l'Internet",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En R101 TP7 (Cisco Packet Tracer), j'ai analysé des trames ICMP pour comprendre concrètement le modèle OSI en 7 couches. J'ai observé l'encapsulation lors de pings entre machines simulées et identifié précisément quelles couches sont sollicitées par le protocole ICMP et lesquelles ne le sont pas."
       ],
       [
        "Comment je l'ai fait",
        "En mode Simulation dans Packet Tracer, j'ai capturé des PDU lors d'un ping et analysé les en-têtes couche par couche : couche 2 (Ethernet II : MAC source/destination, type 0x0800), couche 3 (IP : adresses source/destination, TTL=128, protocole 0x01), couche 7 (ICMP : type, code, checksum, seq number). J'ai vérifié que les couches 4 (Transport), 5 et 6 ne sont pas sollicitées par ICMP car il n'y a pas de ports."
       ],
       [
        "Difficultés & Apprentissages",
        "Distinguer les informations propres à chaque couche dans une trame était difficile au début. J'ai retenu que le TTL appartient à la couche 3 (IP), que les adresses MAC à la couche 2, et qu'ICMP est traité en couche 7 dans l'analyse OSI de Packet Tracer malgré son appartenance au niveau réseau."
       ],
       [
        "Comment je ferais autrement",
        "Capturer également des trames TCP (HTTP, SSH) pour observer les couches 4 et supérieures et comparer avec ICMP, afin d'avoir une vision complète du modèle OSI sur des protocoles différents."
       ]
      ],
      "proofs": [
       {
        "title": "R101 TP7 : Construction d'un réseau local (Packet Tracer)",
        "pdf": "assets/pdf/R101_TP7.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC11.03",
      "title": "Configurer les fonctions de base du réseau local",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En R101 CTP, j'ai construit un mini-LAN virtuel : VM Ubuntu (192.168.0.10/24) et VM Windows (192.168.0.20/24) en Internal Network sur VirtualBox, avec configuration IPv4 statique sur chaque OS et tests de connectivité croisés. En R101 TP7, j'ai progressé de la liaison P2P (câble croisé) à un LAN en étoile avec switch 2960, puis à l'interconnexion de deux réseaux via deux routeurs Cisco 2911 avec routes statiques."
       ],
       [
        "Comment je l'ai fait",
        "Sur Ubuntu : configuration IP en ligne de commande avec <code>sudo ip addr add 192.168.0.10/24 dev &lt;interface&gt;</code>. Sur Windows : <code>netsh interface ipv4 set address</code>. Dans Packet Tracer : configuration des interfaces GigabitEthernet des routeurs (ex. 192.168.100.254/24 et 10.0.0.1/8), ajout de routes statiques (172.31.0.0/16 via 10.0.0.2 et 192.168.100.0/24 via 10.0.0.1) pour relier deux sous-réseaux via un lien WAN 10.0.0.x."
       ],
       [
        "Difficultés & Apprentissages",
        "Dans le CTP, configurer l'IP sous Windows en ligne de commande avec la syntaxe exacte <code>netsh</code> était difficile. Dans TP7, j'ai compris que deux switchs reliés directement ne permettent pas la communication inter-réseau : il faut obligatoirement un routeur et une route statique ou dynamique."
       ],
       [
        "Comment je ferais autrement",
        "Dessiner le schéma d'adressage (topologie + plan IP) avant de commencer la configuration, pour éviter les erreurs de sous-réseau. Utiliser Netplan (YAML) pour une config IP persistante sous Ubuntu plutôt que des commandes <code>ip addr</code> temporaires qui disparaissent au redémarrage."
       ]
      ],
      "proofs": [
       {
        "title": "R101 CTP : Mini-LAN Ubuntu/Windows",
        "pdf": "assets/pdf/R101_CTP.pdf",
        "code": null
       },
       {
        "title": "R101 TP7 : Construction d'un réseau local (Packet Tracer)",
        "pdf": "assets/pdf/R101_TP7.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC11.04",
      "title": "Maîtriser les rôles et les principes fondamentaux des systèmes d'exploitation afin d'interagir avec ceux-ci",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En R108, j'ai réalisé une série de TPs sur Linux Debian : manipulation de fichiers (TP1), commande find (TP2), droits chmod (TP3), filtres grep/sort/cut (TP4), puis un CTP sur les scripts Bash. En R101 TP3, j'ai pratiqué Ubuntu 24.04 LTS (GNOME) et découvert Kali Linux : une distribution Debian spécialisée en cybersécurité, avec des centaines d'outils préinstallés (Nmap, Metasploit, Aircrack-ng, Wireshark) pour l'audit et les tests d'intrusion."
       ],
       [
        "Comment je l'ai fait",
        "Sur Linux Debian (R108) : navigation arborescence, find, chmod/chown, grep/sort/cut, scripts Bash. Sur Ubuntu (R101 TP3) : commandes système (<code>ls -la</code>, <code>pwd</code>, <code>nano</code>, <code>vi</code>, <code>echo</code>, <code>date</code>, <code>history</code>), ressources (<code>free -h</code>, <code>df -h</code>), réseau (<code>ip addr</code>), et infos système (<code>hostname</code>, <code>cat /etc/os-release</code>). Sur Kali : exploration de l'interface et de la suite Aircrack-ng depuis une VM."
       ],
       [
        "Difficultés & Apprentissages",
        "La logique des droits Unix (notation octale) et la syntaxe des expressions régulières avec grep ont été les points les plus délicats. J'ai aussi retenu que Kali est en modèle \"rolling release\" (mises à jour fréquentes) basé sur Debian, conçu pour les professionnels de la sécurité et non pour un usage quotidien."
       ],
       [
        "Comment je ferais autrement",
        "Créer un fichier de référence personnel avec les commandes les plus utiles et leurs options. Faire également un tableau comparatif des distributions étudiées (Ubuntu LTS, Kali, Debian) pour mieux retenir leurs cas d'usage respectifs."
       ]
      ],
      "proofs": [
       {
        "title": "TP 1 : Introduction Système",
        "pdf": "assets/pdf/TP1.pdf",
        "code": null
       },
       {
        "title": "TP 2 : Commande FIND",
        "pdf": "assets/pdf/TP2.pdf",
        "code": null
       },
       {
        "title": "TP 3 : Droits Chmod",
        "pdf": "assets/pdf/TP3.pdf",
        "code": null
       },
       {
        "title": "TP 4 : Filtres et tris",
        "pdf": "assets/pdf/TP4.pdf",
        "code": null
       },
       {
        "title": "Compte-rendu CTP R108",
        "pdf": "assets/pdf/CTP.pdf",
        "code": null
       },
       {
        "title": "R101 TP3 : Linux & Kali Linux",
        "pdf": "assets/pdf/R101_TP3.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC11.05",
      "title": "Identifier les dysfonctionnements du réseau local et savoir les signaler",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En R101 CTP, j'ai diagnostiqué plusieurs dysfonctionnements réels : pings Windows → Ubuntu bloqués par le pare-feu Windows (100% perte) ; Windows refusant de s'assigner l'adresse de broadcast 192.168.0.255. En R101 TP7 (Packet Tracer), j'ai identifié qu'un câble RJ45 droit entre deux PCs sans switch provoquait 100% de perte de paquets, et que deux machines sur des sous-réseaux différents ne communiquaient pas sans passerelle configurée."
       ],
       [
        "Comment je l'ai fait",
        "Utilisation de <code>ping</code> sur Linux et Windows pour analyser les statistiques (paquets envoyés/reçus/perdus). Dans Packet Tracer : outil \"Add Simple PDU\" et mode Simulation pour visualiser le trajet des paquets couche par couche. Identification de la règle pare-feu bloquant ICMP et activation des pings depuis le réseau interne. Correction du câble droit → câble croisé pour les liaisons P2P, puis configuration de la passerelle pour le routage inter-réseau."
       ],
       [
        "Difficultés & Apprentissages",
        "Distinguer un problème de câblage (couche 1), d'adressage IP (couche 3) et de pare-feu (politique de sécurité) nécessite une approche méthodique. J'ai retenu de tester dans l'ordre : loopback (127.0.0.1) → IP locale → IP distante → pare-feu désactivé. La passerelle est indispensable pour envoyer des paquets vers un réseau différent du sien."
       ],
       [
        "Comment je ferais autrement",
        "Établir une checklist de diagnostic systématique : type de câble → adresse IP dans le bon sous-réseau → passerelle configurée → pare-feu → service applicatif. Cela éviterait de perdre du temps à chercher au mauvais niveau OSI."
       ]
      ],
      "proofs": [
       {
        "title": "R101 CTP : Mini-LAN Ubuntu/Windows",
        "pdf": "assets/pdf/R101_CTP.pdf",
        "code": null
       },
       {
        "title": "R101 TP7 : Construction d'un réseau local (Packet Tracer)",
        "pdf": "assets/pdf/R101_TP7.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC11.06",
      "title": "Installer un poste client, expliquer la procédure mise en place",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En R101 CTP, j'ai créé et configuré deux postes clients virtuels depuis zéro : une VM Ubuntu 22.04 Desktop et une VM Windows, chacune avec une carte réseau en Internal Network sur VirtualBox. J'ai configuré les adresses IP statiques sur les deux OS et validé leur intégration dans le mini-LAN par des tests de connectivité (ping croisé), documentant chaque étape pour rendre la procédure reproductible."
       ],
       [
        "Comment je l'ai fait",
        "Création des VMs via le script MachinesVirtuelles (1 carte réseau Internal Network, MAC auto-générée). Ubuntu : vérification des interfaces avec <code>ip -4 addr</code>, configuration IP statique en ligne de commande. Windows : vérification avec <code>ipconfig</code>, configuration avec <code>netsh interface ipv4 set address</code>. Modification du pare-feu Windows pour autoriser les pings ICMP depuis le réseau interne."
       ],
       [
        "Difficultés & Apprentissages",
        "La VM Windows affichait une adresse APIPA (169.254.x.x) au démarrage car aucun serveur DHCP n'était présent sur l'Internal Network. J'ai appris que ce type d'adresse (APIPA = Automatic Private IP Addressing) indique que la machine s'est auto-configurée faute de réponse DHCP."
       ],
       [
        "Comment je ferais autrement",
        "Utiliser Netplan (fichier YAML) pour une configuration IP persistante sous Ubuntu, plutôt que des commandes <code>ip addr add</code> temporaires qui disparaissent au redémarrage. Automatiser l'ensemble avec un script Bash pour déployer plusieurs postes rapidement."
       ]
      ],
      "proofs": [
       {
        "title": "R101 CTP : Mini-LAN Ubuntu/Windows",
        "pdf": "assets/pdf/R101_CTP.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     }
    ]
   },
   {
    "n": 2,
    "label": "Administrer un réseau",
    "year": "BUT2",
    "acs": [
     {
      "code": "AC21.01",
      "title": "Configurer et dépanner le routage dynamique dans un réseau",
      "sources": [
       "R301 TP1"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai construit sous Packet Tracer un réseau de campus en architecture 3 couches (cœur, distribution, accès) : 1 routeur, 2 switchs cœur (CSW1/CSW2) et 4 switchs de distribution (DSW1 à DSW4), reliés par 11 liens point à point en /30. J'ai mis OSPF (aire 0) sur tous les équipements de niveau 3."
       ],
       [
        "Pourquoi je l'ai fait",
        "Avec 11 liens et des chemins redondants, des routes statiques auraient été ingérables et ne basculent pas en cas de panne. OSPF calcule seul les meilleurs chemins et se recalcule si un lien tombe."
       ],
       [
        "Comment je l'ai fait",
        "J'ai d'abord cartographié les liens avec <code>show cdp neighbors detail</code> et rempli un tableau d'adressage (10.0.0.0/30, 10.0.0.4/30…). Ensuite : <code>no switchport</code> + IP sur chaque port routé, puis <code>router ospf 1</code>. Vérification avec <code>show ip ospf neighbor</code> : CSW1 voit bien ses 6 voisins en état FULL, et les pings inter-VLAN et inter-bâtiment passent jusqu'au serveur web (203.0.113.2)."
       ],
       [
        "Mes difficultés",
        "Le plus long a été de ne pas me tromper de port parmi les 22 interfaces routées : j'ai dû me fixer un ordre de câblage (\"haut/bas puis croiser\"). J'ai aussi eu du mal au début avec le masque générique d'OSPF (le masque \"à l'envers\")."
       ],
       [
        "Ce que j'en ai appris",
        "Le tableau d'adressage fait <em>avant</em> la configuration m'a fait gagner beaucoup de temps au dépannage : quand un voisin manquait, je savais tout de suite quelle IP vérifier. J'ai compris que <code>show ip ospf neighbor</code> est la première commande à lancer quand une route manque."
       ],
       [
        "Ce que je ferais autrement",
        "J'ai annoncé tout le 10.0.0.0/8 en une seule ligne : ça marche mais c'est trop large. La prochaine fois, j'annoncerais chaque /30 précisément, je fixerais un <code>router-id</code> et je mettrais les interfaces côté PC en <code>passive-interface</code>."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : OSPF sur CSW1 (R301 TP1)",
        "code": "interface gig1/0/1\n no switchport\n ip address 10.0.0.2 255.255.255.252\n!  ... 6 liens /30 au total\nrouter ospf 1\n network 10.0.0.0 0.255.255.255 area 0\n!\nCSW1# show ip ospf neighbor\n! -> 6 voisins (Router, CSW2, DSW1..DSW4) en état FULL"
       }
      ]
     },
     {
      "code": "AC21.02",
      "title": "Configurer une politique simple de QoS et les fonctions de base de la sécurité d'un réseau",
      "sources": [
       "R301 TP2",
       "SAÉ 3.03"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "En R301 TP2, j'ai mis en place une première politique de QoS sous Packet Tracer : marquage du trafic (IP precedence 5), puis classification sur un routeur voisin, avec des ACL pour sélectionner le trafic. Dans la SAÉ 3.03 (en cours), je prépare la partie sécurité : SSH uniquement depuis le VLAN ADMIN et ACL de cloisonnement entre VLAN."
       ],
       [
        "Pourquoi je l'ai fait",
        "Sur un lien chargé, tous les flux ne se valent pas : la voix et la vidéo supportent mal les retards. La QoS permet de les servir en premier. Côté sécurité, un réseau d'entreprise doit empêcher qu'un poste utilisateur administre les équipements."
       ],
       [
        "Comment je l'ai fait",
        "Marquage avec une policy-map (<code>set precedence 5</code>), classification avec une class-map (<code>match precedence 5</code>). Avant ça, j'ai dû mettre OSPF en place pour que les paquets soient routés. Vérification dans le mode simulation : le champ DSCP des paquets vaut 0x28."
       ],
       [
        "Mes difficultés",
        "J'ai perdu du temps sur la syntaxe Cisco : <code>set ip precedence 5</code> et <code>match ip precedence 5</code> sont refusés, il faut écrire <code>set precedence 5</code>. J'ai aussi oublié au départ que les postes Wi-Fi devaient redemander une adresse au DHCP."
       ],
       [
        "Ce que j'en ai appris",
        "J'ai compris pourquoi on lit 0x28 : 0x28 = 40 en décimal = DSCP CS5, ce qui correspond bien à precedence 5. La QoS ne sert à rien si le routage n'est pas d'abord fonctionnel."
       ],
       [
        "Ce que je ferais autrement",
        "Je testerais la QoS avec une vraie saturation du lien pour voir la différence, au lieu de seulement vérifier le marquage. Pour la SAÉ, j'écris d'abord la matrice des flux, puis les ACL, comme le conseille le sujet."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : marquage et classification (R301 TP2)",
        "code": "class-map match-all VOIX\n match precedence 5\n!\npolicy-map MARQUAGE\n class VOIX\n  set precedence 5\n!\n! Vérification : DSCP = 0x28 (40 = CS5 = precedence 5)"
       }
      ]
     },
     {
      "code": "AC21.03",
      "title": "Déployer des postes clients et des solutions virtualisées",
      "sources": [
       "R303",
       "SAÉ 3.03"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "En R303, j'ai déployé à chaque TP un serveur et un client Ubuntu derrière une RT-Box (routeur virtuel) : IP fixe, nom d'hôte (<code>ns-serveur</code>, <code>monclient1</code>) et DNS forcé. Pour la SAÉ 3.03, j'ai installé EVE-NG dans VMware pour simuler tout le réseau multi-sites (routeurs et switchs Cisco vIOS, serveurs Debian, VPCS)."
       ],
       [
        "Pourquoi je l'ai fait",
        "Packet Tracer ne suffit plus pour la SAÉ : il faut de vrais systèmes (Debian pour le DNS, les logs, la vidéo). La virtualisation permet de monter un réseau d'entreprise complet sur un seul PC."
       ],
       [
        "Comment je l'ai fait",
        "Côté client : <code>nmcli</code> pour ignorer le DNS donné par le DHCP et imposer celui du serveur, puis <code>resolvectl status</code> pour vérifier. Côté EVE-NG : VM à 11 Go de RAM et 4 cœurs, virtualisation VT-x activée, images envoyées en SFTP (WinSCP) dans <code>/opt/unetlab/addons/qemu/</code>, puis <code>fixpermissions</code>."
       ],
       [
        "Mes difficultés",
        "Le mode réseau des VM (NAT, réseau interne, pont) m'a souvent piégé : je devais passer en NAT pour installer les paquets puis revenir en interne. Pour EVE-NG, la virtualisation imbriquée ne marchait pas tant qu'Hyper-V était actif sous Windows."
       ],
       [
        "Ce que j'en ai appris",
        "J'ai appris à vérifier les prérequis matériels avant d'installer (test <code>egrep</code> de virtualisation) et à démarrer les nœuds par phases pour ne pas saturer les 16 Go de RAM."
       ],
       [
        "Ce que je ferais autrement",
        "Je ferais un script ou un modèle de VM déjà configurée pour ne pas refaire l'IP et le nom d'hôte à chaque TP. J'ai aussi appris à sauvegarder le lab en versions datées."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : forcer le DNS du client (R303 TP1)",
        "code": "nmcli con show\nsudo nmcli con mod netplan-enp0s3 ipv4.ignore-auto-dns yes\nsudo nmcli con mod netplan-enp0s3 ipv4.dns \"192.31.25.12\"\nsudo nmcli con up netplan-enp0s3\nresolvectl status   # doit afficher uniquement 192.31.25.12"
       }
      ]
     },
     {
      "code": "AC21.04",
      "title": "Déployer des services réseaux avancés et systèmes de supervision",
      "sources": [
       "R303 TP1",
       "R303 TP2",
       "R301 TP4",
       "R310 TP2"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai installé un serveur DNS bind9 (cache puis autorité sur la zone <code>monDomaine.lan</code> avec résolution inverse et deux sites web Apache), un serveur de messagerie complet (Postfix, Dovecot en POP3 et IMAP, Thunderbird) et un Wi-Fi centralisé avec un contrôleur Cisco 2504 et un DHCP qui indique le contrôleur aux bornes. Pour la supervision, j'ai activé les journaux de PostgreSQL (R310)."
       ],
       [
        "Pourquoi je l'ai fait",
        "Ce sont les services de base d'une entreprise : sans DNS, pas de messagerie (enregistrement MX). Le Wi-Fi centralisé évite de configurer chaque borne une par une. Les journaux permettent de voir ce qui se passe et de retrouver une attaque ou une panne."
       ],
       [
        "Comment je l'ai fait",
        "DNS : <code>named-checkconf</code> et <code>named-checkzone</code> avant chaque redémarrage, tests avec <code>dig</code> (le temps de réponse passe de 41 ms à presque 0 à la 2ᵉ requête : le cache marche). Mail : test du dialogue SMTP à la main en telnet (HELO, MAIL FROM, RCPT TO, DATA). Wi-Fi : <code>isc-dhcp-server</code> avec l'option 43 qui donne l'IP du contrôleur en hexadécimal."
       ],
       [
        "Mes difficultés",
        "bind9 refusait de démarrer : en lisant <code>journalctl</code> et <code>named -g</code>, j'ai trouvé un « permission denied » sur <code>/etc/bind</code>. La configuration de Dovecot changeait selon sa version (2.3 ou 2.4). Pour le Wi-Fi, j'ai dû convertir l'IP du contrôleur en hexadécimal (f1:04:c0:1f:19:02)."
       ],
       [
        "Ce que j'en ai appris",
        "J'ai appris à lire les messages d'erreur et les journaux au lieu de tâtonner, et à toujours tester la configuration avant de redémarrer. Le flag <code>aa</code> de <code>dig</code> m'a montré que mon serveur faisait bien autorité sur la zone."
       ],
       [
        "Ce que je ferais autrement",
        "Je sécuriserais tout de suite la messagerie (IMAPS 993, POP3S 995) au lieu de rester en clair. Pour la supervision, je centraliserais les logs sur un serveur Syslog : c'est prévu dans la SAÉ 3.03."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : DHCP pour les bornes Cisco (R301 TP4)",
        "code": "class \"cisco-ap\" {\n  match if substring(option vendor-class-identifier, 0, 8) = \"Cisco AP\";\n}\nsubnet 192.31.25.0 netmask 255.255.255.0 {\n  option routers 192.31.25.1;\n  pool {\n    allow members of \"cisco-ap\";\n    range 192.31.25.220 192.31.25.230;\n    # Option 43 : IP du contrôleur (192.31.25.2) en hexa\n    option vendor-encapsulated-options f1:04:c0:1f:19:02;\n  }\n}"
       },
       {
        "title": "Extrait : dépannage bind9 (R303 TP1)",
        "code": "sudo journalctl -u named.service --no-pager | grep -i error\nsudo named -g -u bind          # -> permission denied sur /etc/bind\nsudo chown -R bind:bind /etc/bind\nsudo named-checkconf\nsudo named-checkzone monDomaine.lan /etc/bind/monDomaine.lan\nsudo systemctl restart bind9"
       }
      ]
     },
     {
      "code": "AC21.05",
      "title": "Identifier les réseaux opérateurs et l'architecture d'Internet",
      "sources": [
       "R306",
       "SAÉ 3.03"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "En R306, j'ai étudié et mesuré un réseau d'accès optique PON : fibres de plusieurs kilomètres, coupleur 1 vers 8, circulateur et multiplexeurs WDM. Dans la SAÉ 3.03, je modélise la partie opérateur : un routeur FAI relié à Internet, qui sert de lien entre le siège et la succursale."
       ],
       [
        "Pourquoi je l'ai fait",
        "Pour comprendre comment un client est réellement raccordé à Internet et ce qui se trouve entre son réseau et celui de l'opérateur."
       ],
       [
        "Comment je l'ai fait",
        "Mesures au wattmètre et à la source laser à 1310 et 1550 nm, avec une référence à 0 dB. Dans EVE-NG, le routeur FAI est relié au nuage Internet (Cloud0) et chaque site a une adresse publique."
       ],
       [
        "Mes difficultés",
        "Comprendre le rôle de chaque composant passif : le coupleur partage la puissance entre les abonnés, le WDM sépare les deux longueurs d'onde (montante et descendante sur la même fibre)."
       ],
       [
        "Ce que j'en ai appris",
        "Un réseau d'accès optique est entièrement passif entre le central et l'abonné : c'est le bilan de puissance qui décide si un abonné peut être raccordé."
       ],
       [
        "Ce que je ferais autrement",
        "Je compléterai cet AC avec la partie réseau mobile et les offres des opérateurs, que je n'ai pas encore abordées."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC21.06",
      "title": "Travailler en équipe",
      "sources": [
       "SAÉ 3.03",
       "SAÉ ROM TEL",
       "Alternance"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Dans la SAÉ 3.03, on a monté un lab EVE-NG partagé : une seule VM, avec des comptes par membre et un accès à distance via Tailscale pour ceux qui travaillent de chez eux. En SAÉ téléphonie, j'ai relié mon serveur Asterisk à celui de Tristan pour que nos téléphones s'appellent. En entreprise, je travaille avec les techniciens sur le terrain."
       ],
       [
        "Pourquoi je l'ai fait",
        "Les projets sont notés en groupe mais les questions sont individuelles : chacun doit comprendre toute la solution, pas seulement sa partie."
       ],
       [
        "Comment je l'ai fait",
        "Répartition des tâches selon le barème, guides pas à pas partagés sur le Drive, comptes rendus mis en commun. En téléphonie, on a dû se mettre d'accord sur les numéros (6607, 6609) et les déclarer chacun dans nos fichiers."
       ],
       [
        "Mes difficultés",
        "Travailler sur le même lab en même temps : on ne peut pas câbler un nœud allumé dans EVE-NG, il faut se coordonner. Certains comptes rendus d'équipe n'étaient pas complets et j'ai dû reprendre des parties."
       ],
       [
        "Ce que j'en ai appris",
        "Un bon guide écrit vaut mieux qu'une explication orale : il permet à chacun d'avancer seul. Me mettre d'accord avec les autres <em>avant</em> de configurer évite de tout refaire."
       ],
       [
        "Ce que je ferais autrement",
        "Je ferais un point rapide en début de séance pour dire qui fait quoi, et je vérifierais plus tôt ce que les autres ont fait pour pouvoir l'expliquer à l'oral."
       ]
      ],
      "proofs": []
     }
    ]
   },
   {
    "n": 3,
    "label": "Concevoir un réseau",
    "year": "BUT3",
    "acs": []
   }
  ]
 },
 "connect": {
  "name": "Connecter",
  "title": "Connecter les entreprises et les usagers",
  "icon": "bi-broadcast",
  "page": "Connect-details.html",
  "composantes": [
   "En communiquant avec le client et les différents acteurs impliqués, parfois en anglais",
   "En faisant preuve d'une démarche scientifique",
   "En choisissant les solutions et technologies adaptées",
   "En proposant des solutions respectueuses de l'environnement"
  ],
  "situations": [
   "Déploiement des supports et systèmes de transmission",
   "Mise en service et administration des équipements d'accès fixe ou mobile d'un opérateur de télécommunications",
   "Déploiement et administration des accès sans fil pour l'entreprise",
   "Déploiement des systèmes de communications"
  ],
  "alternance": "",
  "levels": [
   {
    "n": 1,
    "label": "Découvrir les transmissions et la ToIP",
    "year": "BUT1",
    "acs": [
     {
      "code": "AC12.01",
      "title": "Mesurer, analyser et commenter les signaux",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "Dans le cadre de la SAE de physique des transmissions, j'ai simulé et analysé des signaux électriques avec LTspice. En séance 1, j'ai simulé un pont diviseur de tension et relevé les tensions aux bornes des composants. En séance 3, j'ai analysé le comportement fréquentiel du signal (atténuation et bande passante) en régime sinusoïdal."
       ],
       [
        "Comment je l'ai fait",
        "Utilisation de LTspice pour dessiner les schémas électriques, paramétrer les sources de signal et lancer les simulations. Lecture et interprétation des courbes temporelles et fréquentielles (courbes de Bode : gain et phase en fonction de la fréquence). Rédaction d'un compte-rendu commentant les résultats."
       ],
       [
        "Difficultés & Apprentissages",
        "Interpréter les courbes de Bode et identifier la fréquence de coupure à partir du graphe. J'ai retenu que la fréquence de coupure est là où le gain chute de 3 dB par rapport à la valeur maximale."
       ],
       [
        "Comment je ferais autrement",
        "Réaliser en parallèle des mesures sur maquette réelle avec un oscilloscope pour comparer les résultats de simulation à la réalité et mieux comprendre les écarts."
       ]
      ],
      "proofs": [
       {
        "title": "Dossier : Séance n°1",
        "pdf": "assets/pdf/seance_1.pdf",
        "code": null
       },
       {
        "title": "Dossier : Séance n°3",
        "pdf": "assets/pdf/seance_3.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC12.02",
      "title": "Caractériser des systèmes de transmissions élémentaires et découvrir la modélisation mathématique de leur fonctionnement",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai caractérisé le comportement d'un câble Ethernet modélisé comme une ligne de transmission avec ses paramètres RLCG. En séance 2 (LTspice), j'ai observé les déformations du signal en régime impulsionnel. En séances 4 et 5 (Simulink/Matlab), j'ai modélisé la vitesse de propagation et les retards selon les paramètres linéiques du câble."
       ],
       [
        "Comment je l'ai fait",
        "Modélisation du câble Ethernet par une ligne RLCG dans LTspice, simulation d'un signal impulsionnel pour observer les effets de réflexion et d'atténuation. Passage sur Simulink (Matlab) pour construire un schéma-bloc représentant la ligne de transmission et analyser les retards de propagation."
       ],
       [
        "Difficultés & Apprentissages",
        "La prise en main de Simulink a été difficile (interface par blocs très différente de LTspice). J'ai compris la relation entre les paramètres linéiques (R, L, C, G par mètre) et le comportement macroscopique du câble."
       ],
       [
        "Comment je ferais autrement",
        "Commencer par des modèles Simulink simples (source → gain → scope) avant d'aborder le modèle RLCG complet, et organiser le schéma en sous-systèmes pour plus de lisibilité."
       ]
      ],
      "proofs": [
       {
        "title": "Dossier : Séance n°2",
        "pdf": "assets/pdf/seance_2.pdf",
        "code": null
       },
       {
        "title": "Dossier : Séance n°4",
        "pdf": "assets/pdf/seance_4.pdf",
        "code": null
       },
       {
        "title": "Dossier : Séance n°5",
        "pdf": "assets/pdf/seance_5.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC12.03",
      "title": "Déployer des supports de transmission",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai étudié les différents supports de transmission utilisés en télécommunications (paires torsadées, câbles coaxiaux, fibre optique) et leurs caractéristiques techniques en vue d'un déploiement dans une infrastructure réseau."
       ],
       [
        "Comment je l'ai fait",
        "Étude comparative des supports (atténuation, bande passante, immunité aux interférences, distance maximale), connaissance des normes de câblage (catégories RJ45, types de fibre), et notions de déploiement d'un câblage structuré en entreprise."
       ],
       [
        "Difficultés & Apprentissages",
        "Comprendre les critères de choix entre les différents supports selon le contexte (distance, débit, environnement). J'ai retenu que la fibre optique est privilégiée pour les longues distances et forts débits, la paire torsadée pour les réseaux locaux."
       ],
       [
        "Comment je ferais autrement",
        "Réaliser un TP de câblage physique (sertissage RJ45, mesure avec testeur de câble) pour ancrer la théorie dans la pratique et mieux appréhender les contraintes terrain."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC12.04",
      "title": "Connecter les systèmes de ToIP",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai découvert les systèmes de téléphonie sur IP (ToIP) en étudiant l'architecture et les protocoles utilisés (SIP, RTP) pour connecter des équipements de communication via un réseau IP."
       ],
       [
        "Comment je l'ai fait",
        "Étude du protocole SIP (Session Initiation Protocol) pour l'établissement des appels et du protocole RTP (Real-time Transport Protocol) pour le transport de la voix. Notions d'installation d'un serveur Asterisk/PJSIP avec création de comptes SIP et plan de numérotation basique."
       ],
       [
        "Difficultés & Apprentissages",
        "Comprendre le flux d'établissement d'un appel SIP (INVITE, 180 Ringing, 200 OK, ACK) et la distinction entre signalisation (SIP) et media (RTP). J'ai retenu que la qualité d'un appel ToIP dépend fortement de la qualité du réseau (latence, gigue, perte de paquets)."
       ],
       [
        "Comment je ferais autrement",
        "Réaliser un TP de configuration complète avec deux softphones (Linphone, Zoiper) et un serveur Asterisk pour tester un appel de bout en bout et capturer les échanges SIP/RTP avec Wireshark."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC12.05",
      "title": "Communiquer avec un tiers (client, collaborateur...) et adapter son discours et sa langue à son interlocuteur",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "En séance 6 (bilan de la SAE), j'ai rédigé une synthèse technique destinée au client, intégrant les résultats des simulations, les calculs de paramètres linéiques du câble et des recommandations concrètes pour le déploiement de son infrastructure."
       ],
       [
        "Comment je l'ai fait",
        "Rédaction d'un compte-rendu structuré (contexte, mesures réalisées, résultats, recommandations) en adaptant le vocabulaire et le niveau technique au profil du client. Présentation des conclusions avec des arguments clairs et des préconisations pratiques."
       ],
       [
        "Difficultés & Apprentissages",
        "Trouver le juste équilibre entre précision technique et accessibilité pour un interlocuteur non-spécialiste. J'ai appris à hiérarchiser les informations : conclusions importantes d'abord, détails techniques en annexe."
       ],
       [
        "Comment je ferais autrement",
        "Ajouter des schémas et visuels explicatifs pour illustrer les recommandations, préparer une courte présentation orale en complément du document écrit, et anticiper les questions en intégrant une section FAQ."
       ]
      ],
      "proofs": [
       {
        "title": "Dossier : Séance n°6",
        "pdf": "assets/pdf/seance_6.pdf",
        "code": null
       }
      ],
      "status": "ok",
      "sources": []
     }
    ]
   },
   {
    "n": 2,
    "label": "Maîtriser les différentes composantes des solutions de connexion des entreprises et des usagers",
    "year": "BUT2",
    "acs": [
     {
      "code": "AC22.01",
      "title": "Déployer et caractériser des systèmes de transmissions complexes",
      "sources": [
       "R305 TP1",
       "SAÉ ROM TRANS",
       "R306"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Avec GNU Radio et une radio logicielle PlutoSDR à 433,92 MHz, j'ai émis et reçu des signaux en modulation AM, OOK, PM, BPSK et QPSK. En R306, j'ai caractérisé une liaison optique : atténuation des fibres, du coupleur, du circulateur et d'une liaison PON complète."
       ],
       [
        "Pourquoi je l'ai fait",
        "Pour voir concrètement ce qu'est une modulation (spectre, enveloppe, constellation) et pour savoir faire un bilan de liaison comme sur le terrain."
       ],
       [
        "Comment je l'ai fait",
        "Construction des graphes GNU Radio, mesure du taux de modulation sur l'enveloppe (m = (Max − Min)/(Max + Min)), calcul des débits (QPSK : 100 kbaud = 200 kbit/s). En optique : référence à 0 dB puis mesure de chaque élément, et calcul de l'atténuation linéique (≈ 0,30 dB/km à 1310 nm, ≈ 0,19 dB/km à 1550 nm) pour retrouver la longueur d'une fibre inconnue (≈ 4 à 5 km)."
       ],
       [
        "Mes difficultés",
        "J'ai fait plusieurs erreurs de méthode : une référence oubliée après un changement de longueur d'onde m'a donné 16,07 dB au lieu de 10,25 dB sur le coupleur, et des connecteurs sales donnaient 13,90 dB au lieu de 12,11 dB. Sous GNU Radio, la VM saturait à 100 % de CPU tant que je n'avais pas mis de bloc Throttle."
       ],
       [
        "Ce que j'en ai appris",
        "Une mesure qui ne colle pas avec la théorie doit faire douter du montage avant de douter de la théorie. J'ai compris pourquoi la BPSK résiste mieux au bruit que l'OOK (distance 2A au lieu de A) et pourquoi la QPSK double le débit dans la même bande."
       ],
       [
        "Ce que je ferais autrement",
        "Je ferais une check-list avant chaque mesure (référence, longueur d'onde sur les deux appareils, nettoyage) et je noterais l'incertitude de chaque valeur."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : résultats R306 (atténuation des fibres)",
        "code": "Fibre            1310 nm   1550 nm\n4A4B (1 km)      0.84 dB   0.91 dB\n2A2B (5 km)      2.03 dB   1.68 dB\n1A1B (Lx ?)      2.06 dB   1.52 dB\nalpha(1310) = (2.03 - 0.84) / 4 = 0.30 dB/km  -> Lx ~ 5 km\nalpha(1550) = (1.68 - 0.91) / 4 = 0.19 dB/km  -> Lx ~ 4.2 km"
       }
      ]
     },
     {
      "code": "AC22.02",
      "title": "Mettre en place un accès distant sécurisé",
      "sources": [
       "SAÉ 3.03",
       "R303 TP2"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Pour la SAÉ 3.03, je mets en place l'administration à distance des équipements en SSH v2, autorisée seulement depuis le réseau ADMIN. Pour travailler sur le lab à plusieurs, on accède à EVE-NG à distance via Tailscale (réseau privé chiffré). En R303, j'ai testé les versions chiffrées de la messagerie (IMAPS, POP3S)."
       ],
       [
        "Pourquoi je l'ai fait",
        "Telnet fait circuler les mots de passe en clair. Un accès distant doit être chiffré et limité aux bonnes personnes."
       ],
       [
        "Comment je l'ai fait",
        "SSH : nom de domaine, clé RSA, utilisateur local, puis ACL sur les lignes VTY. Pour IMAPS, test avec <code>openssl s_client -connect 192.31.25.12:993</code>, car telnet ne parle pas TLS."
       ],
       [
        "Mes difficultés",
        "Il faut prévoir l'ACL sans se couper soi-même l'accès. Les tests sont encore à faire sur la maquette finale."
       ],
       [
        "Ce que j'en ai appris",
        "La différence entre chiffrer le transport (SSH, TLS) et restreindre l'accès (ACL) : il faut les deux."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter après la démonstration de la SAÉ (test ADMIN accepté / PERSONNEL refusé)."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC22.03",
      "title": "Mettre en place une connexion multi-site via un réseau opérateur",
      "sources": [
       "SAÉ 3.03"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Dans la SAÉ 3.03, je relie un siège et une succursale à travers un réseau opérateur simulé, avec une liaison chiffrée entre les deux sites. Tout le trafic Internet de la succursale doit sortir par le siège."
       ],
       [
        "Pourquoi je l'ai fait",
        "Une entreprise multi-sites veut que ses sites communiquent comme un seul réseau, sans que le trafic soit lisible sur Internet, et veut contrôler les accès Internet à un seul endroit."
       ],
       [
        "Comment je l'ai fait",
        "Plan d'adressage sans chevauchement (de type 10.site.vlan.0/24), routeur FAI, puis choix entre un VPN IPsec simple (crypto map) et du GRE over IPsec. Le NAT du siège doit aussi traduire les réseaux de la succursale."
       ],
       [
        "Mes difficultés",
        "Le piège principal : avec une crypto map classique, il faut faire passer Internet dans le tunnel, ce qui complique l'ACL. Ça me pousse vers GRE over IPsec, qui crée une vraie interface tunnel."
       ],
       [
        "Ce que j'en ai appris",
        "Un plan d'adressage pensé dès le départ (où l'adresse « parle ») évite les problèmes de routage et de VPN plus tard, et permet d'ajouter un site facilement."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter après la mise en place du tunnel (vérifications <code>show crypto isakmp sa</code>, <code>show crypto ipsec sa</code> et traceroute)."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC22.04",
      "title": "Administrer les réseaux d'accès des opérateurs",
      "sources": [
       "R306"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai mesuré un réseau d'accès optique PON en entier : chaque fibre, le coupleur 1 vers 8 sur ses 8 sorties, le circulateur dans tous les sens, puis trois liaisons complètes fibre + coupleur + WDM."
       ],
       [
        "Pourquoi je l'ai fait",
        "C'est le réseau qui raccorde les abonnés à la fibre. Savoir mesurer chaque élément permet de trouver d'où vient une perte et de vérifier qu'un raccordement respecte le budget optique."
       ],
       [
        "Comment je l'ai fait",
        "Source laser et wattmètre, référence à 0 dB à chaque changement de longueur d'onde. Calcul des pertes d'insertion (9,40 à 10,76 dB par voie pour un idéal de 9,03 dB), des pertes en excès (0,89 dB à 1310 nm), du rapport de couplage (≈ 12,5 % par voie) et de la directivité (> 63 dB)."
       ],
       [
        "Mes difficultés",
        "Une première mesure aberrante (0,05 dB sur une fibre de plusieurs km) venait d'un mauvais port. La sortie 1550 du WDM donnait 45 dB à 1310 nm : j'ai d'abord cru à une panne avant de comprendre que c'était le rôle du démultiplexeur."
       ],
       [
        "Ce que j'en ai appris",
        "Une liaison complète atténue toujours plus que la somme de ses éléments, à cause des connexions ajoutées (0,2 à 0,5 dB chacune). La propreté des connecteurs change vraiment le résultat (1,8 dB de gagné après nettoyage)."
       ],
       [
        "Ce que je ferais autrement",
        "Je ferais aussi une mesure à l'OTDR (réflectomètre) pour localiser les pertes, ce que le wattmètre ne permet pas."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : liaison PON complète (R306)",
        "code": "Ligne 1 : 4A4B -> PLC IN -> OUT1\n  somme théorique : 0.84 + 10.76 = 11.60 dB\n  mesuré          : 12.11 dB (13.90 dB avant nettoyage)\nLigne 3 : 1A1B -> 2A2B -> PLC -> OUT8 -> WDM1 (sortie 1550)\n  1550 nm : 14.78 dB\n  1310 nm : 45 dB  -> le WDM bloque le 1310 (normal)"
       }
      ]
     },
     {
      "code": "AC22.05",
      "title": "Organiser un projet pour répondre au cahier des charges",
      "sources": [
       "SAÉ 3.03",
       "SAÉ 3.02"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Pour la SAÉ 3.03, j'ai découpé le sujet en étapes à partir du barème et préparé des guides pas à pas pour le groupe. Pour la SAÉ 3.02, j'ai noté les exigences du client (l'enseignant) avant de coder."
       ],
       [
        "Pourquoi je l'ai fait",
        "Le sujet de la SAÉ 3.03 note la pertinence, la justification et le fonctionnement de chaque fonction : sans organisation, on risque de tout commencer et rien finir."
       ],
       [
        "Comment je l'ai fait",
        "Ordre de travail : plan d'adressage et matrice de flux sur papier, puis VLAN et routage, puis services faciles (DHCP, DNS, SSH), puis VPN, ACL, Wi-Fi, redondance, logs et QoS. Une check-list de démonstration de 13 tests."
       ],
       [
        "Mes difficultés",
        "Estimer le temps de chaque partie, et ne pas se lancer dans la configuration avant d'avoir un plan validé."
       ],
       [
        "Ce que j'en ai appris",
        "Repérer les points « faciles » du barème (4,5 points sur DHCP, DNS, SSH et logs) aide à sécuriser une base avant les parties difficiles."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter en fin de SAÉ : ce qui a été tenu ou non dans le planning."
       ]
      ],
      "proofs": []
     }
    ]
   },
   {
    "n": 3,
    "label": "Déployer une solution de connexion ou de communication sur IP",
    "year": "BUT3",
    "acs": []
   }
  ]
 },
 "code": {
  "name": "Programmer",
  "title": "Créer des outils et applications informatiques pour les R&T",
  "icon": "bi-code-slash",
  "page": "Code-details.html",
  "composantes": [
   "En étant à l'écoute des besoins du client",
   "En documentant le travail réalisé",
   "En utilisant les outils numériques à bon escient",
   "En choisissant les outils de développement adaptés",
   "En intégrant les problématiques de sécurité"
  ],
  "situations": [
   "Conception, déploiement et maintenance du système d'information d'une entreprise",
   "Automatisation du déploiement et de la maintenance des outils logiciels",
   "Développement d'outils informatiques à usage interne d'une équipe"
  ],
  "alternance": "",
  "levels": [
   {
    "n": 1,
    "label": "S'intégrer dans un service informatique",
    "year": "BUT1",
    "acs": [
     {
      "code": "AC13.01",
      "title": "Utiliser un système informatique et ses outils",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai pris en main les outils informatiques nécessaires au développement : interpréteur Python 3, terminal de commandes, éditeur de code VS Code et navigateur web avec ses outils développeurs, mobilisés pour concevoir et tester les programmes du contrôle TP et ce portfolio."
       ],
       [
        "Comment je l'ai fait",
        "Configuration de l'environnement Python (installation, vérification de version), utilisation du terminal pour exécuter les scripts, exploitation des fonctionnalités de VS Code (coloration syntaxique, terminal intégré). Utilisation de l'inspecteur du navigateur (F12) pour déboguer le portfolio."
       ],
       [
        "Difficultés & Apprentissages",
        "Gérer les versions de Python et comprendre la distinction entre exécution dans le terminal et dans un IDE. J'ai appris à diagnostiquer les erreurs grâce aux messages de la console."
       ],
       [
        "Comment je ferais autrement",
        "Utiliser des environnements virtuels Python (venv) dès le début pour isoler les dépendances de chaque projet et éviter les conflits de versions."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC13.02",
      "title": "Lire, exécuter, corriger et modifier un programme",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "Dans le cadre du contrôle TP de fondamentaux de la programmation Python, j'ai lu, exécuté et analysé plusieurs scripts (ip.py, liste.py, carre.py, minimum.py) afin de comprendre leur fonctionnement et de vérifier leur correction."
       ],
       [
        "Comment je l'ai fait",
        "Lecture du code source, exécution en terminal Python, analyse des résultats pour vérifier la conformité aux spécifications. Correction des erreurs de logique ou de syntaxe détectées lors des tests avec différentes valeurs d'entrée."
       ],
       [
        "Difficultés & Apprentissages",
        "Comprendre rapidement le comportement attendu d'un programme sans documentation. J'ai appris l'importance de tester chaque cas limite (valeurs nulles, valeurs max, cas négatifs)."
       ],
       [
        "Comment je ferais autrement",
        "Mettre en place des tests unitaires automatisés (avec pytest) plutôt que des tests manuels, pour garantir la non-régression lors des modifications du code."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC13.03",
      "title": "Traduire un algorithme, dans un langage et pour un environnement donné",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai traduit 4 algorithmes en Python dans le cadre du contrôle TP : analyse du type d'une adresse IP (ip.py), calcul de la moyenne d'une liste d'entiers (liste.py), génération d'un carré évidé en ASCII (carre.py), et recherche du minimum entre deux réels (minimum.py)."
       ],
       [
        "Comment je l'ai fait",
        "Décomposition de chaque problème en étapes logiques, puis traduction en Python 3. Pour ip.py : split() sur la saisie et test du dernier octet. Pour liste.py : boucle for avec append() et round(). Pour carre.py : imbrication de boucles avec gestion des bordures. Pour minimum.py : fonction built-in min()."
       ],
       [
        "Difficultés & Apprentissages",
        "La génération du carré évidé (carre.py) a nécessité une bonne gestion des indices et des séparateurs. J'ai compris l'importance de décomposer le problème en sous-cas (première ligne, lignes intermédiaires, dernière ligne)."
       ],
       [
        "Comment je ferais autrement",
        "Structurer le code avec des fonctions dédiées pour rendre chaque programme plus lisible, testable et réutilisable plutôt que d'écrire tout le code dans le corps principal."
       ]
      ],
      "proofs": [
       {
        "title": "Code : ip.py",
        "pdf": null,
        "code": "ip = input(\"Adresse ip ? \").split(\".\")\nif int(ip[3]) == 0:\n    print(\"Adresse réseau\")\nelif int(ip[3]) == 255:\n    print(\"Adresse broadcast\")\nelse:\n    print(\"Adresse machine\")"
       },
       {
        "title": "Code : liste.py",
        "pdf": null,
        "code": "n = int(input(\"n ?\"))\nl = []\nfor i in range (n):\n    l.append(int(input(f\"l[{i}]= \")))\nprint(f\"Liste créer : {l}\")\nlm = sum(l)\nlm2 = lm / n\nprint(f\"La moyenne est de {round (lm2, 2)}\")"
       },
       {
        "title": "Code : carre.py",
        "pdf": null,
        "code": "n = int(input(\"n ? \"))\nfor i in range (1):\n    print(\"*\"*n)\n    for i in range(n-2):\n        print(\"*\",\"*\", sep=\" \"*int(n-2))\n    print(\"*\"*n)"
       },
       {
        "title": "Code : minimum.py",
        "pdf": null,
        "code": "r1 = float(input(\"Nombre 1 : \"))\nr2 = float(input(\"Nombre 2 : \"))\nmin_val = min(r1, r2)\nprint(f\"Le minimum est {min_val}\")"
       }
      ],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC13.04",
      "title": "Connaître l'architecture et les technologies d'un site Web",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai conçu et déployé ce portfolio personnel en HTML/CSS/JS afin de présenter mes compétences R&amp;T BUT. Ce projet m'a permis d'acquérir une connaissance concrète de l'architecture d'un site web multi-pages avec ressources partagées."
       ],
       [
        "Comment je l'ai fait",
        "Développement en HTML5 sémantique, CSS personnalisé et Bootstrap 5 pour le responsive design. Utilisation de JavaScript pour les animations (AOS) et les composants interactifs Bootstrap (accordion, modals, collapse). Hébergement et déploiement continu via GitHub Pages."
       ],
       [
        "Difficultés & Apprentissages",
        "Gérer la compatibilité mobile/desktop avec Bootstrap, organiser les chemins relatifs entre les pages et les assets. J'ai retenu la logique du système de grille Bootstrap (12 colonnes) et des breakpoints responsive."
       ],
       [
        "Comment je ferais autrement",
        "Utiliser un système de templates (Nunjucks ou Jinja2) pour éviter la duplication de code HTML entre les pages, et adopter un préprocesseur CSS (SCSS) pour mieux structurer les styles."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC13.05",
      "title": "Choisir les mécanismes de gestion de données adaptés au développement de l'outil et argumenter ses choix",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai analysé les besoins en gestion de données pour choisir le mécanisme de stockage adapté (fichier texte/CSV, JSON ou base de données relationnelle SQL) en fonction du volume, de la structure et des usages prévus dans un projet de développement applicatif."
       ],
       [
        "Comment je l'ai fait",
        "Étude comparative des formats de stockage : fichiers plats (CSV, JSON) pour des données légères sans relations complexes, bases de données relationnelles (SQLite) pour des données structurées. Implémentation de lectures/écritures de fichiers JSON en Python avec le module json."
       ],
       [
        "Difficultés & Apprentissages",
        "Choisir entre une solution simple (fichier JSON) et une solution robuste (base de données) selon les contraintes du projet. J'ai retenu que la complexité de la solution doit être proportionnelle aux besoins réels."
       ],
       [
        "Comment je ferais autrement",
        "Évaluer dès le départ les critères de choix (volume de données, fréquence d'accès, relations entre données) pour éviter de devoir migrer d'un format à un autre en cours de projet."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     },
     {
      "code": "AC13.06",
      "title": "S'intégrer dans un environnement propice au développement et au travail collaboratif",
      "blocks": [
       [
        "Ce que j'ai fait & Pourquoi",
        "J'ai utilisé Git et GitHub pour versionner l'intégralité du développement de ce portfolio, en travaillant dans un environnement propice au développement avec gestion de versions et traçabilité des modifications."
       ],
       [
        "Comment je l'ai fait",
        "Initialisation d'un dépôt Git local (git init), suivi des modifications avec git add et git commit avec messages descriptifs, synchronisation avec le dépôt distant GitHub (git push). Activation de GitHub Pages pour le déploiement automatique du site à chaque push sur la branche main."
       ],
       [
        "Difficultés & Apprentissages",
        "Comprendre la distinction entre dépôt local et distant, et gérer les situations de divergence. J'ai retenu le flux de travail standard : add → commit → push, et l'importance de messages de commit clairs."
       ],
       [
        "Comment je ferais autrement",
        "Adopter une stratégie de branches (feature branches) plutôt que de travailler directement sur main, et utiliser les Pull Requests pour valider les modifications avant de les intégrer."
       ]
      ],
      "proofs": [],
      "status": "ok",
      "sources": []
     }
    ]
   },
   {
    "n": 2,
    "label": "Développer une application R&T",
    "year": "BUT2",
    "acs": [
     {
      "code": "AC23.01",
      "title": "Automatiser l'administration système avec des scripts",
      "sources": [
       "R310 TP2"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai automatisé la sauvegarde d'une base PostgreSQL : un export chaque nuit à 2 h, et la suppression automatique des sauvegardes de plus de 7 jours."
       ],
       [
        "Pourquoi je l'ai fait",
        "Une sauvegarde qui dépend de quelqu'un finit toujours par être oubliée. L'automatiser garantit qu'elle est faite, et la rotation évite de remplir le disque."
       ],
       [
        "Comment je l'ai fait",
        "<code>pg_dump</code> au format custom, mot de passe dans <code>~/.pgpass</code> (droits 600) pour que la tâche tourne sans intervention, deux lignes dans la <code>crontab</code>, vérification avec <code>crontab -l</code> et <code>ls -lh ~/backups</code>."
       ],
       [
        "Mes difficultés",
        "Le premier <code>pg_dump</code> échouait (« Peer authentication failed ») : il fallait passer par <code>-h localhost</code>. Le sujet donnait une ligne <code>find</code> sans horaire : j'ai repéré l'erreur et ajouté <code>30 2 * * *</code>. Dans cron, le <code>%</code> doit être échappé."
       ],
       [
        "Ce que j'en ai appris",
        "Au TP1, je n'avais pas réussi la sauvegarde et j'avais repris le compte rendu d'un camarade. Au TP2, je l'ai réussie seul et j'ai compris pourquoi : c'est une vraie progression."
       ],
       [
        "Ce que je ferais autrement",
        "J'ajouterais un journal et une alerte si la sauvegarde échoue, et je testerais régulièrement la restauration (<code>pg_restore</code>), sinon une sauvegarde ne prouve rien."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : crontab de sauvegarde (R310 TP2)",
        "code": "# ~/.pgpass en chmod 600 (mot de passe non affiché ici)\n0 2 * * *  pg_dump -U postgres -h localhost -d securite -F c -f $HOME/backups/securite_$(date +\\%F).dump\n30 2 * * * find $HOME/backups -type f -mtime +7 -delete"
       }
      ]
     },
     {
      "code": "AC23.02",
      "title": "Développer une application à partir d'un cahier des charges donné",
      "sources": [
       "SAÉ 3.02",
       "R308 TP1"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "En R308, j'ai développé en Python orienté objet un gestionnaire de parc d'équipements réseau (classes <code>EquipementReseau</code> et <code>GestionnaireParc</code>). En SAÉ 3.02 (en cours), je développe un serveur de recherche qui permet à des collègues de chercher des mots dans des documents PDF, Excel ou Word."
       ],
       [
        "Pourquoi je l'ai fait",
        "La SAÉ répond à un besoin réel exprimé comme un client : « aider mes collègues à chercher des mots dans des documents ». Le TP R308 m'a donné les bases de la POO pour structurer ce code."
       ],
       [
        "Comment je l'ai fait",
        "R308 : attribut de classe pour l'identifiant unique, <code>@property</code> en lecture seule, <code>isinstance</code> pour vérifier les types, méthode <code>statistiques()</code>. SAÉ : choix entre Flask (web) et tkinter, code suivi sur GitLab, licence MIT, style PEP8, noms et commentaires en anglais, chemins relatifs."
       ],
       [
        "Mes difficultés",
        "Le cahier des charges impose aussi la qualité : connaître son code par cœur pour l'oral, garder un code simple et homogène et faire attention à l'usage de l'IA."
       ],
       [
        "Ce que j'en ai appris",
        "Le cahier des charges ne porte pas que sur les fonctions : la lisibilité, la licence et la documentation sont aussi des exigences du client."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter en fin de SAÉ (IHM choisie, bibliothèques utilisées pour lire les PDF et Excel)."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : classe EquipementReseau (R308 TP1)",
        "code": "class EquipementReseau:\n    compteur_id = 0                      # attribut de classe\n\n    def __init__(self, hostname, ip_address):\n        self.hostname = hostname\n        self.ip_address = ip_address\n        self.id = EquipementReseau.compteur_id\n        EquipementReseau.compteur_id += 1\n        self.statut = \"inactif\"\n\n    @property\n    def est_actif(self):                 # lecture seule\n        return self.statut == \"actif\""
       }
      ]
     },
     {
      "code": "AC23.03",
      "title": "Utiliser un protocole réseau pour programmer une application client/serveur",
      "sources": [
       "SAÉ 3.02",
       "R303 TP2"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Le serveur de la SAÉ 3.02 doit écouter sur un port et répondre à plusieurs clients en même temps (threads). Pour comprendre un protocole client/serveur, j'ai d'abord dialogué à la main avec un serveur SMTP en R303."
       ],
       [
        "Pourquoi je l'ai fait",
        "Avant de programmer un client/serveur, il faut savoir à quoi ressemble un échange : requête, code de réponse, fin de connexion."
       ],
       [
        "Comment je l'ai fait",
        "Dialogue SMTP en telnet sur le port 25 (HELO, MAIL FROM, RCPT TO, DATA, QUIT) en vérifiant les codes 220, 250 et 354. Pour la SAÉ : sockets Python et threads."
       ],
       [
        "Mes difficultés",
        "Comprendre le rôle des threads (un « processus léger » qui imite le parallélisme) pour qu'un client lent ne bloque pas les autres."
       ],
       [
        "Ce que j'en ai appris",
        "Un protocole applicatif, c'est un dialogue texte avec des codes de réponse : je peux reproduire ce principe dans mon propre serveur."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter quand le serveur de la SAÉ sera fonctionnel."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC23.04",
      "title": "Installer, administrer un système de gestion de données",
      "sources": [
       "R310 TP1",
       "R310 TP2"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai installé PostgreSQL 18, créé des schémas et des tables liées par clé étrangère (TP1), puis sécurisé le service (TP2) : écoute en local seulement, mots de passe en scram-sha-256, rôles avec le moindre privilège, sauvegardes et journaux."
       ],
       [
        "Pourquoi je l'ai fait",
        "Une base de données contient des informations sensibles : elle doit être accessible seulement à ceux qui en ont besoin, et chacun ne doit avoir que les droits nécessaires."
       ],
       [
        "Comment je l'ai fait",
        "<code>postgresql.conf</code> (<code>listen_addresses = 'localhost'</code>, journalisation), <code>pg_hba.conf</code> (peer pour postgres en local, scram-sha-256 sinon), rôles <code>lecteur</code> (lecture) et <code>redacteur</code> (insertion et modification sans suppression). Test : <code>DELETE</code> refusé avec « permission denied »."
       ],
       [
        "Mes difficultés",
        "J'ai rencontré 8 écarts entre le sujet (écrit pour PostgreSQL 14) et la version installée (18) : chemin des fichiers, nom des logs, colonnes renommées… Le piège le plus subtil : <code>pg_hba.conf</code> applique la <em>première</em> ligne qui correspond, donc ma règle ajoutée en bas était ignorée. Et <code>GRANT ON ALL TABLES</code> ne donne pas les droits sur les séquences."
       ],
       [
        "Ce que j'en ai appris",
        "Une erreur s'analyse à partir de son message (peer, séquence, colonne) et pas par tâtonnement. Un sujet doit être vérifié contre la version réellement installée."
       ],
       [
        "Ce que je ferais autrement",
        "Je créerais un rôle par usage dès le début plutôt que d'utiliser <code>postgres</code> pour tout, et je documenterais chaque écart au fur et à mesure (je l'ai fait dans un tableau, et ça m'a beaucoup aidé)."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : rôles et accès (R310 TP2)",
        "code": "# pg_hba.conf  (la 1re ligne qui correspond s'applique)\nlocal  all  postgres                    peer\nlocal  all  all                         scram-sha-256\nhost   all  all       192.168.0.0/24    scram-sha-256\n\n-- psql\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO lecteur;\nGRANT INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO redacteur;\nGRANT USAGE ON SEQUENCE journal_id_seq TO redacteur;  -- oublié par le sujet\nGRANT lecteur, redacteur TO adminsecure;"
       }
      ]
     },
     {
      "code": "AC23.05",
      "title": "Accéder à un ensemble de données depuis une application et/ou un site web",
      "sources": [
       "R308 TP2",
       "SAÉ 3.02"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "En R308 TP2, j'ai sauvegardé et rechargé des objets Python dans des fichiers (JSONL, CSV, Pickle), avec validation au chargement et gestion des erreurs. En SAÉ 3.02, l'application doit lire le contenu de fichiers PDF, Excel et Word."
       ],
       [
        "Pourquoi je l'ai fait",
        "Une application doit pouvoir retrouver ses données après un redémarrage, et refuser proprement un fichier corrompu au lieu de planter."
       ],
       [
        "Comment je l'ai fait",
        "Méthodes <code>from_str</code> (constructeur alternatif), exceptions personnalisées, <code>try/except/else/finally</code>. Exemple : une classe <code>AdresseIP</code> qui valide chaque octet et se sauvegarde en JSONL."
       ],
       [
        "Mes difficultés",
        "Bien choisir le format : JSON est lisible et sûr, Pickle est pratique mais ne doit jamais être chargé depuis une source inconnue."
       ],
       [
        "Ce que j'en ai appris",
        "Valider les données à l'entrée de l'application évite de propager une erreur dans tout le programme."
       ],
       [
        "Ce que je ferais autrement",
        "Prochaine étape : relier l'application à une base PostgreSQL (R310) plutôt qu'à des fichiers."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : chargement validé (R308 TP2)",
        "code": "def charger_jsonl(path):\n    ips = []\n    with open(path, \"r\", encoding=\"utf-8\") as f:\n        for line in f:\n            if line.strip():\n                # lève IPParseError si l'adresse est invalide\n                ips.append(AdresseIP.from_str(json.loads(line)[\"ip\"]))\n    return ips"
       }
      ]
     }
    ]
   },
   {
    "n": 3,
    "label": "Piloter un projet de développement d'une application R&T",
    "year": "BUT3",
    "acs": []
   }
  ]
 },
 "rapprocher": {
  "name": "Rapprocher",
  "title": "Gérer les infrastructures et les services des réseaux opérateurs",
  "icon": "bi-diagram-3",
  "page": "Rapprocher-details.html",
  "composantes": [
   "En respectant les règles métiers et les délais",
   "En assurant une communication optimale avec le client",
   "En mettant en place des processus opérationnels de gestion d'incidents",
   "En pilotant les acteurs terrain"
  ],
  "situations": [
   "Gestion des services d'un ensemble de clients entreprises d'un opérateur",
   "Gestion du déploiement de nouvelles infrastructures"
  ],
  "alternance": "Je fais partie de la chaîne de support : je prends en charge et je suis les demandes d'assistance dans l'outil de ticketing « Espace Pilotage », je diagnostique les pannes avec les techniciens et je résous désormais des incidents en autonomie. Je participe aussi aux déploiements sur le terrain. C'est le cœur des composantes « processus opérationnels de gestion d'incidents » et « piloter les acteurs terrain ».",
  "levels": [
   {
    "n": 1,
    "label": "Gérer les infrastructures des réseaux opérateurs",
    "year": "BUT2",
    "acs": [
     {
      "code": "AC24.01ROM",
      "title": "Administrer les réseaux d'accès fixes et mobiles",
      "sources": [
       "R306"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Partie fixe : j'ai mesuré et analysé un réseau d'accès optique PON (voir aussi AC22.04) en faisant le bilan de puissance de trois liaisons complètes."
       ],
       [
        "Pourquoi je l'ai fait",
        "Le bilan de puissance est ce qui permet à un opérateur de savoir si un abonné peut être raccordé et de diagnostiquer une ligne."
       ],
       [
        "Comment je l'ai fait",
        "Comparaison entre la somme théorique des éléments et la mesure réelle, à 1310 et 1550 nm."
       ],
       [
        "Mes difficultés",
        "Les écarts entre théorie et mesure (+0,4 à +2 dB) : il faut savoir les expliquer (connexions, courbures, WDM)."
       ],
       [
        "Ce que j'en ai appris",
        "Chaque connexion ajoutée a un coût en dB : un opérateur doit en limiter le nombre."
       ],
       [
        "Ce que je ferais autrement",
        "Partie mobile à compléter (pas encore abordée en cours)."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC24.02ROM",
      "title": "Virtualiser des services réseaux",
      "sources": [
       "SAÉ 3.03",
       "R303"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai virtualisé toute l'infrastructure de la SAÉ 3.03 dans EVE-NG : 3 routeurs et 4 switchs Cisco vIOS, des serveurs Debian (infrastructure, logs, vidéo, web) et des postes VPCS. En R303, chaque service (DNS, mail) tournait déjà dans des VM derrière un routeur virtuel (RT-Box)."
       ],
       [
        "Pourquoi je l'ai fait",
        "Virtualiser les fonctions réseau permet de tester une architecture complète sans matériel, de la sauvegarder et de la remettre à zéro."
       ],
       [
        "Comment je l'ai fait",
        "Une image par type d'équipement (<code>vios-</code>, <code>viosl2-</code>, <code>linux-</code>), RAM ajustée par nœud (de 256 à 768 Mo) pour tenir dans 16 Go, démarrage par phases."
       ],
       [
        "Mes difficultés",
        "Les ressources : tout démarrer d'un coup saturait la machine. Les switchs vIOS mettent 2 à 3 minutes à démarrer avec des messages d'erreur normaux, ce qui m'a fait croire à une panne."
       ],
       [
        "Ce que j'en ai appris",
        "Sur un équipement virtuel, il faut sauvegarder (<code>write</code>) après chaque modification, sinon tout est perdu à l'arrêt du nœud."
       ],
       [
        "Ce que je ferais autrement",
        "J'automatiserais le démarrage et la sauvegarde des configurations."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC24.03ROM",
      "title": "Décrire/comprendre l'architecture et les offres des opérateurs",
      "sources": [
       "R306"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai étudié l'architecture d'un réseau d'accès optique d'opérateur : fibre, coupleur qui partage le signal entre abonnés, multiplexage de deux longueurs d'onde sur la même fibre."
       ],
       [
        "Pourquoi je l'ai fait",
        "Pour comprendre ce qui se trouve entre le central de l'opérateur et la box du client."
       ],
       [
        "Comment je l'ai fait",
        "Mesures sur un rack reproduisant un PON, et analyse du rôle de chaque composant."
       ],
       [
        "Mes difficultés",
        "Faire le lien entre les composants mesurés en TP et une vraie offre commerciale (débit, partage entre abonnés)."
       ],
       [
        "Ce que j'en ai appris",
        "Le coupleur 1 vers 8 divise la puissance par 8 (≈ 9 dB) : c'est pourquoi un même port est partagé entre plusieurs abonnés."
       ],
       [
        "Ce que je ferais autrement",
        "À compléter avec les offres des opérateurs (FTTH, entreprises, mobile)."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC24.04ROM",
      "title": "Gérer le routage/commutation et les interconnexions",
      "sources": [
       "R301 TP1",
       "SAÉ 3.03"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Dans le réseau de campus du R301 TP1, j'ai configuré la commutation (VLAN 10, 20, 50, 60, ports d'accès et trunks), le routage inter-VLAN sur des switchs de niveau 3, la redondance de passerelle avec HSRP et l'interconnexion vers un serveur web public."
       ],
       [
        "Pourquoi je l'ai fait",
        "Une passerelle unique est un point de panne. Avec HSRP, deux switchs partagent une IP virtuelle : si l'un tombe, l'autre prend le relais."
       ],
       [
        "Comment je l'ai fait",
        "Sur chaque paire de DSW, une IP virtuelle par VLAN (10.10.0.1…) avec des priorités croisées 105/95 et <code>preempt</code> : DSW1 est actif pour le VLAN 10 et DSW2 pour le VLAN 20. La charge est donc répartie entre les deux."
       ],
       [
        "Mes difficultés",
        "Comprendre que les priorités doivent être <em>croisées</em> pour partager la charge, et que sans <code>preempt</code> l'équipement prioritaire ne reprend pas sa place à son retour."
       ],
       [
        "Ce que j'en ai appris",
        "La redondance se pense à tous les niveaux : liens doublés vers les deux switchs cœur, passerelle doublée, routage dynamique qui se recalcule."
       ],
       [
        "Ce que je ferais autrement",
        "Je testerais la bascule en direct (ping continu et coupure du switch actif) en comptant les paquets perdus : c'est prévu pour la démonstration de la SAÉ 3.03."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : HSRP croisé sur DSW1 (R301 TP1)",
        "code": "int vlan 10\n ip add 10.10.0.100 255.255.0.0\n standby 10 ip 10.10.0.1\n standby 10 priority 105      ! actif pour le VLAN 10\n standby 10 preempt\nint vlan 20\n ip add 10.20.0.100 255.255.0.0\n standby 20 ip 10.20.0.1\n standby 20 priority 95       ! secours pour le VLAN 20\n standby 20 preempt"
       }
      ]
     },
     {
      "code": "AC24.05ROM",
      "title": "Automatiser la gestion des équipements réseaux",
      "sources": [],
      "status": "todo",
      "blocks": [
       [
        "Ce que j'ai fait",
        "Pas encore de trace pour cet AC."
       ],
       [
        "Pourquoi je l'ai fait",
        ""
       ],
       [
        "Comment je l'ai fait",
        ""
       ],
       [
        "Mes difficultés",
        ""
       ],
       [
        "Ce que j'en ai appris",
        ""
       ],
       [
        "Ce que je ferais autrement",
        "Piste : réutiliser mon gestionnaire de parc en Python (R308) pour envoyer des commandes aux équipements (par exemple avec Netmiko) et sauvegarder leurs configurations."
       ]
      ],
      "proofs": []
     }
    ]
   },
   {
    "n": 2,
    "label": "Administrer les services des opérateurs de télécommunications",
    "year": "BUT3",
    "acs": []
   }
  ]
 },
 "unifier": {
  "name": "Unifier",
  "title": "Gérer les communications unifiées et la vidéo sur Internet",
  "icon": "bi-telephone",
  "page": "Unifier-details.html",
  "composantes": [
   "En automatisant la gestion réseau des communications",
   "En sécurisant les infrastructures",
   "En gérant les interconnexions",
   "En assurant une communication optimale avec le client",
   "En respectant les règles métiers et les délais"
  ],
  "situations": [
   "Déploiement et administration des services de communication",
   "Administration des services multimédia"
  ],
  "alternance": "Je participe au déploiement de systèmes de vidéosurveillance : paramétrage et mise en service d'une vingtaine de caméras sur IP et de leur alimentation autonome par batteries. C'est une mise en pratique directe des services vidéo, au programme du niveau 2 de cette compétence.",
  "levels": [
   {
    "n": 1,
    "label": "Mettre en œuvre le système de téléphonie de l'entreprise",
    "year": "BUT2",
    "acs": [
     {
      "code": "AC25.01ROM",
      "title": "Choisir une architecture et déployer des services de ToIP",
      "sources": [
       "SAÉ ROM TEL"
      ],
      "status": "ok",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai installé un serveur de téléphonie Asterisk sur une VM Ubuntu et configuré des softphones Linphone pour passer des appels sur IP."
       ],
       [
        "Pourquoi je l'ai fait",
        "Pour comprendre le fonctionnement d'un IPBX : enregistrement des postes, plan de numérotation, signalisation SIP."
       ],
       [
        "Comment je l'ai fait",
        "VM en mode pont (pour être joignable sur le réseau de la salle), <code>apt install asterisk</code>, configuration de <code>pjsip.conf</code> (transport UDP 5060, un endpoint, une auth et un aor par poste, codec ulaw) et de <code>extensions.conf</code> (contexte <code>[phones]</code>)."
       ],
       [
        "Mes difficultés",
        "Les téléphones s'enregistraient bien mais n'arrivaient pas à s'appeler : le plan de numérotation n'avait pas été rechargé."
       ],
       [
        "Ce que j'en ai appris",
        "Dans Asterisk, l'enregistrement (PJSIP) et le routage des appels (dialplan) sont deux choses séparées : il faut vérifier les deux (<code>pjsip show endpoints</code>, <code>dialplan show phones</code>)."
       ],
       [
        "Ce que je ferais autrement",
        "J'utiliserais des mots de passe robustes dès le départ : les nôtres étaient trop simples, et une attaque par force brute a réussi (voir AC25.02ROM)."
       ]
      ],
      "proofs": [
       {
        "title": "Extrait : pjsip.conf et extensions.conf",
        "code": "[transport-udp]\ntype=transport\nprotocol=udp\nbind=0.0.0.0:5060\n\n[6607]\ntype=endpoint\ncontext=phones\ndisallow=all\nallow=ulaw\nauth=6607\naors=6607\n; + sections type=auth et type=aor (mot de passe non affiché)\n\n; extensions.conf\n[phones]\nexten => 6607,1,Dial(PJSIP/6607,20)\nexten => 6609,1,Dial(PJSIP/6609,20)"
       }
      ]
     },
     {
      "code": "AC25.02ROM",
      "title": "Administrer un service de téléphonie pour l'entreprise",
      "sources": [
       "SAÉ ROM TEL"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai administré le serveur Asterisk en ligne de commande, relié mes postes à ceux d'un camarade, puis on a commencé à tester la sécurité du service : une attaque par force brute sur les comptes SIP a réussi."
       ],
       [
        "Pourquoi je l'ai fait",
        "Un service de téléphonie d'entreprise doit être disponible et protégé : un compte SIP piraté permet de passer des appels aux frais de l'entreprise."
       ],
       [
        "Comment je l'ai fait",
        "CLI Asterisk (<code>asterisk -rvvv</code>, <code>pjsip reload</code>, <code>dialplan reload</code>), ajout des numéros 6607 et 6609 dans nos deux configurations. Liste des menaces du cours répartie dans le groupe, avec l'objectif de filmer chaque attaque puis son échec une fois la protection en place."
       ],
       [
        "Mes difficultés",
        "Faire communiquer deux serveurs demandait que chacun déclare les postes de l'autre. La réussite de la force brute montre que nos mots de passe étaient trop faibles."
       ],
       [
        "Ce que j'en ai appris",
        "Le cycle attaque → protection → nouvelle attaque prouve concrètement qu'une protection fonctionne."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter : protections mises en place (fail2ban, mots de passe forts), puis tests de déni de service et d'usurpation d'identité prévus aux prochaines séances."
       ]
      ],
      "proofs": []
     },
     {
      "code": "AC25.03ROM",
      "title": "Mettre en place une politique de QoS pour les applications",
      "sources": [
       "R301 TP2",
       "SAÉ 3.03"
      ],
      "status": "wip",
      "blocks": [
       [
        "Ce que j'ai fait",
        "J'ai marqué et classé du trafic prioritaire en R301 TP2 (IP precedence 5 / DSCP 40). Dans la SAÉ 3.03, je dois protéger le flux du réseau VIDEO quand le lien inter-sites est saturé."
       ],
       [
        "Pourquoi je l'ai fait",
        "La voix et la vidéo supportent mal les retards et les pertes : sans QoS, un gros téléchargement peut couper une communication."
       ],
       [
        "Comment je l'ai fait",
        "Méthode MQC : <code>class-map</code> (classer), <code>policy-map</code> (marquer puis prioriser), <code>service-policy</code> appliquée en sortie sur le lien le plus contraint (le WAN). Vérification avec <code>show policy-map interface</code>."
       ],
       [
        "Mes difficultés",
        "Packet Tracer gère mal la QoS : il faudra expliquer les limites du simulateur et ce que je ferais sur du vrai matériel."
       ],
       [
        "Ce que j'en ai appris",
        "La QoS s'applique là où il y a un goulot d'étranglement, en sortie de l'interface, et elle ne crée pas de bande passante : elle choisit qui passe en premier."
       ],
       [
        "Ce que je ferais autrement",
        "Section à compléter avec les compteurs de la classe VIDEO et un test de saturation."
       ]
      ],
      "proofs": []
     }
    ]
   },
   {
    "n": 2,
    "label": "Administrer les communications unifiées et les services vidéo de l'entreprise",
    "year": "BUT3",
    "acs": []
   }
  ]
 }
};
