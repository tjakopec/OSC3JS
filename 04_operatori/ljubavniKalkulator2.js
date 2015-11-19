var ime1;
var ime2;

ime1 = prompt("Unesite ime 1. osobe", "Marija");
ime2 = prompt("Unesite ime 2. osobe", "Marko");

var x = ime1.charCodeAt(0);
var y = ime2.charCodeAt(0);

var rezultat=x+y;

alert(ime1 + " i " + ime2 + " se vole " + rezultat + " %");
