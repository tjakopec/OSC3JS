rekurzija(document.documentElement);

function promjeniBoju(naslov, boja){
	naslov.parentNode.style.borderColor=boja;
}

document.getElementById("desno").
addEventListener("click", klikDesno);

function klikDesno(){
	var element = document.getElementById("desno");
 	element.parentElement.removeChild(element);
}


//https://davidwalsh.name/add-rules-stylesheets