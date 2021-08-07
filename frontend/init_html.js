
$(document).ready(function () {
    $('.settings-shit').css('display', 'none')
    var all_elements = [
        'div', 'a', 'img', 'input', 'form', 'label', 'h2'
    ]
    for (const element in all_elements) {
        $(element).css('position', 'absolute')
    }
});
