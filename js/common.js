
$(document).ready(function() {
    $('input[type="tel"]').on('input', function() {
      let value = $(this).val().replace(/\D/g, '');
      
      if (value.length > 0) {
        if (value.length <= 1) {
          $(this).val('+' + value);
        } else if (value.length <= 4) {
          $(this).val('+' + value.substring(0, 1) + ' (' + value.substring(1));
        } else if (value.length <= 7) {
          $(this).val('+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4));
        } else if (value.length <= 11) {
          $(this).val('+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7));
        } else {
          $(this).val('+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11));
        }
      }
    });

    $('.burger').on('click', function() {
      $('.mobile-menu').addClass('active')
    })

    $('.close-menu').on('click', function() {
      $('.mobile-menu').removeClass('active')
    })
  });