// 引用 gulp plugin
var gulp = require('gulp'); //載入 gulp
var gulpUglify = require('gulp-uglify'); //載入 gulp-uglify
var gulpSass = require('gulp-sass');     // 載入 gulp-sass
var watch = require('gulp-watch');
const babel = require('gulp-babel');     // 載入 gulp-babel
const minifyCSS  = require('gulp-minify-css');  //壓縮CSS
const rename     = require("gulp-rename");
const concat     = require('gulp-concat');  //合併CSS
var browserSync = require('browser-sync').create();


// 服務
gulp.task('connect',['script', 'styles'], () => {
  browserSync.init({
    /*notify: false,
    port: 9001,
    server: {
      'baseDir': "http://localhost/nongtest/"
    }*/
    port: 9001,
    proxy: "http://localhost/nongtest/"
  });
});

// 定義名稱為 default 的 gulp 工作
gulp.task('default', [ 'connect','watch']);

// 定義名稱為 other 的 gulp 工作
gulp.task('other', function () {
    console.log('Hello Gulp Other Task');
});

gulp.task('script', function () {
    gulp.src('dist/js/*.js')        // 指定要處理的原始 JavaScript 檔案目錄
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(gulpUglify())                     // 將 JavaScript 做最小化
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js/'))  // 指定最小化後的 JavaScript 檔案目錄
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    files: ['{template-parts}/**/*.php', '*.php'],
    port: 9001,
    proxy: "http://localhost/nongtest/",
    snippetOptions: {
      whitelist: ['/wp-admin/admin-ajax.php'],
      blacklist: ['/wp-admin/**']
    }
  });
    gulp.watch('dist/js/*.js', ['script']);
    gulp.watch('dist/styles/*.scss', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('dist/styles/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: 'compressed'
        }))         // 編譯 Scss
        .pipe(concat('main.css'))
        .pipe(gulp.dest('assets/css/'))  // 指定編譯後的 css 檔案目錄
        .pipe(browserSync.stream());
});
