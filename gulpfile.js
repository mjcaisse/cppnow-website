'use strict';

const browserSync = require('browser-sync').create();
const cp = require('child_process');
const css = require('./build/css');
const del = require('del');
const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');
const gulpWatch = require('gulp-watch');
const gulpZip = require('gulp-zip');
const html = require('./build/html');
const img = require('./build/img');
const jsBasic = require('./build/jsBasic');
const jsForms = require('./build/jsForms');
const runSequence = require('run-sequence');
const uploads = require('./build/uploads');

const paths = {
    src: './src',
    dataSrc: './src/_data',
    imgSrc: './src/_assets/img',
    imgBuild: './_temp/assets/assets/img',
    uploadsSrc: './src/_assets/uploads',
    uploadsBuild: './_temp/assets/assets/uploads',
    cssSrc: './src/_assets/css',
    cssMain: './src/_assets/css/main.css',
    cssBuild: './_temp/assets/assets/css',
    jsSrc: './src/_assets/js',
    jsFormSrc: './src/_assets/js/forms',
    jsBuild: './_temp/assets/assets/js',
    jsFormBuild: './_temp/assets/assets/js/forms',
    allTemp: './_temp',
    jekyllTemp: './_temp/jekyll',
    assetsTemp: './_temp/assets',
    dist: './dist',
    assetsDist: './dist/assets',
    zipDist: './',
};

paths.jsFormEntries = [
    {
        src: `${paths.jsFormSrc}/apps/submission/Submission.js`,
        filename: 'Submission.js',
    },
    {
        src: `${paths.jsFormSrc}/apps/volunteerApplication/VolunteerApplication.js`,
        filename: 'VolunteerApplication.js',
    },
];

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';



gulp.task('cleanTemp', function() {
    return del([
        paths.allTemp,
    ]);
});

gulp.task('cleanDist', function() {
    return del([
        `${paths.dist}/**/*.*`,
        `${paths.dist}/*.*`,
        `${paths.dist}/*`,
    ]);
});



gulp.task('lint', () => {
    return gulp.src(['./src/**/*.js', './_build/**/*.js'])
        .pipe(gulpEslint())
        .pipe(gulpEslint.format())
        .pipe(gulpEslint.failAfterError());
});



gulp.task('jekyll', (end) => {
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', end);
});



gulp.task('imgDev', () => {
    return img({
        src: `${paths.imgSrc}/**/*.*`,
        dest: paths.imgBuild,
        hash: false,
    });
});

gulp.task('imgProd', () => {
    return img({
        src: `${paths.imgSrc}/**/*.*`,
        dest: paths.imgBuild,
        hash: true,
    });
});



gulp.task('uploadsDev', () => {
    return uploads({
        src: `${paths.uploadsSrc}/**/*.*`,
        dest: paths.uploadsBuild,
        hash: false,
    });
});

gulp.task('uploadsProd', () => {
    return uploads({
        src: `${paths.uploadsSrc}/**/*.*`,
        dest: paths.uploadsBuild,
        hash: true,
    });
});



gulp.task('cssDev', (end) => {
    css({
        src: paths.cssMain,
        dest: paths.cssBuild,
        manifestBasePath: paths.assetsTemp,
        hash: false,
        minify: false,
        preferHashedAssets: false,
        preferMinifiedAssets: false,
    }, end);
});

gulp.task('cssProd', (end) => {
    css({
        src: paths.cssMain,
        dest: paths.cssBuild,
        manifestBasePath: paths.assetsTemp,
        hash: true,
        minify: true,
        preferHashedAssets: true,
        preferMinifiedAssets: true,
    }, end);
});



gulp.task('jsBasicDev', () => {
    return jsBasic({
        src: [
            `${paths.jsSrc}/**/*.js`,
            `!${paths.jsFormSrc}/**/*.js`
        ],
        dest: paths.jsBuild,
        minify: false,
        hash: false,
    });
});

gulp.task('jsBasicProd', () => {
    return jsBasic({
        src: [
            `${paths.jsSrc}/**/*.js`,
            `!${paths.jsFormSrc}/**/*.js`
        ],
        dest: paths.jsBuild,
        minify: true,
        hash: true,
    });
});

gulp.task('jsFormsDev', () => {
    return jsForms({
        entries: paths.jsFormEntries,
        paths: [paths.jsFormSrc],
        dest: paths.jsFormBuild,
        env: 'development',
        createSourcemaps: true,
        minify: false,
        hash: false,
    });
});

gulp.task('jsFormsProd', () => {
    return jsForms({
        entries: paths.jsFormEntries,
        paths: [paths.jsFormSrc],
        dest: paths.jsFormBuild,
        env: 'production',
        createSourcemaps: false,
        minify: true,
        hash: true,
    });
});




