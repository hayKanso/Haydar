
function ajout(){
var elemliste = document.getElementById('course').value;
var liste = document.getElementById('listecommissions');
var li = document.createElement('li');
li.textContent=elemliste;
liste.append(li);
}