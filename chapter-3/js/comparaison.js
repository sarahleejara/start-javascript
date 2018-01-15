var num1 = Number(prompt("Entrer un chiffre entre 1 et 9"));
var num2 = Number(prompt("Entrer un chiffre entre 1 et 9"));

if (num1 < num2){
  console.log(num1 + " est plus petit que " + num2);
} else if (num1 == num2) {
  console.log(num1 + " est égal à " + num2);
} else if (num1 > num2) {
  console.log(num1 + " est plus grand que " + num2)
} else {
  console.log("Je n'ai pas compris.");
}
