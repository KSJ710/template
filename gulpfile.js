const path = require("path");
const gulp = require("gulp");

const watcher = gulp.watch(path.resolve("styles/sass/**/*.scss"));

// sass compiler
const sass = require("gulp-sass");

// add vender prifix
const autoprefixer = require("gulp-autoprefixer");

// error handling
const plumber = require("gulp-plumber");

// glob import
const sassGlob = require("gulp-sass-glob");

gulp.task("sass", function () {
  gulp
    .src(path.resolve("styles/sass/**/*.scss"))
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.resolve("styles/css")));
});

gulp.task("default", function () {
  watcher.on("all", gulp.task("sass"));
});
