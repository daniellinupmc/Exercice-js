// Bibliothécaire
const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois?");
var isAllRented = true;
for (var i = 0; i < books.length; i++) {
  if (books[i].rented < 1) {
    isAllRented = false;
  }
}
if (isAllRented) {
  console.log("Vrai");
} else {
  console.log("Faux");
}

console.log("\n");

console.log("Quel est livre le plus emprunté?");
var mostBookRented = "";
var nb = 0;
for (var i = 0; i < books.length; i++) {
  if (books[i].rented > nb) {
    nb = books[i].rented;
    mostBookRented = books[i].title;
  }
}
console.log("Le livre le plus emprunté est", mostBookRented, "avec", nb, "emprunts");

console.log("\n");

console.log("Quel est le livre le moins emprunté?");
var leastBookRented = "";
var nb = 10000000000;
for (var i = 0; i < books.length; i++) {
  if (books[i].rented < nb) {
    nb = books[i].rented;
    leastBookRented = books[i].title;
  }
}
console.log("Le livre le moins emprunté est", leastBookRented, "avec", nb, "emprunts");

console.log("\n");

console.log("Trouve le livre avec l'ID: 873495");
var findBook = "";
for (var i = 0; i < books.length; i++) {
  if (books[i].id === 873495) {
    findBook = books[i].title;
  }
}
console.log("Le livre avec l'ID: 873495 est", findBook);

console.log("\n");

console.log("Supprime le livre avec l'ID: 133712");
var findBook = "";
for (var i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    findBook = books[i].title;
    delete books[i];
  }
}
console.log("Le livre avec l'ID: 873495 titré", findBook, "a été supprimé");
console.log(books);

console.log("\n");

function sortArray(x, y) {
  if (x.title < y.title) {
    return -1;
  }
  if (x.title > y.title) {
    return 1;
  }
  return 0;
}

console.log("Trie les livres par ordre alphabétique");
books.sort(sortArray);
console.log(books);