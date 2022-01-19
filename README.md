# Collector


## Démarer le projet
Remplir le .env pour cela il faut copier coller .env.example puis remplir les lignes avec les information suivantes 
- true
- root
- collector

Lancer l'ensemble des conteneurs pour pouvoir coder<br/>
``docker-compose up``<br/><br/>
C'est bon quand il y aura une modification back ou front cela se mettra automatiquement à jour.


<br/>

##Possibles erreurs

Si next est introuvable lancer la commande suivante et réessayer  
``
docker-compose build --no-cache front
``