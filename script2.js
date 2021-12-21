// Calcul rapides
var fact = prompt("De quel nombre veux-tu calculer la factorielle ?");
if (fact <= 0) {
  var result = 0;
} else {
  var result = 1;
  while (fact > 1) {
    result = result * fact;
    fact--;
  }
}
console.log("Le résultat est:", result);