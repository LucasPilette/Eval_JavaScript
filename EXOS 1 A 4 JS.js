//EXO 1

var moins = 0;
var entre = 0;
var plus = 1;
var x = 0;
var cpt = 1;
while (x <= 100) {
  x = parseInt(window.prompt("Entrez l'âge n°" + cpt + ": "));
  cpt++;
  if (x < 20) {
    moins++;
  } else if (x < 40) {
    plus++;
  } else entre++;
}
document.write("Il y a " + moins + " personnes qui ont moins de 20 ans.<br/>");
document.write(
  "Il y a " + entre + " personnes qui ont entre 20 et 40 ans.<br/>"
);
document.write("Il y a " + plus + " personnesqui ont plus de 40 ans.");

// EXO 2

var x = parseInt(window.prompt("Entrez un chiffre :"));
for (cpt = 1; cpt <= 10; cpt++) {
  document.write(x + "x" + cpt + "=" + x * cpt + "</br>");
}

// EXO 3

var tab = [
  "Audrey",
  "Aurélien",
  "Flavien",
  "Jérémy",
  "Laurent",
  "Melik",
  "Nouara",
  "Salem",
  "Samuel",
  "Stéphane",
];
var x = window.prompt("Saisissez un prénom :");
var flag = false;
for (var i = 0; i < tab.length; i++) {
  if (flag) {
    tab[i - 1] = tab[i];
    if (i === tab.length - 1) {
      tab[i] = " ";
    }
  }
  if (x === tab[i]) {
    flag = true;
    if (i === tab.length - 1) {
      tab[i] = " ";
    }
  }
}

// EXO 4

console.log(tab);
var PU = 0;
var QTECOM = 0;
var PAP = 0;
var REM = 0;
var PORT = 0.02;
var minPORT = 6;
while (PAP === 0) {
  PU = parseInt(window.prompt("Entrez le prix unitaire :"));
  QTECOM = parseInt(window.prompt("Entrez la quantité commandée :"));
  var TOT = PU * QTECOM;
  if (TOT > 100) {
    REM = 0.05;
    if (TOT > 200) {
      REM = 0.1;
    }
  }
  var reduc = TOT - TOT * REM;
  if (reduc > 500) {
    PORT = 0;
    minPORT = 0;
  } else if (reduc * PORT < 6) {
    PORT = 0;
  } else {
    minPORT = 0;
  }
  PAP = reduc + PORT * reduc + minPORT;
}
console.log(PAP);
