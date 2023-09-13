/* Créez une fonction nommée calcSurface qui prend la longueur et la largeur 
d'un rectangle et renvoie sa surface. Créez ensuite un programme qui demande
 à l'utilisateur la longueur et la largeur d'un rectangle, puis affiche la surface 
 de ce rectangle. Ce programme doit utiliser la fonction que vous avez créée. */


 function calcSurface(width, height) {
    return width * height;
 }

 surfaceWidth = prompt("enter the triangle width");
 surfaceHeight = prompt("enter triangle height");
 let surface = calcSurface(surfaceWidth, surfaceHeight);
 alert("the triangle has an area of " + surface);

