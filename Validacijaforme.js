function testiraj(){
	var imetb=document.getElementById("imeId");
	var ime=imetb.value;
	
	
	var mailtb=document.getElementById("emailId");
	var mail=mailtb.value;
	
	var telefontb=document.getElementById("telefonId");
	var telefon=telefontb.value;
	
	var porukatb=document.getElementById("porukaId");
	var poruka=porukatb.value;
	
	if(ime=="" || ime==null){
		imetb.style.borderColor="red";	
         imetb.title="Obavezno polje";	
	}		 
	else{
		imetb.style.borderColor="#888";
		imetb.title="";
	}
	
	if(mail=="" || mail==null){
		mailtb.style.borderColor="red";
		mailtb.title="Obavezno polje";
	}
	else{
		mailtb.style.borderColor="#888";
		mailtb.title="";
	}
	
	if(poruka=="" || poruka==null){
		porukatb.style.borderColor="red";
		porukatb.title="Obavezno polje";
	}
	else{
		porukatb.style.borderColor="#888";
		porukatb.title="";
	}
	
	if(telefon=="" || telefon==null){
		telefontb.style.borderColor="red";
		telefontb.title="Obavezno polje";
	}
	else{
		telefontb.style.borderColor="#888";
		telefontb.title="";
	}
}
