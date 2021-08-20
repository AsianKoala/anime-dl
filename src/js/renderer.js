const fs = require('fs')
const { dialog } = require('@electron/remote')
const path = require('path')
const app_path = require('electron').remote.app.getAppPath();
const { si } = require('nyaapi')

const settings_path = path.join(app_path, '/src/settings.json')
const settings = JSON.parse(fs.readFileSync(settings_path).toString());

function fix_path(path) {
    return path.replace(/\\/g, "/");
}

function update_settings() {
    fs.writeFileSync(settings_path, JSON.stringify(settings));
}

function init() {
    $('.settings-shit').css('display', 'none')
    $('.add-anime-screen').css('display', 'none')
}

function get_curr_bg() {
    $('.bg-image').css('background-image', settings['background-name']);
}

function handle_switching() {
    $('.settings-btn').click(function () {
        $('.main-shit').fadeOut();
        $('.settings-shit').delay(250).fadeIn();
        return false;
    });

    $('.back-btn').click(function () {
        $('.settings-shit').fadeOut();
        $('.main-shit').delay(250).fadeIn();
        return false;
    });
}

function handle_preferred_site() {
    // default
    $('#torrent-sites-select').val(settings['pref_site']);

    $('#torrent-sites-select').change(function () {
        settings['pref_site'] = $(this).val();
        update_settings();
    });
}

function handle_output_dir() {
    // default
    $('#output-dir-text').val(settings['output_path']);

    if (!fs.existsSync(settings['output_path'])) {
        console.log('invalid path init: ' + settings['output_path'])
        $('#output-dir-label').text('Output directory - ERROR: INVALID DIRECTORY')
    }

    $('.select-dir-btn').click(function () {
        dialog.showOpenDialog({
            properties: ['openDirectory']
        }).then(result => {
            let path = result.filePaths[0];
            let fixed_path = fix_path(path);
            console.log(fixed_path);

            settings['output_path'] = fixed_path;
            update_settings();

            $('#output-dir-text').val(settings['output_path']);

            if ($('#output-dir-label').text() === 'Output directory - ERROR: INVALID DIRECTORY') {
                $(this).text('Output directory');
            }
        }).catch(err => {
            console.log('error: ' + err)
        })
    });

    $('#output-dir-text').on('change keydown paste input', function () {
        let path = $(this).val();
        if (fs.existsSync(path)) {
            settings['output_path'] = path;
            update_settings();
            $('#output-dir-label').text('Output directory');
        } else {
            $('#output-dir-label').text('Output directory - ERROR: INVALID DIRECTORY');
        }
    });
}

function add_anime() {
    $('.add-anime-btn').click(function () {
        $('.main-shit').fadeOut();
        $('.add-anime-screen').delay(250).fadeIn();
        return false;
    });

    $('.add-back-btn').click(function () {
        $('.add-anime-screen').fadeOut();
        $('.main-shit').delay(250).fadeIn();
    })
}

function main() {
    $(document).ready(function () {
        init();
        get_curr_bg();
        handle_switching();
        handle_output_dir();
        handle_preferred_site();
        add_anime();
    });
}

main()