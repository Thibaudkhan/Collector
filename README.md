# Collector

##Docker

###Démarer le frontend 

Il est conseillé de build le Dockerfile avant de lancer le docker-compose. <br/>
Pour cela il faut se rendre sur le dossier frontend: <br/> 
``cd ./frontend`` <br/><br/>
Lancer la commande suivante : <br/>
`` docker build -t my-project . ``<br/><br/>
Il faut ensuite lancer le docker-compose : <br/>
```cd ..``` <br/>
``docker-compose up``<br/><br/>

Le serveur frontend est lancé, si le code est modifié les modifications sont direcment appliquées.<br/>
La page internet est aussi reload avec les nouvelles données.