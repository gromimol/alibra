$(document).ready(function() {
    // Маска для телефона
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

    // Мобильное меню
    $('.burger').on('click', function() {
        $('.mobile-menu, .header').addClass('active');
    });

    $('.close-menu').on('click', function() {
        $('.mobile-menu, .header').removeClass('active');
    });

    // Модальное окно обратной связи
    $('.js--feedback').on('click', function(e) {
        e.preventDefault();
        $('#overlay').show();
        $('.feedback-modal').addClass('active');
    });

    $('#overlay, .close').on('click', function(e) {
        e.preventDefault();
        $('#overlay').hide();
        $('.feedback-modal').removeClass('active');
    });

    // Главный слайдер
    $('.main-slider').slick({
        fade: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="prev-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 19)" stroke="#EB1E32"/></svg></span>',
        nextArrow: '<span class="next-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 1)" stroke="#EB1E32"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 19)" stroke="#EB1E32"/></svg></span>',
    });

    // Слайдер годов
    $('.years-slider').slick({
        slidesToShow: 6,
        arrows: true,
        prevArrow: '<span class="prev-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 1)" stroke="#908D8D"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 19)" stroke="#908D8D"/></svg></span>',
        nextArrow: '<span class="next-arrow"><svg width="19" height="37" viewBox="0 0 19 37" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(0.686624 0.727013 -0.439726 0.898132 1 1)" stroke="#908D8D"/><line y1="-0.5" x2="24.7588" y2="-0.5" transform="matrix(-0.686624 0.727013 0.439726 0.898132 18 19)" stroke="#908D8D"/></svg></span>',
        dots: false,
        infinite: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    swipeToSlide: true,
                }
            }
        ]
    });

    // Слайдер контента
    $('.content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        speed: 300,
        adaptiveHeight: true
    });

    // Обработчик клика по году
    $('.year-item').on('click', function() {
        var slideIndex = $(this).data('slide');
        
        $('.year-item').removeClass('active');
        $(this).addClass('active');
        
        $('.content-slider').slick('slickGoTo', slideIndex);
    });

    // Синхронизация при использовании стрелок в слайдере годов
    $('.years-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.year-item').removeClass('active');
        $('.year-item').eq(currentSlide).addClass('active');
        
        $('.content-slider').slick('slickGoTo', currentSlide);
    });

    // Табы в Горящих курсах
    $('.tab-group__item').on('click', function() {
        $('.tab-group__item').removeClass('active');
        $(this).addClass('active');
        
        const tabId = $(this).data('id');
        
        $('.courses-table').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    // Слайдер курсов
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

    // Фиксированный хедер
    var headerHeight = $('header').outerHeight();
    
    $('.header-placeholder').css('height', headerHeight + 'px').show();
    $('body').css('padding-top', headerHeight + 20 + 'px');
    
    var scrollThreshold = 300;
    var tempScrollTop, currentScrollTop = $(window).scrollTop();
    
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
        
        if (currentScrollTop > scrollThreshold) {
            $('body').addClass('fixed-header');
            
            if (tempScrollTop > currentScrollTop) {
                $('header').addClass('show');
            } else {
                $('header').removeClass('show');
            }
        } else {
            $('body').removeClass('fixed-header');
            $('header').removeClass('show');
        }
        
        tempScrollTop = currentScrollTop;
    });
    
    $(window).resize(function() {
        headerHeight = $('header').outerHeight();
        $('.header-placeholder').css('height', headerHeight + 'px');
        
        $('style').last().html('\
            .fixed-header header { \
                top: -' + headerHeight + 'px; \
            } \
            .fixed-header header.show { \
                top: 0; \
            }');
        
    });

    // Универсальные табы
    $('.tab').on('click', function() {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        
        const tabId = $(this).data('tab');
        
        $('.tab-content').removeClass('active').hide();
        $('.tab-content[data-id="' + tabId + '"]').addClass('active').show();
    });

    // Аккордеон
    $('.js--accordeon__title').on('click', function() {
        const accordeonItem = $(this).parent('.js--accordeon-parent');
        const isCurrentActive = accordeonItem.hasClass('active');
        
        $('.js--accordeon-parent').removeClass('active');
        
        if (!isCurrentActive) {
            accordeonItem.addClass('active');
        }
    });

    // При загрузке страницы открываем первый элемент аккордеона
    if ($('.js--accordeon-parent.active').length === 0) {
        $('.js--accordeon-parent').first().addClass('active');
    }
});

// Видео плеер (оставляем отдельно, так как использует vanilla JS)
document.getElementById('videoPlaceholder').addEventListener('click', function() {
    document.getElementById('videoPlaceholder').style.display = 'none';
    document.getElementById('loadingIndicator').style.display = 'flex';
    
    const iframe = document.createElement('iframe');
    iframe.src = "https://vk.com/video_ext.php?oid=-9094688&id=456239407&hd=2";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture;";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    
    iframe.onload = function() {
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('videoContainer').style.display = 'block';
    };
    
    document.getElementById('videoContainer').appendChild(iframe);
});