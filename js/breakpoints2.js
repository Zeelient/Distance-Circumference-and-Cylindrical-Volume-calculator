
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  x1 = $('#x1').val();                              // mathematical values
  y1 = $('#y1').val();
  x2 = $('#x2').val();
  y2 = $('#y2').val();
  distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

  if (distance < 200) {
    debugger;             // A breakpoint is set if the developer tools are open
  }

  $form.append('<p>' + distance + '</p>');
});