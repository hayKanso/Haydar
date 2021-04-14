class Document{
    constructor(numEnreg, titre) {
    this.numEnreg = numEnreg;
    this.titre = titre;
}
}
class Livre extends Document {

    constructor(numEnreg,titre,auteur,nbpage){
    super(numEnreg,titre)
    this.auteur = auteur;
    this.nbpage = nbpage;
}
}
    
     
class Revue extends Document{
    constructor(numEnreg,titre,mois,annee){
    super(numEnreg,titre)
    this.mois = mois;
    this.annee = annee;
}
}

class Dictionnaire extends Document{
    constructor (numEnreg,titre,langue){
    super(numEnreg,titre)
    this.langue = langue;
}
}


let livre1 = new Livre(20, 'BEN', 'Kanso', 5);
        display(livre1);
        console.log(nbpage.Livre);