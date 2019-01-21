$(function() {

	// Custom JS

});
$(document).ready(function(){
 
        var $menu = $("#menu");
 
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 950 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 950 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });



$(document).ready(function() { // Ждём загрузки страницы
    
    $(".image").click(function(){   // Событие клика на маленькое изображение
        var img = $(this);  // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
                         "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
                         "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
                         "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_bg").click(function(){    // Событие клика на затемненный фон    
            $(".popup").fadeOut(200);   // Медленно убираем всплывающее окн 
      setTimeout(function() {   // Выставляем таймер
              $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
    });
    
});

 
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});