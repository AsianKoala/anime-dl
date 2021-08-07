
$(document).ready(function () {
    $('.settings-btn').click(function () {
        $('.main-shit').fadeOut();
        $('.settings-shit').delay(400).fadeIn();
        return false;
    });

    $('.back-btn').click(function () {
        $('.settings-shit').fadeOut();
        $('.main-shit').delay(400).fadeIn();
        return false;
    });
});
