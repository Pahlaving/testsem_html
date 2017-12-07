'use strict';

// Test

var gulp           = require('gulp'),
    mainBowerFiles = require('main-bower-files'),   
    gutil          = require('gulp-util' ),
    watch          = require('gulp-watch'),
    prefixer       = require('gulp-autoprefixer'),
    uglify         = require('gulp-uglify'),
    sourcemaps     = require('gulp-sourcemaps'),
    sass           = require('gulp-sass'),
    cleanCSS       = require('gulp-clean-css'),
    imagemin       = require('gulp-imagemin'),
    pngquant       = require('imagemin-pngquant'),
    rimraf         = require('rimraf'),
    browserSync    = require("browser-sync"),
    //jshint       = require("gulp-jshint"), //отслеживание ошибкок в js
    //less         = require('gulp-less'),
    clean          = require ('gulp-clean'),
    plumber        = require ('gulp-plumber'),
    ftp            = require('vinyl-ftp'),
    rsync          = require('gulp-rsync'),
    cache          = require('gulp-cache'),
    changed        = require('gulp-changed'),
    rigger         = require('gulp-rigger'),
    gcmq           = require('gulp-group-css-media-queries'),
    reload         = browserSync.reload;


var path = {
    vendor: {
        js: 'app/js/',
        css: 'app/css/'
    },
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        php: 'dist/',
        htaccess: 'dist/',
        html: 'dist/',
        js: 'dist/js/',
        scss: 'dist/css/',
        //less: 'dist/css/',
        css: 'dist/css/',
        img: 'dist/images/',
        //img: 'dist/images/', было так
        fonts: 'dist/fonts/'
    },
    app: { //Пути откуда брать исходники
        php: 'app/*.php',
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        htaccess: 'app/.htaccess',
        js: 'app/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'app/css/scss/*.scss',
        //less: 'app/css/less/*.less',
        css: 'app/css/*.css',
        img: 'app/images/**/*.*', //Синтаксис images/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/fonts/**/*.*',
        template: 'app/template/*.html'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        php: 'app/**/*.php',
        htaccess: 'app/.htaccess',
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        scss: 'app/css/scss/*.scss',
        //less: 'app/css/less/*.less',
        css: 'app/css/*.css',
        img: 'app/images/**/*.*',
        fonts: 'app/fonts/**/*.*',
        template: 'app/template/*.html'
    },
    clean: {
        js: './dist/js',
        css: './dist/css',
        img: './dist/images',
    }
};

var config = {
    server: {
        baseDir: "./dist"
    },
    notify: false,
    //tunnel: true,
    host: 'localhost',
    port: 8081,
    //logPrefix: "Kaminskiy"
};

gulp.task('vendorJs:build', function () {
    gulp.src( mainBowerFiles('**/*.js') ) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.vendor.js)) //Выплюнем готовый файл в app
});

gulp.task('vendorCss:build', function () {
    gulp.src( mainBowerFiles('**/*.css') ) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.vendor.css)) //И в app
});

gulp.task('html:build', function () {
    gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(changed(path.dist.html)) //Компилируем только измененные файлы
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('template:build', function () {
    gulp.src(path.app.template) //Выберем файлы по нужному пути
        .pipe(changed(path.app.template)) //Компилируем только измененные файлы
        .pipe(gulp.dest(path.app.template)) //Выплюнем их тудаже
    gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})) //И перезагрузим наш сервер для обновлений
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});


