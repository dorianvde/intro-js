//Demandez à l'utilisateur de saisir son âge. Si son âge est d'au moins 18 ans, affichez "Vous êtes majeur". Si ce n'est pas le cas, affichez "Vous n'êtes pas encore majeur".//

let age = prompt("How old are you");

if (age >= 18){
    console.log("you're adult");
} else {
    console.log("you're not adult");
}