import gulp from "gulp";
import browserSync from "browser-sync";
import sourcemaps from "gulp-sourcemaps";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import stylelint from "gulp-stylelint-esm";

const sass = gulpSass(dartSass);

// Компиляция SASS
const sassCompile = () => {
  return gulp
    .src("site/src/scss/prod/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest("site/dest/css/"))
    .pipe(browserSync.stream());
};

// Линтер SASS
const sassLinter = () => {
  return gulp.src("site/src/scss/**/*.scss").pipe(
    stylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: "string",
          console: true,
        },
      ],
    }),
  );
};

// Watch SASS
export const sassWatch = () =>
  gulp.watch("site/src/scss/**/*.scss", gulp.series(sassCompile, sassLinter));
