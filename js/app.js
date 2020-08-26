// creo ogetto studente 
var Studente = function (nome,cognome,eta) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
};
// creo i diversi ogetti
var giulia = new Studente('Giulia','Saporiti',20);
var matteo = new Studente ('Matteo','De blasio',19);
var newUser = new Studente(prompt('inserisci Nome'),prompt('Inserire Cognome'),prompt('Inserire eta'));
//creo gli array 
var studenti = [];
var datiStudenti = [];
// push gli ogetti nell'aray
studenti.push(giulia,matteo,newUser);
// ciclo tutti i dati e li pusho in un nuovo array
for(var i=0;i<studenti.length;i++){
    for (var k in studenti[i]){
        datiStudenti.push(k+': '+studenti[i][k]+' ');
    }
}
// creo array per nomi e cognomi
var nomiCognomi = [];
// pusho i nomi e i cognomi nell'array 
for(var i=0;i<studenti.length;i++){
    nomiCognomi.push('nome: '+ studenti[i].nome +' cognome: '+studenti[i].cognome);
};
// handlebars
$(document).ready(function(){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {
          dati: datiStudenti,
          names: nomiCognomi
        };
    var html = template(context);
    $('.pos').append(html);
});

