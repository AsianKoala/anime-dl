const fs = require('fs')

module.exports = {
    reset: function () {
        var name = './backend/settings.json'
        var settings = JSON.parse(fs.readFileSync(name).toString());

        console.log(settings)
        settings['background-name'] = ''

        fs.writeFileSync(name, JSON.stringify(settings))
    }
}