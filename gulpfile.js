const gulp = require('gulp')
const gzip = require('gulp-gzip')
const critical = require('critical')
const htmlmin = require('gulp-htmlmin')
const fontmin = require('gulp-fontmin')

gulp.task('compress', () => {
    gulp.src('./dist/*.js')
	.pipe(gzip())
	.pipe(gulp.dest('./dist'))
})

gulp.task('critical', () => {
    critical.generateInline({
        base: './dist/',
        src: 'index.html',
        // styleTarget: '*.css',
        htmlTarget: 'index.html',
        width: 320,
        height: 480,
        minify: true
    })
})

gulp.task('minifyHtml', () => {
    gulp.src('./dist/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('minifyFonts', () => {
    gulp.src('./dist/assets/fonts/*.ttf')
    .pipe(fontmin({
        text: `It's a Match!`
    }))
    .pipe(gulp.dest('./dist/assets/fonts'))
})