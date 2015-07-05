$(document).ready(function() {
	
    $('.form-control').keydown(function(event) {
		switch(event.which){
			case 8:
				return true
				break;
			case 9:
				return true;
				break;			
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				return true;
				break;
			default:
				return  false;
		}
    });
	
	$('.btn').click(function(){
		function alert1(){
			alert('Formularz nie został poprawnie wypełniony.');	
		}
		
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	
	if( height.length < 3 || weight.length < 2){
		alert1();
	}else if( height == 0 || weight == 0){
		alert1();
	}else{
		
	var dd = ( weight ) / (( height /100 ) *( height /100 ));
	var bMI = dd.toFixed(2);
	var properW1 = (( height /100 ) *( height /100 )) * 18.5;
	var properW2 = (( height /100 ) *( height /100 )) * 24.99;
	
	if( properW1.toFixed(0) / (( height /100 ) * ( height /100 )) < 18.5 ) 
		properW1 +=1;
	if(  properW2.toFixed(0) / (( height /100 ) *( height /100) )> 24.99 )
		properW2 -=1;
	
	if(bMI < 18.5){
		$('#result').html( "Wynik: Masz <span style='color: #fe1200;'>niedowage</span> ! Twoje BMI wynosi: " + bMI + "." );
	}else if(bMI  < 25){
		$('#result').html("Wynik: Twoje BMI jest w <span style='color: #28bf22;'>normie</span> i  wynosi: " + bMI + "." );
	}else{
		$('#result').html("Wynik: Masz <span style='color:#fe1200;'>nadwagę</span>! Twoje BMI wynosi: " + bMI + "." );
	}
	
	$('#fineW').html('Dla podanego wzrostu (' + height + ' cm) prawidłowa waga wynosi pomiędzy: ' + properW1.toFixed(0) + ' a ' + properW2.toFixed(0)  + ' kg.');
	
	};
});
});
