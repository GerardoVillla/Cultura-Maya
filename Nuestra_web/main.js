$(document).ready(function () {
    $('.menu li:has(ul)').click(function (e) {
        e.stopPropagation(); // Evita la propagación del evento de click a elementos padre

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
        e.stopPropagation(); // Evita la propagación del evento de click a elementos padre

        // Obtén el valor del atributo href del enlace
        var href = $(this).children('a').attr('href');

        // Redirige a la página deseada
        window.location.href = href;

    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ocultar todas las div excepto 'contenido'

    var divs = document.querySelectorAll('div:not(#Contenido):not(#Menu)');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }
});

function mostrarDiv(id) {
    // Ocultar todas las div, incluyendo 'Menu', y agregar la clase 'hidden'
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('hidden');
    }
   
    // Mostrar la div seleccionada
    var div = document.getElementById(id);
    div.classList.remove('hidden');
}