gulp.task('php:build', function () {
    gulp.src(path.app.php) //Выберем файлы по нужному пути
        .pipe(changed(path.dist.php)) //Компилируем только измененные файлы
        .pipe(gulp.dest(path.dist.php)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

// проверка js на ошибки и вывод их в консоль
gulp.task('jshint:build', function() {
    return gulp.src(path.app.js) //выберем файлы по нужному пути
        .pipe(jshint()) //прогоним через jshint
        .pipe(jshint.reporter('jshint-stylish')); //стилизуем вывод ошибок в консоль
});

gulp.task('js:build', function () {
    gulp.src(path.app.js) //Найдем наш main файл
        .pipe(changed(path.dist.js)) //Компилируем только измененные файлы (Чтобы исключить неизмененные файлы)
        .pipe(rigger()) //Прогоним через rigger
        .pipe(plumber())
        //.pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        //.pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('css:build', function () {
    gulp.src(path.app.css) //Выберем наш main.css
        .pipe(changed(path.dist.css)) //Компилируем только измененные файлы
        //.pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(plumber())
        .pipe(prefixer({
                    browsers: ['last 10 versions', "> 1%", "ie 8", "ie 7"],
                    cascade: false
                })) //Добавим вендорные префиксы
        .pipe(cleanCSS()) //Сожмем
        .pipe(gulp.dest(path.dist.css)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('scss:build', function () {
    gulp.src(path.app.scss) //Выберем наш main.scss
        .pipe(changed(path.dist.css)) //Компилируем только измененные файлы
        //.pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(plumber())
        .pipe(sass({
            //sourceMap: true,
            //errLogToConsole: true
        })) //Скомпилируем
        .pipe(prefixer({
                    browsers: ['last 10 versions', "> 1%", "ie 8", "ie 7"],
                    cascade: false
                })) //Добавим вендорные префиксы
        .pipe(gcmq())
        //.pipe(cleanCSS()) //Сожмем
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css)) //И в build
        .pipe(reload({stream: true}));
});

//gulp.task('less:build', function () {
    //gulp.src(path.app.less) //Выберем наш main.scss
        //.pipe(sourcemaps.init()) //То же самое что и с js
        //.pipe(plumber())
        //.pipe(less()) //Скомпилируем
        //.pipe(autoprefixer({
        //            browsers: ['last 5 versions'],
        //            cascade: false
        //        })) //Добавим вендорные префиксы
        //.pipe(prefixer('last 10 versions')) //Добавим вендорные префиксы
        //.pipe(cleanCSS()) //Сожмем
        //.pipe(sourcemaps.write())
        //.pipe(gulp.dest(path.dist.css)) //И в build
        //.pipe(reload({stream: true}));
//});

gulp.task('imagemin:build', function() {
    gulp.src('app/images/**/*.*')
    .pipe(changed('dist/images/')) //Компилируем только измененные файлы
//    .pipe(imagemin({
//      progressive: true, //сжатие .jpg
//        svgoPlugins: [{removeViewBox: false}], //сжатие .svg
//        se: [pngquant()],
//        interlaced: true, //сжатие .gif
//        optimizationLevel: 7 //степень сжатия от 0 до 7
//    }))
    .pipe(gulp.dest('dist/images/'));
});

//gulp.task('imagemin:build', function () {
//    gulp.src(path.app.img) //Выберем наши картинки
//        .pipe(imagemin({ //Сожмем их
//           progressive: true,
//            svgoPlugins: [{removeViewBox: false}],
//            se: [pngquant()],
//            interlaced: true
//        }))
//        .pipe(gulp.dest(path.dist.images))
//        .pipe(reload({stream: true}));//И бросим в build
//});

gulp.task('fonts:build', function() {
    gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.dist.fonts));
});

// Билдим htaccess
gulp.task('htaccess:build', function() {
    gulp.src(path.app.htaccess)
        .pipe(gulp.dest(path.dist.htaccess)); //выгружаем в build
});


gulp.task('sftp', function() {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'kaminskiydmitriy.com',
            user: 'webmaster@kaminskiydmitriy.com',
            password: '8219765',
            remotePath:'/public_html/test1.kaminskiydmitriy.com/'
        }));
});

gulp.task('clearcache', function () {
    return cache.clearAll();
});

//Clean
gulp.task('cleanall', function(){
    return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('cleanimg', function (cb) {
    return gulp.src('dist/images', {read: false})
    .pipe(clean());
});

//gulp.task('cleanimg', function (cb) {
//    rimraf(path.clean.img, cb);
//});

gulp.task('build', [
    //'vendorCss:build',
    //'vendorJs:build',
    'php:build',
    'html:build',
    'css:build',
    'js:build',
    'scss:build',
    //'less:build',
    'fonts:build',
    'imagemin:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
        //gulp.start('clearcache');
    });
    watch([path.watch.template], function(event, cb) {
        gulp.start('template:build');
        //gulp.start('clearcache');
    });
    watch([path.watch.php], function(event, cb) {
        gulp.start('php:build');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
        //gulp.start('clearcache');
    });
    watch([path.watch.scss], function(event, cb) {
        gulp.start('scss:build');
       //gulp.start('clearcache');
    });
    //watch([path.watch.less], function(event, cb) {
    //    gulp.start('less:build');
    //});
    //watch([path.watch.js], function(event, cb) {
    //    gulp.start('jshint:build');
        //gulp.start('clearcache');
    //});
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
        //gulp.start('clearcache');
    });
    watch([path.watch.img], function(event, cb) {
        //gulp.start('cleanimg');
        gulp.start('imagemin:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');

    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('default', ['webserver', 'watch']);
