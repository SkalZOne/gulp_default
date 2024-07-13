import gulp from 'gulp';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import fs from 'fs';
import { deleteAsync, deleteSync } from 'del'

export const otfToTtf = () => {
    // Поиск файлов .otf
    return gulp.src('site/src/fonts/*.otf', {encoding:false})
        .pipe(plumber(
            notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            }))
        )
        // конверт в .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // Выгрузка в папку
        .pipe(gulp.dest('site/dest/fonts/ttf'))
}
export const ttfToWoff = async () => {
    // Поиск файлов .ttf
    return await gulp.src(['site/src/fonts/*.ttf', 'site/dest/fonts/ttf/*.ttf'], {encoding:false})
        .pipe(plumber(
            notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            }))
        )
        // конверт в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // Выгрузка в папку
        .pipe(gulp.dest('site/dest/fonts'))
        // Поиск файлов .ttf
        .pipe(gulp.src(['site/src/fonts/*.ttf', 'site/dest/fonts/ttf/*.ttf'], {encoding:false}))
        // Конверт в .woff2
        .pipe(ttf2woff2())
        // Выгрузка в папку
        .pipe(gulp.dest('site/dest/fonts'))
        // Ищем файлы шрифтов .woff
        .pipe(gulp.src('site/src/fonts/*.woff', {encoding:false}))
		// Выгружаем в папку с результатом
		.pipe(gulp.dest('site/dest/fonts'))
        // Ищем .woff2
        .pipe(gulp.src('site/src/fonts/*.woff2', {encoding:false}))
        // Выгружаем в папку с результатом
        .pipe(gulp.dest('site/dest/fonts'));
    }

export const fontsStyle = async () => {
    let fontsFile = 'site/src/scss/imports/fonts.scss';

    fs.readdir('site/src/fonts', async function (err, fontsFiles) {
        if (fontsFiles) {
            await deleteAsync(['site/src/scss/imports/fonts.scss', 'site/dest/fonts/ttf'])
            fs.writeFileSync(fontsFile, '', (err));
            let newFileOnly;
            for (var i = 0; i < fontsFiles.length; i++) {
                let fontFileName = fontsFiles[i].split('.')[0];
                if (newFileOnly !== fontFileName) {
                    let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
                    let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
                    if (fontWeight.toLowerCase() === 'thin') {
                        fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 800;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(fontsFile, `
                            @font-face {
                                font-family: ${fontName}; 
                                font-style: normal;
                                font-weight: ${fontWeight}; 
                                src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff"); 
                                font-display: swap; 
                            }\r\n`, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('Данные были добавлены')
                        });
                }
            }
        }
    })

    return gulp.src('site/src');
}




export const fontsWatch = () => gulp.watch('site/src/fonts/**', gulp.series(otfToTtf, ttfToWoff, fontsStyle))