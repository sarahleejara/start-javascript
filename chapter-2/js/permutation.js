var nombre1 = 5;
var nombre2 = 3;

// Création d'une nouvelle variable qui désigne une des variable pour les permuté
var temp = nombre1; // NOUVELLE VARIABLE CRÉER QUI VAUT 5
nombre1 = nombre2; // VARIABLE 1 QUI VAUT MAINTENANT LA 2
nombre2 = temp; // VARIABLE 2 QUI VAUT MAINTENANT LA NOUVELLE VARIABLE QUI VAUT LA VARIABLE 1

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5
