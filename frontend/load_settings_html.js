
$(document).ready(function () {
    $('.settings-btn').click(function () {
        $('.settings-btn').fadeOut();
        $('.back-btn').delay(400).fadeIn();
        $('.form-group').delay(400).fadeIn();
        return false;
    });

    $('.back-btn').click(function () {
        $('.back-btn').fadeOut();
        $('.form-group').fadeOut();
        $('.settings-btn').delay(400).fadeIn();
        return false;
    });
});
