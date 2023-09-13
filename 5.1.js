/*  
Créez une fonction nommée AskTvSerie() qui demandera à l'utilisateur les données suivantes sur sa série télévisée préférée : 
- Nom 
- Année de production
- Noms des acteurs
 (il peut y en avoir autant que l'utilisateur le souhaite) Cette fonction doit rassembler toutes les données dans un seul objet et les renvoyer. 
 La structure des données doit être élégante. Créez un programme qui utilise cette fonction pour générer un objet série télévisée et affichez-le à l'utilisateur au format JSON.
 */

function askTVseries() {
  const name = prompt("Enter the name of your favorite series :");
  const yearProduction = parseInt(prompt("What year was it produced :"));
  const castingMember = prompt("Enter the actors' names (separated by commas) :");
  const casting = castingMember.split(",");

  const tvSeries = {
    Movie: name,
    Release: yearProduction,
    Actors: casting,
  };

  return tvSeries;
}

const seriesObject = askTVseries();
const json = JSON.stringify(seriesObject, null, 2);
console.log("Here is the information about your favorite TV series :");
console.log(json);



