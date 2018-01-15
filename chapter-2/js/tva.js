
// Il faut d'abord avoir le prix HTVA - donc faire un pop-up qui demande le prixHT
// On doit TOUJOURS utiliser Number() pour tout ce qui est comparaison de chiffre sinon cela sera considéré comme text
var prixHT = Number(prompt("Entrez le prix HTVA"));

// Il faut déterminer le taux de TVA

var tauxTVA = 19.6 / 100;

// On calcule le prix TTC avec le prix HTVA et le tauxTVA
var prixTTC = prixHT * (1 + tauxTVA);

// Maintenant on affiche le resultat du prix TVAC

console.log("Le prix TTC est de " + prixTTC + " euros");
