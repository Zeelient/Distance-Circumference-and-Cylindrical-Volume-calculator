
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // The message only shows if user has entered number less than 20
  console.assert(this.value > 20, 'User entered less than 20');
});

$('#calculator').on('submit', function(e) { 
  e.preventDefault();
  console.log('Clicked submit...');

  radius = $('#r').val();                          // mathematical values

  circumference = 2*Math.PI*radius;
  
  // The message only shows if user has not entered a number
  console.assert($.isNumeric(circumference), 'User entered non-numeric value');

  $form.append('<p>' + circumference + '</p>');
});