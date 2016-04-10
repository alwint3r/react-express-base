'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const webpack = require('gulp-webpack');
const sourcemaps = require('gulp-sourcemaps');

const jsxSrc = [
    'components/*.jsx',
    'components/**/*.jsx',
];

gulp.task('bundle', () => {
    gulp.src(jsxSrc)
        .pipe(sourcemaps.init())
            .pipe(webpack({
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
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
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', () => {
    gulp.watch(jsxSrc, ['bundle']);
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

gulp.task('default', ['bundle', 'watch', 'start-server']);
