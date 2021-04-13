function Document(numEnreg,titre){
    this.numEnreg = numEnreg;
    this.titre = titre;
}
function Livre (numEnreg,titre,auteur,nbpage){
    Document.call(this, numEnreg,titre)
    this.auteur = auteur
    this.nbpage = nbpage;

    
     this.nbpage = function nombrebpage (){
    switch(this.nbpage) {
        case this.nbpage>0 && this.nbpage<100 :
        display('nb de page entre 0 et 100' + nbpage)
        break
        case this.nbpage>100 && this.nbpage<200 :
        display('nb de page entre 101 et 201' + nbpage)
        break
        case this.nbpage>200 && this.nbpage<300 :
        display('nb de page entre 201 et 301' + nbpage)
        break
        case nbpage>300 :
        display('nb de page superieur que 301 ' + nbpage)
        break
    }
}}
function Revue (numEnreg,titre,mois,annee){
    Document.call(this, numEnreg,titre)
    this.mois = mois
    this.annee = annee;
}
function Dictionnaire (numEnreg,titre,langue){
    Document.call(this, numEnreg,titre)
    this.langue = langue;

}

Livre.prototype = object.create(Document.prototype);
Revue.prototype = object.create(Document.prototype);
Dictionnaire.prototype = object.create(Document.prototype);

let livre1 = new Livre(20, 'BEN', 'Kanso', 5);
        display(livre1);
        console.log(nbpage.Livre);