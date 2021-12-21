// Code la vie
var arn = "CCUCGCCGGUACUUCUCG";
var decouper = [];
var acideAmine = [];
for (var i = 0; i < arn.length; i = i + 3) {
  var arnDecouper = "";
  arnDecouper = arnDecouper + arn.charAt(i);
  arnDecouper = arnDecouper + arn.charAt(i + 1);
  arnDecouper = arnDecouper + arn.charAt(i + 2);
  decouper.push(arnDecouper);
}
for (var i = 0; i < decouper.length; i++) {
  if (decouper[i] == "UCU" || decouper[i] == "UCC" || decouper[i] == "UCA" || decouper[i] == "UCG" || decouper[i] == "AGU" || decouper[i] == "AGC"
  ) {
    acideAmine.push("Sérine");
  } else if (decouper[i] == "CCU" || decouper[i] == "CCC" || decouper[i] == "CCA" || decouper[i] == "CCG") {
    acideAmine.push("Proline");
  } else if (decouper[i] == "UUA" || decouper[i] == "UUG") {
    acideAmine.push("Leucine");
  } else if (decouper[i] == "UUU" || decouper[i] == "UUC") {
    acideAmine.push("Phénylalanine");
  } else if (decouper[i] == "CGU" || decouper[i] == "CGC" || decouper[i] == "CGA" || decouper[i] == "CGG" || decouper[i] == "AGA" || decouper[i] == "AGG"
  ) {
    acideAmine.push("Arginine");
  } else if (decouper[i] == "UAU" || decouper[i] == "UAC") {
    acideAmine.push("Tyrosine");
  } else {
    acideAmine.push("Unexist");
  }
}
var result = "";
for (var i = 0; i < acideAmine.length; i++) {
  if (i == acideAmine.length - 1) {
    result = result + acideAmine[i];
  } else {
    result = result + acideAmine[i] + "-";
  }
}
console.log(result);