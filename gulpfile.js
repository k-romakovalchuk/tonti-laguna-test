const {src,dest, series, watch} = require('gulp');
const gulpsass = require('gulp-sass');
const dartsass = require('sass');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();
const del = require('del');

const sass = gulpsass(dartsass)

function html() {
  return src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/styles/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

function image() {
  return src('src/images/*')
    .pipe(dest('dist'))
}

function js() {
  return src('src/scripts/main.js')
    .pipe(dest('dist'))
}

function clear() {
  return del('dist');
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/index.html', series(html)).on('change', sync.reload)
  watch('src/styles/main.scss', series(scss)).on('change', sync.reload)
  watch('src/images/*', series(image)).on('change', sync.reload)
  watch('src/scripts/main.js', series(js)).on('change', sync.reload)
}

exports.build = series(clear, scss, image, js, html)
exports.serve = series(clear, scss, image, html, js, serve)
exports.clear = clear