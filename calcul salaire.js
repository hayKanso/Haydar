function Person(nom,sexe,nbprcharge, salaire_brut){
    this.nom = nom;
    this.sexe = sexe;
    this.nbprcharge = nbprcharge;
    this.salaire_brut = salaire_brut;
}

function impots ();
var tauximpots = 18;
if(this.sexe ==='F'){
    tauximpots =16;
}
if (this.nbprcharge===3) {
    tauximpots = tauximpots -1;
    } 
    else { if (this.nbprcharge===4) {
        tauximpots =tauximpots -2;
    }  

    console.log(this.nom + 'doit payer' + tauximpots + '% impots donc son salaire cs sera :' + this.salaire_brut*tauximpots/100);
    return this.salaire_brute*tauximpots/100;
}


function assurance(){
console.log(this.nom + 'doit payer 7% assurance donc son salaire cs sera :' + this.salaire_brut*7/100);
return this.salaire_brut*7/100;
}

function pension() {
    console.log(this.nom + 'doit payer 5% pension de son salaire');
    return salaire_brut*5/100;
}
function bonus(){
    var complementaire;
    console.log(this.nom + 'peut gagner 100 ou 150 euros')
    return salaire_brute = salaire_brute + complementaire;
}

function salaire_net(){
console.log('la salaire net percois par' + this.nom + 'est')
return this.salaire_brut = this.impots() + this.assurance() + this.pension() + this.bonus();
}

let Haydar = new Person('Haydar', 'M', 1, 3500);