import gulp from "gulp";
import babel from "gulp-babel";
import browserSync from "browser-sync";

const babelCompile = async () => {
  gulp
    .src("site/src/js/prod/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest("site/dest/js/"))
    .pipe(browserSync.stream());
};

export const babelWatch = () => {
  gulp.watch("site/src/js/prod/*.js", babelCompile);
};
