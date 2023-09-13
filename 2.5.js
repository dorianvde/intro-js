// Créez un programme qui demande le numéro préféré de l'utilisateur. Si ce nombre est autre que 42, affichez « Êtes-vous sûr ? » //
// et demandez à nouveau. (Ce programme ne devrait jamais se terminer tant que l'utilisateur n'a pas choisi 42). //


let num= prompt("What's ur favorite number ?");
while (num != 42){
    num = prompt("Are you sure?");
}
alert("good number");