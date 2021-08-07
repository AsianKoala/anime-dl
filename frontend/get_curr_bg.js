const fs = require('fs')

$(document).ready(function () {
    var name = './frontend/settings.json'
    var settings = JSON.parse(fs.readFileSync(name).toString());
    $('.bg-image').css('background-image', settings['background-name'])
});