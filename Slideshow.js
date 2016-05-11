var nizslika=["Slike\\pocetna.jpg","Slike\\pocetna2.jpg","Slike\\pocetna3.jpg"];
var trenutnaslika=0;
function pritisni(kojeDugme){
	var slika=document.getElementById("slikaId");
	if(kojeDugme=="levo"){		
		var novaSlikarb=trenutnaslika-1;
		if(novaSlikarb==-1){
			slika.src=nizslika[2];
			trenutnaslika=2;
		}else{
			slika.src=nizslika[novaSlikarb];
			trenutnaslika=novaSlikarb;
		}
	}
	else
	{ 
        var novaSlikarb=trenutnaslika+1;
		if(novaSlikarb==3){
			slika.src=nizslika[0];
			trenutnaslika=0;
		}
		else{
		
		slika.src=nizslika[novaSlikarb];
		trenutnaslika=novaSlikarb;
		}
	}
	
	
}

	
