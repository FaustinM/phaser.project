/*****************************************************************************/
PREALOAD

game.load.image('surnom', "adresse de l'image à partir de l'index");

game.load.spritesheet('surnom', "adresse de l'image à partir de l'index", largeur, hauteur, nombre de frame);

game.load.audio('surnom', "adresse de l'image à partir de l'index");

/*****************************************************************************/
CREATE

game.physics.startSystem(Phaser.Physics.ARCADE); // Permet de définir le moteur physic du jeu au lancement
game.world.enableBody = true; // A mettre partout dans un jeu ou la phyisque s'applique, notamment pour les plateformer
game.world.setBounds(0, 0, taille maximum en x, taille minimum en y); // Permet de définir les limites du monde, notamment pour un monde plus grand
game.camera.follow(this.joueur, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);//Permet de suivre le joueur

//This fait ici référence au nom du jeu que nous définirons tout en haut.
this.nomObjet = game.add.sprite(position x, position y, 'surnom'); // Permet d'ajouter une sprite au jeu et de l'attacher à l'objet.

this.nomObjet = game.add.audio('surnom'); // Attache le son surnom à la variable

this.monObjet.body.collideWorldBounds = true; // Permet de faire en sorte que la variable ne sorte pas de l'écran, attention il faut au préalable avoir actionné la physique de la variable

this.monObjet.body.immovable = true; // Permet de rendre la variable innamovible

this.monObjet.scale.setTo(x,y); // Permet d'aggrandir ou de rétrécir l'image en changeant le ratio x et le ratio y. (mettre 2 le rendra deux fois plus grand)

this.monObjet.body.gravity.x = nombre; //Permet d'appliquer une gravité d'une valeur (300 par exemple) à la variable

this.monObjet.body.velocity.x = nombre; // Donne une vitesse x à la variable (si elle a une physique)

this.monObjet.body.velocity.y = nombre;

this.monObjet.body.bounce.y = nombre; // Permet de faire rebondir légèrement le personnage (entre 0 et 1)

game.physics.arcade.enable(this.monObjet); // Permet de donner des propriétés physiques à l'objet créé

this.monObjet.animations.add('surnom', [frame,frame,frame], image par seconde, jouer en boucle) ; //Permet de créer une animation


//Ici on va créer ce que l'on a appelé les réservoirs
this.monObjet = game.add.group(); // Là on créé un réservoir, qu'on appelera désormai groupe.
this.monObjet.add(this.element);// Là nous ajoutons this.élément au groupe
this.monObjet.enableBody = true;//Si appliqué à un groupe on va donner à tous les éléments du groupe une physique

this.monObjet = game.input.keyboard.createCursorKeys(); // Pour créer une variable gérant les touches du curseurs

this.monObjet =game.input.keyboard.addKey(Phaser.Keyboard.TOUCHE A UTILISER); // Permet d'associer à une variable la touche à utiliser


//Pour créer les murs lorsque l'on rencontre un x
for (var i = 0; i < level.length; i++) {
  for (var j = 0; j < level[i].length; j++) {
    if(level[i][j] == 'x' ) {
      var wall = game.add.sprite(25*j, 25*i,'surnom de l image') ;
        wall.scale.setTo(0.5,0.5); // On peut changer la taille de chaque mur
        this.walls.add(wall); //On ajoute le mur 'wall' au groupe "walls"
        wall.body.immovable = true ; // On rend les murs innamovible
    }
  }
}


/*****************************************************************************/
UPDATE
game.physics.arcade.collide(objet 1, objet 2); // Permet de gérer la collision entre deux objets

game.physics.arcade.overlap(objet 1, objet 2, fonction sans les (), null, this); // Permet de vérifier si deux objets rentrent en collision et si c'est le cas, cela lance une fonction

if (this.monObjet.left/right/up/down.isDown) // Permet de vérifier si une touche est appuyée.
  {
    //ACTIONS ou Fonction
  }

if (this.cursors.up.isDown &&this.joueur.body.touching.down) // Permet de sauter avec une velocité de -350 seulement si le joueur touche le sol
  {
      this.joueur.body.velocity.y = -350;
  }

this.monObjet.kill(); // Permet de tuer une variable, un objet


RAPPEL SHOOT

function ennemiTouche(bullet,enemy){
  bullet.kill();
  enemy.kill();
}

function feu(){
  var balle=game.add.sprite(joueur.x,joueur.y,'surnom image de la balle');
  game.physics.arcade.enable(balle);
  balle.angle=0;
  balle.body.velocity.x=1000;
  balle.body.outOfBoundsKill=true;
}

function uprade() {

}
