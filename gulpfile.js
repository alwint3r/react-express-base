'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const webpack = require('gulp-webpack');
const sourcemaps = require('gulp-sourcemaps');

const jsxSrc = [
    'assets/js/*.js',
    'assets/js/**/*.js',
];

gulp.task('bundle', () => {
    gulp.src(jsxSrc)
        .pipe(sourcemaps.init())
            .pipe(webpack({
                module: {
                    loaders: [
                        {
                            test: /\.js?$/,
                            exclude: /node_modules|bower_components/,
                            loader: 'babel',

                            query: {
                                presets: ['es2015', 'react'],
                            },
                        },
                    ],
                },
            }))
            .pipe(concat('bundle.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('watch', () => {
    gulp.watch(jsxSrc, ['bundle']);
});

gulp.task('default', ['bundle', 'watch']);
