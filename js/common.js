
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
      $('.mobile-menu, .header').addClass('active')
    })

    $('.close-menu').on('click', function() {
      $('.mobile-menu, .header').removeClass('active')
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

    $('.main-slider').slick({
      fade: true,
      // autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<span class="prev-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 19)" stroke="#EB1E32"/></svg></span>',
      nextArrow: '<span class="next-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 19)" stroke="#EB1E32"/></svg></span>',
    });
  });

  $(document).ready(function() {
    // Получаем высоту хедера
    var headerHeight = $('header').outerHeight();
    
    // Устанавливаем отступ для контента равный высоте хедера
    $('.header-placeholder').css('height', headerHeight + 'px').show();
    $('body').css('padding-top', headerHeight + 20 + 'px');
    
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

    $('.our-courses .sale-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      arrows: true,
      dots: false,
      autoplay: true,
      pauseOnFocus: true,
      prevArrow: '<span class="prev-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 19)" stroke="#EB1E32"/></svg></span>',
      nextArrow: '<span class="next-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 19)" stroke="#EB1E32"/></svg></span>',
      responsive: [
        {
          breakpoint: 1701,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
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

$('.tab').on('click', function() {
  // Удаляем активный класс у всех табов
  $('.tab').removeClass('active');
  // Добавляем активный класс к текущему табу
  $(this).addClass('active');
  
  // Получаем ID таба из data-атрибута
  const tabId = $(this).data('tab');
  
  // Скрываем все содержимое табов
  $('.tab-content').removeClass('active').hide();
  
  // Показываем нужное содержимое
  $('#' + tabId).addClass('active').show();
});

$(document).ready(function() {
  // Функция переключения табов
  $('.tab').on('click', function() {
      // Удаляем активный класс у всех табов
      $('.tab').removeClass('active');
      // Добавляем активный класс к текущему табу
      $(this).addClass('active');
      
      // Получаем ID таба из data-атрибута
      const tabId = $(this).data('tab');
      
      // Скрываем все содержимое табов
      $('.tab-content').removeClass('active').hide();
      
      // Показываем нужное содержимое
      $('.tab-content[data-id="' + tabId + '"]').addClass('active').show();
  });

  // аккордеон
  $('.js--accordeon__title').on('click', function() {
    // Получаем родительский элемент аккордеона
    const accordeonItem = $(this).parent('.js--accordeon-parent');
    
    // Проверяем, активен ли текущий элемент
    const isCurrentActive = accordeonItem.hasClass('active');
    
    // Удаляем класс active у всех элементов
    $('.js--accordeon-parent').removeClass('active');
    
    // Если текущий элемент не был активен, делаем его активным
    // Если же он уже был активен, он останется закрытым
    if (!isCurrentActive) {
      // Добавляем класс active текущему элементу
      accordeonItem.addClass('active');
    }
});

// При загрузке страницы открываем первый элемент, если нет открытых
if ($('.js--accordeon-parent.active').length === 0) {
    $('.js--accordeon-parent').first().addClass('active');
}

});