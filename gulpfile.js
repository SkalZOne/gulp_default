import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)
import sourcemaps from 'gulp-sourcemaps';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';


// Компиляция SASS
gulp.task('sass-compile', function(){
    return gulp.src('site/src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) 
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('site/dest/css/'))
    .pipe(browserSync.stream())
})

// Компиляция Pug
gulp.task('pug-compile', function(){
    return gulp.src('site/src/**/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('site/dest'))
    .pipe(browserSync.stream())
})

// Auto-reload
gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: 'site/dest'
        },
    notify: false
    });
  watch('site/src/scss/**/*.scss', gulp.series('sass-compile'));
  watch('site/src/**/*.pug', gulp.series('pug-compile'));
  watch('site/dest/*.html').on('change', browserSync.reload)
})
