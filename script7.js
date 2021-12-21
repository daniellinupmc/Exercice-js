// Acné-Bot
var discuss = prompt("Quelque chose à me dire?");

if (discuss[discuss.length - 1] == "?") {
  console.log("Ouais Ouais...");
} else if (discuss == discuss.toUpperCase()) {
  console.log("Pwa, calme-toi...");
} else if (discuss.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (discuss == "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek");
}