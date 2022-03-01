// on créer un objet : 
let vaisseau1 = new Sprite("vaisseau1", document.body.clientWidth/2, document.body.clientHeight/2, "red");
let vaisseau2 = new Sprite("vaisseau1", 500, 420, "blue");

// Première étape : créer l'objet visuel Sprite

// Notre objet Sprite va prendre 3 propriétés :
// 1) filename => nom du fichier/chemin d'accès
// 2) left => récupérer et définir sa position par rapport au bord gauche 
// 3) top => récupérer et définir sa position par rapport au bord haut 
function Sprite(filename, left, top, bgColor){

    // this = anglais => celui-ci

    // this._node = anglais => node (noeud) DONC on rappelle l'objet en cours (Sprite) avec tout son noeud (donc toutes ses méthodes)

    // 1ère chose que l'on veut faire, c'est définir ce à quoi va reseembler notre objet visuel
    // (donc, créer une image)
    this._node = document.createElement('img');

    // je veux attribuer à cette image sa source 
    this._node.src = "./images/"+filename+".png";

    // je mets en position absolute l'objet courant
    this._node.style.position = "absolute";

    // j'attribue mon objet au body
    document.body.appendChild(this._node);

    // Nos premières méthodes de get et de set pour LEFT
    // Définir la propriété Left et ses deux méthodes (get set)

    this._bgColor = bgColor;
    this._node.style.backgroundColor = this._bgColor;

    // on définit une propriété (ici LEFT), de l'objet courant (THIS)
    Object.defineProperty(this, "left",{
        get: function(){
            // la méthode get me renvoie la valeur de LEFT de l'objet en cours
            return this._left;
        },
        // la méthode set c'est une méthode qui attribue une valeur à LEFT
        set: function (value){
            // on prend la valeur de la propriété LEFT de l'objet courant et on lui attribue une valeur (reçue en paramètre)
            this._left = value;

            // on modifie le css de l'objet pour sa propriété left
            this._node.style.left = this._left+"px";

        }
    });
    Object.defineProperty(this, "top",{
        get: function (){
            return this._top;
        },
        set: function(value){
            this._top = value;

            // this._node = l'objet + tous ses noeuds (toutes ses propriétés)
            this._node.style.top = this._top+"px";
        }
    })

    // on définit la valeur de la propriété left de l'objet par le paramètre left reçu lors de la création d'un objet
    this.left = left;
    this.top = top;
}


document.onkeydown = function (event){

    //Haut
    if(event.code == "ArrowUp"){
        vaisseau1.top -= 15;
    }
    if(event.code == "KeyW"){
        vaisseau2.top -= 15;
    }

    //Bas
    if(event.code == "ArrowDown"){
        vaisseau1.top += 15;
    }
    if(event.code == "KeyS"){
        vaisseau2.top += 15;
    }

    //Gauche
    if(event.code == "ArrowLeft"){
        vaisseau1.left -= 15;
    }
    if(event.code == "KeyA"){
        vaisseau2.left -= 15;
    }

    //Droite
    if(event.code == "ArrowRight"){
        vaisseau1.left += 15;
    }
    if(event.code == "KeyD"){
        vaisseau2.left += 15;
    }

    console.log(event.code) // IMPORTANT ! Permet de voir le code des touchers claviers utilisées !

    //Barrières pour empecher de dépasser du body:

    //On l'empêche de sortir en haut:
    if(vaisseau1.top < 0){
        vaisseau1.top = 0;
    }
    //On l'empêche de sortir à gauche
    if(vaisseau1.left < 0){
        vaisseau1.left = 0;
    }
    //On l'empêche de sortir en bas
    if(vaisseau1.top > document.body.clientHeight-vaisseau1._node.height-25){
        vaisseau1.top = document.body.clientHeight-vaisseau1._node.height-25;
    }

    //On l'empêche de sortir à droite
    if(vaisseau1.left > document.body.clientWidth-vaisseau1._node.width-25){
        vaisseau1.left = document.body.clientWidth-vaisseau1._node.width-25;
    }


}