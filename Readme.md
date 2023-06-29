# API Star Wars

Cette API Star Wars est basée sur l'architecture RESTful et respecte le modèle de Richardson. Elle fournit des points de terminaison pour récupérer, créer, mettre à jour et supprimer des ressources liées aux films, aux personnes, aux planètes, aux espèces, aux vaisseaux spatiaux et aux véhicules.

## Installation

Suivez les étapes ci-dessous pour installer et exécuter l'API Star Wars sur votre environnement local :

1. Clonez le repository en utilisant la commande suivante :
`git clone git@github.com:altib1/MDS-APIODM-M1-2023.git`

2. Modifiez le fichier `.env` pour configurer la base de données souhaitée. Ajoutez les informations de connexion appropriées.

3. Exécutez la commande suivante pour installer les dépendances :
`npm install`
4. Lancez l'API Star Wars en utilisant la commande suivante :
`npm start`
5. Le serveur API sera maintenant accessible localement à l'adresse `http://localhost:5000`.

## Swagger

La spécification Swagger de l'API se trouve dans le fichier `swagger.yml`. Vous pouvez l'utiliser pour explorer et tester les points de terminaison de l'API.

## Modèle de Richardson

Le modèle de Richardson est un modèle d'architecture REST qui définit un ensemble de principes et de bonnes pratiques pour la conception d'API web. Il est divisé en niveaux, chaque niveau représentant une étape progressive vers une conception RESTful complète.

### Niveau 0 : Le Point de terminaison unique (Single URI)

Le niveau 0 du modèle de Richardson se réfère à une API qui expose un point de terminaison unique pour toutes les actions. Cela signifie qu'il n'y a qu'une seule URL pour effectuer toutes les opérations, telles que GET, POST, PUT, DELETE, etc. Ce niveau ne respecte pas les principes RESTful.

### Niveau 1 : Ressources individuelles (Individual Resources)

Le niveau 1 introduit le concept de ressources individuelles dans l'API. Chaque ressource possède une URL unique pour l'identifier et effectuer des opérations spécifiques sur cette ressource. Cependant, les verbes HTTP ne sont pas encore utilisés correctement pour chaque opération.

### Niveau 2 : Verbes HTTP appropriés (HTTP Verbs)

Le niveau 2 ajoute l'utilisation correcte des verbes HTTP pour chaque opération sur les ressources. Les verbes GET, POST, PUT et DELETE sont utilisés pour récupérer, créer, mettre à jour et supprimer les ressources respectivement. Cela permet une meilleure utilisation des méthodes HTTP et rend l'API plus RESTful.

### Niveau 3 : Hyperliens (Hypermedia)

Le niveau 3 du modèle de Richardson ajoute la notion de liens hypermédia entre les ressources. Les réponses renvoyées par l'API incluent des liens vers d'autres ressources liées. Cela permet une découverte dynamique des fonctionnalités de l'API et une navigation simplifiée entre les ressources.

## Respect du modèle de Richardson dans cette API

Cette API Star Wars respecte le modèle de Richardson jusqu'au niveau 2. Chaque ressource a des points de terminaison dédiés pour les opérations GET, POST, PUT et DELETE, ce qui correspond au niveau 2 du modèle. Les verbes HTTP sont utilisés correctement pour chaque action sur les ressources.

Cependant, cette API n'implémente pas le niveau 3 du modèle de Richardson. Les réponses renvoyées par l'API ne contiennent pas de liens hypermédia vers d'autres ressources liées. Cela peut être ajouté ultérieurement pour améliorer la navigation et la découverte des fonctionnalités de l'API.

Dans l'ensemble, cette API Star Wars suit les principes du modèle de Richardson jusqu'au niveau 2, ce qui en fait une API RESTful respectant les bonnes pratiques de conception d'API web.
