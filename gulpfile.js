'use strict';

const _ = require('lodash');
const browserSync = require('browser-sync').create();
const cp = require('child_process');
const css = require('./_build/css');
const del = require('del');
const gulp = require('gulp');
const gulpWatch = require('gulp-watch');
const html = require('./_build/html');
const runSequence = require('run-sequence');

const paths = {
    cssSrc: './_assets/css',
    cssMain: './_assets/css/main.css',
    cssBuild: './_build/_temp/assets/css',
    build: './_build',
    buildTemp: './_build/_temp',
    serve: './_site',
};

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';



gulp.task('cleanBuildTemp', function() {
    return del([
        paths.buildTemp,
    ]);
});

gulp.task('cleanSite', function() {
    return del([
        `${paths.serve}/**/*.*`,
        `${paths.serve}/*.*`,
        `${paths.serve}/*`,
    ]);
});



gulp.task('jekyll', (end) => {
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', end);
});



gulp.task('cssDev', () => {
    return css({
        src: paths.cssMain,
        dest: paths.cssBuild,
        hash: false,
        minify: false,
    });
});

gulp.task('cssProd', () => {
    return css({
        src: paths.cssMain,
        dest: paths.cssBuild,
        hash: true,
        minify: true,
    });
});



gulp.task('htmlDev', (end) => {
    html({
        src: paths.buildTemp,
        dest: paths.serve,
        minifyHtml: false,
        preferHashedAssets: false,
        preferMinifiedAssets: false,
    }, end);
});

gulp.task('htmlProd', (end) => {
    html({
        src: paths.buildTemp,
        dest: paths.serve,
        minifyHtml: true,
        preferHashedAssets: true,
        preferMinifiedAssets: true,
    }, end);
});



gulp.task('nonHtmlMove', () => {
    // Move everything except HTML files
    return gulp.src([`${paths.buildTemp}/**/*.*`, `!${paths.buildTemp}/**/*.html`])
        .pipe(gulp.dest(paths.serve));
});



gulp.task('serve', () => {
    browserSync.init({
        files: [`${paths.serve}/**/*.*`],
        port: 4000,
        server: {
            baseDir: paths.serve,
        },
        snippetOptions: {
            rule: {
                match: /$/,
                fn: (snippet) => {
                    return '\n\n' + snippet;
                },
            },
        },
    });
});



gulp.task('dev', (end) => {
    runSequence(
        ['cleanBuildTemp', 'cleanSite'],
        'jekyll',
        'cssDev',
        ['htmlDev', 'nonHtmlMove'],
        end
    );
});

gulp.task('prod', (end) => {
    runSequence(
        ['cleanBuildTemp', 'cleanSite'],
        'jekyll',
        'cssProd',
        ['htmlProd', 'nonHtmlMove'],
        'cleanBuildTemp',
        end
    );
});



gulp.task('jekyllWatch', () => {
    return gulpWatch([
        // All markdown and HTML
        './**/*.md',
        './**/*.markdown',
        './**/*.html',
        './**/*.htm',

        // Any asset file changes
        './assets/**/*.*',

        // Except...
        // dot folders/files
        '!./.*/**/*.*',

        // The temp build location
        `!${paths.buildTemp}/**/*.*`,

        // The serve location
        `!${paths.serve}/**/*.*`,
    ], () => {
        runSequence(
            'jekyll',
            'htmlDev',
            () => {}
        );
    });
});

gulp.task('cssWatch', () => {
    return gulpWatch([
        `${paths.cssSrc}/**/*.css`,
    ], () => {
        runSequence(
            'cssDev',
            'nonHtmlMove',
            () => {}
        );
    });
});

gulp.task('watch', (end) => {
    runSequence(
        'dev',
        'serve',
        ['jekyllWatch', 'cssWatch'],
        end
    );
});
