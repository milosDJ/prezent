var nizslika=["Slike//pocetna.jpg","Slike//pocetna2.jpg","Slike//pocetna3.jpg","Slike//pocetna4.jpg","Slike//pocetna5.jpg","Slike//pocetna6.jpg"];
var trenutnaslika=0;

function pritisni(kojeDugme){
	var slika=document.getElementById("slikaId");
	if(kojeDugme=="levo"){		
		var novaslika=trenutnaslika-1;
		if(novaslika==-1){		    
			slika.src=nizslika[5];
			trenutnaslika=5;
		}
		else{
			slika.src=nizslika[novaslika];
		trenutnaslika=novaslika;
		}
		
		
	}
	
	if(kojeDugme=="desno"){
		var novaslika=trenutnaslika+1;
		if(novaslika==6){
			slika.src=nizslika[0];
			trenutnaslika=0;
		}
		else{
			slika.src=nizslika[novaslika];
		trenutnaslika=novaslika;
		}
		
	}
}