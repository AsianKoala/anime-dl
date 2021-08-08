const { dialog } = require('@electron/remote')

$(document).ready(function () {
    $('.select-dir-btn').click(function () {
        dialog.showOpenDialog({
            properties: ['openDirectory']
        }).then(result => {
            console.log(result.filePaths[0])
        })
    });
});