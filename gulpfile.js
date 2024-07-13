import gulp from 'gulp';
import server from './gulp/tasks/server.js';
import { pugWatch } from './gulp/tasks/pug.js';
import { sassWatch } from './gulp/tasks/sass.js';
import { imageWatch } from './gulp/tasks/imgmin.js';
import { fontsWatch } from './gulp/tasks/fonts.js';

gulp.task('default', gulp.parallel(
    server,
    sassWatch,
    pugWatch,
    imageWatch,
    fontsWatch
))
