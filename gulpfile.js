import gulp from 'gulp';
import server from './gulp/tasks/server.js';
import { pugWatch } from './gulp/tasks/pug.js';
import { sassWatch } from './gulp/tasks/sass.js';

gulp.task('default', gulp.parallel(
    server,
    sassWatch,
    pugWatch
))
