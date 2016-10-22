var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
    gulp.src('./').pipe(open({
        uri: 'http://localhost:8080/index.html',
        app: 'chrome'
    }));
    gulp.watch(['./*.html'], ['html'], ['./*.css'], ['css']);
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html'], ['./*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);