$(document).ready(function () {
    $('.menu li:has(ul)').click(function (e) {
        e.stopPropagation(); // Evita la propagaci�n del evento de click a elementos padre

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();

        }
    });

    $('.menu li ul li').click(function (e) {
        e.stopPropagation(); // Evita la propagaci�n del evento de click a elementos padre

        // Obt�n el valor del atributo href del enlace
        var href = $(this).children('a').attr('href');

        // Redirige a la p�gina deseada
        window.location.href = href;
    });
});