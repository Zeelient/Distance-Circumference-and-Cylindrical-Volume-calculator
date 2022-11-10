console.info('Start using the calculator');                    // Info: script running


$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // On blur event
  console.warn("Don't enter anything that is not a numerical value");           // Warn: what was entered
});

$('#calculator').on('submit', function(e) {           // When form is submitted
  e.preventDefault();

  r = $('#r').val();                                  // mathematical values
  h = $('#h').val();

  volume = Math.PI * r**2 * h;
  console.error(volume);                                // Error: show volume

  $form.append('<p class="result">' + volume + '</p>');
});