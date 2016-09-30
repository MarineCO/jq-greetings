console.log('have fun !');

/* Form Capture

Récuperez les valeurs des champs du formulaire et en faire un joli 
objet qui sera affiché dans la console. */

$("button").click(function(){
	// alert('ok');

	var val1 = $('#first_name').val();
	alert('Mon prénom est ' + val1);

	var val2 = $('#last_name').val();
	alert('Mon nom est ' + val2);

	var val3 = $('#city').val();
	alert('Je vis à ' + val3);

	var nom = {
		first_name : val1,
		last_name : val2,
		city : val3
	};

	console.log(nom)


	var bonjour = (nom.first_name + ' ' + nom.last_name);

	$("#username").html(bonjour);
});


/* Concaténez les champs first_name et last_name et dites bonjour à 
notre cher visiteur dans le titre en replacant le contenu du 
span #username */
