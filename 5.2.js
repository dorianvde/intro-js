/*  Créez une fonction nommée randomizeCast(tvSerie) qui prendra comme argument la structure de données que vous avez définie dans l'exercice précédent
 et renverra une liste de la même distribution mais dans un ordre aléatoire.
  Créez un programme qui utilisera randomizeCast(tvSerie) et requestTvSerie() pour interroger l'utilisateur sur une série télévisée
   puis affichera une liste aléatoire de la distribution précédente qui formera la nouvelle distribution de votre prochaine série.
 */

function randomizeCast(tvSerie) {
  const casting = tvSerie.Actors;
  const randomCasting = [...casting]; 

  for (let i = randomCasting.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomCasting[i], randomCasting[j]] = [randomCasting[j], randomCasting[i]];
  }

  return randomCasting;
}

function requestTvSerie() {
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

const tvSerie = requestTvSerie();
console.log("Original cast :");
console.log(tvSerie.Actors);

const randomizedCasting = randomizeCast(tvSerie);
console.log("New random distribution :");
console.log(randomizedCasting);
