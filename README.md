# Сборка Gulp 
Данная сборка была сделана в рамках обучения gulp-a, однако я планирую постоянно оптимизировать, добавлять функционал и использовать эту сборку во всех своих последующих проектах

## Возможности
На данных момент в сборке используются следующие возможности:
<ul>
<li>Автоминимизация картинок и конвертация в формат WebP;
<li>Автокомпиляция Pug & SASS | Линтеры для Pug & SASS
<li>Автопортирование шрифтов в SCSS и конвертация в формат .woff & .woff2;
<li>Сервер с автоматичким обновлением страницы при изменении Pug и SASS файлов
</ul>

## Как начать работу со сборкой?
Для использования данной сборки, сначала нужно все правильно установить.
<br>
Дальше будут описаны подробные шаги по установке данной сборки:
<ol>
<li>Для начала требуется клонировать репозиторий с данной сборкой:

```
git clone https://github.com/SkalZOne/gulp_default
```

<li>Затем требуется установить все необходимые пакеты, для работы сборки.

```
npm i
```
</ol>

Готово, теперь можно начинать работу с данной gulp-сборкой.

## Использование
Вся работа производиться в директории site
### Папка src служит для работы со сборкой:
<ul>
    <li> /fonts
        <br> Сюда загружаются шрифты, а затем компилируются в нужный формат и подтягиваются в SCSS файл который находится по пути: scss/imports/fonts.scss           
    <li> /img
        <br> Сюда загружаются фото, затем они сжимаются и компилируются в формат WebP
    <li> /pug
        <ol>
            <li> /includes
                <br> В данной папке находятся файлы для компонентной верстки, каждая папка имеет симантику.
                <br>
                Обычно в данных папках есть подпапки, которые используются для отдельных блоков, например:
                    <br> main/firstcontent;
                    <br> main/secondcontent;
                    <br> ...
                    <p>
                        <ul>
                            <li> header
                                <br> Шапка
                            <li> main
                                <br> Основа
                            <li> footer
                                <br> Подвал
                        </ul> 
                    </p>
            <li> /layouts
                <br> В данной папке находятся шаблоны, которые наследствуются в других pug файлах
            <li> /prod
                <br> В данной папке находятся файлы, которые попадут в финальный билд
        </ol>
    <li> /scss
        <ol>
            <li> /imports
                <br> В данной папке находятся SASS файлы, которые импортируются в основные стили
            <li> /prod
                <br> В данной папке находятся SASS файлы, которые попадут в финальный билд
        </ol>
</ul>

### В папке dest компилируются финальные версии файлов:
<ul>
    <li> /css
        <br> Компилированные SASS файлы в обычные .css
    <li> /fonts
        <br> Компилированные файлы шрифтов в формате .woff & .woff2
    <li> /img
        <br> Компилированные картинки в формате .WebP
    <li> /index
        <br> Компилированные Pug файлы в обычные .html
</ul>

## Ссылки
<a href='https://www.npmjs.com/package/@zoxon/emitty'> gulp-emmity @zoxon
<br>
<a href='https://www.npmjs.com/package/browser-sync'> Browser-sync
<br>
<a href='https://www.npmjs.com/package/del'> del
<br>
<a href='https://www.npmjs.com/package/fs'> fs
<br>
<a href='https://www.npmjs.com/package/gulp'> Gulp
<br>
<a href='https://www.npmjs.com/package/gulp-fonter'> Gulp-fonter
<br>
<a href='https://www.npmjs.com/package/gulp-if'> Gulp-if
<br>
<a href='https://www.npmjs.com/package/gulp-imagemin'> Gulp-imagemin
<br>
<a href='https://www.npmjs.com/package/gulp-notify'> Gulp-notify
<br>
<a href='https://www.npmjs.com/package/gulp-plumber'> Gulp-plumber
<br>
<a href='https://www.npmjs.com/package/gulp-pug'> Gulp-pug
<br>
<a href='https://www.npmjs.com/package/gulp-sass'> Gulp-sass
<br>
<a href='https://www.npmjs.com/package/gulp-sourcemaps'> Gulp-sourcemaps
<br>
<a href='https://www.npmjs.com/package/gulp-stylelint-esm'> Gulp-stylelint-esm
<br>
<a href='https://www.npmjs.com/package/gulp-ttf2woff2'> Gulp-ttf2woff2
<br>
<a href='https://www.npmjs.com/package/gulp-watch'> Gulp-watch
<br>
<a href='https://www.npmjs.com/package/gulp-webp'> Gulp-webp
<br>
<a href='https://www.npmjs.com/package/pug-lint'> Pug-lint
<br>
<a href='https://www.npmjs.com/package/sass'> SASS
<br>
<a href='https://www.npmjs.com/package/stylelint'> Stylelint
<br>
<a href='https://www.npmjs.com/package/stylelint-config-recess-order'> Stylelint-config-recess-order
<br>
<a href='https://www.npmjs.com/package/stylelint-config-standard'> Stylelint-config-standard