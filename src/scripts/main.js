'use strict';

$(document).ready(function() {
  $('.description__label').click(function() {
    if ($(this).css('left') === '0px') {
      $(this).css('left', '45%');
      $(this).html('YEARLY');
      $('#priceNumber1').hide();
      $('#priceNumber2').hide();
      $('#priceNumber3').hide();
      $('#priceNumber1').html('$12').show('slow');
      $('#priceNumber2').html('$36').show('slow');
      $('#priceNumber3').html('$56').show('slow');
    } else {
      $(this).css('left', '0');
      $(this).html('MONTHLY');
      $('#priceNumber1').hide();
      $('#priceNumber2').hide();
      $('#priceNumber3').hide();
      $('#priceNumber1').html('$19').show('slow');
      $('#priceNumber2').html('$54').show('slow');
      $('#priceNumber3').html('$89').show('slow');
    }
  });
});
