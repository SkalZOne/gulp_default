import browserSync from "browser-sync";

const server = () => {
    browserSync.init({
        server: {
            baseDir: 'site/dest'
        },
    notify: false
    });
}

export default server