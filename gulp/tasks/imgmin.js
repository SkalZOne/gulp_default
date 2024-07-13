import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import webp from 'gulp-webp'
import { deleteAsync } from 'del'

export const imageMin = () => {
    return gulp.src('site/src/img/*', {encoding: false})
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest('site/dest/img'))
        .pipe(browserSync.stream())
}

export const reset = () => {
    return deleteAsync('site/dest/img/*')
}

export const imageWatch = () => gulp.watch('site/src/img/**', gulp.series(reset, imageMin))