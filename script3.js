// Pyramide de Mario
var pyra = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);
if (pyra > 0) {
  var cpt = 0;
  for (var etage = 0; etage < pyra; etage++) {
    var res = "";
    var espace = pyra - 1 - cpt;
    var diese = 1 + cpt;
    while (espace > 0) {
      res = res + " ";
      espace--;
    }
    while (diese > 0) {
      res = res + "#";
      diese--;
    }
    console.log(res);
    cpt++;
  }
}