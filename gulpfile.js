//include gulp's modules
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    eslint = require('gulp-eslint'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    prettier = require('gulp-prettier'),
    babel = require('gulp-babel'),
    less = require('gulp-less'),
    syntax = require('postcss-less'),
    //postcss modules
    postcss = require('gulp-postcss'),
    reporter = require('postcss-browser-reporter'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    stylelint = require('stylelint');
    

//tasks for less
function styles() {
    //postcss plugins
    var plugins = [
        autoprefixer({
            overrideBrowserslist: ['last 2 version', '> 2%']
        }),
        stylelint(),
        stylelint,
        reporter({
            'selector': 'body:before',
        })
    ];
    //for all files './src/css/**/*.less'
    return gulp.src('./src/less/**/*.less')
        //concatenation
        .pipe(concat('style.less'))
        //postcss
        .pipe(postcss(plugins, {syntax:syntax}))
        //less
        .pipe(less())
        //clean css
        .pipe(cleanCSS({
            level: 2
        }))
        //out file
        .pipe(gulp.dest('./build/css'))
        //reload browser
        .pipe(browserSync.stream())
}

//tasks for js
function scripts() {
    //for all files './src/js/**/*.js'
    return gulp.src('./src/js/**/*.js')
        //concatenation
        .pipe(concat('app.js'))
        //prettier
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(prettier())
        //babel
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //clean js
        .pipe(uglify({
            toplevel: true
        }))
        //out file
        .pipe(gulp.dest('./build/js'))
        //reload browser
        .pipe(browserSync.stream())
}

function images() {
    return gulp.src('./src/images/**/*.*')
        .pipe(imagemin([]))
        .pipe(gulp.dest('./build/images'))
        //reload browser
        .pipe(browserSync.stream())
}

function sounds() {
    return gulp.src('./src/sounds/**/*.*')
        .pipe(imagemin([]))
        .pipe(gulp.dest('./build/sounds'))
        //reload browser
        .pipe(browserSync.stream())
}

//delete all in folders
function clean() {
    return del(["build/*"])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //watch on less files
    gulp.watch('./src/less/**/*.less', styles)
    //watch on js files
    gulp.watch('./src/js/**/*.js', scripts)
    //watch on img files
    gulp.watch('./src/images/**/*', images)
    //watch on sounds files
    gulp.watch('./src/sounds/**/*', images)
    //watch on html file
    gulp.watch("./*.html").on('change', browserSync.reload)
}

//task for call funk styles
gulp.task('styles', styles);
//task for call funk scripts
gulp.task('scripts', scripts);
//task for call funk images
gulp.task('images', images);
//task for call funk sounds
gulp.task('sounds', sounds);
//task for call funk clean
gulp.task('clean', clean);
//task for call funk watch
gulp.task('watch', watch);
//task for build project
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, images, sounds)));
//task for start server
gulp.task('dev', gulp.series('build', 'watch'));
