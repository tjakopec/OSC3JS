

document.getElementById("dodaj").addEventListener("click", dodaj);

function dodaj(){
	var lista = document.getElementById("lista");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(document.getElementById("vrijednost").value));
	lista.appendChild(li);
}


//https://davidwalsh.name/add-rules-stylesheets