
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

  $(document).ready(function() {
    // Получаем высоту хедера
    var headerHeight = $('header').outerHeight();
    
    // Устанавливаем отступ для контента равный высоте хедера
    $('.header-placeholder').css('height', headerHeight + 'px').show();
    $('body').css('padding-top', headerHeight + 50 + 'px');
    
    // Определяем порог прокрутки (можно установить другое значение, например 300px)
    var scrollThreshold = 300;
    
    // Переменные для отслеживания скролла
    var tempScrollTop, currentScrollTop = $(window).scrollTop();
    
    // Добавляем CSS-правила динамически в зависимости от высоты хедера
    $('<style>')
        .prop('type', 'text/css')
        .html('\
            .fixed-header header { \
                top: -' + headerHeight + 'px; \
            } \
            .fixed-header header.show { \
                top: 0; \
            }')
        .appendTo('head');
    
    $(window).scroll(function() {
        currentScrollTop = $(window).scrollTop();
        
        // Проверка условия: прокрутка больше порога
        if (currentScrollTop > scrollThreshold) {
            $('body').addClass('fixed-header');
            
            // Скролл вверх - показываем хедер
            if (tempScrollTop > currentScrollTop) {
                $('header').addClass('show');
            } 
            // Скролл вниз - скрываем хедер
            else {
                $('header').removeClass('show');
            }
        } 
        // Прокрутка меньше порога - возвращаем всё в исходное состояние
        else {
            $('body').removeClass('fixed-header');
            $('header').removeClass('show');
        }
        
        tempScrollTop = currentScrollTop;
    });
    
    // Обработка изменения размера окна
    $(window).resize(function() {
        // Повторно вычисляем высоту хедера при изменении размера окна
        headerHeight = $('header').outerHeight();
        
        // Обновляем высоту заполнителя
        $('.header-placeholder').css('height', headerHeight + 'px');
        
        // Обновляем CSS-правила
        $('style').last().html('\
            .fixed-header header { \
                top: -' + headerHeight + 'px; \
            } \
            .fixed-header header.show { \
                top: 0; \
            }');
    });
});


  document.getElementById('videoPlaceholder').addEventListener('click', function() {
    // Показываем индикатор загрузки
    document.getElementById('videoPlaceholder').style.display = 'none';
    document.getElementById('loadingIndicator').style.display = 'flex';
    
    // Создаем iframe с видео
    const iframe = document.createElement('iframe');
    iframe.src = "https://vk.com/video_ext.php?oid=-9094688&id=456239407&hd=2";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture;";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    
    // При загрузке видео скрываем индикатор и показываем видео
    iframe.onload = function() {
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('videoContainer').style.display = 'block';
    };
    
    // Добавляем iframe в контейнер
    document.getElementById('videoContainer').appendChild(iframe);
});