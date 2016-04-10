'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');

const reactSrc = [
    'bower_components/react/react.js',
    'bower_components/react/react-dom.js',
];

const jsxSrc = [
    'components/*.jsx',
    'components/**/*.jsx',
];

gulp.task('concat-react', () => {
    gulp.src(reactSrc)
        .pipe(concat('react-bundle.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('jsx', () => {
    gulp.src(jsxSrc)
        .pipe(babel({
            only: jsxSrc,
            compact: false,
            presets: ['es2015', 'react'],
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('bundle', ['concat-react', 'jsx'], () => {
    gulp.src(['build/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', () => {
    gulp.watch(jsxSrc, ['jsx']);
});

gulp.task('start-server', () => {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            APPENV: 'development',
        },
    });
});

gulp.task('default', ['jsx', 'concat-react', 'watch', 'start-server']);
