const fs = require('fs')
const path = require('path')
const app_path = require('electron').app.getAppPath();

module.exports = {
    iterate: function () {
        var name = path.join(app_path, '/src/settings.json')
        var settings = JSON.parse(fs.readFileSync(name).toString());
        console.log(name)
        console.log(settings)

        var curr_bg = settings['background-name']
        var char_arr = curr_bg.split("")
        var curr_iter = char_arr[char_arr.length - 6]

        console.log(char_arr)
        console.log('curr iter: ' + curr_iter)

        curr_iter++

        if (curr_iter > 3) {
            curr_iter = 1
        }

        var bg = 'url(' + path.join(app_path, '/res/bg/').replace(/\\/g, "/") + curr_iter + '.jpg)'
        settings['background-name'] = bg

        fs.writeFileSync(name, JSON.stringify(settings))
    }
}