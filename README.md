# efundd-wp-theme
Wordpress theme
eFundd Custom WordPress theme development using Laravel Mix.

Getting started:
Clone into an empty theme directory
cd into your new theme directory
Run npm install
Compiling
Run npm run watch

Assets will be compiled and BrowserSync will proxy the dev host allowing you to work while seeing your CSS and JS changes appear on the site as they are recompiled.

Runs the app in the development mode. for example Open http://localhost:3000 to view it in the browser.

Run npm run dev

Assets will be compiled and BrowserSync will proxy the dev host allowing you to work while seeing your CSS and JS changes appear on the site as they are recompiled.

To Prepare Assets for Deployment
Run npm run prod

This will prepare versioned assets and sourcemaps for your CSS and JS files.

Developing
Styling
To style your webpages go to the <your-theme-dir>/resources/sass directory. Open app.scss . Import NPM packages and custom SASS files.

Javascript
Open the <your-theme-dir>/resources/app.js file. In this file you can place dependencies which includes libraries. Open the app.js and require/import your custom javascript libraries.

PHP and Template Files
The php theme files are placed in the <your-theme-dir>/fundd directory. You know what to do with it.
