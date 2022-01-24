const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/src/backend/apps/app-admin.js', 'public/js')
    .js('resources/js/src/backend/apps/app-teacher.js', 'public/js')
    .js('resources/js/src/backend/apps/app-student.js', 'public/js')
    .vue();

    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);
