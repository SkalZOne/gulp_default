import gulp from 'gulp';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import { setup as emittySetup } from '@zoxon/emitty'
import gulpif from 'gulp-if';

const emittyPug = emittySetup('site/src/pug', 'pug', {
    makeVinylFile: true,
})

global.watch = false;
global.emittyChangedFile = {
  path: "",
  stats: null
};

// Компиляция Pug
export const pugCompile = () => {
    return gulp.src('site/src/pug/prod/*.pug')
    .pipe(plumber())
    .pipe(
        gulpif(
          global.watch,
          emittyPug.stream(
            global.emittyChangedFile.path,
            global.emittyChangedFile.stats,
          ),
        ),
      )
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('site/dest'))
    .pipe(browserSync.stream())
}

export const pugWatch = () => {
    global.watch = true;

    gulp.watch('site/src/pug/**/*.pug', pugCompile)
    .on('all', (event, filepath, stats) => {
        global.emittyChangedFile = {
          path: filepath,
          stats
        };
      });
} 