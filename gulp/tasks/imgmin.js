import gulp from 'gulp';
import browserSync from 'browser-sync';
import webp from 'gulp-webp'
import { deleteAsync } from 'del'

const imageMin = () => {
    return gulp.src('site/src/img/*', {encoding: false})
        .pipe(webp())
        .pipe(gulp.dest('site/dest/img'))
        .pipe(browserSync.stream())
}

const reset = () => {
    return deleteAsync('site/dest/img/*')
}

export const imageWatch = () => gulp.watch('site/src/img/**', gulp.series(reset, imageMin))