var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('connect', function() {
    connect.server({
        root: './app',
        livereload: true
    });
    gulp.src('./app').pipe(open({
        uri: 'http://localhost:8080/index.html',
        app: 'chrome'
    }));
    gulp.watch(['./app/*.html'], ['html'], ['./*.css'], ['css']);
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html'], ['./*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);
