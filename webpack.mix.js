const mix = require('laravel-mix');

const themeName = "fundd-themee";
const themePath = 'fundd/assets';
const resources = 'resources';
mix.setPublicPath(`fundd/assets/`);

//Scss Compilation
mix.sass(`${resources}/sass/app.scss`, `${themePath}/css`).options({ autoprefixer: false, processCssUrls: false }).sourceMaps().browserSync({
    proxy: 'http://localhost/fundd-digital-basetheme/'
});

//ja compilation
mix.js(`${resources}/js/app.js`, `${themePath}/js`).options({ autoprefixer: false, processCssUrls: false }).sourceMaps().browserSync({
    proxy: 'http://localhost/fundd-digital-basetheme/'
});
