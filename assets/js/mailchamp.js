/**
 * Copyright Akash Nimare
 */
 
$(document).ready(function () {
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form input[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault()
      register($form)
    })
  }
})

function register($form) {
  $('#mc-embedded-subscribe').val('Sending...');
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
    success: function (data) {
      $('#mc-embedded-subscribe').val('subscribe')
      if (data.result === 'success') {
        // Yeahhhh Success
        console.log(data.msg)
        $('#mc-embedded-subscribe').val('subscribed');
		$('#mc-embedded-subscribe').addClass('success-send-mc');
        $('#mce-EMAIL').val('')
      } else {
        // Something went wrong, do something to notify the user.
        console.log(data.msg)
        $('#mc-embedded-subscribe').val('error');
		$('#mc-embedded-subscribe').addClass('error-send-mc');
      }
    }
  })
};