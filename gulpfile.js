const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Compilando o sass, adicionando autoprefixed e dando refresh na page

function compileSass() {
    return gulp
    .src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    // quando salvar automaticamente atualiza o css exibido no navegador
    .pipe(browserSync.stream());
}
// task do sass
gulp.task('sass', compileSass);

// plugins CSS

function pluginsCss() {
    return gulp
    .src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}

gulp.task('plugincss', pluginsCss);

// function gulp concat

function gulpJS() {
    return gulp
    .src('./js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    // quando salvar automaticamente atualiza o js exibido no navegador
    .pipe(browserSync.stream()); 
}
// task concat all Js

gulp.task('alljs', gulpJS);

function pluginsJs() {
    return gulp
    .src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginsJs);

// function do browser Sync
function browser() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
// task do browser Sync
gulp.task('browser-sync', browser);

// function do watch para alterar o sass e o html
function watch() {
    gulp.watch('scss/*.scss', compileSass);
    // plugin CSS
    gulp.watch('css/lib/*.css', pluginsCss);
    
    gulp.watch('*.html').on('change', browserSync.reload);

   // watch unir arquivos JS
    gulp.watch('js/scripts/*.js', gulpJS);
    // plugin JS
    gulp.watch('js/lib/*.js', pluginsJs);
   
}

// task do watch
gulp.task('watch', watch);

// task padrão(default) que executa o watch, browserSync, sass e alljs(concat)
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'alljs', 'pluginjs'));