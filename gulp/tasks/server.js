import browserSync from "browser-sync";

const server = () => {
    browserSync.init({
        server: {
            baseDir: 'site/dest',
            index: "index/index.html"
        },
    notify: false
    });
}

export default server