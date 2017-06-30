$(document).ready(function() {
    var dir = 'images/slider/';
    var backstretchImages = new Array();
    for (var i = 1; i <= 16; i++) {
        backstretchImages.push(dir + i +'.jpg');
    }
    $.backstretch(backstretchImages, {duration: 3000, fade: 750});
});