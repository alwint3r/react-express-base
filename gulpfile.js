'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const webpack = require('gulp-webpack');
const sourcemaps = require('gulp-sourcemaps');
const _webpack = require('webpack');

const jsxSrc = [
    'assets/js/*.js',
    'assets/js/**/*.js',
];

const webpackConfig = {
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
};

gulp.task('bundle', () => {
    gulp.src(jsxSrc)
        .pipe(sourcemaps.init())
            .pipe(webpack(Object.assign({}, webpackConfig, {
                plugins: [
                    new _webpack.DefinePlugin({
                        'process.env': {
                            'NODE_ENV' : JSON.stringify('production'),
                        },
                    }),
                ],
            })))
            .pipe(concat('bundle.js'))
            .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('copy-dev', () => {
    gulp.src(jsxSrc)
        .pipe(sourcemaps.init())
        .pipe(webpack(webpackConfig))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('watch', () => {
    gulp.watch(jsxSrc, ['copy-dev']);
});

gulp.task('default', ['copy-dev', 'watch']);
