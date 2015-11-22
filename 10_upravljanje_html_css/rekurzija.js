function rekurzija(cvor){
	if(cvor.childNodes.length==0){
		console.log(cvor);
		return;
	}else{
		for(var i=0;i<cvor.childNodes.length;i++){
			rekurzija(cvor.childNodes[i]);
		}
	}
	
	
}
