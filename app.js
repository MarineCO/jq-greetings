
$("button").click(function(){

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

	var bonjour = (nom.first_name + ' ' + nom.last_name);

	$("#username").html(bonjour);
});