gulp.task('htmlDev', (end) => {
    html({
        src: `${paths.jekyllTemp}/**/*.html`,
        dest: paths.dist,
        manifestBasePath: paths.assetsTemp,
        minify: false,
        preferHashedAssets: false,
        preferMinifiedAssets: false,
    }, end);
});

gulp.task('htmlProd', (end) => {
    html({
        src: `${paths.jekyllTemp}/**/*.html`,
        dest: paths.dist,
        manifestBasePath: paths.assetsTemp,
        minify: true,
        preferHashedAssets: true,
        preferMinifiedAssets: true,
    }, end);
});



gulp.task('nonHtmlMove', () => {
    return gulp.src([
        `${paths.assetsTemp}/**/*.*`,
        `${paths.jekyllTemp}/**/*.*`,
        `!${paths.jekyllTemp}/**/*.html`
    ])
    .pipe(gulp.dest(paths.dist));
});



gulp.task('serve', () => {
    browserSync.init({
        files: [
            `${paths.dist}/**/*.*`,

            // NOT dot folders/files
            '!./.*',
            '!./**/.*',
        ],
        ghostMode: false,
        reloadDebounce: 2000,
        port: 4000,
        server: {
            baseDir: paths.dist,
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
        ['cleanTemp', 'cleanDist'],
        'jekyll',
        ['imgDev', 'uploadsDev'],
        ['cssDev', 'jsBasicDev', 'jsFormsDev'],
        ['htmlDev', 'nonHtmlMove'],
        end
    );
});

gulp.task('prod', (end) => {
    runSequence(
        ['cleanTemp', 'cleanDist'],
        'jekyll',
        ['imgProd', 'uploadsProd'],
        ['cssProd', 'jsBasicProd', 'jsFormsProd'],
        ['htmlProd', 'nonHtmlMove'],
        'cleanTemp',
        end
    );
});

gulp.task('prodServerBuildPart1', (end) => {
    runSequence(
        ['cleanTemp', 'cleanDist'],
        end
    );
});

gulp.task('prodServerBuildPart2', (end) => {
    runSequence(
        ['imgProd', 'uploadsProd'],
        ['cssProd', 'jsBasicProd', 'jsFormsProd'],
        ['htmlProd', 'nonHtmlMove'],
        'cleanTemp',
        end
    );
});

gulp.task('zipDist', (end) => {
    return gulp.src(`${paths.dist}/**/*`)
        .pipe(gulpZip('archive.zip'))
        .pipe(gulp.dest(paths.zipDist));
});

gulp.task('jekyllWatch', () => {
    return gulpWatch([
        // All markdown and HTML
        `${paths.src}/**/*.md`,
        `${paths.src}/**/*.markdown`,
        `${paths.src}/**/*.html`,
        `${paths.src}/**/*.htm`,
        `${paths.dataSrc}/**/*.*`,

        // NOT dot folders/files
        '!./.*',
        '!./**/.*',
    ], () => {
        runSequence(
            'jekyll',
            'htmlDev',
            () => {}
        );
    });
});

gulp.task('imgWatch', () => {
    return gulpWatch([
        `${paths.imgSrc}/**/*.*`,
    ], () => {
        runSequence(
            'imgDev',
            'cssDev',
            'htmlDev',
            () => {}
        );
    });
});

gulp.task('uploadsWatch', () => {
    return gulpWatch([
        `${paths.uploadsSrc}/**/*.*`,
    ], () => {
        runSequence(
            'uploadsDev',
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
            'htmlDev',
            () => {}
        );
    });
});

gulp.task('jsWatch', () => {
    return gulpWatch([
        `${paths.jsSrc}/**/*.js`,
    ], () => {
        runSequence(
            ['jsBasicDev', 'jsFormsDev'],
            'htmlDev',
            () => {}
        );
    });
});

gulp.task('nonHtmlMoveWatch', () => {
    return gulpWatch([
        `${paths.assetsTemp}/**/*.*`,
        `${paths.jekyllTemp}/**/*.*`,
        `!${paths.jekyllTemp}/**/*.html`,

        // NOT dot folders/files
        '!./.*',
        '!./**/.*',
        '!./**/.DS_Store',
    ], () => {
        runSequence(
            'nonHtmlMove',
            () => {}
        );
    });
});



gulp.task('watch', (end) => {
    runSequence(
        'dev',
        'serve',
        ['jekyllWatch', 'imgWatch', 'uploadsWatch', 'cssWatch', 'jsWatch', 'nonHtmlMoveWatch'],
        end
    );
});
