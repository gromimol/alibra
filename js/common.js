
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

    $('.js--feedback').on('click', function(e) {
      e.preventDefault();

      $('#overlay').show()
      $('.feedback-modal').addClass('active')
    })

    $('#overlay, .close').on('click', function(e) {
      e.preventDefault();

      $('#overlay').hide()
      $('.feedback-modal').removeClass('active')
    })
  });

  document.getElementById('videoPlaceholder').addEventListener('click', function() {
    // Создаем iframe с видео
    const iframe = document.createElement('iframe');
    iframe.src = "https://vk.com/video_ext.php?oid=-9094688&id=456239407&hd=2";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture;";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    
    // Заменяем заглушку на видео
    document.getElementById('videoContainer').appendChild(iframe);
    document.getElementById('videoPlaceholder').style.display = 'none';
    document.getElementById('videoContainer').style.display = 'block';
});