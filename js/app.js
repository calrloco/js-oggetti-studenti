var Studente = function (nome,cognome,eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
};
var giulia = new Studente('Giulia','Saporiti',20);
var matteo = new Studente ('Matteo','De blasio',19);
//var newUser = new Studente(prompt('inserisci Nome'),prompt('Inserire Cognome'),prompt('Inserire eta'));
var studenti = [];
studenti.push(giulia,matteo);
console.log(studenti);
var nomiCognomi = []

for(var i=0;i<studenti.length;i++){
    nomiCognomi.push('nome: '+ studenti[i].nome +' cognome: '+studenti[i].cognome);
};
console.log(nomiCognomi);
$(document).ready(function(){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
          names: nomiCognomi,
           
        };
    var html = template(context);
    $('.pos').append(html);
});

