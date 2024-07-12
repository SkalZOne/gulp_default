import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)
import sourcemaps from "gulp-sourcemaps";
import browserSync from 'browser-sync';
import stylelint from 'gulp-stylelint-esm';
import watch from 'gulp-watch';


// Компиляция SASS
export const sassCompile = () => {
    return gulp.src('site/src/scss/prod/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('site/dest/css/'))
    .pipe(browserSync.stream())
}

// Линтер SASS
export const sassLinter = () => {
    return gulp.src('site/src/scss/**/*.scss')
    .pipe(stylelint({
        failAfterError: false,
        reporters: [
            {
                formatter: 'string', 
                console: true,
            }
        ]
    }))
}

// Watch SASS
export const sassWatch = () => gulp.watch('site/src/scss/**/*.scss', gulp.series(sassCompile, sassLinter))