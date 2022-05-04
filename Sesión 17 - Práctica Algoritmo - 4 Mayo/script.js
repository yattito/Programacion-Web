// Guardamos el numero de pokemones que el usuario elige.
var numero = prompt("Cuantos pokemones quieres?");

// Declara nuestro array vacio
var pokemones = [];

// Declaramos nuestro ciclo
for(var i = 0; i < numero; i++){
	// Traigo un dato del usuario
	var pokemon = prompt("Escribe el nombre de un pokemon!");
	// Agrego el dato del usuario al Array
	pokemones.push(pokemon);
	// Imprimir en el documento los pokemones
	document.write("<strong>"  + pokemones[i] + "</strong> yo te elijo! <br>");
}

// Imrpimimos la linea final en el documento.
document.write("Haz elegido tus " + numero + " pokemones!");