const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require("gulp-purgecss")

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('../src/assets/css'))
}

function watchTask() {
  watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

// .pipe(purgecss({ content: ["*.html"]}))