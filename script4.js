// Startup Nation
const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

console.log("Quels sont les entrepreneurs nés dans les années 70?");
var plusDe70 = new Array();
for (var i = 0; i < entrepreneurs.length; i++) {
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
    console.log(entrepreneurs[i].first, entrepreneurs[i].last);
    var col = new Set();
    col.add(entrepreneurs[i].first);
    col.add(entrepreneurs[i].last);
    plusDe70.push(col);
  }
}
console.log(plusDe70);

console.log("\n");

console.log("Quels sont les prénoms et noms des entrepreneurs?");
var nomPrenom = new Array();
for (var i = 0; i < entrepreneurs.length; i++) {
  var col = new Set();
  col.add(entrepreneurs[i].first);
  col.add(entrepreneurs[i].last);
  nomPrenom.push(col);
}
console.log(nomPrenom);

console.log("\n");

console.log("Quel âge aurait chaque inventeur aujourd'hui?");
for (var i = 0; i < entrepreneurs.length; i++) {
  var age = 2021 - entrepreneurs[i].year;
  console.log(entrepreneurs[i].first, entrepreneurs[i].last, "aurait eu aujourd'hui:", age, "ans");
}

console.log("\n");

function sortArray(x, y) {
  if (x.last < y.last) {
    return -1;
  }
  if (x.last > y.last) {
    return 1;
  }
  return 0;
}

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille");
entrepreneurs.sort(sortArray);
console.log(entrepreneurs);