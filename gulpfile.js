import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass)
import sourcemaps from 'gulp-sourcemaps';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';
import stylelint from 'gulp-stylelint-esm';


// Компиляция SASS
gulp.task('sass-compile', function(){
    return gulp.src('site/src/scss/prod/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('site/dest/css/'))
    .pipe(browserSync.stream())
})

// Компиляция Pug
gulp.task('pug-compile', function(){
    return gulp.src('site/src/pug/prod/*.pug')
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
  watch('site/src/scss/**/*.scss', gulp.series('sass-compile', 'lint-css'));
  watch('site/src/pug/**/*.pug', gulp.series('pug-compile'));
  watch('site/dest/*.html').on('change', browserSync.reload)
})

// Линтеры
gulp.task('lint-css', function(){
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
})
