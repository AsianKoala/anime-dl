$(document).ready(function () {
    var amt = 3;
    var path = './res/bg/'
    var bg = 'url(' + path + Math.ceil(Math.random() * amt) + '.jpg)'
    console.log(bg);

    $('.bg-image').css('background-image', bg)
});